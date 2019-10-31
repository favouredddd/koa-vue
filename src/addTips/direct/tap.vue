<template>
  <div class="content">
    <div class="header">tap指令</div>
    <div class="introduce">{{describe}}</div>
    <div class="eventTitle">tap事件区域</div>
    <div class="swipeWrap"
         v-tap="event">
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
        <code 
              v-html="originCode"
              class="codeArea"
              autoHeight="true"
              ref="textArea">
        </code>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      describe: `这是一款简单tap指令,使用在移动端,相对于click事件,由于事件穿透,在点击的200ms之内触发`,
      event: this.tapEvent("tap"),
      code: `
      <div class="swipeWrap"
          v-tap="event">
      </div>`,
      jsCode: `
      event:this.tapEvent`,
      originCode: `class Tap {
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
    tapEvent (str) {
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