<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-08-18 20:31:26
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-19 14:49:01
 -->

<template>
  <div class="content">
    <div class="header">
      <div class="tips">消息列表</div>
    </div>
    <section class="list">
      <div class="list-ul"
           ref="content">
        <transition-group tag="div"
                          name="moveOut"
                          class="transition">
          <div class="list-li"
               v-for="(i,index) in list"
               :key="index"
               :index="index">
            <div class="con">
              {{i.message}}
            </div>
            <div class="btn"
                 :style="{transform:`translate3d(${i.move}px,0,0)`,'transition':`all ${i.duration}ms linear`}"
                 @click="clearMessage(index)">删除</div>
          </div>
        </transition-group>
      </div>
    </section>
  </div>
</template>
<script>
// import SwiperList from './SwiperList.js'
class SwiperList {
  constructor(config) {
    this.el = config.el;
    this.width = config.slideWidth;
    this.model = config.model;
    this.transition = false;
    this.transitionTime = config.transitionTime
    this.vm = config.vm;
    this.initEvent()
  }
  initEvent () {
    this.handleConfig = {
      'touchstart': (e) => {
        this.touchstart(e)
      },
      'touchend': (e) => {
        this.touchend(e);
      }
    }
    Object.entries(this.handleConfig).forEach((i) => {
      this.el.addEventListener(i[0], i[1], false)
    })
  }
  touchstart (e) {
    if (this.transition) {
      return;
    }
    const target = e.target.parentNode;
    let index = target.getAttribute('index');
    if (!index) {
      return;
    }
    index = Number(index)
    this.$index = index;
    this.initX = e.targetTouches[0].pageX;
    let transform = this.model[index].move
    this.targetX = transform
    if (transform === 0) {
      this.handleConfig["touchmove"] = (e) => {
        this.touchinitmove(e)
      }
    } else {
      this.handleConfig["touchmove"] = (e) => {
        this.touchendmove(e)
      }
    }
    this.el.addEventListener('touchmove', this.handleConfig["touchmove"], false);
  }
  touchinitmove (e) {
    if (this.transition) {
      return;
    }
    let move = 0;
    this.targetX = e.targetTouches[0].pageX - this.initX;
    const dx = this.targetX;
    if (dx < 0) {
      move = dx;
    }
    if (dx < this.width * -1) {
      move = -1 * this.width;
    }
    this.model[this.$index].move = move
  }
  touchendmove (e) {
    if (this.transition) {
      return;
    }
    let move = 0;
    this.targetX = e.targetTouches[0].pageX - this.initX;
    const dx = this.targetX;
    if (dx >= 0) {
      move = -1 * this.width + dx;
      if (move > 0) {
        move = 0;
      }
    } else { //向左滑动
      move = -1 * this.width;
    }
    this.model[this.$index].move = move
  }
  touchend () {
    if (this.transition) {
      return;
    }
    let transform = this.model[this.$index].move
    let dx = 0;
    if (transform > -1 * this.width / 2) {
      dx = 0;
    } else {
      dx = -1 * this.width;
    }
    this.el.removeEventListener('touchmove', this.handleConfig["touchmove"]);
    this.animation(transform, dx)
  }
  animation (start, end) {
    if (this.transition) {
      return;
    }
    this.transition = true;
    const duration = this.transitionTime * Math.abs(start - end) / this.width;
    this.model[this.$index].duration = duration;
    this.vm.$nextTick(() => {
      return new Promise((resolve) => {
        if (!this.model[this.$index]) {
          this.transition = false;
          resolve();
          return;
        }
        this.model[this.$index].move = end;
        setTimeout(() => {
          if (!this.model[this.$index]) {
            this.transition = false;
            resolve();
            return;
          }
          this.model[this.$index].duration = 0;
          this.transition = false;
          resolve();
        }, duration)
      })
    })
  }
}
export default {
  data () {
    return {
      list: [
        { message: "你的快递到了", move: 0, duration: 0, id: 123 },
        { message: "付款成功", move: 0, duration: 0, id: 1 },
        { message: "退款成功", move: 0, duration: 0, id: 12 }
      ]
    }
  },
  methods: {
    clearMessage (index) {
      this.list.splice(index, 1);
    }
  },
  mounted () {
    this.$nextTick(() => {
      new SwiperList({
        el: this.$refs.content,
        slideWidth: 80,
        model: this.list,
        transitionTime: 1000,
        vm: this
      })
    })
  }
}
</script>
<style lang="less" scoped>
.content {
  .header {
    background: #ff9933;
    border-bottom: 1px solid #ccc;
  }
  .header .tips {
    text-align: center;
    line-height: 54px;
    font-size: 12px;
    color: #fff;
  }
  .list {
    .list-ul {
      overflow: hidden;
      font-size: 14px;
      .transition {
        .list-li {
          line-height: 60px;
          border-bottom: 1px solid #fcfcfc;
          position: relative;
          padding: 0 12px;
          color: #666;
          background: #f2f2f2;
          .con {
            transform: translateX(0px);
          }
        }
        .btn {
          position: absolute;
          top: 0;
          right: -80px;
          text-align: center;
          background: #ffcb20;
          color: #fff;
          width: 80px;
        }
      }
      .moveOut-leave {
        height: 60px;
      }
      .moveOut-leave-active {
        transition: height 1s;
      }
      .moveOut-leave-to {
        height: 0px;
      }
    }
  }
}
</style>