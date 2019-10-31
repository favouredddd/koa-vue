<template>
  <div class='contents' >
    <moveStart :left="goLeft" :right="goRight" style="height:100%;width:100%">
      <div slot="hhhh" style="height:100%;width:100%">
        <div class="img-photo" :style="getContent" @transitionend="transitionend">
          <div v-for="(item,index) in imgs" :style="getImgs(index)" class='img' :key="index"></div>
        </div>
        <div style="clear:both"></div>
        <div class='span'>
          <div class='span-cont'>
            <span v-for="(item,index) in imgs" :style="actives(index)" class='item-span'></span>
          </div>
        </div>
      </div>
    </moveStart>
  </div>
</template>
<script>
import moveStart from '@/components/util/swipe.vue'
import src from '@/components/util/absolute.js'
let imgs =src.map(i=>{
  return i
})
imgs.pop();
export default {
  props: ["Wrapwidth"],
  name: "carousel3",
  data() {
    return {
      imgs:imgs,
      z: 0,
      index: 0,
      flag: false
    };
  },
  beforeDestroy() {
    var me = this;
  },
  components: {
    moveStart
  },
  methods: {
    getheight() {
      let me = this;
      var r = Math.PI * 2;
      var rad = r / me.imgs.length;
      let imgw = this.$store.state.fontSize * 7.78;
      return imgw / (2 * Math.tan(rad / 2));
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
    },
    transitionend() {
      let me = this;
      me.flag = true;
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
          return { "background": "rgba(0,255,0,1)" }
        }
        return { "background": "#fff" }
      }
    },
    getContent() {
      let tem = 360 / (this.imgs.length) * this.index;
      let z = this.z;
      return { 'transform': `rotateX(` + tem + `deg)`, width: '100%' }
    },
    getImgs(vm, index) {
      return function(index) {
        let z = this.z;
        let tem = 360 * index / (this.imgs.length)
        return {
          'background-image': 'url(' + this.imgs[index] + ')',
          'background-size': '100% 100%',
          'transform': 'rotateX(' + tem + 'deg) translateZ(' + z + 'px)'
        }
      }
    }
  },
  mounted() {
    let me = this;
    this.setTimer()
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        clearInterval(me.timer);
      } else {
        me.setTimer();
      }
    });
  }
}

</script>
<style>
.contents {
  margin: 0 auto;
  width: 100%;
  height: 7.78rem;
  overflow: hidden;
  position: relative;
}

.contents .img-photo {
  float: left;
  transition: all 1.5s;
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
}

.contents .img-photo .img {
  position: absolute;
  width: 100%;
  height: 100%;
}

.contents .img-photo .index {
  z-index: 1000;
}

.contents .span {
  position: absolute;
  width: 100%;
  height: 21px;
  bottom: 20px;
}

.contents .span .span-cont {
  height: 100%;
  width: 100px;
  margin: 0 auto;
  overflow: hidden;
}

.contents .span .span-cont span {
  display: inline-block;
  background-color: #f8f8f8;
  height: 13px;
  margin: 0 5px;
  width: 13px;
  border-radius: 50%;
}

.contents .span .span-cont .is_check {
  background-color: #ff6800;
}

</style>
