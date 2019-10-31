<template>
  <div class="dateWrap">
    <input class="showDate" @click="showList" placeholder="请输入" v-model="value" :class="{'select':select}" />
    <transition name="dateLeave">
      <div class="calendar" v-show="select">
        <div class="header">
          <div class="left">
            <span class="double" @click="getPreYear"></span>
            <span class="single" @click="getPreMonth"></span>
          </div>
          <div class="now">{{getNow}}</div>
          <div class="right">
            <span class="single"  @click="getNextMonth"></span>
            <span class="double"  @click="getNextYear"></span>
          </div>
        </div>
        <div class="dateItem">
          <div class="week">
            <div class="weekDay" v-for="(item,index) in weeks">{{item}}</div>
          </div>
          <div class="dateDay">
            <div v-for="(i,index) in list" class="item" :class="{'noSelect':i.check,'active':i.select}" @click="getActive(i)">
              {{i.txt}}
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
let src1 = require("../../../assets/doubleLeft.png")
let src2 = require("../../../assets/left1.png")
let src3 = require("../../../assets/doubleRight.png")
let src4 = require("../../../assets/right1.png")
export default {
  name: "dateInput1",
  data() {
    let me = this;
    let lists = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let weeks = ["日", "一", '二', "三", "四", "五", "六"]
    let date = new Date();
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let list = [];
    return { y: y, m: m, d: 1, week: "", weeks: weeks, lists: lists, list: list, select: false, showY: y, showM: m, showD: 1 }
  },
  methods: {
    getActive(item) {
      let me = this;
      me.list.forEach(i => {
        i.select = false;
      });
      item.select = true;
      me.getShow();
      me.showD = item.txt;
      me.select = false;
      if (item.check && item.txt > 15) {
        if (me.showM === 12) {
          me.showY = me.y + 1;
          me.showM = 0;
        } else {
          me.showM = me.m - 1;
        }
      }
      if (item.check && item.txt < 15) {
        if (me.showM === 0) {
          me.showM = 12;
          ME.showY = me.y - 1;
        } else {
          me.showM = me.m + 1;
        }
      }
    },
    getList() {
      let me = this;
      let list = [];
      let newDate = new Date(me.y, me.m - 1, 1);
      let recorld = newDate.getDay();
      let all = 42;
      let pre = me.getdays(me.m - 1);
      for (let i = pre - (recorld - 1); i <= pre; i += 1) {
        list.push({ txt: i, check: true, select: false });
      }
      let now = me.getdays(me.m);
      for (let i = 1; i <= now; i += 1) {
        if (i === 1) {
          list.push({ txt: i, check: false, select: true });
          continue;
        }
        list.push({ txt: i, check: false, select: false });
      }
      let len = all - list.length;
      for (let i = 1; i <= len; i += 1) {
        list.push({ txt: i, check: true, select: false })
      }
      return list;
    },
    getdays(m) {
      let me = this;
      let tem = ((m - 1) + 12) % 12;
      if (me.y % 4 == 0 && me.y % 100 !== 0 && me.y % 400 == 0 && tem === 1) {
        return 29;
      }
      return me.lists[tem];
    },
    getPreYear() {
      let me = this;
      me.y = me.y - 1;
      me.getShow();
      let list = me.getList();
      me.$set(me, "list", list);
    },
    getNextYear() {
      let me = this;
      me.y = me.y + 1;
      me.getShow();
      let list = me.getList();
      me.$set(me, "list", list);
    },
    getPreMonth() {
      let me = this;
      if (me.m === 1) {
        me.y -= 1;
        me.m = 12;
      } else {
        me.m -= 1;
      }
      me.getShow();
      let list = me.getList();
      me.$set(me, "list", list);
    },
    getNextMonth() {
      let me = this;
      if (me.m === 12) {
        me.y += 1;
        me.m = 0;
      } else {
        me.m += 1;
      }
      me.getShow();
      let list = me.getList();
      me.$set(me, "list", list);
    },
    showList() {
      let me = this;
      me.select = !me.select;
    },
    getShow() {
      let me = this;
      me.showY = me.y;
      me.showD = me.d;
      me.showM = me.m
    }
  },
  computed: {
    value() {
      return this.showY + '-' + this.showM + '-' + this.showD;
    },
    getNow() {
      return this.y + '年 ' + this.m + '月'
    }
  },
  mounted() {
    let me = this;
    let list = me.getList();
    me.$set(me, "list", list);
  }
}

</script>
<style scoped lang="less">
.itemRect {
  font-size: 12px;
  text-align: center;
  line-height: 30px;
  float: left;
  height: 30px;
  width: 30px;
  color: #657180;
}

.dateWrap {
  width: 210px;
  margin: 0 auto;

  .showDate {
    border-radius: 5px;
    box-sizing: border-box;
    padding-left: 10px;
    width: 210px;
    height: 30px;
    line-height: 30px;
    margin-bottom: 5px;
    border: 1px solid #e3e8ee;
    font-size: 12px;
    color: #c3cbd6;
    outline: none;

    .input {}

    .date {}
  }

  .select {
    border: 1px solid #5cadff;
    box-shadow: 0 0 0 2px rgba(51, 153, 255, 0.2);
  }

  .dateLeave-leave {
    opacity: 1;
  }

  .dateLeave-leave-active {
    animation: slides .3s ease-in-out;
  }

  .dateLeave-enter {
    opacity: 1;
  }

  .dateLeave-enter-active {
    animation: slides .3s ease-in-out reverse;
  }

  @keyframes slides {
    0% {
      opacity: 1;
      transform-origin: 0 0;
      transform: scaleY(1);
    }

    100% {
      opacity: 0;
      transform-origin: 0 0;
      transform: scaleY(0.8);
    }
  }

  .calendar {
    transform-origin: center top;
    width: 210px;
    margin: 0 auto;
    height: 260px;
    box-shadow: 1px 1px 10px rgba(22, 22, 22, .1);

    .header {
      >div {
        float: left;
      }

      .left,
      .right {
        width: 25%;

        >span {
          height: 21px;
          display: block;
          font-size: 0;
          width: 40%;
        }

        justify-content: space-around;
        display: flex;
      }

      border-bottom: 1px solid #e3e8ee;
      padding:5px 0;

      &:after {
        content: "";
        display: block;
        clear: both;
      }

      .now {
        width: 50%;
        text-align: center;
        font-size: 12px;
        line-height: 21px;
      }

      .left {
        .double {
          background: url("../../../assets/doubleLeft.png") no-repeat;
        }

        .single {
          background: url("../../../assets/left1.png") no-repeat;
          background-size: cover;
        }
      }

      .right {
        .double {
          background: url("../../../assets/doubleRight.png") no-repeat;
          background-size: cover;
        }

        .single {
          background: url("../../../assets/right1.png") no-repeat;
          background-size: cover;
        }
      }

      .left,
      .right {

        .double,
        .single {
          background-size: 80% 80%;
          background-position: center center;
        }
      }
    }

    .dateItem {
      margin: 10px 0px;

      .week {
        &:after {
          clear: both;
          content: "";
          display: block;
        }

        .weekDay {
          .itemRect;
          color: #c3cbd6;
        }
      }

      .dateDay {
        margin: 0 auto;

        &:after {
          clear: both;
          content: "";
          display: block;
        }

        .item {
          .itemRect;
          position: relative;
        }

        .active {
          &:after {
            content: "";
            position: absolute;
            top: 5px;
            right: 5px;
            width: 5px;
            height: 5px;
            background-color: #39f;
            border-radius: 50%;
            display: block;
          }
        }

        .noSelect {
          color: #c3cbd6;
        }
      }
    }
  }
}

</style>
