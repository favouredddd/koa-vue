<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-08-19 15:00:12
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-19 15:00:23
 -->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-08-18 20:31:26
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-19 15:38:02
 -->

<template>
  <div class="content">
    <div class="header">
      <div class="tips">消息列表</div>
    </div>
    <section class="list">
      <div class="list-ul"
           ref="content">
        <transition-group tag="div"
                          name="moveOut"
                          class="transition">
          <div class="list-li"
               v-for="(i,index) in list"
               :key="index"
               :index="index"
               v-swipeList="swipe">
            <div class="con">
              {{i.message}}
            </div>
            <div class="btn"
                 :style="{transform:`translate3d(${i.move}px,0,0)`,'transition':`all ${i.duration}ms linear`}"
                 @click="clearMessage(index)">删除</div>
          </div>
        </transition-group>
      </div>
    </section>
  </div>
</template>
<script>
// import SwiperList from './SwiperList.js'
export default {
  data () {
    const list = [
      { message: "你的快递到了", move: 0, duration: 0, id: 123 },
      { message: "付款成功", move: 0, duration: 0, id: 1 },
      { message: "退款成功", move: 0, duration: 0, id: 12 }
    ];
    return {
      list: list,
      swipe: {
        slideWidth: 80,
        model: list,
        transitionTime: 1000
      }
    }
  },
  methods: {
    clearMessage (index) {
      this.list.splice(index, 1);
    }
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
.content {
  .header {
    background: #ff9933;
    border-bottom: 1px solid #ccc;
  }
  .header .tips {
    text-align: center;
    line-height: 54px;
    font-size: 12px;
    color: #fff;
  }
  .list {
    .list-ul {
      overflow: hidden;
      font-size: 14px;
      .transition {
        .list-li {
          line-height: 60px;
          border-bottom: 1px solid #fcfcfc;
          position: relative;
          padding: 0 12px;
          color: #666;
          background: #f2f2f2;
          .con {
            transform: translateX(0px);
          }
        }
        .btn {
          position: absolute;
          top: 0;
          right: -80px;
          text-align: center;
          background: #ffcb20;
          color: #fff;
          width: 80px;
        }
      }
      .moveOut-leave {
        height: 60px;
      }
      .moveOut-leave-active {
        transition: height 1s;
      }
      .moveOut-leave-to {
        height: 0px;
      }
    }
  }
}
</style>