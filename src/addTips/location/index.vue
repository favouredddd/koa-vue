<template>
  <div class="wrap"
       ref="wrap">
    <div class="betterScroll"
         ref="betterScroll">
      <div class="position-wrapper">
        <slot name="getSelection"></slot>
      </div>
      <div class="cityList">
        <div class="cityWrap"
             v-for="(i) in cityList"
             :key="i.code"
             ref="cityItem">
          <div class="weui-cells__title">{{i.title}}</div>
          <div class="weui-cells">
            <div class="weui-cell"
                 v-for="(item,index) in i.cityList"
                 :class="{'noBorder':index===i.cityList.length-1}"
                 :key="item.cityCode"
                 @tap=handleClick>{{item.cityName}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="slidebar">
      <ul class="slidebarWrap">
        <li v-for="(i,index) in cityAlpha"
            :key="i.code"
            :class="{'isSelected':i.selected}"
            @click="getPoint(index)">{{i.code}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BetterScroll from 'better-scroll'
export default {
  props: {
    keyword: {
      type: String,
      default () {
        return ''
      }
    },
    cities: {
      type: Array,
      default () {
        return [
          { cityCode: 140800, cityName: '运城', pinyin: 'yuncheng', bindCardType: 'city' },
          { cityCode: 370700, cityName: '潍坊', pinyin: 'weifang', bindCardType: 'city' },
          { cityCode: 440300, cityName: '深圳', pinyin: 'shenzhen', bindCardType: 'city' },
          { cityCode: 610200, cityName: '铜川', pinyin: 'tongchuan', bindCardType: 'city' },
          { cityCode: 450000, cityName: '广西壮族自治区', pinyin: 'guangxizhuangzuzizhiqu', bindCardType: 'city' },
          { cityCode: 510100, cityName: '成都', pinyin: 'chengdu', bindCardType: 'city' },
          { cityCode: 410100, cityName: '郑州', pinyin: 'zhengzhou', bindCardType: 'city' },
          { cityCode: 440500, cityName: '汕头', pinyin: 'shantou', bindCardType: 'city' },
          { cityCode: 330400, cityName: '嘉兴', pinyin: 'jiaxing', bindCardType: 'city' },
          { cityCode: 350200, cityName: '厦门', pinyin: 'shamen', bindCardType: 'city' },
          { cityCode: 230100, cityName: '哈尔滨', pinyin: 'haerbin', bindCardType: 'city' },
          { cityCode: 410200, cityName: '开封', pinyin: 'kaifeng', bindCardType: 'city' },
          { cityCode: 330200, cityName: '宁波', pinyin: 'ningbo', bindCardType: 'city' },
          { cityCode: 330784, cityName: '永康', pinyin: 'yongkang', bindCardType: 'city' },
          { cityCode: 210100, cityName: '沈阳', pinyin: 'shenyang', bindCardType: 'city' },
          { cityCode: 610600, cityName: '延安', pinyin: 'yanan', bindCardType: 'city' },
          { cityCode: 340100, cityName: '合肥', pinyin: 'hefei', bindCardType: 'city' },
          { cityCode: 220800, cityName: '白城', pinyin: 'baicheng', bindCardType: 'city' },
          { cityCode: 360100, cityName: '南昌', pinyin: 'nanchang', bindCardType: 'city' },
          { cityCode: 610100, cityName: '西安', pinyin: 'xian', bindCardType: 'city' },
          { cityCode: 610400, cityName: '咸阳', pinyin: 'xianyang', bindCardType: 'city' },
          { cityCode: 610800, cityName: '榆林', pinyin: 'yulin', bindCardType: 'city' },
          { cityCode: 610500, cityName: '渭南', pinyin: 'weinan', bindCardType: 'city' },
          { cityCode: 610700, cityName: '汉中', pinyin: 'hanzhong', bindCardType: 'city' },
          { cityCode: 610900, cityName: '安康', pinyin: 'ankang', bindCardType: 'city' },
          { cityCode: 611000, cityName: '商洛', pinyin: 'shangluo', bindCardType: 'city' },
          { cityCode: 610300, cityName: '宝鸡', pinyin: 'baoji', bindCardType: 'city' },
          { cityCode: 510400, cityName: '攀枝花', pinyin: 'panzhihua', bindCardType: 'city' },
          { cityCode: 211400, cityName: '葫芦岛', pinyin: 'huludao', bindCardType: 'city' },
          { cityCode: 320500, cityName: '苏州', pinyin: 'suzhou', bindCardType: 'city' },
          { cityCode: 320100, cityName: '南京', pinyin: 'nanjing', bindCardType: 'city' },
          { cityCode: 440100, cityName: '广州', pinyin: 'guangzhou', bindCardType: 'city' },
          { cityCode: 320581, cityName: '常熟', pinyin: 'changshu', bindCardType: 'city' },
          { cityCode: 130400, cityName: '邯郸', pinyin: 'handan', bindCardType: 'city' },
          { cityCode: 321200, cityName: '泰州', pinyin: 'taizhou', bindCardType: 'city' },
          { cityCode: 331000, cityName: '台州', pinyin: 'taizhou', bindCardType: 'city' },
          { cityCode: 220999, cityName: '吉林省直', pinyin: 'jilinshengzhi', bindCardType: 'city' },
          { cityCode: 659999, cityName: '新疆生产建设兵团', pinyin: 'xinjiangshengchanjianshebingtuan', bindCardType: 'city' },
          { cityCode: 420100, cityName: '武汉', pinyin: 'wuhan', bindCardType: 'city' },
          { cityCode: 620000, cityName: '甘肃省', pinyin: 'gansusheng', bindCardType: 'city' },
          { cityCode: 430100, cityName: '长沙', pinyin: 'changsha', bindCardType: 'city' },
          { cityCode: 350100, cityName: '福州', pinyin: 'fuzhou', bindCardType: 'city' },
          { cityCode: 370200, cityName: '青岛', pinyin: 'qingdao', bindCardType: 'city' },
          { cityCode: 441900, cityName: '东莞', pinyin: 'dongguan', bindCardType: 'city' },
          { cityCode: 431021, cityName: '桂阳县', pinyin: 'guiyangxian', bindCardType: 'city' },
          { cityCode: 220500, cityName: '通化', pinyin: 'tonghua', bindCardType: 'city' },
          { cityCode: 220100, cityName: '长春', pinyin: 'changchun', bindCardType: 'city' },
          { cityCode: 130100, cityName: '石家庄', pinyin: 'shijiazhuang', bindCardType: 'city' },
          { cityCode: 330523, cityName: '安吉县', pinyin: 'anjixian', bindCardType: 'city' },
          { cityCode: 320200, cityName: '无锡', pinyin: 'wuxi', bindCardType: 'city' },
          { cityCode: 230600, cityName: '大庆', pinyin: 'daqing', bindCardType: 'city' },
          { cityCode: 320585, cityName: '太仓', pinyin: 'taicang', bindCardType: 'city' },
          { cityCode: 370100, cityName: '济南', pinyin: 'jinan', bindCardType: 'city' },
          { cityCode: 440600, cityName: '佛山', pinyin: 'foshan', bindCardType: 'city' },
          { cityCode: 330600, cityName: '绍兴', pinyin: 'shaoxing', bindCardType: 'city' },
          { cityCode: 350099, cityName: '福建', pinyin: 'fujian', bindCardType: 'city' },
          { cityCode: 610099, cityName: '陕西', pinyin: 'shanxi', bindCardType: 'city' },
          { cityCode: 350199, cityName: '福州', pinyin: 'fuzhou', bindCardType: 'city' },
          { cityCode: 370400, cityName: '枣庄', pinyin: 'zaozhuang', bindCardType: 'city' },
          { cityCode: 371000, cityName: '威海', pinyin: 'weihai', bindCardType: 'city' },
          { cityCode: 320583, cityName: '昆山', pinyin: 'kunshan', bindCardType: 'city' },
          { cityCode: 370900, cityName: '泰安', pinyin: 'taian', bindCardType: 'city' },
          { cityCode: 530099, cityName: '云南全省', pinyin: 'yunnanquansheng', bindCardType: 'city' },
          { cityCode: 530100, cityName: '昆明', pinyin: 'kunming', bindCardType: 'city' },
          { cityCode: 530300, cityName: '曲靖', pinyin: 'qujing', bindCardType: 'city' },
          { cityCode: 530400, cityName: '玉溪', pinyin: 'yuxi', bindCardType: 'city' },
          { cityCode: 530500, cityName: '保山', pinyin: 'baoshan', bindCardType: 'city' },
          { cityCode: 530600, cityName: '昭通', pinyin: 'zhaotong', bindCardType: 'city' },
          { cityCode: 530700, cityName: '丽江', pinyin: 'lijiang', bindCardType: 'city' },
          { cityCode: 532300, cityName: '楚雄', pinyin: 'chuxiong', bindCardType: 'city' },
          { cityCode: 532500, cityName: '红河', pinyin: 'honghe', bindCardType: 'city' },
          { cityCode: 532600, cityName: '文山', pinyin: 'wenshan', bindCardType: 'city' },
          { cityCode: 530800, cityName: '普洱', pinyin: 'puer', bindCardType: 'city' },
          { cityCode: 532800, cityName: '西双版纳', pinyin: 'xishuangbanna', bindCardType: 'city' },
          { cityCode: 532900, cityName: '大理', pinyin: 'dali', bindCardType: 'city' },
          { cityCode: 533100, cityName: '德宏', pinyin: 'dehong', bindCardType: 'city' },
          { cityCode: 533300, cityName: '怒江', pinyin: 'nujiang', bindCardType: 'city' },
          { cityCode: 533400, cityName: '迪庆', pinyin: 'diqing', bindCardType: 'city' },
          { cityCode: 530900, cityName: '临沧', pinyin: 'lincang', bindCardType: 'city' },
          { cityCode: 530088, cityName: '云南省本级', pinyin: 'yunnanshengbenji', bindCardType: 'city' },
          { cityCode: 320509, cityName: '吴江', pinyin: 'wujiang', bindCardType: 'city' },
          { cityCode: 420500, cityName: '宜昌', pinyin: 'yichang', bindCardType: 'city' },
          { cityCode: 321100, cityName: '镇江', pinyin: 'zhenjiang', bindCardType: 'depart' }]
      }
    },
    handleClick: {
      type: Function,
      default () {
        return () => {
        }
      }
    }
  },
  data () {
    return {
      alphabets: [],
      cityList: [],
      cityAlpha: [],
      scrollTarget: null,
      isClick: false,
      wrapHeight: 0,
    }
  },
  created () {
    for (let i = 0; i < 26; i += 1) {
      this.alphabets.push(String.fromCharCode(i + 65))
    }
    this.cityList = this.getCityList()
  },
  mounted () {
    const options = {
      scrollY: true,
      scrollX: false,
      mouseWheel: true,
      click: true,
      taps: true,
      max: 0
    }
    this.$nextTick(() => {
      this.scrollTarget = new BetterScroll(this.$refs.wrap, options)
      this.max = this.scrollTarget.maxScrollY
      this.$refs.cityItem.forEach((i, index) => {
        let height = parseFloat(window.getComputedStyle(i).height);
        this.cityList[index].recordHeight = height;
      })
      let max = this.cityList.reduce((l, i) => {
        return l + i.recordHeight;
      }, 0)
      let per = -1 * max / this.max;
      this.cityList.forEach(i => {
        i.recordHeight /= per;
      })
      this.cityList.reduce((l, i) => {
        i.minHeight = l;
        i.maxHeight = l + i.recordHeight;
        return i.maxHeight
      }, 0)
      this.scrollTarget.on("scrollEnd", (information) => {
        if (this.isClick) {
          this.isClick = false;
          return;
        }
        const y = -1 * information.y;
        let el = this.cityList.filter(i => {
          return i.minHeight <= y && i.maxHeight > y;
        });
        el = el[0] || this.cityList[this.cityList.length - 1]
        let index = this.cityList.indexOf(el);
        this.cityAlpha.forEach(i => {
          i.selected = false
        })
        this.cityAlpha[index].selected = true
      })
    })
  },
  updated () {
  },
  watch: {
    keyword () {
      this.cityList = this.getCityList()
    }
  },
  methods: {
    getCityList () {
      let keyWord = this.keyword.trim()
      let selectCity = this.cities
      let codes
      if (!keyWord) {
        codes = this.getbarCodes(this.cities)
        return this.getCode(codes, selectCity)
      }
      selectCity = this.cities.map(city => {
        return [city.pinyin, city.cityName].some(item => {
          return item.indexOf(keyWord) > -1
        })
      })
      codes = this.getbarCodes(selectCity)
      return this.getCode(codes, selectCity)
    },
    getbarCodes (cityList) {
      let codes = cityList.map(i => {
        return i.pinyin.slice(0, 1).toUpperCase()
      })
      codes = [...new Set(codes)].sort((a, b) => {
        return a.charCodeAt() - b.charCodeAt()
      })
      return codes
    },
    getCode (codes, selectCity) {
      let cities = {}
      this.cityAlpha = codes.map(i => {
        return { code: i, selected: false }
      })
      selectCity.forEach(i => {
        let char = i.pinyin.slice(0, 1).toUpperCase()
        if (!cities[char]) {
          cities[char] = [i]
        } else {
          cities[char].push(i)
        }
      })
      return Object.keys(cities).map(i => {
        return { title: i, cityList: cities[i] }
      }).sort((a, b) => {
        return a.title.charCodeAt() - b.title.charCodeAt()
      })
    },
    getPoint (index) {
      this.cityAlpha.forEach(i => {
        i.selected = false
      })
      this.cityAlpha[index].selected = true
      this.isClick = true;
      this.scrollTarget.scrollToElement(this.$refs.cityItem[index], 500)
    }
  }
}
</script>
<style lang="less">
.wrap {
  height: calc(100vh - 80px);
  width: 100%;
  .betterScroll {
    .cityList {
      .cityWrap {
        .weui-cells__title {
          margin: 0;
          height: 1rem;
          line-height: 1rem;
          padding-left: 0.5rem;
          color: #999;
          padding-right: 0.8rem;
          font-size: 12px;
        }
        .weui-cells {
          background-color: #fff;
          padding: 0 1rem 0 0.5rem;
          overflow: hidden;
          .weui-cell {
            padding: 0.3rem 0;
            font-size: 12px;
            border-bottom: 0.4px solid #e5e5e5f7;
          }
          .noBorder {
            // border: none !important;
          }
        }
      }
    }
  }
  .slidebar {
    position: fixed;
    top: 1rem;
    width: 2rem;
    bottom: 1rem;
    right: 0;
    display: flex;
    align-items: center;
    .slidebarWrap {
      height: auto;
      display: flex;
      justify-content: space-around;
      flex-direction: column;

      .isSelected {
        color: #ff6f00;
      }
      li {
        list-style: none;
        padding: 0.2rem 0;
        flex: 0 0 5%;
        overflow: hidden;
        font-size: 12px;
        color: #444955;
        z-index: 999;
        transform: scale(0.84);
      }
    }
  }
}
</style>
