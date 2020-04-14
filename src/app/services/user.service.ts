import { Injectable } from '@angular/core';
import { User, DrivewealthUser, MoneyLionUser, DriveWealthAccountSnapshot, SearchResult, DriveWealthDeposit, DriveWealthPortfolio, DriveWealthCashTransfer, DriveWealthInvestmentAccountTransaction } from '../model/model';

import { Observable, Subscription, Subject } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User
  private portfolios: DriveWealthPortfolio[]

  constructor(private http: HttpClient,
    private localStorage: LocalstorageService
  ) {


  }

  setUser(user: User) {
    this.user = user;
    this.localStorage.saveUser(user);
  }

  getUser(): User {
    if (this.user) {
      return this.user;
    } else if (this.localStorage.getUser()) {
      this.user = this.localStorage.getUser();
      return this.user;
    } else {
      return null;
    }
  }

  login(username: string, password: string): Observable<User> {
    return this.http
      .put<any>(`${environment.apiDomain}/v1/user/login?noToken=true`, {
        "username": username,
        "password": password,
      })
      .pipe(map((resp: any) => {
        this.setUser(resp.user);
        return resp.user;
      }));
  }

  findUserId(searchText: string): Observable<SearchResult[]> {
    return this.http
      .get(`${environment.apiDomain}/v1/search/${searchText}`)
      .pipe(map((results: SearchResult[]) => {
        return results;
      }));
  }

  getDrivewealthUser(userId: String): Observable<DrivewealthUser> {
    return this.http
      .get(`${environment.apiDomain}/v1/data/drivewealthuser?userId=${userId}`)
      .pipe(map((res: DrivewealthUser) => {
        return res
      }));
  }

  getMoneyLionUser(userId: String): Observable<MoneyLionUser> {
    return this.http
      .get(`${environment.apiDomain}/v1/data/moneylionuser?userId=${userId}`)
      .pipe(map((user: MoneyLionUser) => {
        return user;
      }));
  }

  getDDABalance(userId: String): Observable<number> {
    return this.http
      .get(`${environment.apiDomain}/v1/user/${userId}/ddabalance`)
      .pipe(map((balance: number) => {
        return balance;
      }));
  }

  getSnaphots(accountId: String): Observable<DriveWealthAccountSnapshot[]> {
    return this.http
      .get(`${environment.apiDomain}/v1/data/snapshots?accountId=${accountId}`)
      .pipe(map((res: DriveWealthAccountSnapshot[]) => {
        return res;
      }));
  }

  getDeposits(accountId: string): Observable<DriveWealthDeposit[]> {
    return this.http
      .get(`${environment.apiDomain}/v1/data/investmentAccountDeposits?accountId=${accountId}`)
      .pipe(map((res: DriveWealthDeposit[]) => {
        return res;
      }));
  }

  getInvestmentAccountCashTransfers(accountId: string): Observable<DriveWealthCashTransfer[]> {
    return this.http
      .get(`${environment.apiDomain}/v1/data/investmentAccountCashTransfers?accountId=${accountId}`)
      .pipe(map((res: DriveWealthCashTransfer[]) => {
        return res;
      }));
  }

  getInvestmentAccountTransactions(accountId: string): Observable<DriveWealthInvestmentAccountTransaction[]> {
    return this.http
      .get(`${environment.apiDomain}/v1/data/investmentAccountTransactions?accountId=${accountId}`)
      .pipe(map((res: DriveWealthInvestmentAccountTransaction[]) => {
        return res;
      }));
  }

  getWithdrawalDrivewealthInfo(accountId: string, withdrawalId: string): Observable<any> {
    return this.http
      .get(`${environment.apiDomain}/v1/withdrawal/dwInfo?driveWealthAccountId=${accountId}&withdrawalId=${withdrawalId}`)
      .pipe(map((res: any) => {
        return res;
      }));
  }

  getPortfolios(): Observable<DriveWealthPortfolio[]> {

    if (this.portfolios != null) {
      return new Observable((observer) => {
        observer.next(this.portfolios)
        observer.complete()
      });
    } else {
      return this.http
        .get(`${environment.apiDomain}/v1/data/portfolios`)
        .pipe(map((res: DriveWealthPortfolio[]) => {
          this.portfolios = res;
          return res;
        }));
    }

  }

  pushWithdrawals(withdrawalIds: string[]): Observable<string> {
    return this.http
      .put(`${environment.apiDomain}/v1/withdrawal/push`, {
        withdrawalIds: withdrawalIds
      })
      .pipe(map((res: string) => {
        console.log(res);
        return res;
      }));
  }

  updateHasPendingWithdrawal(driveWealthAccountId: string, flag: boolean): Observable<string> {
    return this.http
      .put(`${environment.apiDomain}/v1/account/updateHasPendingWithdrawal?driveWealthAccountId=${driveWealthAccountId}&flag=${flag}`, {})
      .pipe(map((res: string) => {
        console.log(res);
        return res;
      }));
  }

  updatePortfolio(driveWealthUserId: string, portfolioId: string): Observable<string> {
    return this.http
      .put(`${environment.apiDomain}/v1/user/${driveWealthUserId}/updatePortfolio/${portfolioId}`, {})
      .pipe(map((res: string) => {
        console.log(res);
        return res;
      }));
  }

  updateWithdrawalStatus(driveWealthAccountId: string, withdrawalId: string, status: string): Observable<string> {
    return this.http
      .put(`${environment.apiDomain}/v1/withdrawal/status?driveWealthAccountId=${driveWealthAccountId}&withdrawalId=${withdrawalId}&status=${status}`, {})
      .pipe(map((res: string) => {
        console.log(res);
        return res;
      }));
  }



}
