import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DriveWealthFund, DriveWealthFundDisplayCategoryType } from '@app/model/model';
import { FundService } from '@app/services/fund-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fund-details',
  templateUrl: './fund-details.component.html',
  styleUrls: ['./fund-details.component.scss']
})
export class FundDetailsComponent implements OnInit {

  fund: DriveWealthFund;
  detailCharacteristicTypes: DriveWealthFundDisplayCategoryType[];

  constructor(private route: ActivatedRoute,
    private fundService: FundService,
    private toastr: ToastrService) {
    this.fund = null;
  }

  ngOnInit() {
    const fundId = this.route.snapshot.params['fundId'];
    this.fundService.getFund(fundId).subscribe(fund => {
      this.fund = fund;
      if (!this.fund.displayCharacteristics) {
        this.fund.displayCharacteristics = [];
      }
    });

    this.fundService.getCharacteristicTypes().subscribe(detailCharacteristicTypes => {
      this.detailCharacteristicTypes = detailCharacteristicTypes;
    });
  }

  updateFund() {
    this.fundService.updateFund(this.fund).subscribe(fund => {
      this.toastr.success(`${this.fund.name} updated`, '', {
        timeOut: 60000
      });
    });
  }

  findDisplayCharacteristicTypee(id: string) {
    return this.detailCharacteristicTypes.find(t => t.id === id).displayText;
  }

  addDisplayCharacteristic() {
    this.fund.displayCharacteristics.push({
      'driveWealthFundDisplayCategoryTypeId': null,
      'new': true,
    });
  }

}
