<template>
  <div class="nd-plugin-location-box">
    <div class="nd-plugin-location-country">
      <span>当前省份:{{check}}</span>
    </div>
    <div class="nd-plugin-location-popular">
      <span class="nd-plugin-location-star"></span>
      <span>热门省份</span>
    </div>
    <ul class="nd-plugin-location-popularlist" style="height: 99px;">
      <li v-for="(i,index) in hot">
        <div @click="changeHot(i)">{{i.txt}}</div>
      </li>
    </ul>
    <div v-for="(i,index) in city">
      <div class="nd-plugin-location-letter" v-if="i.city.length">
        <div id="nd-plugin-location-A">{{i.key}}</div>
      </div>
      <div class="nd-plugin-location-provicesbox">
        <div class="nd-plugin-location-provices" v-for="(item,ind) in i.city" @click="changeSelect(item,ind)">
          <div name="安徽省">{{item.name}}</div>
          <span class="nd-plugin-location-checked" v-show="item.check"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
let province = {
  A: [{
    name: '安徽省',
  }, {
    name: '澳门特别行政区'
  }],
  B: [{
    name: '北京市'
  }],
  C: [{
    name: '重庆市'
  }],
  D: [],
  E: [],
  F: [{
    name: '福建省'
  }],
  G: [{
    name: '甘肃省'
  }, {
    name: '广东省'
  }, {
    name: '广西壮族自治区'
  }, {
    name: '贵州省'
  }],
  H: [{
    name: '海南省'
  }, {
    name: '河北省'
  }, {
    name: '黑龙江省'
  }, {
    name: '河南省'
  }, {
    name: '湖北省'
  }, {
    name: '湖南省'
  }],
  I: [],
  J: [{
    name: '江苏省'
  }, {
    name: '江西省'
  }, {
    name: '吉林省'
  }],
  K: [],
  L: [{
    name: '辽宁省'
  }],
  M: [],
  N: [{
    name: '内蒙古'
  }, {
    name: '宁夏回族自治区'
  }],
  O: [],
  P: [],
  Q: [{
    name: '青海省'
  }],
  R: [],
  S: [{
    name: '陕西省'
  }, {
    name: '山东省'
  }, {
    name: '上海市'
  }, {
    name: '山西省'
  }, {
    name: '四川省'
  }],
  T: [{
    name: '台湾省'
  }, {
    name: '天津市'
  }],
  U: [],
  V: [],
  W: [],
  X: [{
    name: '香港特别行政区'
  }, {
    name: '新疆维吾尔族自治区',
  }, {
    name: '西藏自治区'
  }],
  Y: [{
    name: '云南省'
  }],
  Z: [{
    name: '浙江省'
  }]
}
let city = Object.keys(province).map(i => {
	province[i].forEach(i=>{
		i.check=false;
	});
  return { key: i, city: province[i] };
});
export default {
  name: "address1",
  data() {
    return {
      city: city,
      check:"青海",
      hot: [
        { txt: "北京" },
        { txt: "重庆" },
        { txt: "四川" },
        { txt: "江西" },
        { txt: "青海" },
        { txt: "重庆" },
        { txt: "江苏" },
        { txt: "天津" }
      ]
    }
  },
  methods:{
  	changeHot(item){
  		console.log(item)
  		this.check=item.txt;
  	},
  	changeSelect(item){
  		let me=this;
  		me.city.forEach(i=>{
  			i.city.forEach(j=>{
  				j.check=false;
  			})
  		});
  		item.check=true;
  	}
  }
}

</script>
<style>
.nd-plugin-location-box {
  position: relative;
  left: 0px;
  right: 0px;
  width: 100%;
  background-color: #f3f8f8;
  font-size: 12px!important;
}

.nd-plugin-location-country {
  height: 26px;
  line-height: 26px;
  text-indent: 10px;
  background-color: #ffffff;
}

.nd-plugin-location-popular {
  height: 26px;
  line-height: 26px;
}

.nd-plugin-location-popular span {
  color: #757575;
}

.nd-plugin-location-star {
  display: inline-block;
  position: relative;
  top: 2px;
  margin-left: 12px;
  margin-right: 6px;
  width: 0;
  height: 0;
  border-left: 4px solid #757575;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-radius: 6px;
  transform: rotate(90deg);
}

.nd-plugin-location-star:before {
  content: '';
  position: absolute;
  left: -4px;
  top: -6px;
  width: 0;
  height: 0;
  border-left: 4px solid #757575;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-radius: 6px;
  transform: rotate(70deg);
}

.nd-plugin-location-star:after {
  content: '';
  position: absolute;
  left: -4px;
  top: -6px;
  width: 0;
  height: 0;
  border-left: 4px solid #757575;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-radius: 6px;
  transform: rotate(-70deg);
}

.nd-plugin-location-popularlist {
  padding: 0;
  margin: 0;
  height: 124px;
  background-color: #ffffff;
}

.nd-plugin-location-popularlist li {
  list-style: none;
  display: inline-block;
  width: 33%;
  //text-align: center;
}

.nd-plugin-location-popularlist div {
  width: 66px;
  height: 20px;
  line-height: 20px;
  margin: auto;
  margin-top: 8px;
  border: 1px solid #5a8dba;
  text-align: center;
  font-size: 14px;
  border-radius: 20px;
}

.nd-plugin-location-letter {
  height: 26px;
  line-height: 26px;
  color: #457eb1;
  text-indent: 10px;
}

.nd-plugin-location-provicesbox {
  background-color: #ffffff;
}

.nd-plugin-location-provices {
  position: relative;
  height: 40px;
  line-height: 40px;
  background-color: #ffffff;
  text-indent: 10px;
}

.nd-plugin-location-provices div {
  margin-left: 10px;
  margin-top: 1px;
  border-bottom: 1px solid #f3f8f8;
}

.nd-plugin-location-checked {
/*  display: none;*/
  position: absolute;
  right: 50px;
  top: 20px;
  width: 5px;
  height: 1px;
  background-color: #db3381;
  transform: rotate(45deg);
}

.nd-plugin-location-checked:after {
  content: '';
  position: absolute;
  left: 0px;
  top: -5px;
  width: 10px;
  height: 1px;
  background-color: #db3381;
  transform: rotate(90deg);
}

.nd-plugin-location-letterlist {
  position: fixed;
  top: 110px;
  right: 0px;
  padding: 0;
  width: 50px;
  list-style: none;
  text-align: center;
}

.nd-plugin-location-letterlist li {
  padding-left: 6px;
  padding-top: 6px;
}

.nd-plugin-location-letterlist a {
  text-decoration: none;
  color: #66d9ef;
}

</style>
