<template>
  <div class="loading">
    <div class="spinner">
      <div v-for="(i,index) in items" :class="getName(index)" :style="getStyle(index)"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "partical",
  data() {
    return { items: [{}, {}, {}, {}, {}], show: true, animation_time: 0.16 }
  },
  computed: {
    getStyle(index) {
      let me = this;
      return () => {
        return {
          "animation-delay": -1 * me.small_time * index + 's',
        }
      }
    },
    getName(index) {
      return function(index) {
        return "bounce" + (index + 1);
      }
    }
  },
}

</script>
<style scoped lang="less">
.loading {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;

  .spinner {
    z-index: 11;
    width: 120px;
    text-align: center;

    >div {
      width: 12px;
      height: 12px;
      background-color: #67CF22;
      border-radius: 100%;
      display: inline-block;
      animation: bouncedelay 2.8s infinite ease-in-out;
      animation-fill-mode: both
    }

    .bounce2 {
      animation-delay: -0.16s;
      background-color: #b07da8;
    }

    .bounce3 {
      animation-delay: -0.32s;
      background-color: #f1b428;
    }

    .bounce4 {
      animation-delay: -0.48s;
      background-color: #06AAA2;
    }

    .bounce5 {
      animation-delay: -0.64s;
      background-color: #FF0909;
    }

    .bounce1 {
      background-color: #cd402e;
    }

  }

  @keyframes bouncedelay {
    0% {
      transform: translate(-400px, 0);
      opacity: 0;
    }

    35%,
    65% {
      transform: translate(0, 0);
      opacity: 1;
    }

    100% {
      transform: translate(400px, 0);
      opacity: 0;
    }
  }

}

</style>
