<template>
  <div class="content" v-if="show" :style="{'width':width+'px'}">
    <span class="my_span" v-for="(i,index) in items" :style="getStyle(index)"></span>
  </div>
</template>
<script>
export default {
  name: "buffer4",
  data() {
    return { items: [{}, {}, {}, {}, {}], show: true, color: '#00bfff', time: 0.8, width: 150, height: 70 }
  },
  computed: {
    getStyle(index) {
      let me = this;
      return function(index) {
        return {
          "animation-duration": me.animation_time + 's',
          "animation-delay": index * me.time / 4 + 's',
          "background-color": me.color,
          "width": (0.5 * me.width) / me.items.length + 'px',
          "height": me.height + 'px'
        }
      }
    }
  }
}

</script>
<style>
.el-animation-4{
  position: relative;
  left:0;
  right: 0;
  top:0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
        height:100px;
}
.el-animation-4 .content{
  margin:0px auto;
  margin-top:10px;
        display:flex;
        justify-content:center;
}
.el-animation-4 .content span{
  display: block;
  float: left;
  background-color: deepskyblue;
  border-radius: 5px;
  transform: skewX(-25deg) scale(.1);
  animation:animate 0.8s infinite alternate;
}
@keyframes animate{
  to{
    filter:opacity(1);
    transform: skewX(-25deg) scale(1);
  }
}

</style>
