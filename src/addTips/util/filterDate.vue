<template>
  <div class="content">
    <div class="header">日期格式化</div>
    <div class="introduce">{{describe}}</div>
    <div class="code">
      <div>
        <div class="jsTitle">js代码</div>
        <code v-helight="jsCode" class="hljs javascript">{{jsCode}}</code>
        <div class="jsTitle"
             style="position:relative">源码
          <div class="copy"
               @click="copy">一键复制</div>
        </div>
        <code 
              v-html="originCode"
              class="codeArea"
              autoHeight="true"
              ref="textArea">

        </code>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      describe: `这是使用正则表达式的过滤器工具包`,
      jsCode:
        `  import {fileToString} from 'xxxx';
        1)在全局注册过滤器
        2)使用时 {{timeStamp|注册过滤器("yyyy-MM-dd")}}`,
      originCode: `class dateFilter {
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
export default { dateFilter: dateFilter.formatDate }`
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.textArea.style.height = this.$refs.textArea.scrollHeight + 'px'
    })
  },
  methods: {
    copy () {
      document.execCommand('copy', false, this.$refs.textArea.select());
    },
  }
}
</script>
<style lang="less">
.boxShadow {
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
.content {
  padding: 0.5rem;
  .header {
    font-size: 1rem;
    color: #d08770;
    text-indent: 0.5rem;
  }
  > div {
    margin-bottom: 0.4rem;
    border-radius: 5px;
  }
  .copy {
    float: right;
    margin-right: 1rem;
    text-indent: 0;
    background-color: #0085ff;
    padding: 0.2rem 0.3rem;
    font-size: 12px;
    color: #fff;
    border-radius: 5px;
    .boxShadow;
  }
  .eventTitle {
    font-size: 0.6rem;
  }
  .swipeWrap {
    height: 5rem;
    background-image: linear-gradient(90deg, #0af, #0085ff);
  }
  .codeArea {
    width: 100%;
    outline: none;
    display: block;
    .boxShadow;
    background-color: #2b303b;
    border: 1px solid #cecece;
    font-weight: 400;
    color: #fff;
  }
}
</style>