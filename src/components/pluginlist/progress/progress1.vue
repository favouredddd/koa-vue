<template>
  <div class="el-progress-wrap">
    <div class="progress-inner" ref="wrap">
      <div class="track">
        <div class="left" :style="{'width':width+'%','background-color':'#fff'}"></div>
        <div class="right" :style="getWidth"></div>
      </div>
    </div>
    <div class="progress-inner">
      <div class="btn" :style="getPosition" ref="btn"></div>
    </div>
    <div class="event progress-inner" @touchstart="start" @touchmove="moveT" @touchend="end" @mousedown="start" @mousemove="move" @mouseup="end" ref="event">
    </div>
  </div>
</template>
<script>
export default {
  name: "progress1",
  data() {
    return { width: 50, x: 0, all: 0, startMove: false, offset: 0 };
  },
  methods: {
    start(e) {
      let me = this;
      if (e.offsetX > me.x + 10 || e.offsetX < me.x - 10)
        return;
      me.startMove = true;
    },
    move(e) {
      let me = this;
      if (me.startMove) {
        me.x = e.offsetX;
        if (me.x <= 5) {
          me.x = 5;
          me.width = me.x / me.all * 100;
          return;
        }
        if (me.x >= me.all) {
          me.x = me.all - 10;
          me.width = me.x / me.all * 100;
          return;
        }
        me.width = me.x / me.all * 100;
      }
    },
    end() {
      let me = this;
      if (!me.startMove)
        return;
      me.startMove = false;
    },
    getTop(el) {
      return el.offsetParent ?
        el.offsetLeft + this.getTop(el.offsetParent) :
        el.offsetLeft
    },
    moveT(e) {
      let me = this;
      if (me.startMove) {
        me.x = e.touches[0].pageX - me.offset;
        if (me.x <= 5) {
          me.x = 5;
          me.width = me.x / me.all * 100;
          return;
        }
        if (me.x >= me.all) {
          me.x = me.all - 10;
          me.width = me.x / me.all * 100;
          return;
        }
        me.width = me.x / me.all * 100;
      }
    }
  },
  computed: {
    getWidth() {
      return { "width": 100 - this.width + '%', 'background-color': '#000' };
    },
    getPosition() {
      let me = this;
      let x = me.x - me.all / 2;
      return { left: x + 'px' }
    }
  },
  mounted() {
    let me = this;
    me.all = parseInt(window.getComputedStyle(me.$refs.wrap).width);
    me.x = me.all / 2;
    me.offset = me.getTop(me.$refs.event);
  }
}

</script>
<style scoped lang="less">
.el-progress-wrap {
  width: 300px;
  height: 50px;
  margin: 0 auto;
  position: relative;
  background-color: rgba(96, 96, 96, 0.5);

  .btn {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #0f0;
  }

  .progress-inner {
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;

    .track {
      width: 100%;
      height: 2px;

      >div {
        float: left;
        height: 2px;
      }
    }
  }
}

</style>
