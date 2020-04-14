import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { Event } from '@app/model/model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private subject: Rx.Subject<Event>;
  private response: Rx.Subject<Event>;
  private url: string;
  private ws: WebSocket;
  private closed: boolean;

  constructor(private userService: UserService) {

  }

  public connect(url): Rx.Subject<Event> {
    console.log(`1 ) Attempting to connect to ${this.url}`);
    this.url = url;
    this.subject = new Rx.Subject<Event>();
    this.response = new Rx.Subject<Event>();
    this.create();
    this.closed = false;
    return this.subject;
  }

  private hasParams(url: string) {
    return url.indexOf('?') !== -1;
  }

  private create() {
    console.log(`2) Attempting to connect to ${this.url}`);

    const token = this.userService.getUser().token;
    const tokenParam = (this.hasParams(this.url)) ? `&token=${token}` : `?token=${token}`;
    this.ws = new WebSocket(this.url + '' + tokenParam);

    this.ws.onmessage = (r: MessageEvent) => {
      // console.log('Message: ', r);
      // const payload = <Event>JSON.parse(r.data);
      this.response.next(r);
    };

    this.ws.onopen = (r: MessageEvent) => {
      this.subject.next(r);
    };

    this.ws.onclose = (r: CloseEvent) => {
      console.log('Close', r);
      if (!this.closed) {
        this.create();
      }
    };

    this.ws.onerror = (r: MessageEvent) => {
      console.log('Error', r);
    };
  }

  public listen(): Rx.Subject<Event> {
    return this.response;
  }
  public close() {
    this.closed = true;
    this.ws.close();
  }
  public send(obj: any) {
    this.ws.send(obj);
  }
}
