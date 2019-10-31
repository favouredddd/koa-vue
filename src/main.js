// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import ROOT from './App'
import router from './router/index.js'
import Vuex from 'vuex'
import store from "./store/store.js"
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'
Vue.prototype.$http = axios;
import swiper from '@/components/directive/swipe.js';
import directs from '@/direct/direct.js'
Vue.config.productionTip = false
Object.keys(directs).forEach(i => {
  Vue.directive(i, directs[i])
})
Vue.directive("swiper",swiper)
Vue.config.productionTip = true
Vue.use(Vuex)
Vue.use(VueLazyLoad, {
  error: require('../static/imgs/qq.png'),
  laoding: require('../static/imgs/qq.png')
});
let resize = function() {
  let x;
  let setFontSize = function() {
    let width = window.innerWidth
    //设置页面最大宽度
    if (width > 768) width = 768;
    let fontSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize) || 16
    x = width * 16 / (20 * fontSize)
    document.documentElement.style.fontSize = x + 'px';
  }
  setFontSize();
  this.$store.commit("setFontSize", { size: x });

}
/* eslint-disable no-new */
const app = new Vue({
  router,
  store,
  components: {
    ROOT:()=>import('./App')
  },
  render: h => h(ROOT),
  beforeCreate() {
    resize.call(this);
  },
  mounted() {
    let me=this;
    window.addEventListener("resize",resize.bind(me),false);
  }
}).$mount("#app")
