import { Component, OnInit, ViewChild } from '@angular/core';
import { TextComponent } from '@app/form/text/text.component';
import { UserService } from '@app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '@env/environment';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild("email") email: TextComponent;
  @ViewChild("password") password: TextComponent;
  alert: any;
  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  login() {

    /* if(environment.production  == false && environment.offline  == true  ) {
     this.userService.setUser({ id: 1111,
       firstname: "Al",
       lastname: "Morris",
       profilePic:"",
       email: "Test"});
       window.location.href = '#/main';
     } else {*/
    this.userService.login(this.email.getValue(), this.password.getValue())
      .subscribe((u) => {
        window.location.href = '#/main';
      }, (err) => {
        this.alert = { message: `error with signup ${err.error.error}`, type: 'danger' };
        this.toastr.error(`${err.error.error}`, 'Login Error', {
          timeOut: 60000
        });
      });
    //}
    /*
    */
  }
}
