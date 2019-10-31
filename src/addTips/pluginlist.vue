<template>
  <div class="plugin-list el-plugin-list" style="getHight">
    <ul class="plugin-types" :class="{'shows':show}">
      <li v-for="i in pluginList" @click="noSHow">
        <router-link class="plugin-kind" :to="i.path" style="color:#000" active-class="checked">
          {{i.name}}
        </router-link>
        </transition>
      </li>
    </ul>
    <div class="plugin-kind-list">
      <transition name="fade" mode="in-out">
        <router-view>
        </router-view>
      </transition>
    </div>
    <div class="clear"></div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: "pluginList",
  data: () => {
    return {
      route_height: '',
      pluginList: [{
        name: "插件使用说明",
        path: "/vue/pluginList/instruction",
        active: true
      }, {
        name: "上传文件",
        path: "/vue/pluginList/upload",
        active: false
      }, {
        name: "缓冲动画",
        path: "/vue/pluginList/buffering",
        active: false
      }, {
        name: "轮播图",
        path: "/vue/pluginList/carousel",
        active: false
      }, {
        name: "分页",
        path: "/vue/pluginList/paging",
        active: false
      }, {
        name: "菜单树",
        path: "/vue/pluginList/tree",
        active: false
      },{
        name: "图片放大",
        path: "/vue/pluginList/imgShow",
        active: false
      },{
        name: "自动补全",
        path: "/vue/pluginList/inputAuto",
        active: false
      },{
        name: "选择框",
        path: "/vue/pluginList/checkBox",
        active: false
      }, {
        name: "日期选择",
        path: "/vue/pluginList/dateInput",
        active: false
      }, {
        name: "折叠",
        path: "/vue/pluginList/foldCollapse",
        active: false
      }, {
        name: "进度条",
        path: "/vue/pluginList/progress",
        active: false
      }, {
        name: "开关",
        path: "/vue/pluginList/switcher",
        active: false
      }, {
        name: "地址",
        path: "/vue/pluginList/address",
        active: false
      }],
    }
  },
  computed: { ...mapState({ show: 'show' }),
    getHight() {
      let height = "100vh";
      if (window.innerWidth > 800) {
        height = 'auto'
      }
      return { 'height': height, 'position': 'relative' }
    }
  },
  methods: {
    noSHow() {
      var me = this;
      this.$store.commit("noShow");
    }
  },
  beforeMount() {},
  mounted: function() {
    let width = this.$store.state.fontSize * 14;
    if (window.innerWidth > 800) {
      if (document.querySelector(".plugin-content")) {
        width = parseInt(window.getComputedStyle(document.querySelector(".plugin-content")).width);
      }
    }
    this.$store.commit("setWidth", { width: width });
  }
}

</script>
