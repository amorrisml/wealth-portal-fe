import { Component, OnInit, ViewChild } from '@angular/core';
import { TextComponent } from '@app/form/text/text.component';
import { UserService } from '@app/services/user.service';

@Component({
  selector: 'main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit {

  @ViewChild('searchTxt') searchTxt: TextComponent;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  search($event: KeyboardEvent) {
    if($event.code === 'Enter'){
      this.userService.getUserIdViaAccountNumber(this.searchTxt.getValue())
        .subscribe(userId => {
          window.location.href = `#/main/wealth-profile/${userId}`;
        })

    }
  }

}


/*  search(event) {
    console.log(event)
  /*  if($event.code === 'Enter'){
      this.userService.getUserIdViaAccountNumber(this.searchTxt.getValue())
        .subscribe(userId => {
          window.location.href = `#/main/wealth-profile/${userId}`;
        })

    }
  }
*/