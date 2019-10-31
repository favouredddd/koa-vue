<template>
  <div class="content">
    <div class="header">step</div>
    <div class="introduce">{{describe}}</div>
    <div class="eventTitle">效果区域</div>
    <div class="mask"
         ref="slider">
      <div class="wrap"
           ref="wrap">
        <div class="item" ref="items" v-for="(i,index) in items" :key="index"></div>
      </div>
      <div class="filter"></div>
      <div class="dots">
        <div v-for="(i,index) in items"
             class="dot"
             :key="index"
             :class="{'active':i.active}"></div>
      </div>
    </div>
    <div class="code">
      <div>
        <div class="title">html代码</div>
        <code v-helight="code" class="hljs javascript">{{code}}</code>
        <template v-if="jsCode">
           <div class="jsTitle">js代码</div>
        <code v-helight="jsCode" class="hljs javascript">{{jsCode}}</code>
        </template>
        <template v-if="originCode">
               <div class="jsTitle"
             style="position:relative">源码
          <div class="copy"
               @click="copy">一键复制</div>
        </div>
        <textarea v-model="originCode"
                  class="codeArea"
                  autoHeight="true"
                  ref="textArea">
           </textarea>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import BetterScroll from 'better-scroll'
export default {
  data () {
    return {
      currentPageIndex: 0,
      scrollEnd: true,
      items: [
        { active: true },
        { active: false },
        { active: false }
      ],
      describe: `这是一款简单的手势引导组件`,
      code: `
      <step 
          :slotList="list"
          :end="handler">
       <template 
           v-for="(i,index) in list">
       </template>
      </step>`,
      jsCode: ``,
      originCode: ``
    }
  },
  computed: {
    getPadding () {
      return window.innerHeight > 500 ? ' padding: 1.1rem 1.5rem;' : ' padding: .5rem 1.5rem'
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.textArea&&(this.$refs.textArea.style.height = this.$refs.textArea.scrollHeight + 'px')
      this.$refs.wrap.style.width = 100 * this.items.length + '%';
      this.$refs.items.forEach(i=>{
        i.style.width="16rem"
      })
      this.initScroll()
    })
  },
  methods: {
    copy () {
      document.execCommand('copy', false, this.$refs.textArea.select());
    },
    goStart () {
      this.$emit('goNext')
    },
    initScroll () {
      this.scroll = new BetterScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        click: true,
        snap: {
          loop: this.loop,
          threshold: 0.1
        }
      })
      // 获取当前页
      this.getCurrentPageIndex()
    },
    getCurrentPageIndex () {
      this.scroll.on('scrollEnd', () => {
        let index = this.scroll.getCurrentPage().pageX
        this.currentPageIndex = index
        this.items.forEach(i => {
          i.active = false
        })
        this.items[index].active = true
      })
    },
  },
    beforeDestroy(){
      this.scroll.destroy();
    }
}
</script>
<style lang="less">
.mask {
  position: relative;
      width:16rem;
      margin:0 auto;
  .height{
    height: 10rem;
  }
  .height;
  overflow-x: hidden;
  z-index: 1000;
  background-image: linear-gradient(90deg, #0af, #0085ff);
  .wrap {
    height: 100%;
    width:16rem;
    .item {
      width: 100%;
      .height;
      float: left;
      box-sizing: border-box;
     background-image: linear-gradient(90deg, #0af, #0085ff);
      background-size: 100% 100%;
    }
  }
  .filter {
    filter: blur(0.2rem);
    position: absolute;
    width: 100%;
    height: 1rem;
    bottom: 0;
    background: rgba(256, 256, 256, 0.2);
    z-index: 999;
  }
  .dots {
    position: absolute;
    bottom: 0.5rem;
    width: 3rem;
    height: 0.4rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-around;
    .dot {
      display: inline-block;
      width: 0.4rem;
      height: 0.4rem;
      background-color: #fff;
      border-radius: 50%;
      transition: all 0.1s;
    }
    .active {
      width: 1rem;
      border-radius: 0.25rem;
    }
  }
}
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
    background-color: #ff9632;
    border: 1px solid #cecece;
    font-weight: 400;
    color: #fff;
  }
}
</style>
