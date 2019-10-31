class dateFilter {
  static formatDate (srcDate, format) {
    if (srcDate instanceof String) {
      //排除日期格式串,只处理时间戳
      let reg = new RegExp(/^\d+$/);
      if (reg.exec(srcDate) !== null) {
        try {
          srcDate = parseInt(srcDate);
        } catch (e) { }
      }
    }

    //得到日期
    srcDate = new Date(srcDate);
    if (isNaN(srcDate.getDay())) {
      return '';
    }

    let o = {
      "M+": srcDate.getMonth() + 1, //月份
      "d+": srcDate.getDate(), //日
      "h+": srcDate.getHours() % 12 === 0 ? 12 : srcDate.getHours() % 12, //小时
      "H+": srcDate.getHours(), //小时
      "m+": srcDate.getMinutes(), //分
      "s+": srcDate.getSeconds(), //秒
      "q+": Math.floor((srcDate.getMonth() + 3) / 3), //季度
      "S": srcDate.getMilliseconds() //毫秒
    };
    let week = {
      "0": "日",
      "1": "一",
      "2": "二",
      "3": "三",
      "4": "四",
      "5": "五",
      "6": "六"
    };
    //年份单独处理
    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (srcDate.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    //月日
    Object.keys(o).forEach(function (k) {
      if (new RegExp("(" + k + ")").test(format)) {
        format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
    });

    //星期
    if (/(E+)/.test(format)) {
      format = format.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[srcDate.getDay() + ""]);
    }
    return format;
  }
  static toDate (dateStr) {
    let date1;
    try {
      date1 = new Date(Date.parse(dateStr));
    } catch (e) {

    }
    if (!date1) {
      throw Error.handle('not date');
    }

    //处理非标准日期串
    //14位
    if (isNaN(date1) || isNaN(date1.getDay())) {
      if (dateStr.length === 14) {
        dateStr = dateStr.substr(0, 4) + '/' + dateStr.substr(4, 2) + '/' + dateStr.substr(6, 2) + ' ' +
          dateStr.substr(8, 2) + ':' + dateStr.substr(10, 2) + ':' + dateStr.substr(12);
        date1 = new Date(Date.parse(dateStr));
      } else if (dateStr.length === 8) { //8位
        dateStr = dateStr.substr(0, 4) + '/' + dateStr.substr(4, 2) + '/' + dateStr.substr(6, 2);
        date1 = new Date(Date.parse(dateStr));
      }
    }
    return date1;
  }
}
export default { dateFilter: dateFilter.formatDate }