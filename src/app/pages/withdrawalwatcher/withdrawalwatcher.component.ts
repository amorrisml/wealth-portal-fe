import { Component, OnInit, ViewChild } from '@angular/core';
import { WithdrawalWatcherService } from '@app/services/withdrawal.watcher.service';
import { DriveWealthWithdrawal } from '@app/model/model';
import * as moment from 'moment';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';

@Component({
  selector: 'app-withdrawalwatcher',
  templateUrl: './withdrawalwatcher.component.html',
  styleUrls: ['./withdrawalwatcher.component.scss']
})
export class WithdrawalwatcherComponent implements OnInit {

  @ViewChild('withdrawalGrid') withdrawalGrid: any;

  withdrawals: DriveWealthWithdrawal[];
  withdrawalCnt: number;
 
  withdrawalsColumnDefs = [
    {headerName: 'Created', field: 'createdOn',  valueFormatter: (params) =>{return  moment.default(params.value).format('MM/DD/YYYY');},  sortable: true, width:100},
    {headerName: 'Updated Date', field: 'statuses',  valueFormatter:this.getLastUpdatedStatus,  sortable: true, width:100},
    {headerName: 'Status', field: 'status', filter:true,  sortable: true, width:200, resizable:true},
    {headerName: 'Type', field: 'type',  sortable: true, width:150, filter:true},
    {headerName: 'Event Type', field: 'eventType',  sortable: true, width:150, filter:true},
    {headerName: 'Account #', field: 'account.accountNo',  sortable: true, width:125, editable:true},
    {headerName: 'Account Id', field: 'account.id', filter:true, editable:true, width:100, resizable:true},
    {headerName: 'Withdrawal Id', field: 'id', filter:true, editable:true, width:100, resizable:true},
    {headerName: 'Wallet Transaction Id', field: 'transactionId', filter:true, editable:true, width:275, resizable:true},
    {headerName: 'Amount', field: 'amount',valueFormatter: (params) => { return "$"+params.value},  sortable: true, width:100},
    {headerName: 'Withdrawal Request Id', field: 'withdrawalRequestId', filter:true, editable:true, width:250, resizable:true}
  ]


  constructor(private withdrawalWatcherService :WithdrawalWatcherService) { 
    this.withdrawals = [];
    this.withdrawalCnt = 0;
  }

  ngOnInit() {
    
  }

  getLastUpdatedStatus(params):string {
    console.log(params);
    return moment.default(params.value[params.value.length -1].createdOn).format('MM/DD/YYYY');
  }

  public grabWithdrawals() {
    this.withdrawalCnt = 0;
    this.withdrawalWatcherService.grabWithdrawals().subscribe(w => {
      this.withdrawals.push(w);
    });

    var func = () => {

      var withdrawal = this.withdrawals.pop();

      if (withdrawal && withdrawal != null) {
        this.withdrawalGrid.api.updateRowData({add: [withdrawal]});
        this.withdrawalCnt++;
      }

      setTimeout(() => {
        func();
      }, 1);

    }

    func();
  }

}
