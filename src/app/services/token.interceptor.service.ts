import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { LocalstorageService } from './localstorage.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {
  
  constructor(private injector: Injector,
    private localStorage: LocalstorageService) {
    console.log('TokenInterceptor Instantiated'); 
    //hi there
  
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let user = this.localStorage.getUser();
    if ( request.url.indexOf(environment.apiDomain) !== -1 && request.url.indexOf('noToken=true') === -1) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${user.token}`
        }
      });
    }
    return next.handle(request);
  }
}
