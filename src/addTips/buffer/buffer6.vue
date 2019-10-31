<template>
  <div class="nd-plugin-buffering-box-3"
       v-if="show"
       style="position:fixed;top:0;left:0;bottom:0;right:0;">
    <div class="nd-plugin-buffering-imgbox"
         :style="{'width':size+'px',height:size+'px'}">
      <div class="nd-plugin-buffering-leftbox"
           :style="{'width':size/2+'px',height:size+'px'}">
        <div class="nd-plugin-buffering-left"
             :style="{'animation-duration':animation_time+'s','border-left-color':color,'border-bottom-color':color,'width':size+'px','height':size+'px'}">
        </div>
      </div>
      <div class="nd-plugin-buffering-rightbox"
           :style="{'width':size/2+'px',height:size+'px',left:size/2+'px'}">
        <div class="nd-plugin-buffering-right"
             :style="{'animation-duration':animation_time+'s','border-left-color':color,'border-bottom-color':color,'width':size+'px','height':size+'px','margin-left':-size/2+'px'}">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// DD.css(box, 'height', document.defaultView.getComputedStyle(pluginBox, null).height);
export default {
  name: "buffer3",
  data () {
    return { show: true, color: '#409EFF', animation_time: 3, size: 64 }
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
.nd-plugin-buffering-box-3 {
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nd-plugin-buffering-box-3 .nd-plugin-buffering-imgbox {
  position: relative;
  width: 64px;
  height: 64px;
  margin: 0 auto;
  /* background: url(../../../assets/mongguo.jpg) no-repeat; */
  background-size: 80% 80%;
  background-position: center center;
}

.nd-plugin-buffering-box-3 .nd-plugin-buffering-leftbox {
  position: absolute;
  box-sizing: border-box;
  left: 0;
  width: 32px;
  height: 64px;
  overflow: hidden;
}

.nd-plugin-buffering-box-3 .nd-plugin-buffering-rightbox {
  position: absolute;
  left: 32px;
  box-sizing: border-box;
  width: 32px;
  height: 64px;
  overflow: hidden;
}

.nd-plugin-buffering-box-3 .nd-plugin-buffering-left {
  box-sizing: border-box;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border-left: 3px solid #409eff;
  border-bottom: 3px solid #409eff;
  border-right: 3px solid transparent;
  border-top: 3px solid transparent;
  transform: rotate(45deg);
  animation: moveleft 3s infinite linear;
}

.nd-plugin-buffering-box-3 .nd-plugin-buffering-right {
  margin-left: -32px;
  border-left: 3px solid #409eff;
  border-bottom: 3px solid #409eff;
  border-right: 3px solid transparent;
  border-top: 3px solid transparent;
  transform: rotate(45deg);
  animation: moveright 3s infinite linear;
  box-sizing: border-box;
  width: 64px;
  height: 64px;
  border-radius: 50%;
}

@keyframes moveleft {
  0% {
    transform: rotate(-137deg);
  }
  50% {
    transform: rotate(-137deg);
  }
  100% {
    transform: rotate(45deg);
  }
}

@keyframes moveright {
  0% {
    transform: rotate(45deg);
  }
  50% {
    transform: rotate(225deg);
  }
  100% {
    transform: rotate(225deg);
  }
}
</style>
