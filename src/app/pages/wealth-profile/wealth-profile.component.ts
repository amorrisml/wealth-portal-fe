import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '@app/services/user.service';
import { MoneyLionUser, DrivewealthUser } from '@app/model/model';
import { Chart } from 'chart.js';
import { delayWhen } from 'rxjs/operators';
import * as moment from 'moment';

//DWXP000061
@Component({
  selector: 'app-wealth-profile',
  templateUrl: './wealth-profile.component.html',
  styleUrls: ['./wealth-profile.component.scss']
})
export class WealthProfileComponent implements OnInit {
  
  user: MoneyLionUser;
  drivewealthUser: DrivewealthUser;
  @ViewChild('lineChart') private chartRef;    
  chart: any;    
  
  constructor(private activatedroute: ActivatedRoute,
    private userService: UserService
    ) { 

  }

  ngOnInit() {
    const userId = this.activatedroute.snapshot.params['userId'];

    this.userService.getMoneyLionUser(userId).subscribe(user=>{
      this.user = user;
      console.log(user);
    });

    this.userService.getDrivewealthUser(userId).subscribe(dwu =>{
      this.drivewealthUser  = dwu;
    });

    this.userService.getSnaphots(userId).subscribe(res => {

      let dates = [];
      let cashBalances = [];
      let equityBalances = [];
      res.forEach(snapshot =>{
        let jsdate = new Date(snapshot.createdOn)
        // dates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
        dates.push(moment(jsdate).format('YYYY-MM-DD'))
        
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
    });

   

  }

}
