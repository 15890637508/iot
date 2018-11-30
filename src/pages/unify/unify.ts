import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiscPage } from '../disc/disc'
import {MapOptions} from 'angular2-baidu-map';
/**
 * Generated class for the UnifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var BMap;

@IonicPage()
@Component({
  selector: 'page-unify',
  templateUrl: 'unify.html',
})
export class UnifyPage {
  public map:any;//地图对象
  public opts: MapOptions;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnifyPage');
  }
  ionViewDidEnter(){
    this.initBDMap();

  }
  doYourStuff()
  {
    this.navCtrl.push(DiscPage);  // remember to put this to add the back button behavior
  }
  //百度地图
  initBDMap():void {
    this.map = new BMap.Map('container');
    //this.map.centerAndZoom(new BMap.Point(121.840839, 29.298224), 18);
    //地图配置参数
    let opts = {
      centerAndZoom: {
        longitude: 121.840839,
        latitude: 29.298224,
        /*        longitude: 120.07228,
         latitude: 30.31844,*/
        zoom: 17,
        markers: []
      },
      style: {style:'midnight'},
    }
    this.map.setMapStyle(opts.style);//地图风格
    this.map.centerAndZoom(new BMap.Point(opts.centerAndZoom.longitude, opts.centerAndZoom.latitude), opts.centerAndZoom.zoom);//地图中心点
    this.map.enableScrollWheelZoom();
  }

}
