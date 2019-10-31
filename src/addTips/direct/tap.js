class Tap {
  constructor (el, event, vnode) {
    const me = this
    el.event = event
    me.$model = vnode.context
    me.addEvent(el)
  }
  addEvent (el) {
    let eventName = ['touchstart', 'touchmove', 'touchend']
    let touchEvent=eventName.map(i => {
      el.addEventListener(i, this[i], false)
      return [i,this[i]]
    });
    el.$tapEvent = touchEvent
  }
  touchstart (e) {
    let tch = e.touches[0]
    let evtObj = this
    evtObj.extParams = {
      pos: { sx: tch.pageX, sy: tch.pageY, t: Date.now(), move: false }
    }
  }
  touchmove (e) {
    let evtObj = this
    let pos = evtObj.extParams.pos
    let tch = e.touches[0]
    let dx = tch.pageX - pos.sx
    let dy = tch.pageY - pos.sy
    // 判断是否移动
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      pos.move = true
    }
  }
  touchend (e) {
    let evtObj = this
    let pos = evtObj.extParams.pos
    let dt = Date.now() - pos.t
    // 点下时间不超过200ms
    if (pos.move === true || dt > 200) {
      return
    }
    evtObj.event.call(evtObj.$model)
    evtObj.extParams = null
  }
}
const tapDirect={
  bind (el, binding, vnode) {
    el.$tap = new Tap(el, binding.value, vnode)
  },
  unbind (el, binding) {
    console.log(el.$tap)
    el.$tapEvent.forEach(function (event) {
      el.removeEventListener(event[0], event[1])
    }, this)
    el.$tap = null
  }
}
export default tapDirect