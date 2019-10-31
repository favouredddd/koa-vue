<template>
  <div>
    <div>
      <div class="con-header">
        <img class="logo" :src="img" @click="showLogin">
        <ul>
          <li v-for="i in list">
            <router-link :to="i.name" active-class="active">
              {{i.route}}
            </router-link>
          </li>
          <li style="padding:0">
            <span class="app" @click="changeShow"></span>
          </li>
        </ul>
      </div>
    </div>
    <div style="width:100%;overflow-x: hidden;position: relative;">
      <transition name="fade" mode="in-out">
        <router-view></router-view>
      </transition>
    </div>
    <div class="el-show-login" v-show="login">
    <div class="contentss" style="position: static">
        <div class="wrap">
            <div class="header">
              <span class="text">管理员</span>
              <div class="delete" @click="noShow"></div>
            </div>
            <div class="item">
                <div class="span">账户</div>
                <input class="word" v-model="key"/>
                <div class="clear"></div>
            </div>
            <div class="item">
                <div class="span">密码</div>
                <input class="word" v-model="values" type="password"/>
                <div class="clear"></div>
            </div>
            <div class="item">
              <div class="ensure" @click="ensure">确认</div>
            </div>
        </div>
    </div>
</div>
  </div>
</template>
<script>
  import ajax from './util/http.js';
var homelist = [
  { name: '/vue/home', route: '主页' },
  { name: '/vue/pluginList', route: '插件列表' },
  { name: '/vue/plugin_down', route: '配置并下载' }
]
export default {
  name: 'App',
  data: () => ({
    login:false,
    name: "",
    x: 1,
    list: homelist,
    key:'',
    values:'',
    img: require("../../static/imgs/logo_top.png"),
    more: require("../../static/imgs/more.png"),
  }),
  computed: {},
  watch: {},
  methods: {
    showLogin(){
      this.login=!this.login;
    },
    noShow(){
      this.login=false;
    },
    ensure(){
      let data=new FormData();
      let params={key:this.key,value:this.values};
      Object.keys(params).forEach(i=>{
        data.append(i,params[i]);
      })
      ajax.post('/api/post',data).then(r=>{
        r=r.data;
        if(r.result){
          localStorage.setItem("token",r.token);
        }
      });
    },
    changeShow() {
      let show = this.$store.state.show;
      if (!show) {
        this.$store.commit("show");
      } else {
        this.$store.commit("noShow");
      }
    }
  }
}

</script>
<style>
.fade-enter {
  opacity: 0;
}

.fade-leave {
  opacity: 1;
}

.fade-enter-active {
  z-index: 100;
  transition: opacity .1s;
}

.fade-leave-active {
  opacity: 0;
  transition: opacity .2s;
  z-index: -100;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  user-select: none;
  margin: 0;
  padding: 0;
  font-family: 'PingFangSC', 'helvetica neue', 'hiragino sans gb', 'arial', 'microsoft yahei ui', 'microsoft yahei', 'simsun', 'sans-serif' !important;
}

/*#root{
  top:0;
  left:0;
  bottom: 0;
  right:0;
  position: fixed;
  overflow: hidden;
}*/
ul li {
  list-style: none;
}

a {
  text-decoration: none;
}

.font0 {
  font-size: 0px;
}

.font10 {
  font-size: 10px;
}

.font12 {
  font-size: 12px;
}

.font14 {
  font-size: 14px;
}

.font16 {
  font-size: 16px;
}

.font18 {
  font-size: 18px;
}

.font20 {
  font-size: 20px;
}

.font22 {
  font-size: 22px;
}

.font24 {
  font-size: 24px;
}

.font26 {
  font-size: 26px;
}

.fore-red {
  color: #d02200;
}

.fore-blue {
  color: #409EFF;
}

.fore-shallow-green {
  color: #EFF9EB;
}

.fore-green {
  color: #67c23a;
}

.fore-black {
  color: #000;
}

.fore333 {
  color: #333;
}

.fore666 {
  color: #666;
}

.fore999 {
  color: #999;
}

.fore-white {
  color: #FFF;
}

.fore008489 {
  color: #008489;
}

.fore-brown {
  color: #2f2222;
}

.clear {
  clear: both;
}

.router {
  width: 100%;
  overflow: hidden;
}

#root {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y: auto;
}

.con-header {
  position: relative;
  width: 100%;
  padding: 15px;
  height: 80px;
  background-color: #666;
  box-sizing: border-box;
}

.con-header .logo {
  height: 40px;
  vertical-align: top;
}

@media screen and (max-width: 800px) {
  .con-header {
    padding:1rem 0 1rem 1rem!important;
  }

  .con-header ul {
    padding-top: 0.6rem;
    margin-right: 2rem;
  }

  .con-header .app {
    position: absolute;
    display: block !important;
    right: 1.8rem;
    top: 1.3rem;
    width: 48px;
    height:28px;
    z-index: 9999;
    color: #fff;
    background-size: cover;
    background: url("../../static/imgs/more.png");
    background-position: center center;
  }
}

.con-header .app {
  display: none;
  background-size: cover;
}

.con-header ul {
  float: right;
  padding-top: 10px;
  color: #FFF;
  font-size: 12px;
}

.con-header ul li {
  float: left;
  padding-right: 15px;
  cursor: pointer;
}

.con-header ul li>a {
  text-decoration: none;
}

.con-header ul li>a {
  color: #fff;
}

.con-header ul .active {
  color: #ff6666;
}

@media screen and (max-width: 800px) {
  .con-config {
    padding: 5px 0px !important;
    min-width: 5rem !important;
    overflow-x: hidden !important;
  }
}

.con-config {
  padding: 10px 5px;
  overflow-x: hidden;
}

@media screen and (max-width: 800px) {
  .con-config .itemss {
    font-size: 12px;
    margin-left: 0.5px;
    padding: 0.25rem 1rem;
    width: 10rem;
    margin: 0 auto;
    font-size: 0px;
  }

  .con-config .itemss .span {
    vertical-align: top;
    border-radius: 2px;
    height: 30px;
    width: 4.4rem !important;
    text-align: center;
    line-height: 30px;
    display: inline-block;
    background-color: #ff8d00;
    color: #FFF;
    font-size: 12px;
    margin-right: 5px;
  }

  .con-config .itemss .input {
    margin-left: 1rem;
    cursor: pointer;
    vertical-align: top;
    height: 28px;
    width: 4rem;
    outline: none;
  }

  .con-config .itemss .input[type="color"] {
    margin-left: 1rem;
    cursor: pointer;
    vertical-align: top;
    height: 28px;
    width: 4rem;
    outline: none;
  }

  .con-config .itemss .input[type="number"] {
    margin-left: 1rem;
    cursor: pointer;
    vertical-align: top;
    height: 28px;
    width: 4rem;
    border: 1px solid #999;
    outline: none;
  }
}

@media screen and (min-width: 800px) {
  .con-config .itemss {
    font-size: 12px;
    padding: 5px 0;
    width: 250px;
    float: left;
    font-size: 0px;
  }

  .con-config .itemss .span {
    vertical-align: top;
    border-radius: 2px;
    height: 34px;
    width: 100px;
    text-align: center;
    line-height: 34px;
    display: inline-block;
    background-color: #ff8d00;
    color: #FFF;
    font-size: 12px;
    margin-right: 5px;
  }

  .con-config .itemss .input {
    box-sizing: border-box;
    cursor: pointer;
    vertical-align: top;
    height: 34px;
    padding: 2px;
    width: 4rem;
    outline: none;
  }
}

@media screen and (max-width: 800px) {
  .con-config .check {
    float: none !important;
    margin-left: 0px !important;
    padding: 0.25rem 1rem !important;
    width: 10rem !important;
    margin: 0 auto !important;
  }
}

.con-config .check {
  float: left;
  font-size: 12px;
  padding: 5px 0;
  width: 250px;
  font-size: 0px;
}

@media screen and (max-width: 800px) {
  .con-config .check .span {
    height: 34px !important;
    width: 4.4rem !important;
    line-height: 34px !important;
    margin-right: 20px !important;
  }
}

.con-config .check .span {
  text-align: center;
  vertical-align: top;
  border-radius: 2px;
  height: 34px;
  width: 100px;
  line-height: 34px;
  display: inline-block;
  background-color: #ff8d00;
  color: #FFF;
  font-size: 12px;
  margin-right: 5px;
}

.con-config .check .input {
  cursor: pointer;
  vertical-align: bottom;
  height: 30px;
  padding: 2px;
  height: 34px;
  box-sizing: border-box;
  margin-left: 0rem;
  width: 30px;
  outline: none;
}

@media screen and (max-width: 800px) {
  .chart {
    width: 14rem !important;
  }
}

.con-eusure {
  width: 223px;
  margin: 20px auto;
  overflow-x: hidden;
  font-size: 12px;
  text-align: center;
}

.con-eusure>div {
  cursor: pointer;
  background-color: #ff8d00;
  color: #FFF;
  height: 20px;
  padding: 5px 2px;
  border-radius: 3px;
  line-height: 20px;
}

.con-eusure .config-finish {
  float: left;
  text-align: center;
  width: 100px;
  margin: 0 auto;
}

.con-eusure .less {
  margin-right: 15px;
}

input[type="color"] {
  border: 1px solid #ccc;
}

</style>
