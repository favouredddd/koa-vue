<template>
  <div class="el-loading-mask">
    <div class="el-loading-spinner">
      <svg viewBox="25 25 50 50" class="circular">
        <circle cx="50" cy="50" r="20" fill="none" class="path" />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped lang="scss">
.el-loading-mask {
  position: fixed;
  z-index: 2000;
  // background-color: hsla(0, 0%, 100%, 0.9);
  background-color: rgba(0, 0, 0, 0.15);
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.3s;

  .el-loading-spinner {
    top: 50%;
    margin-top: -21px;
    width: 100%;
    text-align: center;
    position: absolute;

    .circular {
      height: 42px;
      width: 42px;
      animation: loading-rotate 2s linear infinite;

      .path {
        animation: loading-dash 1.5s ease-in-out infinite;
        stroke-dasharray: 90, 150;
        stroke-dashoffset: 0;
        stroke-width: 2;
        stroke: #fff;
        stroke-linecap: round;
      }

      @keyframes loading-dash {
        0% {
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
        }

        50% {
          stroke-dasharray: 90, 150;
          stroke-dashoffset: -40px;
        }

        100% {
          stroke-dasharray: 90, 150;
          stroke-dashoffset: -120px;
        }
      }
    }

    @keyframes loading-rotate {
      100% {
        transform: rotate(1turn);
      }
    }
  }
}
</style>
