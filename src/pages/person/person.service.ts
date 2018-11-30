/**
 * Created by yue on 2018/11/25.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

import {Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';
import {Defined} from '../../app/defined';

import {Md5} from "ts-md5/dist/md5";

@Injectable()
export class PersonService {

  headers = new Headers({'Content-Type': 'application/json'});
  options = new RequestOptions({headers: this.headers});

  constructor(private http:Http) {

  }

/*  //获取domain树
  getDomainTree():Observable<any> {
    let body = Defined.public_param();
    //console.log('get domain tree ');
    let url = `${Defined.BaseServerUrl}/api/account.self.get_domain_tree`;
    return this.http.post(url, body, this.options)
      .map((responseData) => Defined.extractData(responseData))
      .catch(Defined.handleError);
  }*/

  //获取用户信息
  getUser():Observable<any> {
    let body = Defined.public_param();
    let url = `${Defined.BaseServerUrl}/api/account.self.get_info`;
    console.log(body)
    return this.http.post(url, body, this.options)
      .map((responseData) => Defined.extractData(responseData))
      .catch(Defined.handleError);
  }


  //修改用户信息
  editUser(data:any):Observable<any> {
    let body = Defined.public_param();
    body.user_id = data.id.value;
    body.name = data.name.value;
    body.mobile = data.mobile.value;
    body.email = data.email.value;
    body.reg_time = parseInt(data.reg_time.value);
    body.act_time = parseInt(data.act_time.value);
    let url = `${Defined.BaseServerUrl}/api/account.user.modify`;

    return this.http.post(url, body, this.options)
      .map((responseData) => Defined.extractData(responseData))
      .catch(Defined.handleError);
  }

  //修改用户自己密码
  updatePass(pass:string):Observable<any> {
    let body = Defined.public_param();
    let url = Defined.AuthServerUrl + '/api/account.self.reset_pass';
    body.pass = Md5.hashStr(pass);
    return this.http.post(url, body, this.options)
      .map((responseData) => Defined.extractData(responseData))
      .catch(Defined.handleError);
  }

  //登出
  logout():Observable<any> {
    let body = Defined.public_param();
    let url = Defined.AuthServerUrl + '/api/account.self.logout';

    return this.http.post(url, body, this.options)
      .map((responseData) => Defined.extractData(responseData))
      .catch(Defined.handleError);
  }

}
