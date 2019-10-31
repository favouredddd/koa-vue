<template>
  <div class="plugin-page">
    <div>
      <div class="nd-plugin-paging">
        <span>共<span class="red total" >{{all}}</span>条记录</span>
        <span>共<span class="red allpage" >{{page}}</span>页</span>
        <span>当前第<span class="red page" >{{now}}</span>页</span>
        <div class="to-first" :class="{'can-not':now!==1}" @click="goStart">首页</div>
        <div class="to-prev "  :class="{'can-not':now!==page}" @click="goPre">上一页</div>
        <div class="to-next" @click="goNext">下一页</div>
        <div class="to-last" @click="goEnd">末页</div>
        <span>转到:</span>
        <input type="number">
        <div class="go-to">GO</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "page1",
  data() {
    return {
      all: 24,
      row: 5,
      now:1 ,
      page:5,
    }
  },
  methods: {
    goStart(){
      let me=this;
      if(me.now!==1)
          me.now=1;
        return ;
    },
    goNext(){
            let me=this;
      if(me.now!==me.row)
         me.now+=1;
    },
    goPre(){
            let me=this;
      if(me.now!==1){
         me.now-=1;
      }
    },
    goEnd(){
            let me=this;
      if(me.now!==me.row){
        me.now=me.row
      }
    }
  },
  mounted() {
    let me = this;
  }
}

</script>
<style>
/*分页插件*/
@media screen and (min-width: 800px) {
  .nd-plugin-paging {
    width: 600px;
  }
}
.nd-plugin-paging {
  /*float: right;*/
  height: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 12px;
  width: 700px;
}

.nd-plugin-paging div {
  display: inline-block;
  padding: 0px 8px;
  min-width: 20px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border: 1px solid #cdcdcd;
  border-radius: 3px;
  margin-left: 5px;
  cursor: pointer;
}

.nd-plugin-paging div:hover {
  color: #409efe;
}

.nd-plugin-paging .can-not {
  color: #999;
}

.nd-plugin-paging .active {
  background-color: #409efe;
}

.nd-plugin-paging input {
  width: 30px;
  height: 25px;
  margin-top: -2px;
  border: 1px solid #cdcdcd;
  border-radius: 3px;
  text-align: center;
}

.nd-plugin-paging input::-webkit-outer-spin-button,
.nd-plugin-paging input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.nd-plugin-paging span {
  margin-left: 10px;
}

.nd-plugin-paging .red {
  color: rgb(255, 0, 0);
  margin-left: 0;
  color: red;
}

</style>
