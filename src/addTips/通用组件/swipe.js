let swipe = function (dom, event) {
  let me = this
  me.dom = null
  me.sava = {
    time: [],
    site: [],
    old: {}
  }
  me.event = {
    left: function () { },
    up: function () { },
    down: function () { },
    right: function () { }
  }
  me.init(dom, event)
}
swipe.prototype = {
  constructor: swipe,
  init: function (dom, event) {
    let me = this
    me.addFunc(dom)
    if (event) {
      Object.getOwnPropertyNames(event).forEach(i => {
        me.event[i] = event[i]
      })
    }
  },
  addFunc: function (dom) {
    let me = this
    me.dom = dom
    me.dom.addEventListener('touchstart', function (e) {
      me.start(e)
    }, false)
    me.dom.addEventListener('touchmove', function (e) {
      me.move(e)
    }, false)
    me.dom.addEventListener('touchend', function (e) {
      me.end(e)
    }, false)
  },
  start: function (e) {
    let me = this
    let t = new Date()
    me.sava.time.push(t)
    me.sava.time.push(t)
    me.sava.site.push({
      x: e.touches[0].pageX,
      y: e.touches[0].pageY
    })
    me.sava.site.push({
      x: e.touches[0].pageX,
      y: e.touches[0].pageY
    })
    me.sava.odl = {
      x: e.touches[0].pageX,
      y: e.touches[0].pageY
    }
  },
  move: function (e) {
    let me = this
    let t = new Date()
    if (t - me.sava.time[0] > 50) {
      me.sava.time[0] = me.sava.time[1]
      me.sava.time[1] = t
      me.sava.site[0] = me.sava.site[1]
      me.sava.site[1] = {
        x: e.touches[0].pageX,
        y: e.touches[0].pageY
      }
    }
    me.sava.old = {
      x: e.touches[0].pageX,
      y: e.touches[0].pageY
    }
  },
  end: function (e) {
    let me = this
    let index = 0
    if (new Date() > me.sava.time[1] + 30) {
      index = 1
    }
    let dx = me.sava.old.x - me.sava.site[index].x
    let dy = me.sava.old.y - me.sava.site[index].y
    let s = dx * dx + dy * dy
    if (s < 100 || new Date() - me.sava.time[index] > 300) { return }
    let dr = Math.abs(dx / dy)

    if (Math.sqrt(s) / (new Date() - me.sava.time[index]) > 0.05) {
      if (dx < 0 && dr > 1) {
        me.event.left && me.event.left()
      }
      if (dx > 0 && dr > 1) {
        me.event.right && me.event.right()
      }
      if (dy < 0 && dr < 1) {
        me.event.up && me.event.up()
      }
      if (dy > 0 && dr < 1) {
        me.event.down && me.event.down()
      }
    }
  }
}
export default swipe
