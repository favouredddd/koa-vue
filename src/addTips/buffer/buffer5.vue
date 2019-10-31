<template>
  <div class="nd-plugin-loading-2"
       v-if="show">
    <div class="spinner"
         :style="{width:width+'px',height:height+'px'}">
      <div v-for="(i,index) in items"
           :style="getStyle(index)"
           :class="getClass(index)"
           :key="index"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "buffer2",
  data () {
    return { items: [{}, {}, {}, {}, {}], show: true, width: 40, height: 60, color: 'rgb(17, 253, 2)', animation_time: 1.2 }
  },
  computed: {
    getClass (index) {
      return function (index) {
        return 'rect' + (index + 1);
      }
    },
    getStyle (index) {
      let me = this;
      return function (index) {
        return {
          "background-color": me.color,
          "width": (me.width - 0.2 * me.width) / me.items.length + 'px',
          "height": me.height + 'px'
        }
      }
    }
  }
}

</script>
<style>
.nd-plugin-loading-2 {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  margin: auto;
  background-image: linear-gradient(90deg, #0af, #0085ff);
  display: flex;
  align-items: center;
  z-index: 1000;
  justify-content: center;
}

.nd-plugin-loading-2 .spinner {
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 10px;
}

.nd-plugin-loading-2 .spinner > div {
  background-color: #fdb702;
  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}

.nd-plugin-loading-2 .spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.nd-plugin-loading-2 .spinner .rect3 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

.nd-plugin-loading-2 .spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.nd-plugin-loading-2 .spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }

  20% {
    -webkit-transform: scaleY(1);
  }
}

@keyframes stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }

  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
</style>
