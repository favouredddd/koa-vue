<template>
  <div class="home">
    <div class="List">
      <div v-for="(link,index) in pluginLink"
           :key="index"
           class="linkWrap">
        <div class="title">{{link.name}}</div>
        <div class="nameWrap">

          <router-link v-for="(linkItem,ind) in link.links"
                       :key="ind"
                       :to="{'path':linkItem.href}"
                       class="routerLink">
            <div class="nameContent">
              <p>{{linkItem.link}}</p>
            </div>
            <div class="nameContentRight"></div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      pluginLink: [
        {
          name: "手势", links: [
            { href: "/swipe", link: "简单手势" },
            { href: "/step", link: "step引导" },
            { href: "/tap", link: "tap事件" },
            { href: "/scrollView", link: "下拉刷新" }
          ]
        },
        {
          name: "地址", links: [
            { href: "/location", link: "地区选择" },
          ]
        },
        {
          name: "缓存动画", links: [
            { href: "/progressBar", link: "progressBar" },
            { href: "/scale", link: "伸缩动画" },
            { href: "/rotate", link: "旋转盒子" },
            { href: "/windows", link: "windows开机动画" }
          ]
        },
        {
          name: "util", links: [
            { href: "/imgToString", link: "图片转字符" },
            { href: "/dateFormat", link: "日期格式化" }
          ]
        },

      ]
    }
  }
}
</script>
<style lang="less">
.home {
  .List {
    .linkWrap {
      .title {
        margin-top: 0.77em;
        margin-bottom: 0.3em;
        color: #999;
        padding-left: 0.4rem;
        padding-right: 0.4rem;
        font-size: 0.373333rem;
      }
      .nameWrap {
        background-color: #fff;
        line-height: 1.47059;
        font-size: 0.453333rem;
        overflow: hidden;
        position: relative;
        &:before {
          width: 100%;
          content: " ";
          position: absolute;
          left: 0;
          height: 0.026667rem;
          background-color: #e5e5e5;
          -webkit-transform-origin: 0 0;
          transform-origin: 0 0;
          -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
          z-index: 2;
        }

        .routerLink {
          padding: 0.266667rem 0.4rem;
          position: relative;
          display: flex;
          align-items: center;
          &:before {
            position: absolute;
            width: 100%;
            color: #e5e5e5;
            height: 0.026667rem;
            transform: scaleY(0.5);
            z-index: 2;
            content: " ";
            border-top: 0.026667rem solid #e5e5e5;
            top: 0;
            right: 0;
          }
          .nameContent {
            flex: 1;
            > p {
              color: #5473ef;
            }
          }
          .nameContentRight {
            padding-right: 0.346667rem;
            position: relative;
            text-align: right;
            color: #999;
            &:after {
              content: " ";
              display: inline-block;
              height: 0.16rem;
              width: 0.16rem;
              border-width: 0.053333rem 0.053333rem 0 0;
              border-color: #c8c8cd;
              border-style: solid;
              -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
              transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
              position: absolute;
              top: 50%;
              margin-top: -0.106667rem;
              right: 0.053333rem;
            }
          }
        }
      }
    }
  }
}
</style>