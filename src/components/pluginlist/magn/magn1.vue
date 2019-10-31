<template>
    <div class="el-magn">
      <div class="left">
        <img :src="src1" >
        <div class="small" :style="{left:ls+'px',top:lt+'px',backgroundColor:color,opacity:opacity}"></div>
        <div class="event" @mousemove="move"></div>
      </div>
      <div class="right">
        <img :src="src2" :style="{left:left+'px',top:top+'px'}">
      </div>
      <div class="clear" style="clear:both"></div>
      <div>
        <input type="color" v-model="color">
      </div>
    </div>
</template>
<script>
  var src1=require("../../../assets/small.jpg");
  var src2=require("../../../assets/big.jpg");
  export default {
    name:"magn",
    data(){
      return {
        left:0,
        top:0,
        ls:0,
        lt:0,
        src1:src1,
        src2:src2,
        per:2,
        color:'#00ff00',
        opacity:0.2,
      };
    },
    methods:{
      move(e){
        var me=this;
        me.getX(e.offsetX);
        me.getY(e.offsetY);
        me.setImg();
      },
      getX(x){
        var me=this;
        if(x<me.width/me.per/2){
          me.ls=0;
          return ;
        }
        if(x>me.width-(me.width/me.per/2)){
          me.ls=me.width-(me.width/me.per);
          return ;
        }
        me.ls=x-me.width/me.per/2;
      },
      getY(y){
        var me=this;
        if(y<me.height/me.per/2){
          me.lt=0;
          return ;
        }
        if(y>me.height-(me.height/me.per/2)){
          me.lt=me.height-(me.height/me.per);
          return ;
        }
        me.lt=y-me.height/me.per/2;
      },
      setImg(){
        var me=this;
        me.left=-1*me.ls*me.per;
        me.top=-1*me.lt*me.per
      }
    },
    computed:{
      width(){
        return   200;
      },
      height(){
        return 200 ;
      }
    }
  }
</script>
<style>
.el-magn {
  width: 400px;
  height: 200px;
  margin: 0 auto;
  margin-top: 1rem;
}
.el-magn>div{
  overflow: hidden;
}
.el-magn .left {
  width: 50%;
  height: 100%;
  float: left;
  position: relative;
}

.el-magn .right{
  position: relative;
  width: 50%;
  height: 100%;
  float: left;
}
.el-magn .left>*{
  position: absolute;
}
.el-magn .left>img{
  width: 100%;
  height: 100%;
  top:0;
  left:0;
}
.el-magn .left .small{
  width:50%;
  height: 50%;
  z-index: 99;
}
.el-magn .left .event{
  z-index: 100;
  width: 100%;
  height: 100%;
  top:0;
  left:0;
}
.el-magn .right>img{
  position: absolute;
  width:200%;
  height: 200%;
}
</style>
