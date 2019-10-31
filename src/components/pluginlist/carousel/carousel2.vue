<template>
  <div class="carous_ct" ref="wrap">
    <moveStart :left="goLeft" :right="goRight" style="height:100%">
      <div class='plugin' slot="hhhh">
        <figure class='carous' :style="getContent" @transitionend="transitionend">
          <img :src="item" alt="图片" class='img-trans' v-for="(item,index) in imgs" :style="getImgs(index)" :key="index">
          </figure>
          <div class="spancont">
            <div class="span">
              <span class='inline-span' v-for="(item,index) in imgs" :style="actives(index)"></span>
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
export default {
  name: "carousel2",
  data() {
    return {
      imgs: imgs,
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
      let imgw = this.$store.state.width;
      return -1 * imgw / (2 * Math.tan(rad / 2));
    },
    goLeft() {
      let me = this;
      if (!me.flag)
        return;
      clearInterval(me.timer);
      me.index--;
      me.flag = false;
      me.setTimer()
    },
    goRight() {
      let me = this;
      if (!me.flag)
        return;
      clearInterval(me.timer);
      me.index++;
      me.flag = false;
      me.setTimer()
    },
    setTimer() {
      let me = this;
      me.timer = setInterval(() => {
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
  },
  components: {
    moveStart
  },
  computed: {
    actives(ind) {
      let me = this;
      return function(ind) {
        var index = (me.imgs.length - me.index) % me.imgs.length;
        if (index < 0)
          index += me.imgs.length
        if (ind === index) {
          return { "backgroundColor": "rgba(0,255,0,1)" }
        }
        return { "background": "#fff" }
      }
    },
    getContent() {
      let tem = Math.PI * 2 / (this.imgs.length) * this.index;
      let z = this.z;
      return { 'transform-origin': `50% 50%  ` + z + 'px', 'transform': `rotateY(` + tem + `rad)` }
    },
    getImgs(vm, index) {
      return function(index) {
        if (!index)
          return {};
        let z = this.z;
        let tem = Math.PI * 2 * index / (this.imgs.length)
        return { 'transform-origin': "50% 50% " + z + 'px', 'transform': `rotateY(` + tem + `rad)` }
      }
    }
  },
  mounted() {
    let me = this;
    setTimeout(() => {
      me.z = me.getheight();
      this.setTimer()
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          clearInterval(me.timer);
        } else {
          me.setTimer();
        }
      });
    }, 0);
  }
}

</script>
<style>
.carous_ct {
  margin: 0 auto;
  width: 100%;
  height: 7.78rem;
  overflow: hidden;
  position: relative;
}

.carous_ct .plugin {
  perspective: 600px;
  width: 100%;
  height: 100%;
  position: relative;
}

.carous {
  display: block;
  transform-style: preserve-3d;
  transition: all 2s;
  width: 100%;
  height: 100%;
}

.carous img {
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.spancont {
  width: 100%;
  position: absolute;
  bottom: 15px;
  height: 25px;
}

.spancont .span {
  width: 120px;
  margin: 0 auto;
}

.spancont .span span {
  display: inline-block;
  height: 13px;
  width: 13px;
  background-color: #f8f8f8;
  margin: 0 5px;
  border-radius: 50%;
}

.spancont .span .active {
  background-color: #f80000;
}

</style>
