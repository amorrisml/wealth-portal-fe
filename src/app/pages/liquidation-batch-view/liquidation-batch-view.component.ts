import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LiquidationBatch, DrivewealthUser, DriveWealthAccount, DriveWealthWithdrawal } from '@app/model/model';
import { WithdrawalWatcherService } from '@app/services/withdrawal.watcher.service';
import { TextComponent } from '@app/form/text/text.component';
import { GridOptions } from 'ag-grid-community';
import { WebsocketService } from '@app/services/websocket.service';
import { environment } from '@env/environment';
import { UploadService } from '@app/services/upload-service.service';
import { map, catchError } from 'rxjs/operators';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { GridDropDownRendererComponent } from '@app/components/grid-drop-down-renderer/grid-drop-down-renderer.component';

@Component({
  selector: 'app-liquidation-batch-view',
  templateUrl: './liquidation-batch-view.component.html',
  styleUrls: ['./liquidation-batch-view.component.scss']
})
export class LiquidationBatchViewComponent implements OnInit, AfterViewInit {

  private frameworkComponents;
  liquidationBatch: LiquidationBatch;

  @ViewChild('userId') userId: TextComponent;
  @ViewChild('infoGrid') infoGrid: any;
  @ViewChildren('fileUploadGrid') fileUploadGrid: any;

  uploadedFiles: Array<File>;

  gridOptions: GridOptions;
  uploadFileOptions: GridOptions;
  uploadFileSelected: boolean;

  status: any;

  public columnMapping: any;

  constructor(private activatedroute: ActivatedRoute,
    private withdrawalWatcherService: WithdrawalWatcherService,
    private websocketService: WebsocketService,
    private uploadService: UploadService,
    private changeDetector: ChangeDetectorRef) {

    this.frameworkComponents = {
      dropdown: GridDropDownRendererComponent
    };

    this.columnMapping = [];

    /*this.columnMapping['ML UserID'] = { name: 'userId' };
    this.columnMapping['DW UserID'] = { name: 'dwAccountId' };
    this.columnMapping['Account Number'] = { name: 'bankAccountNumber' };
    this.columnMapping['Routing Number'] = { name: 'bankRoutingNumber' };
    this.columnMapping['Withdrawal Amount'] = { name: 'amount' };
    this.columnMapping['Withdrawal Type'] = { name: 'type' };
    this.columnMapping['LoanID'] = { name: 'loanId' };*/

    this.columnMapping.push({ column: 'ML UserID', name: 'userId', col: -1 });
    this.columnMapping.push({ column: 'DW UserID', name: 'dwAccountId', col: -1 });
    this.columnMapping.push({ column: 'Account Number', name: 'bankAccountNumber', col: -1 });
    this.columnMapping.push({ column: 'Routing Number', name: 'bankRoutingNumber', col: -1 });
    this.columnMapping.push({ column: 'Withdrawal Amount', name: 'amount', col: -1 });
    this.columnMapping.push({ column: 'Withdrawal Type', name: 'type', col: -1 });
    this.columnMapping.push({ column: 'LoanID', name: 'loanId', col: -1 });

    this.uploadFileSelected = false;
    this.status = {
      totalCnt: 0,
      totalValidated: 0,
      totalProcessed: 0,
      resolvementCheck: 0,
    };

    this.gridOptions = {
      enableRangeSelection: true,
      defaultColDef: {
        editable: true,
        resizable: true,
      },
      rowSelection: 'multiple',
      columnDefs: []
    };

    this.gridOptions.columnDefs = [
      { headerName: 'UserId', field: 'userId', filter: true, sortable: true, width: 200, checkboxSelection: true },
      { headerName: 'Loan-ID', field: 'loanId', filter: true, width: 120 },
      { headerName: 'AccountNo', field: 'accountNo', filter: true, width: 120 },
      { headerName: 'AccountType', field: 'accountType', filter: true, width: 120 },
      { headerName: 'Bank Routing Number', field: 'routingNumber', filter: true, width: 120 },
      { headerName: 'Bank Account No', field: 'bankAccountNo', filter: true, width: 120 },
      { headerName: 'Amount', field: 'amount', filter: true, width: 120 },
      { headerName: 'Status', field: 'status', filter: true, width: 120, sortable: true },
      { headerName: 'Error messages', field: 'errors', sortable: true, filter: true, width: 100 },
      { headerName: 'Cash', field: 'cash', filter: true, sortable: true, width: 100 },
      { headerName: 'Equity', field: 'equity', filter: true, sortable: true, width: 100 },
      { headerName: 'Liquidation Request Id', field: 'liquidationRequestId', sortable: true, filter: true, width: 200 },
      { headerName: 'Liquidation Status', field: 'liquidationStatus', sortable: true, filter: true, width: 100 },
      { headerName: 'Liquidation Amount', field: 'liquidationAmount', sortable: true, filter: true, width: 100 }
    ];

  }

  ngOnInit() {
    const liquidtionBatchId = this.activatedroute.snapshot.params['liquidtionBatchId'];
    this.withdrawalWatcherService.getLiquidationBatch(liquidtionBatchId).subscribe(l => {
      this.liquidationBatch = l;
      this.websocketService
        .connect(`${environment.webSocketDomain}/liquidationWatherWS?liquidationBatchId=${liquidtionBatchId}`)
        .subscribe((value: Event) => {
          //console.log(value);
          this.websocketService.send(JSON.stringify({
            index: 0,
            liquidationBatchId: this.activatedroute.snapshot.params['liquidtionBatchId'],
            type: 'GETLIQUIDATIIONBATCHITEMS'
          }));
        });
      this.websocketService.listen().subscribe((p: any) => {

        var item = JSON.parse(p.data);
        // console.log(item);
        if (item.type === 'GETLIQUIDATIIONBATCHITEMS') {
          // console.log(item.payload);
          this.addItemToGrid(item.payload);
        } else if (item.type === 'RESOLVE') {

          if (item.result === 'error') {
            var node = this.infoGrid.api.getRowNode(item.index);
            node.setDataValue('resolved', 'false');
          } else {
            this.addUserToGrid(<DrivewealthUser>item.payload);
          }
          this.status.resolvementCheck++;
        } else if (item.type === 'CREATELIQUIDATION') {
          // this.addUserToGrid(<DrivewealthUser>item.payload)
          // console.log(item);
          if (item.result === 'error') {
            var node = this.infoGrid.api.getRowNode(item.index);
            node.setDataValue('liquidationCreationStatus', 'FAILED - ' + item.message);
          } else {
            var node = this.infoGrid.api.getRowNode(item.index);
            node.setDataValue('liquidationCreationStatus', 'CREATED');
            node.setDataValue('liquidationStatus', item.payload.status);
            node.setDataValue('liquidationAmount', item.payload.amount);
            this.status.totalProcessed++;
          }
          /*     var node = this.infoGrid.api.getRowNode(item.payload.userId);
               node['liquidationRequestId'] = (!liquidation ? 'none' : liquidation.withdrawalRequestId);
               node['liquidationStatus'] = (!liquidation ? 'none' : liquidation.status);
               node['liquidationAmount'] = (!liquidation ? 0 : liquidation.amount);*/
        }

      });

    });

    this.gridOptions.getRowNodeId = (data) => {
      return data.userId;
    };
  }

  public ngAfterViewInit(): void {
    this.fileUploadGrid.changes.subscribe((comps: any) => {
      console.log(comps);
      this.fileUploadGrid = comps.first;
    });
  }

  refresh() {
    const batchId = this.activatedroute.snapshot.params['liquidtionBatchId'];
    this.withdrawalWatcherService.refreshLiquidationBatchItems(batchId).subscribe(r => {

    });
  }

  clearFile() {
    this.uploadFileSelected = null;
    this.columnMapping.forEach(cm => {
      cm.col = -1;
    });
  }


  fileChange(element) {
    const records = [];
    this.uploadedFiles = element.target.files;
    const reader = new FileReader();
    reader.readAsText(this.uploadedFiles[0]);

    this.uploadFileOptions = {
      defaultColDef: {
        resizable: true
      },
      columnDefs: []
    };

    reader.onload = () => {
      const csvData = reader.result;
      const csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
      const curruntRecord = this.cSVtoArray(<string>csvRecordsArray[0]);
      this.uploadFileOptions.columnDefs = [];
      let idx = 0;

      const values = this.columnMapping.map(m => m.name);

      curruntRecord.forEach(x => {
        const f = idx;
        const mp = this.columnMapping.find(m => m.column === x);
        if (mp) {
          mp.col = idx;
        }

        this.uploadFileOptions.columnDefs.push(
          {
            headerName: x,
            cellEditorParams: {
              values: values,
              callback: (header: string, value: string) => {


                console.log(`${idx} ${header} ${value} ${f}`);
                let foundMapping = this.columnMapping.find(m => m.name === value);

                if (foundMapping) {
                  foundMapping.col = f;
                  console.log('hhhh', foundMapping);
                } else {
                  foundMapping = this.columnMapping.find(m => m.col === f);
                  foundMapping.col = -1;
                }

                console.log('hhhh', this.columnMapping);
                this.changeDetector.detectChanges();
                const node = this.fileUploadGrid.api.getRowNode(0);
                console.log('data', node.data);
                this.uploadFileOptions.columnDefs.forEach(
                  (cdef, i) => {
                    const tmp = this.columnMapping.find(cm2 => cm2.col === i);
                    if (tmp) {
                      node.setDataValue(`field_${i}`, tmp.name);
                    } else {
                      node.setDataValue(`field_${i}`, '');
                    }
                  });
              },
            },
            editable: true,
            cellEditor: 'dropdown',
            field: `field_${idx}`,
            width: 160,
          },
        );
        idx++;

      });

      const item = {};
      this.columnMapping.forEach(m => {
        item[`field_${m.col}`] = m.name;
      });

      this.uploadFileSelected = true;
      setTimeout(() => {
        this.fileUploadGrid.api.updateRowData({ add: [item] });
      }, 1);
    };
  }

  public uploadFile() {

    const badMappings = this.columnMapping.filter(cm => cm.col < 0);

    if (badMappings.length > 0) {
      alert('You have missing mappings');
      return;
    }
    const formData = new FormData();
    const file = this.uploadedFiles[0];

    const mappingList = this.columnMapping.map(cm => {
      return { 'column': cm.col, 'name': cm.name };
    });
    formData.append('file', file);
    formData.append('payload', JSON.stringify({
      'mappings': mappingList,
      'id': this.activatedroute.snapshot.params['liquidtionBatchId']
    }));

    //    file.inProgress = true;

    this.uploadService.upload(formData).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            const progress = Math.round(event.loaded * 100 / event.total);
            console.log('progress', progress);
            if (progress > 98) {
              this.clearFile();
            }
            break;
          case HttpEventType.Response:
            return event;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        //      file.inProgress = false;
        return of(`${file.name} upload failed.`);
      })).subscribe((event: any) => {
        if (typeof (event) === 'object') {
          console.log(event.body);
        }
      });

  }
  enterUserId(userId: TextComponent) {
    console.log(userId.getValue());
    const item = { userId: userId.getValue() };
    this.infoGrid.api.updateRowData({ add: [item] });
    this.addUserId(userId.getValue());
    userId.clear();
  }

  private addUserId(userId: string) {
    this.websocketService.send(JSON.stringify({ index: 0, userId: userId, type: 'RESOLVE' }));
  }

  exportToCsv() {
    const params = {
      suppressQuotes: true,
      columnSeparator: ',',
      customHeader: false,
      customFooter: false
    };
    this.infoGrid.api.exportDataAsCsv(params);
  }

  private batchCreateLiquidation() {
    this.withdrawalWatcherService
      .startLiquidationWithdrawalCreation(this.activatedroute.snapshot.params['liquidtionBatchId'])
      .subscribe(r => {

      });
  }

  private createLiquidation(item: any) {
    const data = <any>{
      liquidationBatchId: this.activatedroute.snapshot.params['liquidtionBatchId'],
      type: 'CREATELIQUIDATION',
      index: item.userId,
      info: {
        userId: item.userId,
        dwAccountId: item.accountNo,
        withdrawalAmount: item.amount,
        accountNumber: item.routingNumber,
        routingNumber: item.bankAccountNo,
      },
    };
    this.websocketService.send(JSON.stringify(data));
  }

  private addItemToGrid(item: any) {

    //  console.log(item.userId);
    const node = this.infoGrid.api.getRowNode(item.userId);
    const account = item.account;
    const liquidation = item.liquidation;

    if (node) {

      if (account) {
        node.setDataValue('accountNo', account.accountNo);
        node.setDataValue('cash', account.cash.cashBalance);
        node.setDataValue('equity', account.equity.equityValue);
        node.setDataValue('accountType', account.internalType);
      }

      node.setDataValue('status', item.status);
      node.setDataValue('loanId', item.loanId);

      node.setDataValue('routingNumber', item.bankRoutingNumber);
      node.setDataValue('bankAccountNo', item.bankAccountNumber);
      node.setDataValue('liquidationCreationStatus', (!liquidation ? 'WAITING' : liquidation.status));
      node.setDataValue('liquidationRequestId', (!liquidation ? 'none' : liquidation.withdrawalRequestId));
      node.setDataValue('liquidationStatus', (!liquidation ? 'none' : liquidation.status));
      node.setDataValue('liquidationAmount', (!liquidation ? 0 : liquidation.amount));
      node.setDataValue('errors', item.errorStrings.join(':'));
      node.setDataValue('item', item);

    } else {

      if (account) {
        item['accountNo'] = account.accountNo;
        item['cash'] = account.cash.cashBalance;
        item['equity'] = account.equity.equityValue;
        item['accountType'] = account.internalType;
      }

      item['userId'] = item.userId;
      item['status'] = item.status;
      item['loanId'] = item.loanId;
      item['routingNumber'] = item.bankRoutingNumber;
      item['bankAccountNo'] = item.bankAccountNumber;
      item['liquidationCreationStatus'] = (!liquidation ? 'WAITING' : liquidation.status);
      item['liquidationRequestId'] = (!liquidation ? 'none' : liquidation.withdrawalRequestId);
      item['liquidationStatus'] = (!liquidation ? 'none' : liquidation.status);
      item['liquidationAmount'] = (!liquidation ? 0 : liquidation.amount);
      item['driveWealthUser'] = item.user;
      item['item'] = item;
      item['errors'] = item.errorStrings.join(':');

      this.infoGrid.api.updateRowData({ add: [item] });
      this.status.totalCnt++;
      this.status.totalValidated++;

      if (item.liquidation) {
        this.status.totalProcessed++;
      }

    }
  }

  private addUserToGrid(driveWealthUser: DrivewealthUser) {

    var node = this.infoGrid.api.getRowNode(driveWealthUser.userId);
    //node.setDataValue('liquidationCreationStatus', 'FAILED');
    const account = driveWealthUser.coreAccount
    const liquidation = this.getLiquidations(account);

    var item = <any>{}
    node.setDataValue('userId', driveWealthUser.userId);
    node.setDataValue('accountNo', account.accountNo);
    node.setDataValue('cash', account.cash.cashBalance);
    node.setDataValue('resolved', true);
    node.setDataValue('equity', account.equity.equityValue);
    node.setDataValue('liquidationCreationStatus', 'WAITING');
    node.setDataValue('liquidationRequestId', (!liquidation ? 'none' : liquidation.withdrawalRequestId));
    node.setDataValue('liquidationStatus', (!liquidation ? 'none' : liquidation.status));
    node.setDataValue('liquidationAmount', (!liquidation ? 0 : liquidation.amount));
    node.setDataValue('driveWealthUser', driveWealthUser);

    this.status.totalValidated++;

    console.log(driveWealthUser);
    //this.infoGrid.api.updateRowData({ add: [item] });
  }

  private getInvestmentAccount(driveWealthUser: DrivewealthUser): DriveWealthAccount {
    return driveWealthUser.accounts.find(a => a.internalType === 'INVESTMENT');
  }

  private getLiquidations(account: DriveWealthAccount): DriveWealthWithdrawal {
    return account.withdrawals.find(w => w.type === 'LIQUIDATION_LIEN');
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
