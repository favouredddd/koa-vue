<template>
  <div class="downWrap">
   <canvas id="particals" ref="partical" style="position: absolute;top:0"></canvas>
    <div class="mask" :style="{'height':h,'width':w}">
    <div class="about-box active">
      <div class="box">
        <div class="cude cude-active">
          <div class="front surface">主页
          </div>
          <div class="surface left">H5案例
          </div>
          <div class="surface right">专题
          </div>
          <div class="surface bottom">文章</div>
          <div class="surface top">移动</div>
          <div class="surface back">网站导航</div>
          <div class="surface-in front-in">
            <!-- <img src="http://7s1r1c.com1.z0.glb.clouddn.com/t_main_bg.jpg" alt=""/> -->
          </div>
          <div class="surface-in back-in">
            <!-- <img src="http://7s1r1c.com1.z0.glb.clouddn.com/t_main_cude2.jpg" alt=""> -->
          </div>
          <div class="surface-in left-in">
            <!-- <img src="http://7s1r1c.com1.z0.glb.clouddn.com/t_main_cude3.jpg" alt=""> -->
          </div>
          <div class="surface-in right-in">
            <!-- <img src="http://7s1r1c.com1.z0.glb.clouddn.com/t_main_cude6.jpg" alt=""> -->
          </div>
          <div class="surface-in top-in">
            <!-- <img src="http://7s1r1c.com1.z0.glb.clouddn.com/t_main_bg.jpg" alt=""> -->
          </div>
          <div class="surface-in bottom-in">
            <!-- <img src="http://7s1r1c.com1.z0.glb.clouddn.com/t_main_cude5.jpg" alt=""> -->
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>
</template>
<script>
  import partical from '@/components/util/Partical.js';
export default {
  name: "rotate1",
  data() {
    return { h: window.innerHeight - 80 + 'px', w: window.innerWidth + 'px' }
  },
  mounted(){
    console.log(partical);
    new partical("#particals",{});
  }
}

</script>

<style scoped lang="less">
.downWrap{
  position:relative;
  overflow-y: hidden;
}
.hhh(@width) {
  @boxWidth: @width;
  @boxhalfWidth: @boxWidth/2;
  @quaterWidth: @boxWidth/4;
  @plusboxhalfWidth: -1*@boxWidth/2;
  @Z: @boxWidth*5/6;
  @PZ: -1*@Z;
  @I: @boxWidth/4;
  @PI: -1*@I;
  .mask {
    z-index: 10000;
    background-color: rgba(0,0,0,0);
    width:@width;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .about-box {
      position: relative;
      width: 100%;
      height: auto;
      .box {
        cursor:pointer;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: scale(1) translateX(-50%) translateY(-50%);
        transition: transform .6s;
        .cude {
          &:hover {
            animation: rotate 20s ease 0s infinite normal none running;

            .front {
              transform: rotateY(0) translateZ(@Z);
            }

            .left {
              transform: rotateY(-90deg) translateZ(@Z)
            }

            .right {
              transform: rotateY(90deg) translateZ(@Z);
            }

            .bottom {
              transform: rotateX(90deg) translateZ(@PZ);
            }

            .top {
              transform: rotateX(90deg) translateZ(@Z);
            }

            .back {
              transform: translateZ(@PZ) rotateY(180deg);
            }

          }

          .front {
            transform: rotateY(0) translateZ(@boxhalfWidth);
          }

          .left {
            transform: rotateY(-90deg) translateZ(@boxhalfWidth);
          }

          .right {
            transform: rotateY(90deg) translateZ(@boxhalfWidth);
          }

          .bottom {
            transform: rotateX(90deg) translateZ(@plusboxhalfWidth);
          }

          .top {
            transform: rotateX(90deg) translateZ(@boxhalfWidth);
          }

          .back {
            transform: translateZ(@plusboxhalfWidth) rotateY(180deg);
          }

          .surface {
            position: absolute;
            top: 0;
            left: 0;
            width: @boxWidth;
            height: @boxWidth;
            background:#282828;
            opacity: 0.8;
            font-size: @boxWidth/5;
            text-align: center;
            line-height: @boxWidth;
            font-weight: bold;
            color: #fff;
            border: 1px solid #000;
            transition: all .3s;
          }

          .surface-in {
            width: @boxhalfWidth;
            height: @boxhalfWidth;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: @PI;
            margin-left: @PI;
          }

          .font-in {
            transform: rotateY(0deg) translateZ(@I);
          }

          .back-in {
            transform: rotateY(180deg) translateZ(@I);
          }

          .left-in {
            transform: rotateY(-90deg) translateZ(@I);
          }

          .right-in {
            transform: rotateY(90deg) translateZ(@I);
          }

          .top-in {
            transform: rotateX(90deg) translateZ(@PI);
          }

          .bottom-in {
            transform: rotateX(-90deg) translateZ(@PI);
          }

          width: @boxWidth;
          height: @boxWidth;
          position: relative;
          margin: 100px auto;
          font-family: 'font';
          transform-style: preserve-3d;
          transform: rotateX(-30deg) rotateY(-80deg);
          transform-origin: 50% 50% 0;
        }
        .cude-active{
            animation: rotate 20s ease 0s infinite normal none running;

            .front {
              transform: rotateY(0) translateZ(@Z);
            }

            .left {
              transform: rotateY(-90deg) translateZ(@Z)
            }

            .right {
              transform: rotateY(90deg) translateZ(@Z);
            }

            .bottom {
              transform: rotateX(90deg) translateZ(@PZ);
            }

            .top {
              transform: rotateX(90deg) translateZ(@Z);
            }

            .back {
              transform: translateZ(@PZ) rotateY(180deg);
            }

          }
        @keyframes rotate {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }

          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }
      }
    }

    .active {
      transform: scale(1);

      .box {
        // transform: scale(1);
      }
    }
  }
}
@media screen and (max-width: 800px){
  .hhh(10rem);
}
@media screen and (min-width: 800px){
  .hhh(300px);
}
</style>
