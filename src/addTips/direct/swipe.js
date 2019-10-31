class Swipe {
  constructor (dom, event, vnode) {
    const me = dom
    me.record = {
      time: [],
      site: [],
      old: {}
    }
    me.$model = vnode.context
    me.event = event
    this.init(dom)
  }
  init (dom) {
    this.addTouchEvent(dom)
  }
  addTouchEvent (dom) {
    const me = dom
    let touchEvent = ['touchstart', 'touchmove', 'touchend'].map(i => {
      me.addEventListener(i, this[i], false)
      return [i, this[i]]
    })
    dom.$touchEvent = touchEvent
  }
  touchstart (e) {
    let evtObj = this
    let tch = e.touches[0]
    let t = Date.now()
    evtObj.extParams = {
      swipe: {
        oldTime: [t, t],
        speedLoc: [
          { x: tch.pageX, y: tch.pageY },
          { x: tch.pageX, y: tch.pageY }
        ],
        oldLoc: { x: tch.pageX, y: tch.pageY }
      }
    }
  }
  touchmove (e) {
    let evtObj = this
    let nt = Date.now()
    let tch = e.touches[0]
    let mv = evtObj.extParams['swipe']
    // 50ms记录一次
    if (nt - mv.oldTime > 50) {
      mv.speedLoc[0] = { x: mv.speedLoc[1].x, y: mv.speedLoc[1].y }
      mv.speedLoc[1] = { x: tch.pageX, y: tch.pageY }
      mv.oldTime[0] = mv.oldTime[1]
      mv.oldTime[1] = nt
    }
    mv.oldLoc = { x: tch.pageX, y: tch.pageY }
  }
  touchend (e) {
    let evtObj = this
    let mv = evtObj.extParams['swipe']
    let nt = Date.now()

    // 取值序号 0 或 1，默认1，如果释放时间与上次事件太短，则取0
    let ind = nt - mv.oldTime[1] < 30 ? 0 : 1
    let dx = mv.oldLoc.x - mv.speedLoc[ind].x
    let dy = mv.oldLoc.y - mv.speedLoc[ind].y
    let s = Math.sqrt(dx * dx + dy * dy)
    let dt = nt - mv.oldTime[ind]
    // 超过300ms 不执行事件
    if (dt > 300 || s < 10) {
      return
    }
    let v0 = s / dt
    // 速度>0.1,触发swipe事件
    if (v0 > 0.05) {
      let sname = ''
      if (dx < 0 && Math.abs(dy / dx) < 1) {
        e.v0 = v0 // 添加附加参数到e
        sname = 'left'
      }
      if (dx > 0 && Math.abs(dy / dx) < 1) {
        e.v0 = v0
        sname = 'right'
      }
      if (dy > 0 && Math.abs(dx / dy) < 1) {
        e.v0 = v0
        sname = 'down'
      }
      if (dy < 0 && Math.abs(dx / dy) < 1) {
        e.v0 = v0
        sname = 'up'
      }
      evtObj.event[sname].call(evtObj.$model)
    }
  }
}
export default {
  bind (el, binding, vnode) {
    el.$swipe = new Swipe(el, binding.value, vnode)
  },
  unbind (el, binding) {
    el.$touchEvent.forEach(function (event) {
      el.removeEventListener(event[0], event[1])
    }, this)
    el.$swipe = null
  }
}
