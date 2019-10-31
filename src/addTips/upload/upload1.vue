<template>
  <div class="wrapc">
    <div class="imgs" v-for="(i,index) in imgs">
      <img :src="i.src" alt="">
      <div class="cancle" @click="cancle(index)" :index="index">
      </div>
    </div>
    <div class="select">
      <input type="file" class="file" multiple :value="value" @change="deal">
      <div class="mask" :style="{'line-height':height+'px'}">+</div>
    </div>
    <div class="ensure">
      <div class="upload" @click="upload">上传</div>
    </div>
    <div id="upload" style="position:fixed;top:0px;left:0px;
    background: linear-gradient(bottom right, #0ab9da , #0a89da);height:2px;">
    </div>
  </div>
</template>
<script>
class Ajax {
  constructor() {
    let me = this
  }
  static init(config) {
    let me = this
    config.type = config.type === undefined ? 'get' : config.type
    switch (config.type) {
      case 'get':
        me.getRequest(config)
        break
      case 'post':
        me.postRequest(config)
        break
    }
  }
  static getRequest(config) {
    let params = config.params || {}
    let url = Object.keys(config.params)
      .map(i => {
        return i + '=' + config.params[i]
      })
      .join('&')
    if (config.url.endWith('?')) {
      url = config.url + url
    } else {
      url = config.url + '?' + url
    }
    let xml = new XMLHttpRequest()
    xml.onload = () => {
      if (xml.status === 200) {
        config.callback(xml.responseText)
      }
    }
    xml.open('get', url)
    xml.send(null)
  }
  static postRequest(config) {
    let file = new FormData()
    let xml = new XMLHttpRequest()
    let progress = config.progress || function(e) {}
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
  static postAll(config) {
    let me = this
    let arr = []
    let result = []
    let index = 0
    let map = config.params.map(i => {
      return () => {
        return me.postFile(config, i.file)
      }
    })
    let next = function() {
      if (!map.length) {
        config.callback()
        return
      }
      let f = map.shift()
      f().then(r => {
        next()
      })
    }
    next()
  }
  static postFile(config, file) {
    let me = this
    let url = config.url
    let Size = 1024 * 1024 * 2
    let slice = Math.ceil(file.size / Size)
    let start = 0
    let index = 0
    let record = 0
    let arr = []
    let date = new Date().getTime()
    while (index < slice) {
      let end = (index + 1) * Size
      if (end > file.size) end = file.size
      arr.push(me.slice(config, date, file, index, start, end, url, slice, Size, file.size))
      index += 1
      start = end
    }
    return new Promise((re, rj) => {
      me.control(arr, re)
    })
  }
  static control(arr, cb) {
    let total = 6
    let me = this
    let len = arr.length
    let data = arr.slice(0, 6)
    let result = []
    let start = 6
    let count = 0
    arr = arr.slice(6)
    let next = function() {
      if (total < 6 && arr.length) {
        var item = arr.shift()
        total += 1
        item.$index = start
        start += 1
        item().then(r => {
          total -= 1
          result[item.$index] = r
          count += 1
          next()
        })
      }
      if (len === count) {
        cb()
      }
    }
    for (let i = 0; i < data.length; i += 1) {
      data[i]().then(r => {
        total -= 1
        result[i] = r
        count += 1
        data.splice(i--, 1)
        next()
      })
    }
  }
  static slice(config, date, blob, index, start, end, url, all, Size, total) {
    let time = config.time || 6000000
    let timeF = config.timeout || function() {}
    return () => {
      return new Promise((re, rj) => {
        let xml = new XMLHttpRequest()
        let chunk = blob.slice(start, end)
        let data = new FormData()
        data.append('file', chunk, blob.name)
        data.append('name', blob.name)
        data.append('all', all)
        data.append('index', index)
        data.append('date', date)
        data.append('size', Size)
        data.append('fileSize', total)
        xml.open('POST', url)
        xml.onload = function() {
          re(true)
        }
        xml.timeout = time
        xml.ontimeout = timeF
        xml.send(data)
      })
    }
  }
}
export default {
  name: "uplaodImage1",
  data() {
    return {
      opacity: 1,
      width: 0,
      height: 100,
      value: '',
      init: false,
      fileDefault: require('../../../assets/file.png'),
      imgs: []
    }
  },
  methods: {
    cancle(index) {
      let me = this
      if (index === undefined) return
      me.imgs.splice(index, 1)
      me.value = ''
    },
    upload() {
      let me = this;
      if (!me.imgs.length) return
      Ajax.init({
        progress: function(e) {
          let per = e.loaded / e.total
          me.width = window.innerWidth * per
          me.opacity = 1
        },
        type: 'post',
        params: me.imgs,
        url: 'https://nodom.store/api/upload',
        callback() {
          alert("success");
        }
      })
    },
    deal(files) {
      files = files.target.files;
      let me = this
      let tem = []
      let regExp = /\.(gif|jpg|jpeg|png|gif|jpg|png)$/im
      for (let i = 0; i < files.length; i += 1) {
        if (regExp.test(files[i].name)) {
          tem.push(files[i])
        } else {
          me.imgs.push({
            src: me.fileDefault,
            type: 'file',
            file: files[i]
          })
        }
        me.$set(me, 'imgs', me.imgs);
      }
      Promise.all(
        tem.map(i => {
          return me.addFile(i)
        })
      ).then(r => {
        me.$set(me, 'imgs', me.imgs);
        me.value = ''
      })
    },
    addFile(file) {
      return new Promise((re, rj) => {
        let me = this
        let fileReader = new FileReader()
        fileReader.onload = e => {
          me.imgs.push({
            src: e.target.result,
            type: 'img',
            file: file
          })
          re()
        }
        fileReader.readAsDataURL(file)
      })
    }
  }
}

</script>
<style>
* {
  margin: 0;
  padding: 0;
}

.content {
  width: 600px;
  height: 250px;
  margin: 0px auto;
}

.content .wrapc {
  width: 100%;
  height: 100%;
}

.content .wrapc .imgs {
  width: 100px;
  height: 100px;
  font-size: 0;
  position: relative;
  float: left;
  cursor: crosshair;
}

.content .wrapc .imgs img {
  width: 100%;
  height: 100%;
}

.content .wrapc .imgs .cancle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0px;
  right: 0px;
  background: url('../../../assets/cancel.png') center center no-repeat;
  background-size: cover;
}

.content .wrapc .select {
  width: 100px;
  height: 100px;
  position: relative;
  display: block;
  border: 1px dashed #008000;
  float: left;
}

.content .wrapc .select .file {
  left: 0;
  position: absolute;
  z-index: 1000;
  opacity: 0;
  display: block;
  width: 100px;
  height: 100px;
}

.content .wrapc .select .mask {
  text-align: center;
  width: 100px;
  height: 100px;
  color: green;
  font-size: 100px;
  z-index: 999;
}

.content .wrapc .ensure {
  display: flex;
  align-items: flex-end;
  float: left;
  width: 100px;
  height: 100px;
  color: #fff;
  cursor: pointer;
}

.content .wrapc .transition {
  transition: width .5s;
}

.content .wrapc .ensure .upload {
  width: 80px;
  margin: 0 auto;
  text-align: center;
  background-color: #03a9f4;
}

</style>
