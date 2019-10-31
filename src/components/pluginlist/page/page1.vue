<template>
  <div class="pages">
    <div class="containers">
      <div class="pre" @click="pre"></div>
      <div class="pageBtn">
        <div v-for="i in pages" :class="{'check':i.check===true}" @click="goTo(i.txt)">{{i.txt}}</div>
      </div>
      <div class="next" @click="next"></div>
      <div class="jump" ><span>前往</span><input type="text" class="input" v-model="inputData"><span>页</span>
        <div class="ensures" @click="jump">GO</div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "page1",
  data() {
    return {
      all: 20,
      now: 1,
      index: 1,
      pages: [],
      inputData: ""
    }
  },
  methods: {
    getPage() {
      let me = this;
      let page = [];
      if (me.all <= 8) {
        for (let i = 1; i <= me.all; i += 1) {
          page.push({ check: false, txt: i });
        }
      } else {
        for (let i = 1; i <= 8; i += 1) {
          let tem = i;
          if (i === 8)
            tem = me.all;
          if (i === 7)
            tem = "...."
          page.push({ check: false, txt: tem });
        }
      }
      me.$set(me, 'pages', page);
    },
    pre() {
      let me = this;
      if (me.index <= 1)
        return;
      me.index -= 1;
      me.updataPage();
    },
    next() {
      let me = this;
      if (me.index === me.all) {
        return;
      }
      me.index += 1;
      me.updataPage();
    },
    updataPage() {
      let me = this;
      if (me.all <= 8) {
        me.pages[me.index - 1].check = true;
        me.updateCheck();
        return;
      }
      if (me.index < 6) {
        me.getPage();
        me.updateCheck();
        return;
      }
      if (me.index >= me.all - 4) {
        me.getEndPage();
        me.updateCheck();
        return;
      }
      if (me.index >= 6 && me.index < me.all - 4) {
        me.getMid(me.index);
        me.updateCheck();
      }
    },
    updateCheck() {
      let me = this;
      let index = me.index;
      if (index <= 5) {
        me.pages[index - 1].check = true;
      }
      if (index >= me.all - 4) {
        let d = me.index - (me.all - 4);
        me.pages[d + 3].check = true;
      }
      if (index > 5 && index < me.all - 4) {
        me.pages[3].check = true;
      }
    },
    jump() {
      let me=this;
      let d = parseInt(me.inputData);
      me.goTo(d);
    },
    goTo(d) {
      let me = this;
      if (d === '...' || d === me.index)
        return;
      let tem = me.index;
      if (tem > d) {
        me.index = d + 1;
        me.pre();
      } else {
        me.index = d - 1;
        me.next();
      }
    },
    getEndPage() {
      let me = this;
      let tems = [];
      for (let i = me.all; i >= me.all - 7; i -= 1) {
        let tem = i;
        if (i === me.all - 6) {
          tem = '...'
        }
        if (i === me.all - 7) {
          tem = 1;
        }
        tems.unshift({ txt: tem, check: false });
      }
      me.$set(me, 'pages', tems);
    },
    getMid(index) {
      let me = this;
      let tems = [{ txt: 1, check: false }, { txt: "...", check: false }]
      for (let i = -1; i <= 2; i += 1) {
        tems.push({ txt: i + index, check: false })
      }
      tems.push({ txt: "...", check: false })
      tems.push({ txt: me.all, check: false })
      me.$set(me, 'pages', tems);
    }
  },
  mounted() {
    let me = this;
    me.getPage();
    me.pages[0].check = true;
  }
}

</script>
<style>
.clear {
  clear: both;
  display: block;
}

.pages {
  height: 70px;
  overflow: auto;
}

.containers {
  width: 25rem;
  padding: 20px 0px;
  height: 30px;
}

.containers .pageBtn>div {
  margin-left: 3px;
  color: #999;
  text-align: center;
  border-radius: 50%;
  height: 18px;
  line-height: 18px;
  width: 18px;
  font-size: 12px;
  margin-top: 6px;
  float: left;
}

.containers .pageBtn .check {
  background-color: #5eaee3;
  color: #fff !important;
}

.containers .pageBtn:after {
  content: "";
  display: block;
  clear: both;
}

.containers>div {
  cursor: pointer;
  margin-right: 5px;
  float: left;

}

.containers .pre {
  margin-top: 6px;
  background: url("../../../assets/go_pre.png");
  background-size: cover;
  height: 18px;
  line-height: 18px;
  width: 18px;
  font-size: 12px;
}

.containers .next {
  margin-top: 6px;
  background: url("../../../assets/go_next.png");
  background-size: cover;
  height: 18px;
  line-height: 18px;
  width: 18px;
  font-size: 12px;
}

.containers .jump {
  font-size: 0;
}

.containers .jump>* {
  margin-right: 5px;
  font-size: 14px;
}

.containers .jump>span {
  height: 20px;
  line-height: 20px;
  display: inline-block;
}

.containers .jump>input {
  border: 1px solid #d8dce5;
  border-radius: 4px;
  outline: none;
  line-height: 1;
  width: 30px;
  padding: 5px;
  text-align: center;
}

.containers .jump .ensures {
  display: inline-block;
  text-align: center;
}

</style>
