<template>
  <!-- 所有弹窗必须在shadebox下 -->
  <div class="shadebox">
    <!-- 弹框综合预览 -->
    <div class="modalbox" style="display:block;">
      <!-- 弹窗上半部分背景(modalheader默认背景，modalheader-img奖品兑换成功背景)-->
      <div class="modalheader modalheader-img" :style="imagePadding">
        <!-- close关闭按钮 -->
        <div class="close" @click="handleClose"></div>

        <!-- 兑换奖品的logo -->
        <img
          class="prize-logo"
          style="max-width:100%;max-height:100%;width:auto;height:auto;"
          :src="image"
          v-if="image"
        />
      </div>

      <div class="modal-textbox" style="padding-bottom:0.4rem">
        <!-- modalTip中间提示文字 -->
        <div class="modalTip" style="overflow-wrap: break-word;text-align:left;text-index:30px;line-height: 1.2;">
          <slot name="content"></slot>
        </div>

        <!-- cdk页面文字 -->

        <!-- commonbtn按钮基础样式和默认颜色,btngreen优先控制按钮颜色(按钮样式在button文件) -->
        <div :class="buttonClass" @click="handleButtonClick" v-if="isShowButton">
          <span>{{buttonContent}}</span>
        </div>
        <!-- footer弹框底部文字的基础样式，footer-arrows添加右箭头 -->
        <div v-if="footStr" class="footer footer-arrows">
          <a @click="handleBottomTextClick">{{footStr}}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isShowButton: {
      type: Boolean,
      default () {
        return true
      }
    },
    image: {
      type: String,
      default () {
        return ''
      }
    },
    footStr: {
      type: String,
      default () {
        return ''
      }
    },
    buttonColor: {
      type: String,
      default () {
        return 'green'
      }
    },
    buttonContent: {
      type: String,
      default () {
        return '确认'
      }
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    },
    handleButtonClick () {
      this.$emit('buttonClick')
    },
    handleBottomTextClick () {
      this.$emit('bottomTextClick')
    }
  },
  computed: {
    imagePadding () {
      return this.image === '' ? { padding: '0!important' } : {}
    },
    buttonClass () {
      return `commonbtn btn${this.buttonColor}`
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~styles/views/medicalGame/common/dialog";
</style>
