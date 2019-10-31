<template>
    <div class="el-tree">
      <div class="content">
        <tree :names="tree"></tree>
      </div>
    </div>
</template>
<script>
import Tree from './tree'
import Vue from "vue"
Vue.component("tree", Tree)
const data = {
  click: false,
  txt: "root",
  show: true,
  arr: [{
    click: false,
    txt: "parent-1",
    show: true,
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
      show: false
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
    show: true
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
  name: 'HelloWorld',
  component: {
    "tree": Tree
  },
  data() {
    return {
      tree: data,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
