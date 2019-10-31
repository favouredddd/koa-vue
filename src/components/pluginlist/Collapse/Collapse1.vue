<template>
  <div class="wrap">
    <div class="list" v-for="(item,index) in lists">
      <p @click="show(item)" :class="{'noBottom':!item.show}">{{item.introduce}}</p>
      <div v-for="(i,ind) in item.lists" v-show="item.show" class="contentss">
        {{i}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Collapse1",
  data() {
    return {
      lists: [
        { introduce: "史蒂夫·乔布斯", show: false, lists: ["史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。"] },
        {
          introduce: "斯蒂夫·盖瑞·沃兹尼亚克",
          show: false,
          lists: ["斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。"]
        }, {
          introduce: "乔纳森·伊夫",
          show: false,
          lists: ["乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。"]

        }
      ]
    }
  },
  methods:{
  	show(i){
  		i.show=!i.show;
  	}
  }
}

</script>
<style scoped lang="less">
.wrap {
	width:200px;
	margin:0 auto;
  border: 1px solid #d7dde4;
  background-color: #f7f7f7;
  border-radius: 3px;
  border-bottom:none;
  .list {
  	border-bottom:1px solid #d7dde4;
    p {
      font-size: 12px;
      height: 20px;
      line-height: 20px;
      text-indent: 30px;
      color: #666;
      cursor: pointer;
      position: relative;
      border-bottom:1px solid #d7dde4;
    }
    .noBottom{
    	border-bottom:none;
    }
    .contentss{
    	transition: all 2s ease-in-out;
    	font-size: 12px;
    	text-indent:20px;

    }
  }
}

</style>
