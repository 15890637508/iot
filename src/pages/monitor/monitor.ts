import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiscPage } from '../disc/disc'

/**
 * Generated class for the MonitorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-monitor',
  templateUrl: 'monitor.html',
})
export class MonitorPage {

  public count_top;
  public count_bot;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  doYourStuff()
  {
    //alert('cowabonga');
    this.navCtrl.push(DiscPage);  // remember to put this to add the back button behavior
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
    this.count_top = "视频监控V7";
    this.count_bot = "D7_04";
  }

}
