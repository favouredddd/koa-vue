<template>
  <div class="el-photo">
    <div class="plugin">
      <moveStart 
      :left="goRight" 
      :right="goLeft">
        <div class='content' slot="hhhh" >
          <transition-group 
          :name="name" 
          tag="div" 
          mode='in-out'  
          v-on:after-leave="transitionend">
            <div class="imtItem"
            v-for="(i,index) in imgs" 
            v-show="i.show"
            :key="index"
             v-lazy:background-image="i.img"
            :style="{'background-size':'100% 100%'}" key="index" >
              
            </div>
            <div class="spanWrap" :key="'spanWrap'">
              <span v-for="(i,ind) in  imgs" @click="select(ind)" class="item" :key="'span'+ind" :style="{'background-color':index===ind?'#0f0':'#fff'}"></span>
            </div>
          </transition-group>
        </div>
      </moveStart>
    </div>
  </div>
</template>
<script>
import moveStart from '@/components/util/swipe.vue'
import src from '@/components/util/absolute.js';
let base="https://nodomoss.oss-cn-beijing.aliyuncs.com/banner00"
let imgs = src.map((i,index) => {
  return { img: i}
});
export default {
  name: "carousel1",
  data() {
    return { imgs: imgs, index: 1, flag: true, left: true, name: "", mode: "in-out", timer: null, count: 0 }
  },
  components: {
    moveStart
  },
  methods: {
    start() {
      let me = this;
      me.imgs[0].show = true;
      me.index = 0;
      me.$nextTick(() => {
        me.name = "right";
        me.setTimer();
      });
    },
    setTimer() {
      let me = this;
      me.timer = setInterval(() => {
        if (me.left) {
          me.goRight();
        }
      }, 3000)
    },
    goLeft() {
      let me = this;
      if (!me.flag)
        return;
      clearInterval(me.timer);
      me.flag = false;
      let pre = ((me.index - 1) + me.imgs.length) % me.imgs.length;
      me.imgs[pre].show = true;
      me.imgs[me.index].show = false;
      me.index = pre;
      me.name = "left";
      me.setTimer();
    },
    goRight() {
      let me = this;
      if (!me.flag)
        return;
      clearInterval(me.timer);
      me.flag = false;
      let next = (me.index + 1) % me.imgs.length;
      me.imgs[next].show = true;
      me.imgs[me.index].show = false;
      me.index = next;
      me.name = "right";
      me.setTimer();
    },
    transitionend() {
      let me = this;
      // me.count++;
      // if (me.count === 2) {
      // me.count = 0;
      me.flag = true;
      // }
    },
    select(index) {
      let me = this;
      if (!me.flag)
        return;
      clearInterval(me.timer);
      me.flag = false;
      if (index === me.index)
        return;
      me.imgs[index].show = true;
      me.imgs[me.index].show = false;
      if (index > me.index) {
        me.name = "right";
      } else {
        me.name = "left";
      }
      me.index = index;
      me.setTimer();
    }
  },
  mounted() {
    let me = this;
    me.start();
  }
}

</script>
<style scoped lang="less">
.el-photo {
  .plugin {
    .content {
      width: 100%;
      height: 7.8rem;
      position: relative;
      overflow: hidden;

      .imtItem {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .spanWrap {
        position: absolute;
        width: 120px;
        display: flex;
        justify-content: space-around;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);

        .item {
          background-color: #fff;
          border-radius: 50%;
          width: 13px;
          height: 13px;
        }
      }

      .right-leave {
        transform: translate3d(0, 0, 0);
      }

      .right-leave-active {
        transition: transform .8s ease-in-out;
      }

      .right-leave-to {
        transform: translate3d(-100%, 0, 0);
      }

      .right-enter {
        transform: translate3d(100%, 0, 0);
      }

      .right-enter-active {
        transition: transform .8s ease-in-out;
      }

      .right-enter-to {
        transform: translate3d(0, 0, 0);
      }

      .left-leave {
        transform: translate3d(0, 0, 0);
      }

      .left-leave-active {
        transition: transform .8s ease-in-out;
      }

      .left-leave-to {
        transform: translate3d(100%, 0, 0);
      }

      .left-enter {
        transform: translate3d(-100%, 0, 0);
      }

      .left-enter-active {
        transition: transform .8s ease-in-out;
      }

      .left-enter-to {
        transform: translate3d(0%, 0, 0);
      }
    }
  }
}

</style>
