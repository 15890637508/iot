import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnifyPage } from './unify';
import {BaiduMapModule} from "angular2-baidu-map";


@NgModule({
  declarations: [
    UnifyPage,
  ],
  imports: [
    IonicPageModule.forChild(UnifyPage),
    BaiduMapModule,
  ],
})
export class UnifyPageModule {}
