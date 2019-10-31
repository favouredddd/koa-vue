<template> 
  <div class="el-my-home">
    <div class="canvasct" :style="{'height':height+'px',width:width+'px'}" ref="name">
      <canvas class="canvas" :width="width" :height="height"></canvas>
    </div>
    <div class="footer">
      <div class="foot-img">
        <div class="imgct-left">
          <img :src="url_o">
        </div>
          <div class="imgct-right">
             <img :src="url_t">
          </div>
          </div>
          <div class="link-href">
              <div v-for="(i,key) in link_href" class="link-item" :class="{'border-none':key===0}">
                <router-link :to="i.route">{{i.content}}</router-link>
              </div>
          </div>
          <p>{{froms}}</p>
          <p>{{link_us}}</p>
          <p>{{cooperate}}</p>
        </div>
      </div>
</template>
<script>
export default {
  name: "Home",
  data:() => {
    return {
      height:window.innerHeight-80,
      width:window.innerWidth,
      link_href: [{
        content: '首页',
        route: '/home',
      }, {
        content: '插件',
        route: '/plugin_list',
      }, {
        content: '下载',
        route: '/plugin_download',
      }],
        url_o: require("../../static/imgs/qq.png"),
        url_t: require("../../static/imgs/alipay.png"),
      froms: '技术支持 By 雷创科技&web技术实验室 2017',
      link_us: 'qq交流群:    451626028',
      cooperate: 'MIT开源协议',
    }
  },
  methods: {},
  beforeMount() {
  },
 mounted() {
  },
}

</script>
<style>
.el-my-home {
  overflow-x: hidden;
}
.el-my-home .canvasct {
  width: 100%;
  position: relative;
  font-size: 0px;
}
.el-my-home .footer {
  background-color: #666;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 5% 0;
  font-size: 12px;
  color: #FFF;
}
.el-my-home .footer .foot-img {
  width: 300px;
  font-size: 0px;
  margin: 5px auto 20px;
  overflow-x: hidden;
}
.el-my-home .footer .foot-img .imgct-left {
  height: 200px;
  width: 140px;
  float: left;
}
.el-my-home .footer .foot-img .imgct-right {
  height: 200px;
  width: 140px;
  float: right;
}
.el-my-home .footer .foot-img img {
  width: 100%;
  height: 100%;
}
.el-my-home .footer .link-href {
  width: 300px;
  margin: 0 auto;
  overflow-x: hidden;
  margin-bottom: 5px;
}
.el-my-home .footer .link-href .link-item {
  cursor: pointer;
  width: 100px;
  line-height: 15px;
  box-sizing: border-box;
  float: left;
  text-align: center;
  height: 15px;
  border-left: 2px solid #FFF;
}
.el-my-home .footer .link-href .link-item >a{
  color:#fff;
}
.el-my-home .footer .link-href .border-none {
  border: none!important;
}
.el-my-home .footer p {
  height: 20px;
  line-height: 20px;
  text-align: center;
}

</style>
