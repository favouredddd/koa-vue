<template>
  <div class="plugin-type el-plugin-type">
    <div class="plugin-name">{{name}}插件</div>
    <div class='plugin-item'>
      <div class="plugin-content">
        <div class="select-Wrap" :style="getHeight">
          <div class="information" :class="{'active':show===true?true:false}" @click="showList">
            <span class="placehoder" v-show="none">请选择</span>
            <span>{{value}}</span>
          </div>
          <transition name="change" mode="out-in">
            <div class="selection" v-show="show">
              <li v-for="(item,index) in information" class="information-list" @click="check(item)" :class="{'selected':item.check}">
                <span>{{item.txt}}</span>
              </li>
            </div>
          </transition>
        </div>
      </div>
      <div class='plugin-explain'>
        <p>插件说明:</p>
        <p class='explain'>这是一个选择输入插件，具有较高的自定义性 ，可以改进搜索功能
          本插件可自定义配置项包括：选中颜色、字体颜色。</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "selection",
  data() {
    return {
      show: false,
      name: "选择器",
      value: '',
      information: [
        { txt: "北京市", check: false },
        { txt: "上海市", check: false },
        { txt: "广东省", check: false },
        { txt: "深圳市", check: false },
        { txt: "成都市", check: false },
        { txt: "重庆市", check: false },
        { txt: "沈阳市", check: false }
      ],
    }
  },
  methods: {
    showList() {
      let me = this;
      me.show = !me.show;
    },
    check(item) {
      let me = this;
      me.information.forEach(i => {
        i.check = false;
      })
      item.check = true;
      me.value = item.txt;
      me.show = false;
    }
  },
  computed: {
    getHeight() {
      return { height: (this.information.length + 1) * 32 + 20 + 'px' };
    },
    none() {
      return !this.value
    }
  },
  mounted() {}
}

</script>
<style scoped lang="less">
.select-Wrap {
  width: 200px;
  left: 0;
  top: 0;
  position: relative;
  margin: 0 auto;

  .information {
    &:hover {
      border: 1px solid #5cadff;
    }

    transition:all .2s ease-in-out;
    border: 1px solid #d7dde4;
    border-radius: 5px;
    color: #657180;
    font-size: 14px;
    text-indent: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 32px;
    height: 32px;
  }

  .active {
    border: 1px solid #5cadff;
    box-shadow: 0 0 0 2px rgba(51, 153, 255, .2);
  }
  .change-leave-active{
    animation: slides .3s;
  }
  .change-enter-active{
    animation: slides .3s reverse;
  }
  @keyframes slides {
    0% {
      opacity: 1;
      transform-origin: 0 0;
      transform: scaleY(1);
    }
    100% {
      opacity: 0;
      transform-origin: 0 0;
      transform: scaleY(0.8);
    }
  }
  .selection {
    transform:center top;
    position: absolute;
    top: 40px;
    width: 200px;
    height: auto;
    font-size: 14px;
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, .2);

    .information-list {
      transform-origin: center top;
      transition: background .2s ease-in-out;
      cursor: pointer;
      padding-left: 20px;
      list-style-type: none;
      height: 30px;
      line-height: 30px;

      &:hover {
        background-color: #f3f3f3;
      }
    }

    .selected {
      background-color: rgba(51, 153, 255, .9) !important;
      color: #fff;
    }
  }
}

</style>
