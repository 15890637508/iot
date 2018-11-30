/**
 * Created by yue on 2018/11/26.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Headers, RequestOptions} from '@angular/http';
import {Defined} from '../../app/defined';
import * as XLSX from "xlsx";

@Injectable()
export class ReportService {

  headers = new Headers({'Content-Type': 'application/json'});
  options = new RequestOptions({headers: this.headers});

  constructor(private http: Http) {
  }

  //获取domain树
  getDomainTree(): Observable<any> {
    let body = Defined.public_param();
    let url = `${Defined.BaseServerUrl}/api/account.self.get_domain_tree`;
    return this.http.post(url, body, this.options)
      .map((responseData) => Defined.extractData(responseData))
      .catch(Defined.handleError);
  }

  //获取事件数量
  getCount(domain_id: number, begin_time: string, end_time: string, down_sample_type: number, rule_id: number): Observable<any> {
    let body = Defined.public_param();

    body.domain_id = domain_id;
    body.begin_time = begin_time;
    body.end_time = end_time;
    body.down_sample_type = down_sample_type;
    body.rule_id = rule_id;

    let url = `${Defined.BaseServerUrl}/api/event.query.count_list`;

    return this.http.post(url, body, this.options)
      .map((responseData) => Defined.extractData(responseData))
      .catch(Defined.handleError);
  }

  //获取传感器列表以及坐标（指定域及其⼦域）
  getSensorAll(domain_id:number,page_no:number,page_size:number,device_id:string,model:string,tags:Array<number>):Observable<any>{
    let body = Defined.public_param();

    body.domain_id = domain_id;
    body.page_no = page_no;
    body.page_size = page_size;
    body.device_id = device_id;
    body.model = model;
    body.tags = tags;

    let url = `${Defined.BaseServerUrl}/api/sensor.sensor.get_all`;
    return this.http.post(url, body, this.options)
      .map((responseData) => Defined.extractData(responseData))
      .catch(Defined.handleError);
  }

  // 获取列表
  getSensorList(page_size: number, page_no: number, domain_id: string,tags): Observable<any> {
    let body = Defined.public_param();
    body.page_size = page_size;
    body.page_no = page_no;
    body.domain_id = domain_id;
    body.tags = tags;

    let url = `${Defined.BaseServerUrl}/api/sensor.sensor.get_all`;
    return this.http.post(url, body, this.options)
      .map((responseData) => Defined.extractData(responseData))
      .catch(Defined.handleError);
  }

  //根据id查询特定传感器信息
  getSensorById(sensor_id:number):Observable<any>{

    let body = Defined.public_param();
    body.id = sensor_id;

    let url = `${Defined.BaseServerUrl}/api/sensor.sensor.query`;
    return this.http.post(url, body, this.options)
      .map((responseData) => Defined.extractData(responseData))
      .catch(Defined.handleError);
  }
  //查询数量
  getQueryCount(domain_id: number, begin_time: string, end_time: string): Observable<any> {
    let body = Defined.public_param();

    body.domain_id = domain_id;
    body.begin_time = begin_time;
    body.end_time = end_time;

    let url = `${Defined.BaseServerUrl}/api/event.query.count`;
    return this.http.post(url, body, this.options)
      .map((responseData) => Defined.extractData(responseData))
      .catch(Defined.handleError);
  }

  //未处理数据
  getQueryCountNo(domain_id: number, begin_time: string, end_time: string, processed: boolean): Observable<any> {
    let body = Defined.public_param();

    body.domain_id = domain_id;
    body.begin_time = begin_time;
    body.end_time = end_time;
    body.processed = processed

    let url = `${Defined.BaseServerUrl}/api/event.query.count`;
    return this.http.post(url, body, this.options)
      .map((responseData) => Defined.extractData(responseData))
      .catch(Defined.handleError);
  }

  //获取最近7天数据
  getQueryCountList(domain_id: number, begin_time: string, end_time: string, down_sample_type: number): Observable<any> {
    let body = Defined.public_param();

    body.domain_id = domain_id;
    body.begin_time = begin_time;
    body.end_time = end_time;
    body.down_sample_type = down_sample_type

    let url = `${Defined.BaseServerUrl}/api/event.query.count_list`;
    return this.http.post(url, body, this.options)
      .map((responseData) => Defined.extractData(responseData))
      .catch(Defined.handleError);
  }

}
