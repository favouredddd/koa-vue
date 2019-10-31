<template>
  <div class="el-photo">
    <div class="plugin">
      <div class='content' ref="wrap">
        <div class='show' :style="getStyle">
          <img class='imgs' v-for="(i,index) in imgs" :src="i.img" :style="getWidth"/>
         </div>
          <div class='span'>
            <span v-for="(i,index) in imgs" class='photo-span' v-show="index!==0" :class="{'active':i.check===true}"></span>
          </div>
          <div class="left" @click="goRight">
            <div class="img-content"></div>
          </div>
          <div class="right" @click="goLeft">
            <div class="img-content"></div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
let swipe = require("../../util/swipe.js").default;
let imgs = [
  { img: require("../../../assets/banner001.jpg"), check: false },
  { img: require("../../../assets/banner002.jpg"), check: false },
  { img: require("../../../assets/banner003.jpg"), check: false },
  { img: require("../../../assets/banner004.jpg"), check: false },
  { img: require("../../../assets/banner001.jpg"), check: false }
];
export default {
  name: "carousel1",
  data() {
    return { imgs: imgs, left: 0, translate: 0, index: 1, flag: true }
  },
  computed: {
    width(){
      return this.$store.state.width
    },
    getWidth() {
      return { 'width': this.width + 'px' };
    },
    getStyle() {
      let me = this;
      return {
        'transform': 'translateX(' + me.translate + 'px)',
        'left': me.left + 'px',
        'width': me.imgs.length * me.width + 'px'
      }
    }
  },
  methods: {
    removeSpan() {
      let me = this;
      me.imgs.forEach(i => {
        i.check = false;
      });
    },
    moveLeft() {
      let me = this;
      me.translate -= me.width;
      if (me.index > me.imgs.length - 2) {
        me.index = 0;
        me.left = -1 * me.translate - me.width;
      }
      me.index++;
    },
    moveright() {
      let me = this;
      me.translate += me.width;
      if (me.index === 0) {
        me.index = me.imgs.length - 2;
        me.left = -1 * me.translate - me.width * (me.imgs.length - 2);
      } else {
        me.index--;
      }
    },
    create() {
      let me = this;
      me.$nextTick(()=>{
        me.addspan();
        me.updata();
      })
    },
    addspan() {
      let me = this;
      if (me.index === 0) {
        me.imgs[me.imgs.length - 1].check = true;
      } else {
        me.imgs[me.index].check = true;
      }
    },
    updata() {
      let me = this;
      me.timer = setInterval(() => {
        me.flag = false;
        me.start();
      }, 1800);
    },
    start() {
      let me = this;
      me.removeSpan();
      me.moveLeft();
      me.addspan();
    },
    goLeft(){
      let me=this;
        if (!me.flag)
          return
        me.flag = false;
        clearInterval(me.timer);
        me.removeSpan();
        me.moveLeft();
        me.addspan();
        me.updata();
    },
    goRight(){
      let me=this;
       if (!me.flag)
          return
        me.flag = false;
        clearInterval(me.timer);
        me.removeSpan();
        me.moveright();
        me.addspan();
        me.updata();
    }
  },
  mounted(){
    console.log(this);
    let me = this;
    me.create();
    me.left= -1 * me.index * me.width;
    new swipe(me.$refs.wrap, {
      left: () => {
       me.goLeft();
      },
      right:() => {
        me.goRight();
      }
    });
    me.$refs.wrap.addEventListener("transitionend", function() {
      me.flag = true;
    }, false);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        clearInterval(me.timer);
      } else {
        me.updata();
      }
    });
  }
}

</script>
<style>
.el-photo .plugin .content {
  width: 100%;
  height: 7.78rem;
  overflow: hidden;
  position: relative;
}

.el-photo .plugin .content .show {
  height: 100%;
  transition: transform 1s;
  position: absolute;
  top: 0;
  left: 0;
}

.el-photo .plugin .content .show img {
  height: 100%;
}

.el-photo .plugin .content .span {
  position: absolute;
  bottom: 5px;
  text-align: center;
  width: 100%;
  height: 20px;
  background-color: rgba(1, 1, 1, 0);

}

.el-photo .plugin .content .left {
  z-index: 9999;
  cursor: pointer;
  position: absolute;
  top: 45%;
  width: 50px;
  height: 25px;
  left: 0;
  background-image: url(../../../assets/left.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  /*display: none;*/
}

.el-photo .plugin .content .right {
  z-index: 9999;
  cursor: pointer;
  position: absolute;
  top: 45%;
  width: 50px;
  height: 25px;
  right: 0;
  background-image: url(../../../assets/right.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  /*display: none;*/
}

.el-photo .plugin .content .img-content {
  width: 100%;
  height: 100%;
  background-color: #eeeeee63;
}

.el-photo .plugin .content .span .photo-span {
  border-radius: 50%;
  margin: 0 8px;
  width: 8px;
  height: 8px;
  display: inline-block;
  background-color: #f8f8f8;
}

.el-photo .plugin .content .span .active {
  background-color: #0f0;
}

.el-photo .plugin .content .span .is_check {
  background-color: #ff6800;
}

.el-photo .plugin {
  width: 100%;
}

.transition {
  transition: transform 0s !important;
}

</style>
