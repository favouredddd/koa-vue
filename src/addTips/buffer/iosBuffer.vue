<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-08-16 09:52:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-16 10:17:50
 -->
<template>
  <div class="mask">
    <div class="wrap">
      <div class="content"
           :style="getFunction">
        <li v-for="(i,index) in items"
            :key="index"
            class="li"
            :style="getStyle(index)">
        </li>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return { items: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}] }
  },
  computed: {
    getFunction () {
      return {
        'animation-timing-function': `steps(${this.items.length})`
      }
    },
    getStyle () {
      return (index) => {
        return { transform: `rotate(${(index + 1) * 30}deg)`, opacity: 1 - index * 0.0625 }
      }
    }
  }
}
</script>
<style lang="less" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      width: 50px;
      height: 50px;
      position: relative;
      animation: rotate 0.8s linear infinite;
      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      .li {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        &:before {
          display: block;
          width: 2px;
          height: 25%;
          margin: 0 auto;
          background-color: currentColor;
          border-radius: 40%;
          content: " ";
        }
      }
    }
  }
}
</style>