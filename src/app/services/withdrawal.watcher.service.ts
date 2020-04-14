import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { WebsocketService } from './websocket.service';
import { map } from 'rxjs/operators';
import { DriveWealthAccount, DriveWealthWithdrawal, LiquidationBatch } from '@app/model/model';
import * as Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WithdrawalWatcherService {

  items: any[]
  private response: Rx.Subject<DriveWealthWithdrawal>;

  constructor(private websocketService: WebsocketService, private http: HttpClient) {
    this.response = new Rx.Subject<DriveWealthWithdrawal>();
  }

  getPendingWithdrawal(a: DriveWealthAccount): DriveWealthWithdrawal[] {
    return a.withdrawals.filter(w => w.status != "CANCELLED" && w.status != "COMPLETED");
  }

  createLiquidationBatch(name: string): Observable<LiquidationBatch> {
    return this.http
      .post(`${environment.apiDomain}/v1/liquidationbatch/edit`, { name: name })
      .pipe(map((results: LiquidationBatch) => {
        return results;
      }));
  }

  getLiquidationBatch(id: string): Observable<LiquidationBatch> {
    return this.http
      .get(`${environment.apiDomain}/v1/liquidationbatch/${id}`)
      .pipe(map((results: LiquidationBatch) => {
        return results;
      }));
  }

  getLiquidationBatchList(): Observable<LiquidationBatch[]> {
    return this.http
      .get(`${environment.apiDomain}/v1/liquidationbatch/list`)
      .pipe(map((results: LiquidationBatch[]) => {
        return results;
      }));
  }

  startLiquidationWithdrawalCreation(liquidationBatchId): Observable<string> {
    return this.http
      .put(`${environment.apiDomain}/v1/liquidationbatch/action/${liquidationBatchId}?action=CREATELIQUIDATIONS`, {})
      .pipe(map((results: string) => {
        return results;
      }));
  }

  refreshLiquidationBatchItems(liquidationBatchId): Observable<string> {
    return this.http
      .put(`${environment.apiDomain}/v1/liquidationbatch/action/${liquidationBatchId}?action=REFRESHBATCHITEMS`, {})
      .pipe(map((results: string) => {
        return results;
      }));
  }

  grabWithdrawals(): Rx.Subject<DriveWealthWithdrawal> {

    this.websocketService
      .connect(`${environment.webSocketDomain}/bulkDataProcurement?type=PENDINGWITHDRAWALS`)
      .subscribe((value: Event) => {
        console.log(value);
        return;
      });

    this.websocketService.listen().subscribe((p: any) => {
      var account = JSON.parse(p.data);
      console.log(account);

      let withdrawal = this.getPendingWithdrawal(account)[0];
      withdrawal.account = account;
      this.response.next(withdrawal);
    });

    return this.response;
  }
}
