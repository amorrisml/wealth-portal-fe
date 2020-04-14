import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { UserService } from './services/user.service';
import { AuthgaurdService } from './services/authgaurd.service';
import { MainComponent } from './pages/main/main.component';
import { FormComponentModule } from './form/form.module';
import { AgGridModule } from 'ag-grid-angular';
import { StorageServiceModule } from 'angular-webstorage-service';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token.interceptor.service';
import { LeftMenuComponent } from './coomponents/left-menu/left-menu.component';
import { WealthProfileComponent } from './pages/wealth-profile/wealth-profile.component';
import { MainHomeComponent } from './pages/main-home/main-home.component';
import { WithdrawalViewComponent } from './components/withdrawal-view/withdrawal-view.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalBodyDirective } from './directives/modal-body.directive';
import { DirectiveComponentModule } from './directives/directives.module';
import { ModalContentComponent } from './components/modal-content/modal-content.component';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { ToastrModule } from 'ngx-toastr';
import { BatchjobComponent } from './pages/batchjob/batchjob.component';
import { WebsocketService } from './services/websocket.service';
import { BulkDataService } from './services/bulkdata.service';
import { WithdrawalwatcherComponent } from './pages/withdrawalwatcher/withdrawalwatcher.component';
import { LiquidatonBatchEditComponent } from './pages/liquidaton-batch-edit/liquidaton-batch-edit.component';
import { LiquidationBatchViewComponent } from './pages/liquidation-batch-view/liquidation-batch-view.component';
import { LiquidationBatchHomeComponent } from './pages/liquidation-batch-home/liquidation-batch-home.component';
import { FundhomeComponent } from './pages/fundhome/fundhome.component';
import { FundListComponent } from './pages/fund-list/fund-list.component';
import { FundDetailsComponent } from './pages/fund-details/fund-details.component';
import { FormsModule } from '@angular/forms';
import { FundCategoryTypeComponent } from './pages/fund-category-type/fund-category-type.component';
import { DrivewealtheventlistenerComponent } from './pages/drivewealtheventlistener/drivewealtheventlistener.component';
import { GridDropDownRendererComponent } from './components/grid-drop-down-renderer/grid-drop-down-renderer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ModalComponent,
    LeftMenuComponent,

    WealthProfileComponent,
    MainHomeComponent,
    WithdrawalViewComponent,
    ModalContentComponent,
    ModalConfirmComponent,
    AccountDetailComponent,
    BatchjobComponent,
    WithdrawalwatcherComponent,
    LiquidatonBatchEditComponent,
    LiquidationBatchViewComponent,
    LiquidationBatchHomeComponent,
    FundhomeComponent,
    FundListComponent,
    FundDetailsComponent,
    FundCategoryTypeComponent,
    DrivewealtheventlistenerComponent,
    GridDropDownRendererComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    DirectiveComponentModule,
    AppRoutingModule,
    FormComponentModule,
    StorageServiceModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AgGridModule.withComponents(null),
    FormsModule
  ],
  providers: [UserService,
    WebsocketService,
    AuthgaurdService,
    BulkDataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent, WithdrawalViewComponent, ModalConfirmComponent, GridDropDownRendererComponent]
})
export class AppModule { }
