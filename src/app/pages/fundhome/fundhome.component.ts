import { Component, OnInit } from '@angular/core';
import { FundService } from '@app/services/fund-service.service';
import { DriveWealthFund } from '@app/model/model';

@Component({
  selector: 'app-fundhome',
  templateUrl: './fundhome.component.html',
  styleUrls: ['./fundhome.component.scss']
})
export class FundhomeComponent implements OnInit {

  funds: DriveWealthFund[];

  constructor(private fundService: FundService) {

    fundService.getFunds().subscribe(f => {
      this.funds = f;
    });
  }

  ngOnInit() {
  }

}
