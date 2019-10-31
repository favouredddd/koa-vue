<template>
  <div class="contentWrap">
    <div class="header">scrollView</div>
    <div class="introduce">{{describe}}</div>
    <div class="eventTitle">效果区域</div>
    <div class="listWrap">
      <scrollView class="wrapper"
                  ref="scroll"
                  :scrollbar="scrollbarObj"
                  :pullDownRefresh="pullDownRefreshObj"
                  :pullUpLoad="pullUpLoadObj"
                  :startY="parseInt(startY)"
                  @pullingDown="onPullingDown"
                  @pullingUp="onPullingUp">
        <template slot="content">
          <ul style="padding:0 .5rem">
            <li class="mg-item"
                v-for="(i,index) in list"
                :key='index'>
              当前的序号是:{{i.num}}
            </li>
          </ul>
        </template>
        <div slot="pullup"
             class="buffer">
          <img style="width:20px;height:20px"
               class="scroll-loading"
               src="../../assets/loading.gif" />
        </div>
        <div slot="pulldown"
             class="buffer">
          <img style="width:20px;height:20px"
               class="scroll-loading"
               src="../../assets/loading.gif" />
        </div>
      </scrollView>
    </div>
    <div class="code">
      <div>
        <div class="title">html代码</div>
        <div class="code">
          <code v-helight="code" key="1" class="hljs javascript">{{code}}</code>
        </div>
          <div class="jsTitle">js代码</div>
          <div class="code">
          <code v-helight="jsCode" key="2" class="hljs javascript">{{jsCode}}</code>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import scrollView from './refresh'
export default {
  data () {
    return {
      code: `<scrollView class="wrapper"
                  ref="scroll"
                  :scrollbar="scrollbarObj"
                  :pullDownRefresh="pullDownRefreshObj"
                  :pullUpLoad="pullUpLoadObj"
                  :startY="parseInt(startY)"
                  @pullingDown="onPullingDown"
                  @pullingUp="onPullingUp">
        <template slot="content">
          <ul>
            <li class="mg-item"
                v-for="(i,index) in list"
                :key='index'>
                当前的序号是:{{i.num}}
            </li>
          </ul>
        </template>
         <div slot="pullup"
               class="buffer">
            <img style="width:20px;height:20px"
                 class="scroll-loading"
                 src="../../assets/loading.gif" />
          </div>
          <div slot="pulldown"
               class="buffer">
            <img style="width:20px;height:20px"
                 class="scroll-loading"
                 src="../../assets/loading.gif" />
          </div>
      </scrollView>`,
      jsCode: `
      data:{
      scrollbarObj: {
        fade: true
      },
      pullDownRefreshObj: {
        threshold: 90,
        stop: 20
      },
      pullUpLoadObj: {
        threshold: 90,
        txt: {
          more: '加载更多',
          noMore: '没有更多数据了'
        }
      },
      pullDownRefresh: {},
      startY: 0,
      scrollToX: 0,
      scrollToY: 0,
      scrollToTime: 700,},
      methods:{
         async onPullingUp () {
      this.list = await this.getInformation(true)
      this.$refs.scroll.forceUpdate(true)
    },
    async onPullingDown () {
      this.list = await this.getInformation(true)
      this.$refs.scroll.forceUpdate(true)
    }
      }`,
      describe: '这是上拉和下拉刷新组件,适用于列表刷新',
      scrollbarObj: {
        fade: true
      },
      pullDownRefreshObj: {
        threshold: 100,
        stop: 20
      },
      pullUpLoadObj: {
        threshold: 100,
        txt: {
          more: '加载更多',
          noMore: '没有更多数据了'
        }
      },
      pullDownRefresh: {},
      startY: 0,
      scrollToX: 0,
      scrollToY: 0,
      scrollToTime: 700,
      list: []
    }
  },
  components: {
    scrollView
  },
  created () {
    for (let i = 0; i < 20; i += 1) {
      this.list.push({ num: i, describe: `序号${i}` });
    }
  },
  methods: {
    async onPullingUp () {
      this.list = await this.getInformation(true)
      this.$refs.scroll.forceUpdate(true)
    },
    async onPullingDown () {
      this.list = await this.getInformation(true)
      this.$refs.scroll.forceUpdate(true)
    },
    async getInformation () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([...this.list, ...this.list]);
        }, 10000)
      });
    }
  }
}
</script>
<style lang="less" scope>
.boxShadow {
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
.contentWrap {
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
  .listWrap {
    height: 10rem;
    font-size: 14px;
    .boxShadow;
    border-radius: 5px;
    border: 1px solid #eee;
    // padding-left: 0.5rem;
    .mg-item {
      position: relative;
      height: 2rem;
      line-height: 2rem;
      color: #333;
      font-weight: bold;
      border-bottom: 1px solid #eee;
      &:after {
        position: absolute;
      }
    }
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

