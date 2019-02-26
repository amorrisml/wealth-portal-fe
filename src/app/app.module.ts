import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { UserService } from './services/user.service';
import { AuthgaurdService } from './services/authgaurd.service';
import { MainComponent } from './pages/main/main.component';
import { FormComponentModule } from './form/form.module';

import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token.interceptor.service';
import { LeftMenuComponent } from './coomponents/left-menu/left-menu.component';
import { WealthProfileComponent } from './pages/wealth-profile/wealth-profile.component';
import { MainHomeComponent } from './pages/main-home/main-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    LeftMenuComponent,
    WealthProfileComponent,
    MainHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormComponentModule,
    HttpClientModule
  ],
  providers: [UserService, AuthgaurdService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
