import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private httpClient: HttpClient) { }

  public upload(formData) {

    /* const headers = new HttpHeaders({
       'Content-Type': 'text/html;charset=UTF-8',
       'Accept': 'application/json'
     });*/

    return this.httpClient.post<any>(environment.apiDomain + '/v1/file', formData, {
      reportProgress: true,
      observe: 'events',
      headers: {},
    });
  }
}
