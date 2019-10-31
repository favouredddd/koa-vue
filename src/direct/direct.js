class Swipe {
  constructor(el, event, vnode) {
    const me = el
    me.record = {
      time: [],
      site: [],
      old: {}
    }
    me.$model = vnode.context
    me.event = event
    this.init(el)
  }
  init(el) {
    this.addTouchEvent(el)
  }
  addTouchEvent(el) {
    const me = el
    let touchEvent = ['touchstart', 'touchmove', 'touchend'].map(i => {
      me.addEventListener(i, this[i], false)
      return [i, this[i]]
    })
    el.$touchEvent = touchEvent
  }
  touchstart(e) {
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
  touchmove(e) {
    let evtObj = this
    let nt = Date.now()
    let tch = e.touches[0]
    let mv = evtObj.extParams['swipe']
    // 50ms记录一次
    if (nt - mv.oldTime[0] > 50) {
      mv.speedLoc[0] = { x: mv.speedLoc[1].x, y: mv.speedLoc[1].y }
      mv.speedLoc[1] = { x: tch.pageX, y: tch.pageY }
      mv.oldTime[0] = mv.oldTime[1]
      mv.oldTime[1] = nt
    }
    mv.oldLoc = { x: tch.pageX, y: tch.pageY }
  }
  touchend(e) {
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
      evtObj.event[sname] && evtObj.event[sname].call(evtObj.$model)
    }
  }
}
class Tap {
  constructor(el, event, vnode) {
    const me = this
    el.event = event
    me.$model = vnode.context
    me.addEvent(el)
  }
  addEvent(el) {
    let eventName = ['touchstart', 'touchmove', 'touchend']
    let touchEvent = eventName.map(i => {
      el.addEventListener(i, this[i], false)
      return [i, this[i]]
    });
    el.$tapEvent = touchEvent
  }
  touchstart(e) {
    let tch = e.touches[0]
    let evtObj = this
    evtObj.extParams = {
      pos: { sx: tch.pageX, sy: tch.pageY, t: Date.now(), move: false }
    }
  }
  touchmove(e) {
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
  touchend(e) {
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
const tapDirect = {
  bind(el, binding, vnode) {
    el.$tap = new Tap(el, binding.value, vnode)
  },
  unbind(el, binding) {
    el.$tapEvent.forEach(function (event) {
      el.removeEventListener(event[0], event[1])
    }, this)
    el.$tap = null
  }
}
const swipeDirect = {
  bind(el, binding, vnode) {
    el.$swipe = new Swipe(el, binding.value, vnode)
  },
  unbind(el, binding) {
    el.$touchEvent.forEach(function (event) {
      el.removeEventListener(event[0], event[1])
    }, this)
    el.$swipe = null
  }
}
import hljs from 'highlight.js';
import 'highlight.js/styles/ocean.css'
const helight = {
  bind(el, binding, vnode) {
    const fn = () => {
      vnode.context.$nextTick(() => {
        const handler = () => {
         new window.$$worker(el,binding.value);
        }
        if (window.$$worker) {
          handler();
        } else {
          fn();
        }
      })
    }
    fn();
  },
  unbind(el) {

  }
}
const li = {
  bind(el, binding, vnode) {
    if (el.helight)
      return;
    vnode.context.$nextTick(() => {
      el.helight = true;
      hljs.highlightBlock(el)
    })
  },
  unbind(el) {
  }
};
export default {
  tap: tapDirect,
  swipe: swipeDirect,
  helight: helight
}
