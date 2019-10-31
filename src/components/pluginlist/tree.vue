<template>
<div class="plugin-type el-plugin-type">
    <div class="plugin-name">{{name}}插件</div>
    <p class="explain">本章节主要展示插件库中的相关图表插件。</p>
    <div class='plugin-item'>
        <div class="plugin-content el-plugin-14001">
               <tree1 /> 
        </div>
        <br>
        <div class="instruction-title-sec">HTML代码</div>
        <br>undefined<br>
        <div class="instruction-title-sec">JS代码</div>
        <br>undefined<br>
        <div class='plugin-explain'>
            <p class="instruction-title-sec">插件说明:</p>
            <br>
            <p class='explain'>这是本系统的一个Tree插件，可以通过CSS定制外观，指定文件树展开图标，可以自己定义展开／收缩事件、加载信息等。
                本插件可自定义配置项包括：字体颜色、选中颜色。</p>
        </div>
    </div>
</div>
</template>
<script>
import tree1 from '@/components/pluginlist/tree/tree1.vue'
export default {
  name: "tree",
  components:{
    tree1
  },
  methods: {
  },
  watch: {
  },
  data() {
    return { name:'树形插件' };
  },
}

</script>
<style>

</style>
