<template>
  <div class="com-loading" v-if="show">
    <div class="spinner">
      <div class="bounce1 small"  v-for="(i,index) in items" :style = "getStyle(index)"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "buffer1",
  data() {
    return { items:[{},{},{}],color: '#0f0', show: true, time: 2, radius: 5 }
  },
  computed: {
    getStyle(index) {
      let me = this;
      return function(index) {
        return {
          "animation-delay": me.time / 5 * index + 's',
          "background-color": me.color,
          "width": 2 * me.radius + 'px',
          "height": 2 * me.radius + 'px'
        }
      }
    }
  }
}

</script>
<style>
.el-animation-5 .com-loading {
    right: 0;
    bottom: 0;
    left: 0;
    width: 20rem;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center
}

.el-animation-5 .com-loading .spinner {
    width: 4rem;
    text-align: center
}

.el-animation-5 .com-loading .spinner>div {
    width: 0.8rem;
    height: 0.8rem;
    background-color: #363636;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
    animation: bouncedelay 1.4s infinite ease-in-out;
    Preventfirstframefromflickeringwhenanimationstarts-webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

.el-animation-5 .com-loading .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s
}

.el-animation-5 .com-loading .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s
}

@-webkit-keyframes bouncedelay {
    0%,
    80%,
    100% {
        -webkit-transform: scale(0)
    }
    40% {
        -webkit-transform: scale(1)
    }
}

@keyframes bouncedelay {
    0%,
    80%,
    100% {
        transform: scale(0);
        -webkit-transform: scale(0)
    }
    40% {
        transform: scale(1);
        -webkit-transform: scale(1)
    }
}
</style>
