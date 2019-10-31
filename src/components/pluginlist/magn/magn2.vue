<template>
  <div class="magnWrap">
    <div class="leftWrap">
      <div class="img" :style="{'background-image':'url('+src+')'}"></div>
      <div class="mask" v-show="show"></div>
      <div class="magn" :style="getStyle" v-show="show"></div>
      <div class="event" @mousemove="move" @mouseenter="enter" @mouseleave="leave"></div>
    </div>
    <div class="rightWrap" :style="getImage" :class="{'noTransition':getClass}">
    </div>
    <div class="clear"></div>
    <ul class="ul">
      <li class="li" v-for="(i,index) in imgs" @click="getSrc(i)">
        <img :src="i" class="img"/>
   	   </li>
    </ul>
  </div>
</template>
<script>
let imgs = [require("../../../assets/a1.png"), require("../../../assets/a2.png"), require("../../../assets/a3.png"), require("../../../assets/a4.png")]
export default {
  name: "magn2",
  data() {
    return {
      imgs: imgs,
      src: imgs[0],
      show: false,
      left: 0,
      top: 0,
      width: 300,
      height: 300,
      noTransition: false,
      time: 16,
      recorld: 0
    }
  },
  computed: {
    getClass() {
      let me = this;
      if (me.noTransition) {
        return true;
      }
      return false;
    },
    getStyle() {
      let me = this;
      return {
        'left': me.left + 'px',
        'top': me.top + 'px',
        'background-image': 'url(' + me.src + ')',
        'background-position': -1 * me.left + 'px ' + -1 * me.top + 'px'
      }
    },
    getImage() {
      let me = this;
      let left;
      let top;
      let scale = 1;
      let opacity = 1;
      if (me.show) {
        left = "320px";
        top = "0px";
        scale = 1;
        opacity = 1;
      } else {
        opacity: 0;
        scale = 0;
        left = 0 + 'px';
        top = 0 + 'px';
      }
      return {
        opacity: opacity,
        transform: `scale(${scale}) translateZ(0)`,
        top: top,
        left: left,
        'background-image': 'url(' + me.src + ')',
        'background-position': -1 * me.left * 2 + 'px ' + -1 * me.top * 2 + 'px'
      }
    }
  },
  methods: {
    getSrc(i) {
      let me = this;
      me.src = i;
    },
    enter(e) {
      let me = this;
      me.show = true;
      me.noTransition = true;
    },
    leave(e) {
      let me = this;
      me.show = false;
      me.noTransition = false;
    },
    move(e) {
      let me = this;
      this.$nextTick(() => {
        // let flag = (!me.recorld) || (Date.now() - me.recorld > me.time);
        // if (flag) {
        me.recorld = Date.now();
        let x = e.offsetX;
        let y = e.offsetY;
        me.getX(x);
        me.getY(y);
        me.show = true;
        // }else{
        return;
        // }
      });
    },
    getX(x) {
      let me = this;
      let w = me.width;
      let quaterX = w / 4;
      if (x < quaterX) {
        me.left = 0;
        return;
      }
      if (x > w - quaterX) {
        me.left = w - 2 * quaterX;
        return;
      }
      me.left = x - quaterX;
    },
    getY(y) {
      let me = this;
      let h = me.height;
      let quaterY = h / 4;
      if (y < quaterY) {
        me.top = 0;
        return;
      }
      if (y > h - quaterY) {
        me.top = h - 2 * quaterY;
        return;
      }
      me.top = y - quaterY;
    }
  }
}

</script>
<style scoped lang="less">
@widthWrap: 720px;
@width: 300px;
@height: 300px;
@imgSize: 100px;

.clear {
  clear: both;
  display: block;
  content: "";
}

.magnWrap {
  position: relative;
  width: @widthWrap;
  margin: 0 auto;
  margin-top: 30px;

  .absolute {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .leftWrap {
    float: left;
    margin-bottom: 20px;
    width: @width;
    height: @height;
    position: relative;

    .img {
      .absolute;
      background-size: 100% 100%;
    }

    .mask {
      .absolute;
      background-color: #fff;
      opacity: .5;
    }

    .magn {
      .absolute;
      width: 50%;
      height: 50%;
      z-index: 1;
      background-size: 200% 200%;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
    }

    .event {
      z-index: 2;
      .absolute;
      cursor: crosshair;
    }
  }

  .rightWrap {
    background-size: 200% 200%;
    .absolute;
    width: @width;
    height: @height;
    top: 0px;
    right: 320px;
    transform: scale(1) translateZ(0);
    transition: all .5s;
  }

  .noTransition {
    // transition: none;
  }

  .ul {
    height: @imgSize;

    &:after {
      clear: both;
    }

    ;

    .li {
      float: left;
      list-style-type: none;
      width: @imgSize;
      height: 100%;
      margin-left: 20px;

      &:nth-child(1) {
        margin-left: 0px;
      }

      .img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

</style>
