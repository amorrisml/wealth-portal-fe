import { Component, OnInit, ViewChild } from '@angular/core';
import { TextComponent } from '@app/form/text/text.component';
import { LiquidationBatch } from '@app/model/model';
import { WithdrawalWatcherService } from '@app/services/withdrawal.watcher.service';

@Component({
  selector: 'app-liquidaton-batch-edit',
  templateUrl: './liquidaton-batch-edit.component.html',
  styleUrls: ['./liquidaton-batch-edit.component.scss']
})
export class LiquidatonBatchEditComponent implements OnInit {

  @ViewChild('name') name: TextComponent;
  constructor(private withdrawalWatcherService: WithdrawalWatcherService) { }

  ngOnInit() {
  }

  editOrCreate() {

    this.withdrawalWatcherService.createLiquidationBatch(this.name.getValue()).subscribe(s =>{
      console.log(s);
    });
  }

}
