import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiscPage } from './disc';
import {Router} from '@angular/router';

@NgModule({
  declarations: [
    DiscPage,

  ],
  imports: [
    IonicPageModule.forChild(DiscPage),
  ],
  declarations: [DiscPage],
  providers: [Router]
})
export class DiscPageModule {}
