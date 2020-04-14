import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FundService } from '@app/services/fund-service.service';
import { ToastrService } from 'ngx-toastr';
import { DriveWealthFundDisplayCategoryType } from '@app/model/model';

@Component({
  selector: 'app-fund-category-type',
  templateUrl: './fund-category-type.component.html',
  styleUrls: ['./fund-category-type.component.scss']
})
export class FundCategoryTypeComponent implements OnInit {

  types: DriveWealthFundDisplayCategoryType[];

  constructor(private route: ActivatedRoute,
    private fundService: FundService,
    private toastr: ToastrService) {

  }

  ngOnInit() {
    this.fundService.getCharacteristicTypes().subscribe((res) => {
      this.types = res;
    });
  }

  cancelUpdate(r: DriveWealthFundDisplayCategoryType) {
    r.edit = false;
  }

  editCategory(r: DriveWealthFundDisplayCategoryType) {
    r.edit = true;
  }

  updateCatgory(r: DriveWealthFundDisplayCategoryType) {
    this.fundService.updateCharacteristicType(r).subscribe((res) => {
      r.edit = false;
      this.toastr.success(`${r.displayText} has been updated`, 'Updated');
    });

  }

  addCategory() {

    if (!this.types) {
      this.types = [];
    }

    const type: DriveWealthFundDisplayCategoryType = {
      displayText: '',
      id: null,
      imageUrl: '',
      edit: true,
    };

    this.types.push(type);
  }

}
