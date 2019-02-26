import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

import {
  Router,
  Event,
  NavigationStart, RoutesRecognized,RouteConfigLoadStart,
  RouteConfigLoadEnd, NavigationEnd, NavigationCancel, NavigationError
} from '@angular/router'

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
import { UserService } from '@app/services/user.service';
import { User } from '@app/model/model';

@Component({
  selector: 'left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('400ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('400ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class LeftMenuComponent implements OnInit {

  isOpen: boolean = false;
  user: User;

  constructor(private userService: UserService,
    private router: Router,
    private eRef: ElementRef) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.router.events.subscribe((event : Event) => {
      if(this.isOpen && (event instanceof NavigationEnd)) {
          this.slideOut();
      }
    });
  }


  toggle() {
    if(this.isOpen) {
      console.log("slide out");
      this.slideOut();
    } else {
      console.log("slide in");
      this.slideIn();
    }
  }

  reset (){
    this.slideOut();
  };

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target) &&
        this.isOpen === true &&
        event.target.id !== 'menuToggle'
      ) {
      this.slideOut();
    }
  }

  /*
  * Slides the menu out of the screen.
  */
  slideOut() {
    this.isOpen = false;
    return;
  }

  /*
  * Slides the menu into the screen.
  */
  slideIn() {
    this.isOpen = true;
    return;
  }

}
