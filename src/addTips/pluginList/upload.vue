<template>
<div class="plugin-type el-plugin-type">
    <div class="plugin-name">{{name}}插件</div>
    <div class='plugin-item'>
        <div class="plugin-content el-plugin-20001">
           <div class="content">
            <upload1/>
            </div>
        </div>
        </div>
        <div class='plugin-explain'>
            <p>插件说明:</p>
            <p class='explain'>这是一款上传图片与小文件的插件。</p>
        </div>
    <div class="plugin-name">{{uploads}}插件</div>
    <div class='plugin-item'>
        <div class="plugin-content el-plugin-20003">
           <div class="content">
            <upload2/>
        </div>
        </div>
        <div class='plugin-explain'>
            <p>插件说明:</p>
            <p class='explain'>这是一款大文件分片上传的插件</p>
        </div>
    </div>
</div>
</template>
<script>
import upload1 from '@/components/pluginlist/upload/upload1.vue'
import upload2 from '@/components/pluginlist/upload/upload2.vue'
export default {
  name: "upload",
 data() {
 	return{name:"文件上传",uploads:''}
  },
  components:{
  	upload1,
  	 	upload2
  }
}
</script>
<style>


</style>
