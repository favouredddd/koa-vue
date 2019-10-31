<template>
  <div class="el-img">
    <scroll v-on:aaa="setEnd">
      <div  v-for="(i,index) in imgs" @click="scroll(i,index)" class="imgItem" :key="index">
        <img :src="i.src" >
      </div>
    </scroll>
  </div>
</template>
<script>
import scroll from './scroll';
export default {
  name: 'imgShow',
  data() {
    return {
      now:0,
      end:0,
      imgs: [
      { src: 'https://nodom.store/assets/img/imgs/1.jpg' }, 
      { src: 'https://nodom.store/assets/img/imgs/2.jpg' }, 
      { src: 'https://nodom.store/assets/img/imgs/3.jpg' }, 
      { src: 'https://nodom.store/assets/img/imgs/4.jpg' }, 
      { src: 'https://nodom.store/assets/img/imgs/1.jpg' }]
    }
  },
  methods: {
    scroll(){
      console.log(arguments);
    },
    setEnd(num){
      let me=this;
      me.end=num;
      alert(111);
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-img {
  overflow-y: auto;
}
.el-img .imgItem{
  width: 20rem;
  height:8rem;
  font-size: 0;
}
.el-img .imgItem>img{
  width: 100%;
  height:100%;
  display: inline-block;
}
</style>
