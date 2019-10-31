<template>
  <div class="content">
    <div class="header">图片缓存</div>
    <div class="introduce">{{describe}}</div>
    <div class="code">
      <div>
        <div class="jsTitle">js代码</div>
        <code v-helight="jsCode" class="hljs javascript">{{jsCode}}</code>
        <div class="jsTitle"
             style="position:relative">源码
          <div class="copy"
               @click="copy">一键复制</div>
        </div>
        <code 
              v-html="originCode"
              class="codeArea"
              autoHeight="true"
              ref="textArea">
        </code>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      describe: `这是一款普通图片转换为字符串缓存的工具包`,
      jsCode:
        `  import {fileToString} from 'xxxx';
  //type 有base64(fileReader),canvas,url
  //需要注意的是url和base64 后台需要返回blob对象,canvas要设置图片跨域支持
  const  config={
    url:'',
    type:'',
    attempt:number
  }
  new fileToString(config)
  .then(r=>{})`,
      originCode: `class Ajax {
  constructor() {
    let me = this
  }
  static init (config) {
    let me = this
    config.type = config.type === undefined ? 'get' : config.type
    config.count = config.tempt;
    switch (config.type) {
      case 'get':
        return me.getRequest(config)
      case 'post':
        return me.postRequest(config)
    }
  }
  static getRequest (config) {
    let params = config.params || {}
    config.count = config.count === undefined ? 1 : config.count
    let url = Object.keys(params)
      .map(i => {
        return i + '=' + params[i]
      })
      .join('&')
    if (config.url.endsWith('?')) {
      url = config.url + url
    } else {
      url = config.url + '?' + url
    }
    let xml = new XMLHttpRequest()
    return new Promise((resolve, reject) => {
      xml.onload = () => {
        if (xml.status !== 500) {
          resolve(xml.response)
        } else {
          config.count -= 1;
          if (count > 0) {
            return this.getRequest(config)
          }
        }
      }
      xml.onerror = () => {
        config.count -= 1;
        if (count > 0) {
          return this.getRequest(config)
        }
      }
      xml.open('get', url)
      xml.responseType = 'blob'
      xml.send(null)
    })
  }
  static postRequest (config) {
    let file = new FormData()
    let xml = new XMLHttpRequest()
    let progress = config.progress || function (e) { }
    xml.onload = () => {
      if (xml.status === 200) {
        config.callback(xml.responseText)
      }
    }
    xml.upload.onprogress = progress
    if (config.params.constructor === Array) {
      config.params.forEach((i, index) => {
        file.append('file' + index, i.file)
      })
    } else {
      Object.keys(config.params).forEach(i => {
        file.append(i, config.params[i])
      })
    }
    xml.open('post', config.url)
    xml.send(file)
  }
}
class fileToString {
  constructor(config) {
    this.src = config.src;
    this.attempt = config.attempt
    switch (config.type) {
      case 'url':
        return this.createUrl();
      case 'base64':
        return this.createBase64();
      case 'canvas':
        return this.createCanavs();
    }
  }
  createBase64 () {
    return Ajax.init({ url: this.src, attempt: this.attempt }).then(file => {
      return this.doCreateBase64(file)
    })
  }
  createCanavs () {
    return this.doCreateCanavs().then(img => {
      if (!img)
        return ""
      let canvas = document.createElement("canvas");
      let ctx=canvas.getContext("2d")
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0,0);
      return canvas.toDataURL()
    })
  }
  doCreateCanavs () {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.crossOrigin="anonymous"
      img.onload = () => {
        resolve(img)
      }
      img.onerror = () => {
        this.attempt-=1;
        if (this.attempt > 0) {
          return reject(this.createCanavs());
        } else {
          return Promise.resolve();
        }
      }
      img.src=this.src
    }).then(r => {
      return r
    }, r => {
      return r
    })
  }
  createUrl () {
    return Ajax.init({ url: this.src, attempt: this.attempt })
      .then((file) => {
        return Promise.resolve(window.URL.createObjectURL(file))
      });
  }
  doCreateBase64 (file) {
    return new Promise((resolve, reject) => {
      let me = this
      let fileReader = new FileReader()
      fileReader.onload = e => {
        resolve(e.target.result)
      }
      fileReader.readAsDataURL(file)
    })
  }
}
export default {fileToString:fileToString}
/*const  config={
  url:'',
  type:'',
  attempt:number
}
new fileToString(config)
.then(r=>{})*/`,
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.textArea.style.height = this.$refs.textArea.scrollHeight + 'px'
    })
  },
  methods: {
    copy () {
      document.execCommand('copy', false, this.$refs.textArea.select());
    },
  }
}
</script>
<style lang="less">
.boxShadow {
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
.content {
  padding: 0.5rem;
  .header {
    font-size: 1rem;
    color: #d08770;
    text-indent: 0.5rem;
  }
  > div {
    margin-bottom: 0.4rem;
    border-radius: 5px;
  }
  .copy {
    float: right;
    margin-right: 1rem;
    text-indent: 0;
    background-color: #0085ff;
    padding: 0.2rem 0.3rem;
    font-size: 12px;
    color: #fff;
    border-radius: 5px;
    .boxShadow;
  }
  .eventTitle {
    font-size: 0.6rem;
  }
  .swipeWrap {
    height: 5rem;
    background-image: linear-gradient(90deg, #0af, #0085ff);
  }
  .codeArea {
    width: 100%;
    outline: none;
    display: block;
    .boxShadow;
    background-color: #2b303b;
    border: 1px solid #cecece;
    font-weight: 400;
    color: #fff;
  }
}
</style>