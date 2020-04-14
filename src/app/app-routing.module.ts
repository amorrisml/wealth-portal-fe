import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { AuthgaurdService } from './services/authgaurd.service';
import { WealthProfileComponent } from './pages/wealth-profile/wealth-profile.component';
import { MainHomeComponent } from './pages/main-home/main-home.component';
import { BatchjobComponent } from './pages/batchjob/batchjob.component';
import { WithdrawalwatcherComponent } from './pages/withdrawalwatcher/withdrawalwatcher.component';
import { LiquidatonBatchEditComponent } from './pages/liquidaton-batch-edit/liquidaton-batch-edit.component';
import { LiquidationBatchViewComponent } from './pages/liquidation-batch-view/liquidation-batch-view.component';
import { LiquidationBatchHomeComponent } from './pages/liquidation-batch-home/liquidation-batch-home.component';
import { FundhomeComponent } from './pages/fundhome/fundhome.component';
import { FundListComponent } from './pages/fund-list/fund-list.component';
import { FundDetailsComponent } from './pages/fund-details/fund-details.component';
import { FundCategoryTypeComponent } from './pages/fund-category-type/fund-category-type.component';
import { DrivewealtheventlistenerComponent } from './pages/drivewealtheventlistener/drivewealtheventlistener.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthgaurdService],
    children: [
      {
        path: 'batch',
        component: BatchjobComponent,
        canActivate: [AuthgaurdService],
      },
      {
        path: 'drivewealthevents',
        component: DrivewealtheventlistenerComponent,
        canActivate: [AuthgaurdService],
      },
      {
        path: 'liquidationwatcher',
        component: WithdrawalwatcherComponent,
        canActivate: [AuthgaurdService],
        children: [
          {
            path: 'new',
            component: LiquidatonBatchEditComponent,
            canActivate: [AuthgaurdService]
          },
          {
            path: ':liquidtionBatchId',
            component: LiquidationBatchViewComponent,
            canActivate: [AuthgaurdService]
          },
          {
            path: '',
            component: LiquidationBatchHomeComponent,
            canActivate: [AuthgaurdService]
          }
        ]
      },
      {
        path: 'fundhome',
        component: FundhomeComponent,
        canActivate: [AuthgaurdService],
        children: [
          {
            path: '',
            component: FundListComponent,
            canActivate: [AuthgaurdService]
          },
          {
            path: 'categorytypes',
            component: FundCategoryTypeComponent,
            canActivate: [AuthgaurdService]
          },
          {
            path: ':fundId',
            component: FundDetailsComponent,
            canActivate: [AuthgaurdService]
          }
        ],
      },
      {
        path: '',
        component: MainHomeComponent,
        canActivate: [AuthgaurdService],
        children: [
          {
            path: ':userId',
            component: WealthProfileComponent,
            canActivate: [AuthgaurdService]
          }
        ]
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
