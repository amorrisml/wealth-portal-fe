import { Component, OnInit } from '@angular/core';
import { FundService } from '@app/services/fund-service.service';
import { DriveWealthFund } from '@app/model/model';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.scss']
})
export class FundListComponent implements OnInit {

  funds: DriveWealthFund[];

  constructor(private fundService: FundService,
    public router: Router) {
    fundService.getFunds().subscribe(f => {
      this.funds = f;
    });
  }

  ngOnInit() {
  }
}
