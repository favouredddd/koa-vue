/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-08-18 20:40:25
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-18 21:01:19
 */
class SwiperList {
  constructor(config) {
    this.initEvent(config.el)
  }
  initEvent (el) {
    el.addEventListener('touchstart', this.touchstart, false);
    el.addEventListener('touchmove', this.touchmove, false);
    el.addEventListener('touchend', this.touchend, false);
  }
  touchstart (e) {
    const target = e.target;
    const item = target.getAttribute('item');
    if (!item) {
      return;
    }
    this.initX = e.targetTouches[0].pageX;
    this.targetX = window.getComputedStyle(target).transform;

  }
  touchmove () { }
  touchend () { }
}
export default SwiperList;