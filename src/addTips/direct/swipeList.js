/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-08-19 14:49:27
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-20 10:53:24
 */
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
  bind (el, binding, vnode) {
    const context = vnode.contetx;
    const { slideWidth, model, transitionTime } = binding.value
    el.$swipeList = new SwiperList({
      el: el,
      width: slideWidth,
      model: model,
      transition: false,
      transitionTime: transitionTime,
      vm: context.vm,
    })
  },
  unbind (el, binding) {
    const handler = el.$swipeList.handleConfig;
    Object.entries(handler).forEach(i => {
      el.removeEventListener(i[0], i[1]);
    })
    el.$swipeList = null;
  }
}
//使用方式为 v-swipelist="{ slideWidth, model, transitionTime }"
