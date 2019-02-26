import { Injectable } from '@angular/core';
import { User, DrivewealthUser, MoneyLionUser, DriveWealthAccountSnapshot } from '../model/model';

import { Observable, Subscription, Subject } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user:User

  constructor(private http: HttpClient) { }

  setUser(user: User) {
    this.user = user;
  }

  getUser() :User {
    return this.user
  }

  login(username: string, password: string):Observable<User> {
     return this.http
      .put<any>(`${environment.apiDomain}/v1/user/login?username=${username}&password=${password}`, {})
      .pipe(map( (res:any) => {
        this.setUser(res.user);
        return res.user;
      }));
  }
  
  getUserIdViaAccountNumber(accountNum: string): Observable<String> {
    return this.http
      .get(`${environment.apiDomain}/v1/drivewealth/userId?accountNum=${accountNum}`)
      .pipe(map((res:any) => {
        return res.userId;
      }));
  }

  getDrivewealthUser(userId: String): Observable<DrivewealthUser> {
    return this.http
    .get(`${environment.apiDomain}/v1/drivewealth?userId=${userId}`)
    .pipe(map((res:any) => {
      return res.drivewealthuser;
    }));
  }

  getMoneyLionUser(userId: String): Observable<MoneyLionUser> {
    return this.http
    .get(`${environment.apiDomain}/v1/user/info?userId=${userId}`)
    .pipe(map((res:any) => {
      return res.user;
    }));
  }

  getSnaphots(userId: String): Observable<DriveWealthAccountSnapshot[]> {
    return this.http
    .get(`${environment.apiDomain}/v1/drivewealth/snapshots?userId=${userId}`)
    .pipe(map((res:any) => {
      return res.snapshots;
    }));
  }
}
