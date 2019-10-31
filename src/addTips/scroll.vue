<template>
    <div class="el-wrap" ref="wrap">
      <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue'
const cc={
  name: 'scroll',
  mounted(){
    let me=this;
    me.getHeight();
    console.log(me.$emit);
    me.$emit('aaa',me.y);
  },
  data() {
    return {y:0}
  },
  methods:{
     getY(){
      
    },
    scroll(){

    },
    getHeight(){
        let me=this;
       let y=window.getComputedStyle(me.$refs.wrap).height;
      me.$set(this,"y",parseInt(y));
    }
  }
};
Vue.component("scroll",cc)
export default cc;

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-wrap{
   overflow-y: auto; 
}
</style>
