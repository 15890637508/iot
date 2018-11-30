import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, App,Slides } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.initSlides();
  }
  ionViewDidEnter(){
    this.slides.startAutoplay();
  }
  ionViewDidLeave(){
    this.slides.stopAutoplay();
  }

  // 初始化slides
  initSlides(){
    this.slidesItems=[
      {img:'assets/imgs/bg1.png'},
      {img:'assets/imgs/bg2.png'},
      {img:'assets/imgs/bg3.png' },
      {img:'assets/imgs/bg4.png' },
    ];
  }
}
