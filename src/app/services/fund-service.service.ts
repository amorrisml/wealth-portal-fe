import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import { HttpClient } from '@angular/common/http';
import { DriveWealthFund, DriveWealthFundDisplayCategoryType } from '@app/model/model';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';
import { WealthProfileComponent } from '@app/pages/wealth-profile/wealth-profile.component';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  constructor(private http: HttpClient,
    private localStorage: LocalstorageService
  ) {
  }

  getFunds(): Observable<DriveWealthFund[]> {
    return this.http
      .get(`${environment.apiDomain}/v1/data/funds`)
      .pipe(map((res: DriveWealthFund[]) => {
        return res;
      }));
  }

  updateFund(fund: DriveWealthFund): Observable<string> {
    return this.http
      .put(`${environment.apiDomain}/v1/fund`, { 'fund': fund })
      .pipe(map((res: string) => {
        return res;
      }));
  }

  updateCharacteristicType(t: DriveWealthFundDisplayCategoryType) {
    return this.http
      .put(`${environment.apiDomain}/v1/fund/characteristicType`, { 'type': t })
      .pipe(map((res: string) => {
        return res;
      }));
  }

  getFund(id: string): Observable<DriveWealthFund> {
    return this.http
      .get(`${environment.apiDomain}/v1/data/fund?fundId=${id}`)
      .pipe(map((res: DriveWealthFund) => {
        return res;
      }));
  }

  getCharacteristicTypes(): Observable<DriveWealthFundDisplayCategoryType[]> {
    return this.http
      .get(`${environment.apiDomain}/v1/data/fundCharacteristicTypes`)
      .pipe(map((res: DriveWealthFundDisplayCategoryType[]) => {
        return res;
      }));
  }
}
