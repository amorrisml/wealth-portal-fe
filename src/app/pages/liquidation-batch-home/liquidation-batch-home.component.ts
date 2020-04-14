import { Component, OnInit } from '@angular/core';
import { WithdrawalWatcherService } from '@app/services/withdrawal.watcher.service';
import { LiquidationBatch } from '@app/model/model';

@Component({
  selector: 'app-liquidation-batch-home',
  templateUrl: './liquidation-batch-home.component.html',
  styleUrls: ['./liquidation-batch-home.component.scss']
})
export class LiquidationBatchHomeComponent implements OnInit {

  constructor(private withdrawalWatcherService: WithdrawalWatcherService) { }

  liquidationBatchJobs: LiquidationBatch[];

  ngOnInit() {
    this.withdrawalWatcherService.getLiquidationBatchList().subscribe(s => {
      console.log(s);
      this.liquidationBatchJobs = s;
    });
  }

}
