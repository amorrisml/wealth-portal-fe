import { Component, OnInit } from '@angular/core';
import { DriveWealthWithdrawal, DriveWealthAccount } from '@app/model/model';
import { UserService } from '@app/services/user.service';

@Component({
  selector: 'app-withdrawal-view',
  templateUrl: './withdrawal-view.component.html',
  styleUrls: ['./withdrawal-view.component.scss']
})
export class WithdrawalViewComponent implements OnInit {

  withdrawal: DriveWealthWithdrawal;
  account: DriveWealthAccount;
  dwInfo: any;

  constructor(private userService: UserService) { }

  ngOnInit() {

    if (this.withdrawal.withdrawalRequestId) {
      this.userService.getWithdrawalDrivewealthInfo(this.account.id, this.withdrawal.id).subscribe(res => {
        this.dwInfo = res;
      });
    }
  }

  public getStatuses(w: DriveWealthWithdrawal): string[] {
    const arr = w.statuses.map(s => s.status).concat(['RIA_REJECTED', 'RIA_PENDING', 'COMPLETED', 'CANCELLED', 'FAILED']);
    return arr;
  }

  public pushWithdrawal() {

    this.userService.pushWithdrawals([this.withdrawal.id]).subscribe(res => {
      console.log(res);
      alert(res);
    });
  }

  public setWithdrawalStatus(status: string) {

    if (confirm(`Are you sure you want to change this status to ${status}`)) {
      this.userService.updateWithdrawalStatus(this.account.id, this.withdrawal.id, status).subscribe(res => {
        alert(res);
      });
    }
  }

}
