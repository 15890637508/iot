import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {PreLoader} from '../../app/preLoader.service'
import {RouterModule}   from '@angular/router';
import {AuthGuard}      from '../../app/auth-guard.service';
import {AuthService}    from '../../app/auth.service';
import {LoginService } from './login.service';

@NgModule({
  declarations: [
    LoginPage,
  ],
  exports: [
    RouterModule
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  providers: [
    AuthGuard,
    AuthService,
    LoginService,
    // ResetPassService,
    PreLoader
  ]
})
export class LoginPageModule {}
