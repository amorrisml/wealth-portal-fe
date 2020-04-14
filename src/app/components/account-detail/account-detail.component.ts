import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DriveWealthAccount, DriveWealthAccountSnapshot, DriveWealthDeposit, DriveWealthWithdrawal, DriveWealthPortfolio, DriveWealthCashTransfer, DriveWealthInvestmentAccountTransaction } from '@app/model/model';
import { Chart } from 'chart.js';
import * as moment from 'moment';
import { UserService } from '@app/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WithdrawalViewComponent } from '../withdrawal-view/withdrawal-view.component';

@Component({
  selector: 'account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit {

  @Input("account") account: DriveWealthAccount;
  @ViewChild('lineChart') private chartRef;    
  chart: any;  
  deposits: DriveWealthDeposit[];
  portfolios: DriveWealthPortfolio[];
  cashTransfers : DriveWealthCashTransfer[];
  transactions: DriveWealthInvestmentAccountTransaction[];

  equityPositionColumnDefs = [
    {headerName: 'Symbol', field: 'symbol'},
    {headerName: 'Open Qty', field: 'openQty'},
    {headerName: 'Cost Basis', field: 'costBasis'},
    {headerName: 'Market Value', field: 'marketValue'},
    {headerName: 'Avg Price', field: 'avgPrice'},
    {headerName: 'Mkt Price', field: 'mktPrice'},
  ];

  cashTransfersColumnDefs = [
    {headerName: 'Created', field: 'createdOn',  valueFormatter: this.dateFormatter,  sortable: true},
    {headerName: 'amount', field: 'amount',valueFormatter: (params) => { return "$"+params.value},  sortable: true},
    {headerName: 'Status', field: 'status', filter:true}
    
  ];

  transactionsColumnDefs = [
    {headerName: 'Created', field: 'createdOn',  valueFormatter: this.dateFormatter,  sortable: true, width:100},
    {headerName: 'Type', field: 'finTranTypeID', filter:true,  sortable: true, width:75},
    {headerName: 'Amount', field: 'accountAmount',valueFormatter: (params) => { return "$"+params.value},  sortable: true, width:100},
    {headerName: 'Balance', field: 'accountBalance',valueFormatter: (params) => { return "$"+params.value},  sortable: true, width:100},
    {headerName: 'Comment', field: 'comment', filter:true, editable:true, width:200, resizable:true}
  ]

  constructor(private userService: UserService, private modalService: NgbModal) { }

  ngOnInit() {

    console.log(this.account.equity.equityPositions);

    this.userService.getSnaphots(this.account.id).subscribe(res => {
      this.handleSnapshot(res);
    });
    this.userService.getDeposits(this.account.id).subscribe(res => {
      this.deposits = res
    });
    this.userService.getPortfolios().subscribe(ps => {
      this.portfolios = ps
    });
    this.userService.getInvestmentAccountCashTransfers(this.account.id).subscribe(ps =>{
      this.cashTransfers  = ps;
    });
    this.userService.getInvestmentAccountTransactions(this.account.accountID).subscribe(ps =>{
      this.transactions  = ps;
    });
    
  }
  dateFormatter(params):string {
    return moment.default(params.value).format('MM/DD/YYYY');
  }

  getUserDefinedPortfolio(): string {

    if(this.account.riskTolerances != null && this.account.riskTolerances.length > 0) {
      let riskTolerance =  this.account.riskTolerances[this.account.riskTolerances.length - 1];
      return this.getPortfolio(riskTolerance.driveWealthPortfolioId).description; 
    } else {
      return null;
    }
  } 

  getPortfolio(portfolioId: string): DriveWealthPortfolio {
    let portfolio = this.portfolios.find(p => p.id == portfolioId)
    return portfolio
  }

  openWitdrawalModal(a:DriveWealthAccount, w :DriveWealthWithdrawal) {
    const modalRef = this.modalService.open(WithdrawalViewComponent, {size: 'lg', windowClass: 'wp-modal'});
    console.log("withdrawal ", w)
    modalRef.componentInstance.withdrawal = w;
    modalRef.componentInstance.account = a;
    
  }

  showHasPendingWithdrawal(a:DriveWealthAccount): boolean {
    const pendingWithdrawalCount =  this.getPendingWithdrawal(a).length;
    if(a.hasPendingWithdrawal === true && pendingWithdrawalCount == 0 ) {
      return true;
    } else if (a.hasPendingWithdrawal === false && pendingWithdrawalCount > 0) {
      return true;
    }
    return false;
  } 

  getPendingWithdrawal(a:DriveWealthAccount): DriveWealthWithdrawal[] {
    return a.withdrawals.filter(w => w.status != "CANCELLED" && w.status != "COMPLETED");
  }
  setHasPendingWithdrawalFlag(flag: any) {
    this.userService.updateHasPendingWithdrawal(this.account.id, flag).subscribe(res => {
      console.log(res);
    });
  }
  getRiskTolerance() :string {

    if(this.account.riskTolerances != null && this.account.riskTolerances.length > 0) {
      let riskTolerance =  this.account.riskTolerances[this.account.riskTolerances.length - 1];
      return riskTolerance.driveWealthPortfolioName; 
    } else {
      return null;
    }
    
  }

  handleSnapshot(driveWealthAccountSnapshot: DriveWealthAccountSnapshot[]) {

    let dates = [];
    let cashBalances = [];
    let equityBalances = [];

    driveWealthAccountSnapshot.forEach(snapshot =>{
      let jsdate = new Date(snapshot.createdOn)
      // dates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
      dates.push(moment.default(jsdate).format('YYYY-MM-DD'))
      
       if(snapshot.cash.createdOn != null) {
        cashBalances.push(snapshot.cash.cashBalance);
       } else {
        cashBalances.push(0);
       }

       if(snapshot.equity.createdOn != null) {
        equityBalances.push(snapshot.equity.equityValue);
       } else {
        equityBalances.push(0);
       }


    })

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          { 
            label:"Cash Balance",
            data: cashBalances,
            borderColor: "#3cba9f",
            fill: false
          },
          { 
            label:"Equity Balances",
            data: equityBalances,
            borderColor: "#D4de12",
            fill: false
          } 
        ]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true,
           
          }],
          yAxes: [{
            display: true,
            ticks: {
              // Include a dollar sign in the ticks
              callback: function(value, index, values) {
                  return '$' + value;
              }
          }
          }],
        }
      }
    });
}
     
}
