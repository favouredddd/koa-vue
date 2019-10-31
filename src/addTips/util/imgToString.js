
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
      case 'clone':
        return this.doCloneNode();
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
      let ctx = canvas.getContext("2d")
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      return canvas.toDataURL()
    })
  }
  doCreateCanavs () {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.crossOrigin = "anonymous"
      img.onload = () => {
        resolve(img)
      }
      img.onerror = () => {
        this.attempt -= 1;
        if (this.attempt > 0) {
          return reject(this.createCanavs());
        } else {
          return Promise.resolve();
        }
      }
      img.src = this.src
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
      let fileReader = new FileReader()
      fileReader.onload = e => {
        resolve(e.target.result)
      }
      fileReader.onerror = e => {
        reject("")
      }
      fileReader.readAsDataURL(file)
    })
  }
  doCloneNode (el) {
    return Promise.resolve(el.cloneNode(true))
  }
}
class Ajax {
  constructor() {
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
          if (config.count > 0) {
            return this.getRequest(config)
          }
        }
      }
      xml.onerror = () => {
        config.count -= 1;
        if (config.count > 0) {
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
    let progress = config.progress || function () { }
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
export default { fileToString: fileToString }
/*const  config={
  url:'',
  type:'',
  attempt:number
}
new fileToString(config)
.then(r=>{})`,*/
