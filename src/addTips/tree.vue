<template>
  <div class="item">
    <div class="ct">
      <div class="input" v-bind:class="{check:names.click}" @click="check"></div>
      <span class="txt" @click="click">{{names.txt}}</span>
    </div>
    <div v-for="i in names.arr" v-show="i.show">
      <tree :names="i"></tree>
    </div>
  </div>
</template>
<script>
export default {
  name: "tree",
  props: ["names"],
  methods: {
    click: function() {
      var me = this;
      if (me.names.arr) {
        me.names.arr.forEach(i => {
          i.show = !i.show;
        })
      }
    },
    check: function() {
      var me = this;
      me.names.click = !me.names.click;
      if (me.names.arr) {
        me.showall.call(me, me.names.click, me.names.arr);
      }
    },
    showall: function(flag, arr) {
      var me = this;
      arr.forEach(i => {
        if (i.arr) {
          me.showall.call(me, flag, i.arr);
        }
        i.click = flag;
      })
    }
  }
}

</script>
<style>
.el-tree{
	user-select: none;
}
.el-tree .content .item {
  cursor: pointer;
  padding: 2px 0px;
  padding-left: 20px;
}

.el-tree .content .ct {
  overflow: hidden;
  width: 160px;
  padding: 2px 0px;
  position: relative;
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
