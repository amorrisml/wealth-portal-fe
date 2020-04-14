import { Component, OnInit, ViewChild } from '@angular/core';
import { WebsocketService } from '@app/services/websocket.service';
import { environment } from '@env/environment';
import { BulkDataItem } from '@app/model/model';
import { UserService } from '@app/services/user.service';
import { BulkDataService } from '@app/services/bulkdata.service';
import { subscribeOn } from 'rxjs/operators';
import * as bulKJobs from 'assets/batchjob.json';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-batchjob',
  templateUrl: './batchjob.component.html',
  styleUrls: ['./batchjob.component.scss']
})
export class BatchjobComponent implements OnInit {

  @ViewChild('csvReader') csvReader: any;
  @ViewChild('batchGrid') batchGrid: any;

  uploadedFiles: Array<File>;
  showGrid: boolean;
  gridOptions: GridOptions;
  rowData: any;
  account: any;
  bulkJobMetaData: any[];
  status: any;
  bulkJobs: any;
  job: any;

  constructor(private websocketService: WebsocketService,
    private websocketDataProccessorService: WebsocketService,
    private userService: UserService,
    private bulkDataService: BulkDataService) {
    this.bulkJobs = bulkDataService.bulkJobs.default;
    this.job = null;
  }

  initJob(jobIdx: number) {
    console.log(jobIdx);
    this.job = this.bulkJobs[jobIdx];
    var idx = 4;
    this.job.dataColumns.forEach((i) => {
      this.gridOptions.columnDefs.splice(idx, 0, {
        headerName: i.columName,
        field: i.objField

      });
      idx++;
    });
    idx++;
    this.job.resolvedDataColumns.forEach((i) => {
      this.gridOptions.columnDefs.splice(idx, 0, {
        headerName: i.columName,
        field: i.objField
      });
      idx++;
    });


    this.status = {
      totalCnt: 0,
      totalResolved: 0,
      totalValidated: 0,
      totalProcessed: 0
    };
  }

  ngOnInit() {
    this.showGrid = false;
    this.gridOptions = {
      enableRangeSelection: true,
      defaultColDef: {
        editable: true,
        resizable: true
      },
      columnDefs: []
    };

    this.gridOptions.columnDefs = [
      { headerName: 'Item Number', field: 'index' },
      // {headerName: 'Key', field: 'id'},

      { headerName: 'Can Process', field: 'canProcess', filter: true },
      { headerName: 'Converted', field: 'converted', filter: true },
      { headerName: 'Process Message', field: 'message' },
      //{headerName: 'UserId', field: 'userId'},
      //{headerName: 'Name', field: 'username'},

    ];


    this.bulkDataService.getBulkJobMetaData()
      .subscribe((value: any[]) => {
        this.bulkJobMetaData = value;
      });
  }

  uploadListener($event: any): void {
  }

  exportToCsv() {

    var params = {
      suppressQuotes: true,
      columnSeparator: ",",
      customHeader: false,
      customFooter: false
    }

    this.batchGrid.api.exportDataAsCsv(params);

  }

  fileChange(element) {
    this.uploadedFiles = element.target.files;
    console.log(this.uploadedFiles);

    let reader = new FileReader();
    reader.readAsText(this.uploadedFiles[0]);

    reader.onload = () => {


      let processStarted = false;
      this.websocketService
        .connect(`${environment.webSocketDomain}/bulkDataResolverHandler?type=${this.job.dataHandlerType}`)
        .subscribe((value: Event) => {
          console.log('connection from server ', value);
          if (processStarted)
            return

          processStarted = true;
          this.status = {
            totalCnt: 0,
            totalResolved: 0,
            totalProcessed: 0,
            totalValidated: 0
          };
          let csvData = reader.result;
          let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
          this.rowData = [];
          let records = [];
          let idx = 0;
          var func = () => {
            var item = <any>{}
            console.log(idx, records[idx])
            if (!records[idx]) {
              return;
            }

            this.job.dataColumns.forEach((i) => {
              try {
                item[i.objField] = records[idx][i.columnIdx];
              } catch (e) {
                console.log(e);
              }
            });

            this.job.resolvedDataColumns.forEach((i) => {
              item[i.objField] = "";
            });

            item["index"] = idx;
            item["converted"] = false;
            item["resolved"] = false;

            var data = item;
            item["canProcess"] = eval(this.job.payload.validation);

            this.batchGrid.api.updateRowData({ add: [item] });

            if (item.id && item.id != "") {
              this.websocketService.send(JSON.stringify({ index: idx, id: item.id, type: this.job.resolverType }));
              this.status.totalCnt++;
            }

            setTimeout(() => {
              func();
            }, 1);

            idx++;
          }
          for (let i = 1; i < csvRecordsArray.length; i++) {
            console.log(csvRecordsArray[i]);
            let curruntRecord = this.cSVtoArray(<string>csvRecordsArray[i]);

            console.log(curruntRecord);
            if (curruntRecord.length > 0) {
              records.push(curruntRecord);
            }
          }

          console.log("done scanning file");

          func();
          this.websocketService.listen().subscribe((p: any) => {

            if (this.showGrid === false) {
              this.showGrid = true;
            }
            var item = JSON.parse(p.data);
            var node = this.batchGrid.api.getRowNode(item.index);
            var data = node.data;
            if (item.payload[0]) {
              node.setDataValue('resolved', true);
              data.resolved = true;
              this.job.resolvedDataColumns.forEach((i) => {
                node.setDataValue(i.objField, item.payload[0][i.el]);
              });
            }


            let canProcess = eval(this.job.payload.validation);
            node.setDataValue('canProcess', canProcess);
            if (canProcess) {
              this.status.totalValidated++;
            } else {
              console.log("can not process " + item.index);
            }
          });

        });





      /*this.websocketService
        .connect(`${environment.webSocketDomain}/bulkDataResolverHandler`)
        .subscribe( (value: Event) => {
          console.log('from server ', value);

          this.items = [];
          if(this.showGrid === false) {
            this.showGrid  = true;
          }



          let csvData = reader.result;
          let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);

          for (let i = 1; i < csvRecordsArray.length; i++) {
            let curruntRecord = (<string>csvRecordsArray[i]).split(',');

            this.items[i-1] = {
                id:csvRecordsArray[i],
                userId:"",
                email:"",
            }
           // console.log(curruntRecord);
            this.websocketService.send({index:i, id:curruntRecord[0]});
          }
       });

       this.websocketService.listen().subscribe((item: BulkDataItem) => {

        if(this.showGrid === false) {
          this.showGrid  = true;
        }


        console.log('from server ', item);

       });*/

      //  let headersRow = this.getHeaderArray(csvRecordsArray);

      // this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
    };

    reader.onerror = function () {
      console.log('error is occured while reading file!');
    };

  }

  pushResolved() {

    this.status.totalProcessed = 0;
    this.websocketDataProccessorService
      .connect(`${environment.webSocketDomain}/bulkDataProccessorHandler?type=${this.job.dataHandlerType}`)
      .subscribe((value: Event) => {
        console.log('connection from server ', value);

        var itemsToUpdate = [];
        let _ = this.batchGrid;
        this.batchGrid.api.forEachNodeAfterFilterAndSort((rowNode, index) => {

          var data = rowNode.data;

          let valid = eval(this.job.payload.validation);
          console.log(valid);
          if (valid == true) {
            itemsToUpdate.push(data);
            var payload;
            if (this.job.payload.type === "single") {
              payload = data[this.job.payload.value]
            } else {

              payload = {};
              this.job.payload.objFields.forEach((s) => {
                payload[s] = data[s];
              });
              console.log(payload);
            }
            this.websocketDataProccessorService.send(JSON.stringify({ index: index, type: this.job.dataHandlerType, payload: payload }));
          }
        });


      });

    this.websocketDataProccessorService
      .listen()
      .subscribe((p: any) => {
        setTimeout(() => {
          console.log(p);
          var obj = JSON.parse(p.data);
          var node = this.batchGrid.api.getRowNode(obj.index);
          node.setDataValue('converted', obj.status);
          node.setDataValue('message', obj.message);
          this.status.totalProcessed++;

        }, 0)
      });
  }

  cSVtoArray(text) {
    var re_valid = /^\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*(?:,\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*)*$/;
    var re_value = /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g;
    // Return NULL if input string is not well formed CSV string.
    if (!re_valid.test(text)) return null;
    var a = [];                     // Initialize array to receive values.
    text.replace(re_value, // "Walk" the string using replace with callback.
      function (m0, m1, m2, m3) {
        // Remove backslash from \' in single quoted values.
        if (m1 !== undefined) a.push(m1.replace(/\\'/g, "'"));
        // Remove backslash from \" in double quoted values.
        else if (m2 !== undefined) a.push(m2.replace(/\\"/g, '"'));
        else if (m3 !== undefined) a.push(m3);
        return ''; // Return empty string.
      });
    // Handle special case of empty last value.
    if (/,\s*$/.test(text)) a.push('');
    return a;
  };
}
