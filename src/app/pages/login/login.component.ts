import { Component, OnInit, ViewChild } from '@angular/core';
import { TextComponent } from '@app/form/text/text.component';
import { UserService } from '@app/services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild("email") email: TextComponent;
  @ViewChild("password") password: TextComponent;
  alert: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.email.getValue(), this.password.getValue())
    .subscribe( (u)=> {
      window.location.href = '#/main';
    },
    (err) => {
      console.log(err)
      this.alert = {message: `error with signup ${err.error}`, type: 'danger'};
    });
  }
}
