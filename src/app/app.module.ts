import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { PersonPage } from '../pages/person/person';
import { DiscPage } from '../pages/disc/disc';
import { UnifyPage } from '../pages/unify/unify';
import { MonitorPage } from '../pages/monitor/monitor';
import {HttpModule, XHRBackend, RequestOptions, Http} from '@angular/http';
import {AuthGuard}      from './auth-guard.service';
import {AuthService}    from './auth.service';
import { Defined } from './defined';
import { LoginService} from '../pages/login/login.service';
import {BaiduMapModule} from "angular2-baidu-map";
import {HttpClient, HttpHeaders,HttpHandler} from '@angular/common/http';
import { PersonService } from '../pages/person/person.service';
import { ReportService } from '../pages/report/report.service';
import { ReportPage } from '../pages/report/report'


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    PersonPage,
    DiscPage,
    UnifyPage,
    MonitorPage,
    ReportPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BaiduMapModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    PersonPage,
    DiscPage,
    UnifyPage,
    MonitorPage,
    ReportPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthGuard,
    AuthService,
    LoginService,
    HttpClient,
    HttpHandler,
    PersonService,
    ReportService,
    Defined,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
