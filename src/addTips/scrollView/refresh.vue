<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div class="content" ref="content">
        <slot name="content"></slot>
      </div>
      <div class="pullup-wrapper bottom" style="position:static" v-if="pullUpLoad">
        <div class="before-trigger" v-if="!isPullUpLoad">
          <!-- <span class="getMore">{{pullUpTxt}}</span> -->
        </div>
        <div class="after-trigger" v-else>
          <div class="loading" >
            <slot name="pullup"></slot>
          </div>
        </div>
      </div>
      <div
        ref="pulldown"
        class="pulldown-wrapper top"
        :style="pullDownStyle"
        v-if="pullDownRefresh"
      >
        <div class="before-trigger" v-if="beforePullDown"></div>
        <div class="after-trigger" v-else>
          <div v-if="pulling" class="loading">
            <slot name="pulldown"></slot>
          </div>
          <!-- <div v-else style="">
            <span>{{refreshTxt}}</span>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

const DIRECTION_H = 'horizontal'
const DIRECTION_V = 'vertical'

export default {
  name: 'vue-better-scroll',
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    listenBeforeScroll: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: DIRECTION_V
    },
    scrollbar: {
      type: null,
      default: false
    },
    pullDownRefresh: {
      type: null,
      default: false
    },
    pullUpLoad: {
      type: null,
      default: false
    },
    startY: {
      type: Number,
      default: 0
    },
    refreshDelay: {
      type: Number,
      default: 20
    },
    freeScroll: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: '刷新成功'
    }
  },
  data () {
    return {
      beforePullDown: true,
      isRebounding: false,
      isPullingDown: false,
      pulling: false,
      isPullUpLoad: false,
      pullUpDirty: true, // 此变量用来检查是否加载到了最后一页
      pullDownStyle: '',
      bubbleY: 0,
      reboundPullDownTimer: null,
      afterPullDownTimer: null
    }
  },
  computed: {
    pullUpTxt () {
      const moreTxt =
        (this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.more) ||
        '加载更多'
      const noMoreTxt =
        (this.pullUpLoad &&
          this.pullUpLoad.txt &&
          this.pullUpLoad.txt.noMore) ||
        '没有更多数据了'
      return this.pullUpDirty ? moreTxt : noMoreTxt
    },
    refreshTxt () {
      return this.message
    }
  },
  created () {
    this.pullDownInitTop = -50
  },
  mounted () {
    this.$nextTick(() => {
      this.initScroll()
    })
  },
  methods: {
    initScroll () {
      if (!this.$refs.wrapper) {
        return
      }
      const options = {
        probeType: this.probeType,
        click: this.click,
        scrollY: this.freeScroll || this.direction === DIRECTION_V,
        scrollX: this.freeScroll || this.direction === DIRECTION_H,
        scrollbar: this.scrollbar,
        pullDownRefresh: this.pullDownRefresh,
        pullUpLoad: this.pullUpLoad,
        startY: this.startY,
        freeScroll: this.freeScroll
      }
      this.scroll = new BScroll(this.$refs.wrapper, options)
      if (this.listenScroll) {
        this.scroll.on('scroll', pos => {
          this.$emit('scroll', pos)
        })
      }

      if (this.listenBeforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScrollStart')
        })
      }

      if (this.pullDownRefresh) {
        this._initPullDownRefresh()
      }

      if (this.pullUpLoad) {
        this._initPullUpLoad()
      }
    },
    disable () {
      this.scroll && this.scroll.disable()
    },
    enable () {
      this.scroll && this.scroll.enable()
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    scrollTo () {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement () {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    },
    destroy () {
      this.scroll && this.scroll.destroy()
    },
    // 加载数据后更新
    forceUpdate (dirty) {
      this.$nextTick(() => {
        this.pullUpDirty = dirty
        if (this.pullDownRefresh && this.isPullingDown) {
          this.pulling = false
          this._reboundPullDown().then(() => {
            this._afterPullDown()
          })
        } else if (this.pullUpLoad) {
          this.isPullUpLoad = false
          this.scroll.finishPullUp()
          this.refresh()
        } else {
          this.refresh()
        }
      })
    },
    _initPullDownRefresh () {
      this.scroll.on('pullingDown', () => {
        this.beforePullDown = false
        this.isPullingDown = true
        this.pulling = true
        this.$emit('pullingDown')
      })

      this.scroll.on('scroll', pos => {
        if (this.beforePullDown) {
          this.bubbleY = Math.max(0, pos.y + this.pullDownInitTop)
          this.pullDownStyle = `top:${Math.min(
            pos.y + this.pullDownInitTop,
            10
          )}px`
        } else {
          this.bubbleY = 0
        }

        if (this.isRebounding) {
          this.pullDownStyle = `top:${10 -
            (this.pullDownRefresh.stop - pos.y)}px`
        }
      })
    },
    _initPullUpLoad () {
      this.scroll.on('pullingUp', e => {
        if (this.pullUpDirty) {
          this.isPullUpLoad = true
          this.$emit('pullingUp')
        }
      })
    },
    _reboundPullDown () {
      const { stopTime = 600 } = this.pullDownRefresh
      return new Promise(resolve => {
        this.reboundPullDownTimer = setTimeout(() => {
          this.isRebounding = true
          this.isPullingDown = false
          this.scroll.finishPullUp()
          this.scroll.finishPullDown()
          resolve()
        }, stopTime)
      })
    },
    _afterPullDown () {
      this.afterPullDownTimer = setTimeout(() => {
        this.pullDownStyle = `top:${this.pullDownInitTop}px`
        this.beforePullDown = true
        this.isRebounding = false
        this.refresh()
      }, this.scroll.options.bounceTime)
    }
  },
  destroyed () {
    this.scroll && this.scroll.destroy()
    this.scroll = null
    this.reboundPullDownTimer && clearTimeout(this.reboundPullDownTimer)
    this.reboundPullDownTimer = null
    this.afterPullDownTimer && clearTimeout(this.afterPullDownTimer)
    this.afterPullDownTimer = null
  },
  components: {}
}
</script>

<style lang="scss">
.scroll-wrapper {
  height: 100%;
  overflow: hidden;
  position: relative;
  .bscroll-indicator {
    background-color: rgba(0, 0, 0, 0.2) !important;
    width: 5px !important;
  }
  .scroll-content {
    @mixin center {
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all;
    }
    .pulldown-wrapper {
      position: absolute;
      height: 20px;
      width: 100%;
      width: 100%;
      .after-trigger {
        @include center;
      }
    }
    .top {
      top: -20px !important;
    }
    .bottom {
      bottom: 0px !important;
    }
    .pullup-wrapper {
      position: absolute;
      width: 100%;
      width: 100%;
      height: 20px;
      @include center;
    }
    .loading {
      width: 20px;
      height: 20px;
    }
    .getMore {
      font-size: 14px;
      color: #eee;
    }
  }
}
</style>
