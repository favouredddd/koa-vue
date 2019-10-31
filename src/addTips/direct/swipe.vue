<template>
  <div class="content">
    <div class="header">swipe指令</div>
    <div class="introduce">{{describe}}</div>
    <div class="eventTitle">手势区域</div>
    <div class="swipeWrap"
         v-swipe="event">
    </div>
    <div class="code">
      <div>
        <div class="title">html代码</div>
        <code v-helight="code" class="hljs javascript">{{code}}</code>
        <div class="jsTitle">js代码</div>
        <code v-helight="jsCode" class="hljs javascript">{{jsCode}}</code>
        <div class="jsTitle"
             style="position:relative">源码
          <div class="copy"
               @click="copy">一键复制</div>
        </div>
        <code v-html="originCode"
              class="codeArea"
              autoHeight="true"
              ref="textArea"
             >

        </code>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      describe: `这是一款简单手势指令,可以上下左右滑动,并添加相对应的事件`,
      event: {
        left: this.swipeEvent("left"),
        right: this.swipeEvent("right"),
        up: this.swipeEvent("up"),
        down: this.swipeEvent("down")
      },
      code: `
      <div class="swipeWrap"
          v-swipe="event">
      </div>`,
      jsCode: `
      event:
      {
        left: this.swipeLeft,
        right: this.swipeRight,
        up: this.swipeUp,
        down: this.swipeDown
      }`,
      originCode: `class Swipe {
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
    if (nt - mv.oldTime[0] > 50) {
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
`
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.textArea.style.height = this.$refs.textArea.scrollHeight + 'px'
    })
  },
  methods: {
    copy () {
      document.execCommand('copy', false, this.$refs.textArea.select());
    },
    swipeEvent (str) {
      return () => {
        alert(str)
      }
    }
  }
}
</script>
<style lang="less">
.boxShadow {
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
.content {
  padding: 0.5rem;
  .header {
    font-size: 1rem;
    color: #d08770;
    text-indent: 0.5rem;
  }
  > div {
    margin-bottom: 0.4rem;
    border-radius: 5px;
  }
  .copy {
    float: right;
    margin-right: 1rem;
    text-indent: 0;
    background-color: #0085ff;
    padding: 0.2rem 0.3rem;
    font-size: 12px;
    color: #fff;
    border-radius: 5px;
    .boxShadow;
  }
  .eventTitle {
    font-size: 0.6rem;
  }
  .swipeWrap {
    height: 5rem;
    background-image: linear-gradient(90deg, #0af, #0085ff);
  }
  .codeArea {
    width: 100%;
    outline: none;
    display: block;
    .boxShadow;
    background-color: #2b303b;
    border: 1px solid #cecece;
    font-weight: 400;
    color: #fff;
  }
}
</style>