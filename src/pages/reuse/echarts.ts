
export class Echarts {
  static barOptions;//柱状图
  static grossOptions;//折线图
  static pieOptions;//饼状图
  static hoopOptions;//环形图


  public error: any;


  static body = {};

  //柱状图
  static barOptionsFun(obj) {
    let xAxisType;
    let yAxisType;
    let defaults = {
      "legend": null,
      "x_axis": [],
      "y_axis": [],
      "data": [],
      "title": [],
      "color": [],
    };
    let axisLabel= {
      textStyle: {
        color: '#ccc' //坐标数值的颜色
      }
    };
    let splitLine= {
      lineStyle: {
        color: ['#888'] //网格的颜色
      }
    };
    let axisLine= {
      lineStyle: {
        color: '#ccc' //坐标轴的颜色
      }
    };
    let legend= {
      textStyle: {
        color: '#ccc'
      }
    }
    for(const key in defaults){
      if(obj[key]){
        defaults[key] = obj[key];
      }
    }
    if (obj.x_axis) {
      yAxisType = 'value';
      xAxisType = 'category';
    }
    if (obj.y_axis) {
      yAxisType = 'category';
      xAxisType = 'value';
    }
    this.barOptions = {
      color: ['#C23531', '#F9A30E', '#61A0A8', '#D48265'],
      backgroundColor:'transparent',
      title: {
        text: defaults.title,
        x: 'center',
        textStyle: {
          color: '#ccc'
        }
      },
      legend: {
        data: defaults.legend,
        textStyle: {
          color: '#ccc'
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      toolbox: {
        show: false,
        feature: {
          dataView: {show: true, readOnly: false},
          magicType: {show: true, type: ['line', 'bar']},
          restore: {show: true},
          saveAsImage: {show: true}
        }
      },
      calculable: true,
      xAxis: [
        {
          type:xAxisType,
          data: defaults.x_axis,
          axisLabel,
          splitLine, 
          axisLine
        }
      ],
      yAxis: [
        {
          type: yAxisType,
          name: 'kwh',
          data: defaults.y_axis,
          min: 0,
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: '#ccc'
            }
          },
          splitLine, 
          axisLine
        }
      ],
      series: defaults.data
    }
    if (obj.color) {
      this.barOptions.color = defaults.color
    }
    return this.barOptions;
  }

  //折线图
  static grossOptionsMore(obj) {
    let defaults = {
      "legend": null,
      "x_axis": [],
      "y_axis": [],
      "data" : [],
      "title": [],
      "color": [],
      "grid": null
    };
    let axisLabel= {
      textStyle: {
        color: '#ccc' //坐标数值的颜色
      }
    };
    let splitLine= {
      show: false,
      lineStyle: {
        color: ['#888'] //网格的颜色
      }
    };
    let axisLine= {
      lineStyle: {
        color: '#ccc' //坐标轴的颜色
      }
    };
    for(const key in defaults){
      if(obj[key]){
        defaults[key] = obj[key];
      }
    }
    this.grossOptions = {
      color: ['#C23531', '#F9A30E', '#61A0A8', '#D48265'],
      backgroundColor:'transparent',
      grid: defaults.grid,
      tooltip: {
        trigger: 'axis'
      },
      title: {
        text: defaults.title,
        x: 'center',
        textStyle: {
          color: '#ccc'
        }
      },
      legend: {
        data: defaults.legend,
        textStyle: {
          color: '#ccc'
        }
      },
      toolbox: {
        show: false,
        feature: {
          mark: {show: true},
          dataView: {show: true, readOnly: false},
          magicType: {show: true, type: ['line', 'bar']},
          restore: {show: true},
          saveAsImage: {show: true}
        }
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: defaults.x_axis,
          axisLabel,
          splitLine, 
          axisLine
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'kwh',
          min: function (value) {
            return Math.floor(value.min - (value.max - value.min) / 4 <= 0 ? 0 : (value.max - value.min) / 4);
          },
          max: function (value) {
            return (Math.ceil(value.max + (value.max - value.min) / 4));
          },
          minInterval: 1,
          axisLabel,
          splitLine, 
          axisLine
        }
      ],
      series: defaults.data
    }
    if (obj.color) {
      this.grossOptions.color = defaults.color
    }
    return this.grossOptions;
  }

  //饼图
  static pieOptionsMore(series_name, data) {
    this.pieOptions = {
      color: ['#C23531', '#F9A30E', '#61A0A8', '#D48265'],
      backgroundColor:'transparent',
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      title: {
         textStyle: {
          color: '#ccc'
        }
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        textStyle: {
          color: '#ccc'
        }
      },
      series: [
        {
          name: series_name,
          type: 'pie',
          radius: '45%',
          center: ['50%', '50%'],
          data: data,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          label: {
            normal: {
              textStyle: {
                color: 'rgba(255,255,255,0.7)'
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(255,255,255,0.7)'
              }
            }
          }
        }
      ]
    }
    return this.pieOptions
  }

  //环形图
  static hoopOptionsMore(series_name, data) {
    this.hoopOptions = {
      color: ['#C23531', '#F9A30E', '#61A0A8', '#D48265'],
      backgroundColor:'transparent',
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      series: [
        {
          name: series_name,
          type: 'pie',
          radius: ['40%', '60%'],
          center: ['50%', '50%'],
          data: data,
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              lebeLine: {
                show: false
              }
            }
          },
        }
      ]
    }
    return this.hoopOptions;
  }
}