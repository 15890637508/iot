import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersonService } from './person.service';
import { Defined } from '../../app/defined';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login'

/**
 * Generated class for the PersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-person',
  templateUrl: 'person.html',
})
export class PersonPage {
  public userinfo: any

  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,private service: PersonService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonPage');
  }
  //修改密码
  changePassword(){

    let prompt = this.alertCtrl.create({
      title: '修改密码',

      message: "请输入合法密码",
      inputs: [
        {
          name: 'title',
          value: '',
          placeholder: '新密码'
        },
      ],
      buttons: [
        {
          text: '保存',
          handler: data => {
            this.service.updatePass(data.title).subscribe(
              result => {
                if(data.title._length > 2){
                  if (result.code == Defined.OK) {

                    alert("设置成功，请重新登录")
                    // this.clearUserInfo();
                    sessionStorage.clear();
                    this.navCtrl.push(LoginPage);
                    //500毫秒隐藏modal
                    //this.setTimeOut();
                    // this.getUserList(this.domain_id, "", this.page_size, 1);

                  } else {
                    alert("请重新设置")
                  }
                  //显示提示消息
                  //this.msgShow = true;
                }else {
                  alert("请输入合法字符")
                }

              },
              error => {
                this.error = error
              }
            );
          }
        },
        {
          text: '取消',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
  changeIP(){
    let prompt = this.alertCtrl.create({
      title: '修改IP',

      message: "请输入合法IP",

      inputs: [
        {
          name: 'title',
          value: '',
          placeholder: 'https://47.96.1.116:2443'
        },
        {
          name: 'title',
          value: '',
          placeholder: '新IP'
        },

      ],
      buttons: [
        {
          text: '保存',
          handler: data => {
            console.log(11111)
          }
        },
        {
          text: '取消',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();

  }
/*  $scope.myPopup = $ionicPopup.show({
  templateUrl: 'templates/sale/modal/popup.html',
  scope: $scope,
  buttons: [{ //Array[Object] (可选)。放在弹窗footer内的按钮。
    text: '取消',
    type: 'sale-cancel',
    onTap: function(e) {
      $scope.myPopup.close();
    }
  }, {
    text: '确定',
    type: 'sale-sure',
    onTap: function(e) {
      console.log(e)
    }
  }]
});*/

  //登出
  private error: any;
  success: string;

  loginOut(){
    let confirm = this.alertCtrl.create({
      title: '确认退出',
      message: '',
      buttons: [
        {
          text: '确认',
          handler: () => {
            console.log('Disagree clicked');
            this.service.logout().subscribe(
              success => {
                if (success.code == Defined.OK) {
                  this.success = success;
                  sessionStorage.clear();
                  this.navCtrl.push(LoginPage);
                }
              },
              error => {
                this.error = error;
              }
            );
          }
        },
        {
          text: '取消',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }



}



