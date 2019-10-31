<template>
  <div class="el-mask">
    <div class="progress ro dot">
      <span v-for="(i,index) in items"
            :key="index"
            :style="getStyle(index)"></span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return { items: [{}, {}, {}, {}, {}], times: [, 260, 510, 750, 990] }
  },
  computed: {
    getStyle (index) {
      return (index) => {
        const time = index < 5 && this.times[index];
        return { 'animation-delay': `${time}ms` }
      }
    }
  }
}
</script>
<style lang="less" scoped>
@keyframes orbit {
  0% {
    transform: rotate(225deg);
    opacity: 1;
    animation-timing-function: ease-out;
  }
  7% {
    transform: rotate(345deg);
    animation-timing-function: linear;
  }
  30% {
    transform: rotate(455deg);
    animation-timing-function: ease-in-out;
  }
  39% {
    transform: rotate(690deg);
    animation-timing-function: linear;
  }
  70% {
    transform: rotate(815deg);
    opacity: 1;
    animation-timing-function: ease-out;
  }
  75% {
    transform: rotate(945deg);
    animation-timing-function: ease-out;
  }
  76% {
    transform: rotate(945deg);
    opacity: 0;
  }
  100% {
    transform: rotate(945deg);
    opacity: 0;
  }
}
.el-mask {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-image: linear-gradient(90deg, #0af, #0085ff);
  display: flex;
  justify-content: center;
  align-items: center;
  .progress {
    width: 100px;
    height: 100px;
    position: relative;
    > span {
      width: 75px;
      height: 75px;
      position: absolute;
      transform: rotate(225deg);
      animation: orbit 6s infinite;
      &:after {
        width: 10px;
        height: 10px;
        content: "";
        position: absolute;
        border-radius: 100%;
        background-color: #fff;
      }
    }
  }
}
</style>