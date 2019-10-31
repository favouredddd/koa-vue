<template>
  <div class="el-tree">
    <div class="content">
      <div class="item" :style="{maxHeight:maxH+'px'}" :class="{wrap:!myname.show}">
        <div class="ct" :class="{root:myname.root}">
          <div class="input" :class="{check:myname.click}" @click="check"></div>
          <span class="txt" @click="click">{{myname.txt}}</span>
        </div>
        <div v-for="i in myname.arr">
          <tree1 :names="i" @check="update"></tree1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
let mydata = {
  click: false,
  txt: "root",
  show: true,
  root: true,
  arr: [{
    click: false,
    txt: "parent-1",
    show: false,
    arr: [{
      click: false,
      txt: "child-1",
      show: false,
      arr: [{
        click: false,
        txt: "child-1-1",
        show: false
      }, {
        click: false,
        txt: "child-1-2",
        show: false
      }]
    }, {
      click: false,
      txt: "child-2",
      show: false,
      arr: [{
        click: false,
        txt: "child-2-1",
        show: false
      }]
    }, {
      click: false,
      txt: "child-3",
      show: false
    }, {
      click: false,
      txt: "child-4",
      show: false
    }]
  }, {
    click: false,
    txt: "parent-2",
    show: false,
    arr: [{
      click: false,
      txt: "child-2-1",
      show: false
    }]
  }, {
    click: false,
    txt: "parent-3",
    show: true
  }, {
    click: false,
    txt: "parent-4",
    show: true
  }]
};
export default {
  name: "tree1",
  props: ["names"],
  methods: {
    update(d) {
      let me = this;
      if (!d) {
        me.myname.click = false;
        me.$emit("check", false);
      } else {
        let flag;
        if (me.myname.arr) {
          flag = me.myname.arr.every(i => i.click);
          if (flag) {
            me.myname.click = true;
            me.$emit("check", true);
          } else {
            me.$emit("check", false);
          }
        }
      }
    },
    getHeight(item) {
      let me = this;
      let d = 1;
      if (item.arr) {
        item.arr.forEach(i => {
          d += me.getHeight(i);
        });
      }
      return d;
    },
    click: function() {
      let me = this;
      me.c = 1;
      me.myname.show = !me.myname.show;
    },
    check: function() {
      let me = this;
      me.myname.click = !me.myname.click;
      if (me.myname.arr) {
        me.showall.call(me, me.myname.click, me.myname.arr);
      }
      me.$emit("check", me.myname.click);
    },
    showall: function(flag, arr) {
      let me = this;
      arr.forEach(i => {
        if (i.arr) {
          me.showall.call(me, flag, i.arr);
        }
        i.click = flag;
      })
    }
  },
  watch: {
    c(o, n) {
    }
  },
  data() {
    let me = this;
    let tem=me.names;
    if (!tem) {
      tem = mydata;
    }else{
      tem=me.names;
    }
    return { maxH: me.getHeight(tem) * 28, myname:tem, c: 1 };
  },
  mounted() {
  }
}

</script>
<style>
.el-tree {
  user-select: none;
}

.el-tree .content .item {
  cursor: pointer;
  padding: 2px 0px;
  padding-left: 20px;
  overflow: hidden;
  transition: max-height .5s;
}

.el-tree .content .wrap {
  max-height: 24px !important;
  max-height: 24px;
}

.el-tree .content .ct {
  overflow: hidden;
  width: 160px;
  padding: 2px 0px;
  position: relative;
  padding-left: 20px;
}

.el-tree .content .root {
  display: none !important;
}

.el-tree .content .ct .input {
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border: 1px solid #d9d9d9;
  float: left;
  margin-right: 5px;
}

.el-tree .content .ct .check {
  /*background-color: #1890ff;*/
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-tree .content .ct .check:after {
  display: block;
  position: absolute;
  content: "";
  /*  border: 2px solid #fff;
    border-top: none;
    border-right: none;
    left:3px;
    bottom: 10px;*/
  background-color: #1890ff;
  width: 14px;
  height: 14px;
  /*transform: rotate(-45deg);*/
}

.el-tree .content .ct span {
  display: block;
  box-sizing: border-box;
  text-align: center;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  width: 80px;
  float: left;
}

.el-tree .content .ct span:hover {
  background-color: #bae7ff;
}

.el-tree {
  display: flex;
  justify-content: center;
}

.el-tree .content {
  width: 200px;
}

</style>
