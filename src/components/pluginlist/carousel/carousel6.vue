<template>
  <div class="el-carousel" ref="wrap">
        <moveStart :left="goRight" :right="goLeft" style="height:100%">
         <div slot="hhhh" style="height:100%;width:100%">
    <div class="wrap" :style="getMove" ref="content" @transitionend="transitionEnd">
      <div class="myCarousel" ref="dom">
        <img :src="src1" >
      </div>
      </div>
      <div class="spanWrap" ref="span">
        <span v-for="(i,index) in src" class="span" :index="index" @click="turn"></span>
      </div>
    </div>
    </moveStart>
    </div>
</template>
<script>
import moveStart from '@/components/util/swipe.vue'
import srcs from '@/components/util/absolute.js'
let src =srcs.map(i=>{
  return i
})
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
  name: "carousel6",
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
      me.timer = null;
      if (key > me.index) {
        me.move(true, key - 1);
      } else {
        me.move(false, key + 1);
      }
    },
    create() {
      var me = this;
      //图片加载完毕
      Promise.all(promises()).then(() => {
        me.dom = me.$refs.dom;
        //初始化
        //添加手势
        me.img = me.dom.querySelector("img");
        me.tem = img[1];
        me.span = [...me.$refs.span.querySelectorAll(".span")]
        me.span[0].classList.add("check");
        me.setTime();
        window.addEventListener("visibilitychange", () => {
          if (document.hidden) {
            clearInterval(me.timer);
            me.timer = null
          } else {
            me.setTime();
          }
        }, false);
      });
    },
    setTime() {
      let me = this;
      me.flag = true;
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
        setTimeout(() => {
          me.dom.appendChild(me.tem);
          me.moveLeft();
        }, 50)
        return;
      } else {
        me.tem = img[(me.index - 1 + src.length) % src.length]
        me.dom.insertBefore(me.tem, me.img);
        me.d = -1 * me.width;
        setTimeout(() => {
          me.moveRight();
        }, 50)
        return;
      }
    },
    moveLeft() {
      var me = this;
      if (!me.$refs.content)
        return
      me.$refs.content.classList.add("transitionss");
      me.flag = false;
      me.d = -1 * me.width;
      me.leaveLeft = true;
    },
    moveRight() {
      var me = this;
      if (!me.$refs.content)
        return
      me.$refs.content.classList.add("transitionss");
      me.flag = false;
      me.d = 0;
      me.leaveLeft = false;
    },
    updateSpan() {
      var me = this;
      me.span.forEach(i => {
        i.classList.remove("check");
      });
      me.span[me.index].classList.add("check");
      setTimeout(() => {
        me.dom.removeChild(me.img);
        me.img = me.tem;
        me.d = 0;
        me.flag = true;
        if (!me.timer) {
          me.setTime();
        }
      }, 50);
    },
    goLeft() {
      var me = this;
      if (!me.flag)
        return;
      clearInterval(me.timer);
      me.timer = null;
      me.flag = false;
      me.leaveLeft = true
      me.move(false);
    },
    goRight() {
      var me = this;
      if (!me.flag)
        return;
      clearInterval(me.timer);
      me.timer = null;
      me.flag = false;
      me.leaveLeft = false
      me.move(true);
    },
    transitionEnd() {
      let me = this;
      me.$refs.content.classList.remove("transitionss");
      setTimeout(() => {
        if (me.leaveLeft) {
          me.index = (me.index + 1) % me.imgs.length
          me.updateSpan()
        } else {
          me.index = (me.index - 1 + me.imgs.length) % me.imgs.length
          me.updateSpan()
        }
      }, 50)
    }
  },
  components:{
    moveStart
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
  computed: {
    getMove() {
      let me = this;
      return { transform: 'translateX(' + me.d + 'px)' };
    }
  },
  mounted() {
    var me = this;
    setTimeout(() => {
      let width = parseInt(window.getComputedStyle(document.querySelector(".plugin-content")).width);
      me.width = width;
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

.el-carousel .transitionss {
  transition: transform 1s;
}

.el-carousel .wrap>img {
  float: left;
  width: 50%;
  height: 100%;
}

.el-carousel .spanWrap {
  z-index: 999;
  position: absolute;
  width: 100px;
  height: 1rem;
  font-size: 0;
  display: flex;
  bottom: 1rem;
  justify-content: space-around;
  left: 50%;
  transform: translateX(-50%);
}

.el-carousel .wrap .myCarousel {
  width: 100%;
  height: 100%;
}

.el-carousel .wrap img {
  width: 50%;
  height: 100%;
}

.el-carousel .spanWrap .span {
  transition: all 1s;
  width: 13px;
  height: 13px;
  display: inline-block;
  border-radius: 50%;
  background-color: #fff;
  opacity: 1;
}

.el-carousel .spanWrap .check {
  background-color: rgb(0,255,0) !important;
  opacity: 1 !important;
}

</style>
