import {throwError as observableThrowError} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Response} from '@angular/http';

@Injectable({providedIn: 'root'})
export class Defined {

  static Unauthorized = 1100;     // 没有登录
  static Forbidden = 1101;        // 没有权限
  static OK = 1000;

  // 取样范围类型
  static secondsData = 1;         // 秒数据
  static minuteData = 2;          // 分数据
  static hourData = 3;            // 小时数据
  static dayData = 4;             // 日数据
  static monthData = 5;           // 月数据
  static yearData = 6;            // 年数据

  // 数据函数类型
  static originalValue = 0;       // 原值
  static averageValue = 1;        // 平均值
  static sum = 2;         // 总和
  static count = 3;       // 总个数
  static min = 4;         // 最小值
  static max = 5;         // 最大值

  public error: any;

  static AuthServerUrl = 'https://47.96.1.116:2443';
  static BaseServerUrl = 'https://47.96.1.116:2443';
  static ElementSvgUrl = 'https://47.96.1.116:2443/api/svg/';
  static logUrl = '47.96.1.116:3000';
  static WebSocketUrl;

  static userName;

  static body = {
    v: '1.0',
    app_id: 'C767115F-0ED0-0001-3451-1DC0D520ECB0',
    app_key: '9aaa8e3fea97081839f7515cb3426359',
  };

  public headerHeight = 0;

  static public_param() {
    this.body['access_token'] = sessionStorage.getItem('access_token');

    return JSON.parse(JSON.stringify(this.body));
  }

  /*static extractData(res: Response, router: Router) {
    const body = res.json() || {};
    if (body.code === Defined.Unauthorized) {
      sessionStorage.setItem('login', '0');
      router.navigate(['/login']);
      return {};
    }

    return body;
  }*/

  static extractData(res: Response) {
    const body = res.json() || {};
    //const rot: Router;
    if (body.code === Defined.Unauthorized) {
      sessionStorage.setItem('login', '0');
      //rot.navigate(['/login']);
      return {};
    }

    return body;
  }
  static handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure

    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    // console.error(errMsg);
    return observableThrowError(errMsg);
  }

  static getCodeMsg(code: Number) {
    let str = '未知错误';
    switch (code) {
      case 1001:
        str = '重复插入数据！';
        break;
      case 1002:
        str = '数据被引用，不能删除！';
        break;
      case 1100:
        str = '请登录！';
        break;
      case 1101:
        str = '无权限操作！';
        break;
      case 1102:
        str = '登录失败，用户名或密码错误';
        break;
      case 1103:
        str = '账号被锁定';
        break;
      case 1104:
        str = '数据已被使用，不允许修改';
        break;
      case 1105:
        str = '业务流程错误';
        break;
      case 1106:
        str = '至少分配一个域';
        break;
      case 1110:
        str = '内部错误！';
        break;
      case 1111:
        str = 'postgresql访问错误';
        break;
      case 1112:
        str = 'redis访问错误';
        break;
      case 1113:
        str = '请求的参数错误！';
        break;
      case 1114:
        str = '资源未找到';
        break;
      case 1115:
        str = '接口已废弃';
        break;
      case 1116:
        str = '文件md5校验和错误';
        break;
      case 1117:
        str = '上传的固件版本必须大于当前最新固件版本';
        break;
    }

    return str;
  }

  static ByCodeMsg(obj: any) {
    if (obj && obj.code)
      return Defined.getCodeMsg(obj.code);
    else
      return '';
  }

  // 获取URL传递参数
  static getParameter(query: any, param: any) {
    const iLen = param.length;
    let iStart = query.indexOf(param);

    if (iStart === -1)
      return '';

    iStart += iLen + 1;

    const iEnd = query.indexOf(';', iStart);

    if (iEnd === -1)
      return query.substring(iStart);

    return query.substring(iStart, iEnd);
  }

  static getAuthBtb(path, api) {
    const auth_btn = JSON.parse(sessionStorage.getItem('auth'));
    for (const a of auth_btn) {
      for (const b of a.menu) {
        if (b.route === path) {
          const c = b.menu;
          for (let i = 0; i < c.length; i++) {
            const url = c[i].path;
            if (url === api) {
              return c[i];
            }
          }
        }
      }
    }
  }

  static getToggleBtn(route, path) {
    const obj = this.getAuthBtb(route, path).enabled;
    return !obj;
  }

  static wait;
}

