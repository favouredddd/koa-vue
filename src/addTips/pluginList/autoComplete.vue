<template>
  <div class="plugin-type el-plugin-type">
    <div class="plugin-name">{{name}}插件</div>
    <div class='plugin-item'>
      <div class="plugin-content el-plugin-09001">
        <div class="inputAuto">
          <div class="el-plugin-input">
            <div class="inputAuto">
              <div class="wrap">
                <input type="text" class="input" spellcheck="false" @input="add" v-model="value" @focus="focus" @blur="blur">
              </div>
              <div class="infor" :class="{'show':show}" :style="getHeight">
                <li v-for="(i,index) in results" :class="{'check':i.check}" @click="check(index,i)">{{i.txt}}</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='plugin-explain'>
        <p>插件说明:</p>
        <p class='explain'>这是一个输入框自动补全插件，具有较高的自定义性 ，可以改进搜索功能，搜索框输入时，可以智能补全搜索内容。
          本插件可自定义配置项包括：选中颜色、字体颜色。</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "inputAutoA",
  data() {
    return {
      name: "自动补全",
      value: '',
      show: false,
      inner: false,
      information: [
        { txt: 1, check: false },
        { txt: 12, check: false },
        { txt: 13, check: false },
        { txt: 11, check: false },
        { txt: 2, check: false },
        { txt: 4, check: false },
        { txt: 4, check: false }
      ],
      index: 0,
      results: []
    }
  },
  methods: {
    focus() {
      this.inner = true;
    },
    blur() {
      this.inner = false;
    },
    add(e) {
      this.$set(this, "results", []);
      if (this.value === '') {
        this.show = false;
        return;
      }
      let regExp = new RegExp('(' + this.value + ')', 'ig');
      let tem = regExp;
      this.results = this.information.filter(i => {
        let result = regExp.test(i.txt);
        regExp = tem;
        return result;
      });
      if (this.results.length) {
        this.show = true;
        this.index = 0;
        this.update();
      } else {
        this.show = false;
      }
    },
    check(index, i) {
      this.value = i.txt;
      this.show = false;
    },
    keyDown(code) {
      if (!this.show) {
        return;
      }
      if (code === 13) {
        this.value = this.results[this.index].txt
        this.show = false;
        return;
      }
      if (code !== 40 && code !== 38) {
        return;
      }
      let add;
      if (code === 38) {
        add = -1;
      }
      if (code === 40) {
        add = 1;
      }
      this.index = (this.index + add + this.results.length) % this.results.length;
      this.update();
    },
    update() {
      this.results.forEach(i => {
        i.check = false;
      });
      this.results[this.index].check = true;
    }
  },
  computed: {
    getHeight() {
      if (this.show) {
        return { "height": this.results.length * 40 + 2 + 'px' };
      }
      return { "height": 0 + 'px' };
    }
  },
  mounted() {
    window.addEventListener("keydown", (e) => { this.keyDown(e.keyCode) }, false);
  }
}

</script>
<style>
.inputAuto {
  width: 200px;
  margin: 0 auto;
  min-height: 200px !important;
  position: relative;
}

.inputAuto .border {
  border: 1px solid #409eff !important;
}

.input-wrap {}

.inputAuto .input:focus {
  border-color: #66afe9;
  outline: 0;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
}

.inputAuto .input {
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  font-size: 12px;
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #d8dce5;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #5a5e66;
  display: inline-block;
  height: 40px;
  line-height: 1;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color .3s cubic-bezier(.645, .045, .355, 1);
  transition: border-color .3s cubic-bezier(.645, .045, .355, 1);
  width: 100%;
}

.inputAuto .infor {
  overflow-y: hidden;
  z-index: 99999 !important;
  cursor: pointer;
  transition: all 1s ease;
  /*display: none;*/
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  list-style-type: none;
  position: absolute;
  z-index: 1001;
  border: 1px solid #dfe4ed;
  border-radius: 4px;
  background-color: #fff;
  margin: 5px 0;
  height: 0px;
  transition: height .5s;
  box-sizing: border-box;
  border: none;

}

.inputAuto .show {
  border: 1px solid #d8dce5;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
}

.inputAuto .infor li {
  padding-left: 15px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}

.inputAuto .infor .check {
  background-color: #f5f7fa !important;
}

</style>
