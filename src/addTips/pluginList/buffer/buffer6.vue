<template>
  <div class='nd-plugin-buffering-box-line' style="height:100px">
    <div class='mask' ></div>
    <div class='nd-plugin-buffering-loader'>
      <div v-for="(i,index) in items" :style="getStyle(index)"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "buffer1",
  data() {
    return { items: [{}, {}, {}, {}, {}, {}, {}, {}],show: true, animation_time: 1, color: '#0000FF' }
  },
  computed: {
    getStyle(index) {
      let me = this;
      return function(index) {
        return {
          "animation-duration": me.animation_time + 's',
          "animation-delay": me.small_time * index + 's',
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
.nd-plugin-buffering-box-line {
  position: relative;
  box-sizing: border-box;
  display: -webkit-flex;
  display: flex;
  // flex: 0 1 auto;
  // flex-direction: column;
  // flex-grow: 1;
  // flex-shrink: 0;
  align-items: center;
  justify-content: center;
}

.mask {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #FFF;
}

@-webkit-keyframes nd-plugin-buffering-loader {
  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
}

@keyframes nd-plugin-buffering-loader {
  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
}

.nd-plugin-buffering-box-line .nd-plugin-buffering-loader {
  position: relative;
}


.nd-plugin-buffering-box-line .nd-plugin-buffering-loader>div {
  background-color: #999;
  border-radius: 2px;
  margin: 2px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  position: absolute;
  width: 3px;
  height: 10px;
}

.nd-plugin-buffering-box-line .nd-plugin-buffering-loader>div:nth-child(1) {
  top: 15px;
  left: 0;
  -webkit-animation: nd-plugin-buffering-loader 1s 0s infinite ease-in-out;
  animation: nd-plugin-buffering-loader 1s 0s infinite ease-in-out;
}

.nd-plugin-buffering-box-line .nd-plugin-buffering-loader>div:nth-child(2) {
  top: 10.605px;
  left: 10.605px;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: nd-plugin-buffering-loader 1s 0.12s infinite ease-in-out;
  animation: nd-plugin-buffering-loader 1s 0.12s infinite ease-in-out;
}

.nd-plugin-buffering-box-line .nd-plugin-buffering-loader>div:nth-child(3) {
  top: 0;
  left: 15px;
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-animation: nd-plugin-buffering-loader 1s 0.24s infinite ease-in-out;
  animation: nd-plugin-buffering-loader 1s 0.24s infinite ease-in-out;
}

.nd-plugin-buffering-box-line .nd-plugin-buffering-loader>div:nth-child(4) {
  top: -10.605px;
  left: 10.605px;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-animation: nd-plugin-buffering-loader 1s 0.36s infinite ease-in-out;
  animation: nd-plugin-buffering-loader 1s 0.36s infinite ease-in-out;
}

.nd-plugin-buffering-box-line .nd-plugin-buffering-loader>div:nth-child(5) {
  top: -15px;
  left: 0;
  -webkit-animation: nd-plugin-buffering-loader 1s 0.48s infinite ease-in-out;
  animation: nd-plugin-buffering-loader 1s 0.48s infinite ease-in-out;
}

.nd-plugin-buffering-box-line .nd-plugin-buffering-loader>div:nth-child(6) {
  top: -10.605px;
  left: -10.605px;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: nd-plugin-buffering-loader 1s 0.6s infinite ease-in-out;
  animation: nd-plugin-buffering-loader 1s 0.6s infinite ease-in-out;
}

.nd-plugin-buffering-box-line .nd-plugin-buffering-loader>div:nth-child(7) {
  top: 0;
  left: -15px;
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-animation: nd-plugin-buffering-loader 1s 0.72s infinite ease-in-out;
  animation: nd-plugin-buffering-loader 1s 0.72s infinite ease-in-out;
}

.nd-plugin-buffering-box-line .nd-plugin-buffering-loader>div:nth-child(8) {
  top: 10.605px;
  left: -10.605px;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-animation: nd-plugin-buffering-loader 1s 0.84s infinite ease-in-out;
  animation: nd-plugin-buffering-loader 1s 0.84s infinite ease-in-out;
}

</style>
