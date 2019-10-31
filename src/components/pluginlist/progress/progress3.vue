<template>
  <div class="el-svg-1">
    <div class="content">
      <div class="ct">
        <div class="svg">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="200" viewBox="0,0,200,200">
            <path :d="getD" :stroke="process_all_color" stroke-width="10" style="fill-opacity:0;" />
            <path :d="getD" :stroke="process_percent_color" stroke-width="10" :style="getStyle" />
          </svg>
        </div>
        <div class="num">
          {{100*per/10}}%
        </div>
        <div class="input">
          <div class="plus" @click="add">+</div>
          <div class="dele" @click="dele">-</div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "progress3",
  data() {
    return {
      r: 90,
      name: '圆环进度条',
      proBar: 0.9,
      r1: Math.PI * 2 * 90 / 10,
      r2: Math.PI * 2 * 90,
      proR: 90,
      percent: true,
      per: 1,
      process_all_color: '#0f0',
      process_percent_num_color: '#ffffff',
      process_percent_color: '#4A98FF',
      process_bg_color: '#DDDDDD'
    }
  },
  methods: {
    add() {
      if (this.per < 10) {
        this.per += 1;
        this.r1 = this.per / 10 * Math.PI * 2 * this.r
      }
    },
    dele() {
      if (this.per >= 1)
        this.per -= 1;
      this.r1 = this.per / 10 * Math.PI * 2 * this.r
    }
  },
  computed: {
    getD() {
      let me = this;
      return `M 100,100 m0,-${me.proR} a ${me.proR},${me.proR},0,1,1,0,${2*me.proR}  a ${me.proR},${me.proR},0,1,1,0,${-2*me.proR}`;
    },
    getStyle() {
      let me = this;
      return { 'fill-opacity': 0, 'stroke-dasharray': me.r1 + 'px,' + me.r2 + 'px', 'stroke-dashoffset': '0px', 'transition': 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s, stroke-width 0.06s ease 0.3s', 'stroke-linecap': 'round' }
    }
  }
}

</script>
<style scoped lang="less">
.el-svg-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .content {
    width: 350px;
    display: flex;
    justify-content: center;

    .ct {
      position: relative;
      width: 200px;

      .svg {
        vertical-align: middle;
        display: inline-block;
        font-size: 0;
      }

      .num {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 200px;
        line-height: 200px;
        text-align: center;
        font-size: 40px;
      }

      .input {
        font-size: 0;
        margin: 20px auto;
        width: 180px;
        cursor: pointer;

        .plus,
        .dele {
          height: 30px;
          line-height: 30px;
          font-size: 20px;
          text-align: center;
          float: left;
          width: 40px;
          margin-left: 30px;
          border: 1px solid #fafafa;
          box-shadow: 2px 2px 10px rgba(22, 22, 22, .1)
        }
      }
    }
  }
}
</style>
