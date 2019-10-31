import buffer from './buffer'
let loading = {}
loading.installed = false
loading.install = function (Vue) {
  if (loading.installed) {
    return
  }
  Vue.prototype.$loading = {}
  Vue.prototype.$loading.show = function () {
    if (document.querySelector('.el-loading-mask')) {
      return
    }
    let LoadingTip = Vue.extend(buffer)
    let tpl = new LoadingTip().$mount().$el
    document.body.appendChild(tpl)
    const fn = function (e) {
      e.stopPropagation()
      e.preventDefault()
    }
    document
      .querySelector('.el-loading-mask')
      .addEventListener('touchmove', fn, false)
    loading.install = true
    Vue.prototype.$loading.fn = fn
  }
  Vue.prototype.$loading.hide = () => {
    let tpl = document.querySelector('.el-loading-mask')
    if (!tpl) {
      return
    }
    document.body.removeChild(tpl)
    document.removeEventListener('touchmove', Vue.prototype.$loading.fn)
  }
}
export default loading
