import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UnifyPage } from '../unify/unify';
import { MonitorPage } from '../monitor/monitor';
import {Utils} from "../../app/utils";
import { Defined } from "../../app/defined";
import {$} from "../../app/RichHttp";

/**
 * Generated class for the DiscPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disc',
  templateUrl: 'disc.html',
})
export class DiscPage {
  public originTime: string;//最早时间
  public todayStartTime: string;//当日开始时间
  public endTime: string;//结束时间
  public timeList: string;
  public countList: Array<number>;//渲染事件数量的列表

  constructor( public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscPage');
  }
  //unify(){
  //  this.navCtrl.push(UnifyPage);
  //}
  control(str : number){
    if(str == 1){
      this.navCtrl.push(UnifyPage);
    }
    if(str == 2){
      this.navCtrl.push(MonitorPage);
    }
  }
}
