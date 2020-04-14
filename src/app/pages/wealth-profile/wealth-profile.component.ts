import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '@app/services/user.service';
import { MoneyLionUser, DrivewealthUser, DriveWealthAccountSnapshot, DriveWealthWithdrawal, DriveWealthAccount, DriveWealthDeposit, DriveWealthPortfolio } from '@app/model/model';
import { Chart } from 'chart.js';
import { delayWhen } from 'rxjs/operators';
import * as moment from 'moment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WithdrawalViewComponent } from '@app/components/withdrawal-view/withdrawal-view.component';

@Component({
  selector: 'app-wealth-profile',
  templateUrl: './wealth-profile.component.html',
  styleUrls: ['./wealth-profile.component.scss']
})
export class WealthProfileComponent implements OnInit {

  user: MoneyLionUser;
  drivewealthUser: DrivewealthUser;
  deposits: DriveWealthDeposit[];
  portfolios: DriveWealthPortfolio[];
  currentPortfolio: DriveWealthPortfolio;
  ddaBalance: number;

  @ViewChild('lineChart') private chartRef;
  chart: any;

  equityPositionColumnDefs = [
    { headerName: 'Symbol', field: 'symbol' },
    { headerName: 'Open Qty', field: 'openQty' },
    { headerName: 'Cost Basis', field: 'costBasis' },
    { headerName: 'Market Value', field: 'marketValue' },
    { headerName: 'Avg Price', field: 'avgPrice' },
    { headerName: 'Mkt Price', field: 'mktPrice' },

  ];

  withdrawalsColumnDefs = [
    { headerName: 'Status', field: 'status' },
    { headerName: 'Amount', field: 'amount' },
  ];

  columnDefs = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' }
  ];
  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  constructor(private activatedroute: ActivatedRoute,
    private userService: UserService,
    private modalService: NgbModal
  ) {

  }
  getPortfolio(portfolioId: string): DriveWealthPortfolio {
    let portfolio = this.portfolios.find(p => p.id == portfolioId)
    return portfolio
  }

  handleSnapshot(driveWealthAccountSnapshot: DriveWealthAccountSnapshot[]) {

    let dates = [];
    let cashBalances = [];
    let equityBalances = [];

    driveWealthAccountSnapshot.forEach(snapshot => {
      let jsdate = new Date(snapshot.createdOn)
      // dates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
      dates.push(moment.default(jsdate).format('YYYY-MM-DD'));

      if (snapshot.cash.createdOn != null) {
        cashBalances.push(snapshot.cash.cashBalance);
      } else {
        cashBalances.push(0);
      }

      if (snapshot.equity.createdOn != null) {
        equityBalances.push(snapshot.equity.equityValue);
      } else {
        equityBalances.push(0);
      }
    });

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            label: "Cash Balance",
            data: cashBalances,
            borderColor: "#3cba9f",
            fill: false
          },
          {
            label: "Equity Balances",
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
              callback: function (value, index, values) {
                return '$' + value;
              }
            }
          }],
        }
      }
    });
  }


  ngOnInit() {
    const userId = this.activatedroute.snapshot.params['userId'];

    this.userService.getMoneyLionUser(userId).subscribe(user => {
      this.user = user;
      console.log(user);
    });

    this.userService.getDDABalance(userId).subscribe(balance => {
      this.ddaBalance = balance;
    });
    this.userService.getDrivewealthUser(userId).subscribe(dwu => {
      this.drivewealthUser = dwu;

      if (this.drivewealthUser.riskTolerances.length > 0) {
        this.userService.getPortfolios().subscribe(ps => {
          this.portfolios = ps;
          if (this.drivewealthUser.riskTolerances != null && this.drivewealthUser.riskTolerances.length > 0) {
            this.currentPortfolio = this.getPortfolio(this.drivewealthUser.riskTolerances[this.drivewealthUser.riskTolerances.length - 1].driveWealthPortfolioId);
          }

        });
      } else {
        this.userService.getPortfolios().subscribe(ps => {
          this.portfolios = ps;

        });
      }

      console.log(dwu);
    });

  }

  getRiskTolerance(): string {

    if (this.drivewealthUser.riskTolerances != null && this.drivewealthUser.riskTolerances.length > 0) {
      let riskTolerance = this.drivewealthUser.riskTolerances[this.drivewealthUser.riskTolerances.length - 1];
      return riskTolerance.driveWealthPortfolioName;
    } else {
      return null;
    }

  }

  updatePortfolio(portfolioId: string) {

    if (portfolioId == "-1") {
      return
    }

    if (confirm(`Are you sure?`)) {
      this.userService.updatePortfolio(this.drivewealthUser.userId, portfolioId).subscribe(resp => {
        window.location.reload();
      });
    }
  }

  openWitdrawalModal(a: DriveWealthAccount, w: DriveWealthWithdrawal) {
    const modalRef = this.modalService.open(WithdrawalViewComponent, { size: 'lg', windowClass: 'wp-modal' });
    console.log("withdrawal ", w)
    modalRef.componentInstance.withdrawal = w;
    modalRef.componentInstance.account = a;

  }

}
