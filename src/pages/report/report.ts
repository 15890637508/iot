import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReportService } from './report.service'
import { Defined } from '../../app/defined';

@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})
export class ReportPage {

  constructor(public navCtrl: NavController,private service: ReportService ) {

  }
  public LineOptions: any;//折线图
  showloading: boolean = false;
  public noticeOption;
  public today_data = [];
  public count_list;
  public x_axis = [];
  public begin_time;
  public begin_time1;
  public begin_time2;
  public begin_time3;
  public end_time;
  public down_sample_type;

  //定义报警数
  public count1;
  public count_false1;
  public count2;
  public count_false2;
  public count3;
  public count_false3;
  public count;
  public count_false;
  public msgShow = '';

  public error: any;

  public sensor_list;

  public domain_tree: any;
  public domain_id = 0;

  public page_size = 5; // 每页条数
  public page_no = 1;    // 当前页码
  public total = 0;      // 列表中所有数据的条数
  public rule_id: number;
  public currentShow: number = -1;

  public date = new Date();//时间对象
  public originTime: string;//最早时间
  public todayStartTime: string;//当日开始时间
  public endTime: string;//结束时间
  public timeList: string;

  public countList: Array<number>;//渲染事件数量的列表
  public tableList: Array<any>;//事件列表当前分页

  //获取所有页面上初始要展示的数据
  showAll():void {
    this.getCount(0, this.todayStartTime, 4, 12);//当前火警,12为火警,13为故障。开始时间为当日0点或者2018年元旦
    this.getCount(1, this.originTime, 6, 12);//当前火警记录
    this.getCount(2, this.todayStartTime, 4, 13);//当前故障
    this.getCount(3, this.originTime, 6, 13);//当前故障记录
  }

  //根据开始时间和rule_id获取火警和故障数量;参数，index：countList的序号,start开始时间
  getCount(index, start:string, down_sample_type:number, rule_id:number):void {
    let temp = 0;
    this.service.getCount(33, start, this.endTime, down_sample_type, rule_id).subscribe(
      result => {
        if(result.code == Defined.OK) {
          if(result.list.length > 0) {
            if(down_sample_type == 6) {
              result.list.map((val) => {
                temp += val.count;
              })
              this.countList[index] = temp;
            }else if(down_sample_type == 4) {
              this.countList[index] = result.list[0].count/3;
            }
          }
        }
      }
    )
  }

}
