import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/App'
Vue.use(Router);
const routes = [
  {
    path: "/",
    redirect: "/vue"
  },
  {
    path: '/vue',
    redirect: '/vue/home',
    component: App,
    meta: { index: 0 },
    children: [
      { path: 'home', component: () => import('@/components/Home') },
      {
        path: 'pluginList',
        component: () => import('@/components/pluginlist'),
        redirect: "/vue/pluginList/instruction",
        children: [
          { path: 'instruction', component: () => import('@/components/pluginlist/instruction.vue') },
          { path: "upload", component: () => import('@/components/pluginlist/upload') },
          { path: "buffering", component: () => import('@/components/pluginlist/buffer') },
          { path: 'carousel', component: () => import('@/components/pluginlist/carousel') },
          { path: "paging", component: () => import('@/components/pluginlist/page') },
          { path: 'tree', component: () => import('@/components/pluginlist/tree') },
          { path: 'imgShow', component: () => import('@/components/pluginlist/magn') },
          { path: "inputAuto", component: () => import('@/components/pluginlist/autoComplete') },
          { path: "select", component: () => import('@/components/pluginlist/select') },
          { path: "dateInput", component: () => import('@/components/pluginlist/calendar') },
          { path: "foldCollapse", component: () => import('@/components/pluginlist/Collapse') },
          { path: "progress", component: () => import('@/components/pluginlist/progress') },
          { path: "switcher", component: () => import('@/components/pluginlist/switcher') },
          { path: "address", component: () => import('@/components/pluginlist/address') },
          { path: "lazyLoad", component: () => import('@/components/pluginlist/lazyload') },
          { path: 'swipe', component: () => import('@/addTips/direct/swipe.vue') },
          { path: 'tap', component: () => import('@/addTips/direct/tap.vue') },
          { path: 'location', component: () => import('@/addTips/location') },
          { path: 'step', component: () => import('@/addTips/step/step.vue') },
          { path: 'location', component: () => import('@/addTips/location/index.vue') },
          { path: 'scrollView', component: () => import('@/addTips/scrollView/index.vue') },
          { path: 'imgToString', component: () => import('@/addTips/util/imgToString.vue') },
          { path: 'progressBar', component: () => import('@/addTips/buffer/buffer.vue') },
          { path: 'scale', component: () => import('@/addTips/buffer/buffer5.vue') },
          { path: 'rotate', component: () => import('@/addTips/buffer/buffer6.vue') },
          { path: 'windows', component: () => import('@/addTips/buffer/windows.vue') },
          { path: 'dateFormat', component: () => import('@/addTips/util/filterDate.vue') }
        ]
      },
      { path: 'pluginDown', meta: { index: 2 }, component: () => import('@/components/plugindown') }
    ]
  },
  // { path: "*",  redirect: '/vue/home',component: () => import('@/components/test') }
];
let max = 0;
let getDeep = (route) => {
  let count = 1;
  let tem = [];
  if (route.children) {
    tem = route.children.map(i => {
      return getDeep(i);
    })
  }
  if (tem.length) {
    return count + (Math.max(...tem));
  }
  return count;
}
let getMax = (r) => {
  let tem = r.map(i => {
    return getDeep(i);
  })
  return Math.max(...tem);
}
max = getMax(routes) * 2;
let getProvide = function (item, ind, send, count) {
  if (!item.meta) {
    item.meta = {};
  }
  item.meta.index = send + Math.pow(10, count) * (ind + 1);
  if (item.children) {
    item.children.forEach((j, ind) => {
      getProvide(j, ind, item.meta.index, count - 2);
    });
  }
}
let provide = (routes) => {
  routes.forEach((i, index) => {
    if (!i.meta) {
      i.meta = {};
    }
    i.meta.index = index * Math.pow(10, max);
    if (i.children) {
      i.children.forEach((j, ind) => {
        getProvide(j, ind, i.meta.index, max - 2);
      });
    }
  })
}
provide(routes)
export default new Router({
  mode: 'history',
  routes: routes
})
