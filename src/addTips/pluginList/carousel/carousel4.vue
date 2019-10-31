<template>
  <div class='content' ref="wrap">
    <div class="img-photo"  v-for="(i,ind) in imgs" :style="getContent(ind)">
      <div v-for="(item,index) in i" :style="getImgs(ind,index)" class='img'></div>
    </div>
    <div style="clear:both"></div>
    <div class='span'>
      <div class='span-cont'>
        <span v-for="(item,index) in imgs" :style="actives(index)" class='item-span'></span>
      </div>
    </div>
  </div>
</template>
<script>
var swipe = require("../../util/swipe.js").default;
export default {
      props:["Wrapwidth"],
  name: "carousel4",
  data() {
    return {
      imgs: [
        [
        require("../../../assets/4.jpg"),
        require("../../../assets/8.jpg"),
        require("../../../assets/12.jpg"),
        require("../../../assets/16.jpg")
        ],
         [
         require("../../../assets/3.jpg"),
        require("../../../assets/7.jpg"),
        require("../../../assets/11.jpg"),
        require("../../../assets/15.jpg")
        ],
         [
        require("../../../assets/2.jpg"),
        require("../../../assets/6.jpg"),
        require("../../../assets/10.jpg"),
        require("../../../assets/14.jpg")
        ],
         [
        require("../../../assets/1.jpg"),
        require("../../../assets/5.jpg"),
        require("../../../assets/9.jpg"),
        require("../../../assets/13.jpg")
        ],

      ],
      z: 0,
      index: 0,
      flag: false
    };
  },
  beforeDestroy() {
    var me = this;
  },
  methods: {
    getheight() {
      let me = this;
      var r = Math.PI * 2;
      var rad = r / me.imgs.length;
      let imgw = this.$store.state.fontSize * 7.78;
      return  imgw / (2 * Math.tan(rad / 2));
    },
    goLeft() {
      let me = this;
      if (!this.flag)
        return;
      clearInterval(me.timer);
      this.index--;
      this.flag = false;
      me.setTimer()
    },
    goRight() {
      let me = this;
      if (!this.flag)
        return;
      clearInterval(me.timer);
      this.index++;
      this.flag = false;
      me.setTimer()
    },
    setTimer() {
      let me = this;
      this.timer = setInterval(() => {
        me.index++;
      }, 3000);
    }

  },
  created() {
    var me = this;
    this.z = this.getheight();
  },
  computed: {
    actives(ind) {
      let me = this;
      return function(ind) {
        var index = (me.imgs.length - me.index) % me.imgs.length;
        if (index < 0)
          index += me.imgs.length
        if (ind === index) {
          return { "background": "rgba(0,255,0)" }
        }
        return { "background": "#fff" }
      }
    },
    getContent(index) {
      return function(index){
      let tem = 360 / (this.imgs.length) * this.index;
      let z = this.z;
      return { 'transition-delay':index*0.3+'s','transform': `rotateX(` + tem + `deg)` }
       }
    },
    getImgs(ind,index) {
      return function(ind,index) {
        let z = this.z;
        let tem =360 * index / (this.imgs.length)
        return {
          'background-image': 'url('+this.imgs[ind][index]+')',
          'background-size': '100% 100%' ,
          'transform': 'rotateX('+tem+'deg) translateZ('+z+'px)'
        }
      }
    }
  },
  mounted() {
    let me = this;
    new swipe(me.$refs.wrap, { right: me.goLeft.bind(me), left: me.goRight.bind(me) });
    me.$refs.wrap.addEventListener("transitionend", function() {
      me.flag = true;
    }, false);
    this.setTimer();
    document.addEventListener("visibilitychange",()=>{
      if(document.hidden){
        clearInterval(me.timer);
      }else{
        me.setTimer();
      }
    });
  }
}

</script>
<style>
.content {
    margin: 0 auto;
    width: 100%;
    height: 7.78rem;
    overflow: hidden;
    position: relative;
}

.content .img-photo {
  float: left;
  transition: all 1.5s;
  transform-style: preserve-3d;
  width: 25%;
  height: 100%;
}

.content .img-photo .img {
  position: absolute;
  width: 100%;
  height: 100%;
}

.content .img-photo .index {
  z-index: 1000;
}

.content .span {
  position: absolute;
  width: 100%;
  height: 21px;
  bottom: 20px;
}

.content .span .span-cont {
  height: 100%;
  width: 100px;
  margin: 0 auto;
  overflow: hidden;
}

.content .span .span-cont span {
  display: inline-block;
  background-color: #f8f8f8;
  height: 13px;
  margin: 0 5px;
  width: 13px;
  border-radius: 50%;
}

.content .span .span-cont .is_check {
  background-color: #ff6800;
}

</style>
