import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'
import {LoginService } from './login.service'
import { Http } from '@angular/http';
import { Defined } from '../../app/defined'
import {Md5} from 'ts-md5/dist/md5';
import {AuthService} from '../../app/auth.service'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public errorMessage:string = '';
  message: string;
  // user_name = '';
  // pass_word: any = '';
  user_name = localStorage.getItem('username');
  pass_word: any = localStorage.getItem('password');
  pass_remember: boolean = true;
  login_res: any;
  login_valid: boolean = true;
  load_gif: boolean = true;
  listData: Object;


  constructor(public navCtrl: NavController ,public authService: AuthService, private loginService: LoginService,private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    if (username.value.length == 0) {
      alert("请输入账号");
    } else if (password.value.length == 0) {
      alert("请输入密码");
    } else {
      const passmd5 = Md5.hashStr(password.value);
      this.loginService.login(username.value, passmd5).subscribe(
        login_res => {
          console.log(login_res)
          this.login_res = login_res;
          if (this.login_res.code === Defined.OK) {
            sessionStorage.setItem('access_token', this.login_res.access_token);
            this.navCtrl.push(TabsPage);
            this.errorMessage = '';
            this.authService.isLoggedIn = true;
          }else {
            alert("用户名或密码输入错误")
          }
        },
        error => {
          console.log(error)
        }
      );
    }
/*    this.loginService.login('Administrator','e10adc3949ba59abbe56e057f20f883e').subscribe(
      login_res => {
        if (login_res.code === Defined.OK) {
          console.log(login_res)
        }
      },
      error => {
        console.log(error)
      }
    );*/
  }

/*
  //登录
  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    this.user_name = username;
    let passmd5 = Md5.hashStr(password);
    this.load_gif = false;
    console.log(1111)
    this.loginService.login(this.user_name, passmd5).subscribe(
      login_res => {
        this.login_res = login_res;
        if (this.login_res.code === Defined.OK) {
          this.errorMessage = '';
          this.authService.isLoggedIn = true;
          // this.message = Defined.ByCodeMsg(this.login_res);
          sessionStorage.setItem('login', '1');
          sessionStorage.setItem('access_token', this.login_res.access_token);
          sessionStorage.setItem('username', this.user_name);
          localStorage.setItem('username',this.user_name);
          //记住密码功能
          if(passremember){
            localStorage.setItem('password',password);
          }else{
            localStorage.removeItem('password');
          }
          // Redirect the user
          //this.get_ui_template();

          let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
          //this.router.navigate([redirect]);
          // Set our navigation extras object
          // that passes on our global query params and fragment
          let navigationExtras: NavigationExtras = {
            preserveQueryParams: true,
            preserveFragment: true
          };

          this.load_gif = true;

          //this.get_sidebar();
        }
        else {
          this.login_valid = false;
          this.load_gif = true;
          this.errorMessage = Defined.ByCodeMsg(this.login_res);
        }
      },
      error => {
        let res = <Response>error;
        this.errorMessage = res.statusText;
        console.log(333)
        // sessionStorage.setItem('login', "1");
        // sessionStorage.setItem('access_token', '123456789');
        // sessionStorage.setItem('username', this.user_name);
        // // Redirect the user
        // this.router.navigate(['/page/welcome/']);
      }
    );
  }
*/

}
