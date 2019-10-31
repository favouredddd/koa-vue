<template>
  <div class="el-carousel" ref="carousel">
    <div class="wrap" ref="wrap" :style="{left:d+'px'}">
      <img :src="src1">
    </div>
      <div class="spanWrap" ref="span">
        <span v-for="(i,key) in src" class="span" @click="turn" :index="key"></span>
      </div>
    </div>
</template>
<script>
var swipe = require("../../util/swipe.js").default;
var src = [require("../../../assets/banner001.jpg"), require("../../../assets/banner002.jpg"), require("../../../assets/banner003.jpg"), require("../../../assets/banner004.jpg")];
var img = [];
var getImage = (src, index) => {
  var imgs = new Image();
  return new Promise((r1, r2) => {
    imgs.onload = r1;
    imgs.src = src;
    imgs.setAttribute("KEY", index);
  }).then(() => {
    img[index] = imgs;
  });
}
var promises = () => {
  return src.map((i, index) => {
    return getImage(i, index);
  });
}
export default {
  name: "carousel5",
  methods: {
    turn(e) {
      var me = this;
      var key = parseInt(e.target.getAttribute("index"));
      if (key === undefined || key === me.index || isNaN(key)) {
        return;
      }
      if (!me.flag)
        return;
      me.flag = false;
      clearInterval(me.timer);
      if (key > me.index) {
        me.move(true, key - 1);
      } else {
        me.move(false, key + 1);
      }
      me.setTime();
    },
    create() {
      var me = this;
      //图片加载完毕
      Promise.all(promises()).then(() => {
        me.dom = me.$refs.wrap;
        me.$nextTick(() => {
          //初始化
           //添加手势
      new swipe(me.$refs.wrap, { right: me.goLeft.bind(me), left: me.goRight.bind(me) })
          me.img = me.dom.querySelector("img");
          me.tem = img[1];
          me.span = [...me.$refs.span.querySelectorAll("span")]
          me.span[0].classList.add("check");
          me.setTime();
          window.addEventListener("visibilitychange", () => {
            if (document.hidden) { clearInterval(me.timer); } else {
              me.setTime();
            }
          }, false);
        })
      });
    },
    setTime() {
      var me = this;
      if (!me.flag)
        return;
      me.flag = false;
      me.timer = setInterval(me.move.bind(me, me.left), 3000);
    },
    move(flag = false, index) {
      var me = this;
      if (index || index === 0) {
        me.index = index;
      }
      if (flag) {
        me.d = 0;
        me.tem = img[(me.index + 1) % img.length];
        me.$nextTick(() => {
          me.dom.appendChild(me.tem);
          me.moveLeft(0);
        });
        return;
      } else {
        me.$nextTick(() => {
          me.tem = img[(me.index - 1 + src.length) % src.length]
          me.dom.insertBefore(me.tem, me.img);
          me.$nextTick(() => {
            me.d = -1 * me.width;
            me.moveRight(me.d);
          });
        });
        return;
      }
    },
    moveLeft(d) {
      var me = this;
      me.flag = false;
      if (d > -1 * me.width) {
        me.d -= me.speed;
        d -= me.speed;
        window.requestAnimationFrame(me.moveLeft.bind(me, me.d));
      } else {
        me.index = (me.index + 1) % src.length;
        me.updateSpan();
      }
    },
    moveRight(d) {
      var me = this;
      me.flag = false;
      if (d < 0) {
        me.d += me.speed;
        d += me.speed;
        window.requestAnimationFrame(me.moveRight.bind(me, me.d));
      } else {
        me.index = (me.index - 1 + src.length) % src.length;
        me.updateSpan();
      }
    },
    updateSpan() {
      var me = this;
      me.span.forEach(i => {
        i.classList.remove("check");
      });
      me.span[me.index].classList.add("check");
      me.dom.removeChild(me.img);
      me.$nextTick(() => {
        me.img = me.tem;
        me.d = 0;
        me.flag = true;
      });
    },
    goLeft() {
      var me = this;
      if (!me.flag)
        return;
      clearInterval(me.timer);
      me.flag = false;
      me.move(false);
      me.setTime();
    },
    goRight() {
      var me = this;
      if (!me.flag)
        return;
      clearInterval(me.timer);
      me.flag = false;
      me.move(true);
      me.setTime();
    }
  },
  data() {
    var me = this;
    return {
      width: 0,
      src: src,
      speed: 0,
      flag: true,
      d: 0,
      left: true,
      imgs: img,
      index: 0,
      src1: src[0]
    }
  },
  beforeDestroy() {
    var me = this;
    clearInterval(me.timer);
  },
  mounted() {
    var me = this;
    setTimeout(() => {
    let width = me.$store.state.width;
    let speed = width / 30;
    me.width=width;
    me.speed=speed;
      me.create();
    }, 0)
  }
}

</script>
<style>
.el-carousel {
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 7.78rem;
  overflow: hidden;
}

.el-carousel .wrap {
  position: absolute;
  width: 200%;
  height: 100%;
  font-size: 0;
}

.el-carousel .wrap>img {
  float: left;
  width: 50%;
  height: 100%;
}

.el-carousel .spanWrap {
  z-index: 999;
  position: absolute;
  width: 10rem;
  height: 1rem;
  font-size: 0;
  display: flex;
  bottom: 1rem;
  justify-content: space-around;
  left: 50%;
  transform: translateX(-50%);
}

.el-carousel .spanWrap .span {
  transition: all 1s;
  width: 1rem;
  height: 1rem;
  display: inline-block;
  border-radius: 50%;
  background-color: rgba(0, 0, 0);
  opacity: .2;
}

.el-carousel .spanWrap .check {
  background-color: red !important;
  opacity: 1 !important;
}

</style>
