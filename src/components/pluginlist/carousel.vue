<template>
  <div class="plugin-type el-plugin-type">
            <div class="plugin-name">{{name}}插件</div>
    <p class="explain">本章节主要介绍插件库轮播图插件，用于展示或者推广广告。主要有以下几种类型。</p>
    <div class='plugin-item'>
        <div class="plugin-content el-plugin-03001">
            <div class="el-photo">
                <carousel1 :Wrapwidth="width"/>
            </div>
        </div>
        <br>
        <div class="instruction-title-sec">HTML代码</div>
        <br><pre class="instruction-code">
                                        <pre><<span class="element">div</span> <span class="attr">class</span>="plugin-carousel-1" <span class="attr">x-plugin</span>="carousel" <span class="attr">dataName</span>="carousel_data"><<span class="element">/div></span></pre>
        </pre><br>
        <div class="instruction-title-sec">JS代码</div>
        <br><pre class="instruction-code">
                                    <pre><span>{</span></pre>
        <pre><span>      name: 'carousel_1',</span>      <span class="comment">/*插件模块的模块名称*/</span></pre>
        <pre><span>      el: '.plugin-carousel-1',</span>      <span class="comment">/*插件渲染容器*/</span></pre>
        <pre><span>      data: {</span>      <span class="comment">/*配置参数项*/</span></pre>
        <pre><span>            carousel_data: {</span>      <span class="comment">/*插件绑定的容器中，绑定的数据对象的名称*/</span></pre>
        <pre><span>                  width: 10,</span>      <span class="comment">/*轮播图提示位置大小*/</span></pre>
        <pre><span>                  check_color: "#ff0000",</span>      <span class="comment">/*轮播图提示当前位置显示颜色*/</span></pre>
        <pre><span>                  translate: false,</span>      <span class="comment">/*是否可点击*/</span></pre>
        <pre><span>                  imgs: [</span>      <span class="comment">/*轮播图图片数组*/</span></pre>
        <pre><span>                        {url: '*****'}</span>      <span class="comment">/*轮播图有几张图片就有几个{url,'*****'}*/</span></pre>
        <pre><span>                  ],</span></pre>
        <pre><span>                  right: true,</span>      <span class="comment">/*轮播图向右滑动还是向左滑动*/</span></pre>
        <pre><span>                  is_circle: true</span>      <span class="comment">/*轮播图提示当前位置是否为圆圈*/</span></pre>
        <pre><span>            }</span></pre>
        <pre><span>     }</span></pre>
        <pre><span>}</span></pre>
        </pre><br>
        <div class='plugin-explain'>
            <p class="instruction-title-sec">插件说明:</p>
            <br>
            <p class='explain'>这是一个由四张图片组成的左右轮播图插件，通过每张图片的左右滚动，实现图片的动态轮播。轮播是定时自动左右旋转轮播，还可通过点击左右键来控制轮播方向。
                本插件可自定义配置项包括：轮播颜色、初始颜色、圆圈显示还是方块显示、提示长度、提示高度、提示颜色、轮播时间、轮播方向（方向左、方向右）。</p>
        </div>
    </div>
    <div class='plugin-item'>
        <div class="plugin-content el-plugin-03002">
              <carousel2 :Wrapwidth="width"/>
        </div>
        <br>
        <div class="instruction-title-sec">HTML代码</div>
        <br><pre class="instruction-code">
                                        <pre><<span class="element">div</span> <span class="attr">class</span>="plugin-carousel-2" <span class="attr">x-plugin</span>="carousel" <span class="attr">dataName</span>="carousel_data"><<span class="element">/div></span></pre>
        </pre><br>
        <div class="instruction-title-sec">JS代码</div>
        <br><pre class="instruction-code">
                                    <pre><span>{</span></pre>
        <pre><span>      name: 'carousel_2',</span>      <span class="comment">/*插件模块的模块名称*/</span></pre>
        <pre><span>      el: '.plugin-carousel-2',</span>      <span class="comment">/*插件渲染容器*/</span></pre>
        <pre><span>      data: {</span>      <span class="comment">/*配置参数项*/</span></pre>
        <pre><span>            carousel_data: {</span>      <span class="comment">/*插件绑定的容器中，绑定的数据对象的名称*/</span></pre>
        <pre><span>                  width: 10,</span>      <span class="comment">/*轮播图提示位置大小*/</span></pre>
        <pre><span>                  check_color: "#00FF00",</span>      <span class="comment">/*轮播图提示当前位置显示颜色*/</span></pre>
        <pre><span>                  translate: false,</span>      <span class="comment">/*是否可点击*/</span></pre>
        <pre><span>                  imgs: [</span>      <span class="comment">/*轮播图图片数组*/</span></pre>
        <pre><span>                        {url: '*****'}</span>      <span class="comment">/*轮播图有几张图片就有几个{url,'*****'}*/</span></pre>
        <pre><span>                  ],</span></pre>
        <pre><span>                  right: true,</span>      <span class="comment">/*轮播图向右滑动还是向左滑动*/</span></pre>
        <pre><span>                  is_circle: true</span>      <span class="comment">/*轮播图提示当前位置是否为圆圈*/</span></pre>
        <pre><span>            }</span></pre>
        <pre><span>     }</span></pre>
        <pre><span>}</span></pre>
        </pre><br>
        <div class='plugin-explain'>
            <p class="instruction-title-sec">插件说明:</p>
            <br>
            <p class='explain'>这是一个由四张图片组成的左右轮播图插件，通过每张图片的左右旋转，实现图片的动态轮播。轮播是定时自动左右旋转轮播，还可通过点击左右键来控制轮播方向。
                本插件可自定义配置项包括：轮播颜色、初始颜色、圆圈显示还是方块显示、提示长度、提示高度、提示颜色、轮播时间、轮播方向（方向左、方向右）。</p>
        </div>
    </div>
    <div class='plugin-item'>
        <div class="plugin-content el-plugin-03003">
            <div class="el-plugin">
               <carousel3  :Wrapwidth="width"/> 
            </div>
        </div>
        <br>
        <div class="instruction-title-sec">HTML代码</div>
        <br><pre class="instruction-code">
                                        <pre><<span class="element">div</span> <span class="attr">class</span>="plugin-carousel-3" <span class="attr">x-plugin</span>="carousel" <span class="attr">dataName</span>="carousel_data"><<span class="element">/div></span></pre>
        </pre><br>
        <div class="instruction-title-sec">JS代码</div>
        <br><pre class="instruction-code">
                                    <pre><span>{</span></pre>
        <pre><span>      name: 'carousel_3',</span>      <span class="comment">/*插件模块的模块名称*/</span></pre>
        <pre><span>      el: '.plugin-carousel-3',</span>      <span class="comment">/*插件渲染容器*/</span></pre>
        <pre><span>      data: {</span>      <span class="comment">/*配置参数项*/</span></pre>
        <pre><span>            carousel_data: {</span>      <span class="comment">/*插件绑定的容器中，绑定的数据对象的名称*/</span></pre>
        <pre><span>                  width: 10,</span>      <span class="comment">/*轮播图提示位置大小*/</span></pre>
        <pre><span>                  check_color: "#ff6800",</span>      <span class="comment">/*轮播图提示当前位置显示颜色*/</span></pre>
        <pre><span>                  translate: false,</span>      <span class="comment">/*是否可点击*/</span></pre>
        <pre><span>                  imgs: [</span>      <span class="comment">/*轮播图图片数组*/</span></pre>
        <pre><span>                        {url: '*****'}</span>      <span class="comment">/*轮播图有几张图片就有几个{url,'*****'}*/</span></pre>
        <pre><span>                  ],</span></pre>
        <pre><span>                  up: false,</span>      <span class="comment">/*轮播图向右滑动还是向左滑动*/</span></pre>
        <pre><span>                  is_circle: true</span>      <span class="comment">/*轮播图提示当前位置是否为圆圈*/</span></pre>
        <pre><span>            }</span></pre>
        <pre><span>     }</span></pre>
        <pre><span>}</span></pre>
        </pre><br>
        <div class='plugin-explain'>
            <p class="instruction-title-sec">插件说明:</p>
            <br>
            <p class='explain'>这是一个由四张图片组成的竖直轮播图插件，通过每张图片的竖直旋转，实现图片的动态轮播。轮播是定时自动竖直旋转轮播。
                本插件可自定义配置项包括：轮播颜色、初始颜色、圆圈显示还是方块显示、提示长度、提示高度、提示颜色、轮播时间、轮播方向（方向上、方向下）。</p>
        </div>
    </div>
    <div class='plugin-item'>
        <div class="plugin-content el-plugin-03004">
            <div class="el-plugin">
                <carousel4 :Wrapwidth="width"/>
            </div>
        </div>
        <br>
        <div class="instruction-title-sec">HTML代码</div>
        <br><pre class="instruction-code">
                                        <pre><<span class="element">div</span> <span class="attr">class</span>="plugin-carousel-4" <span class="attr">x-plugin</span>="carousel" <span class="attr">dataName</span>="carousel_data"><<span class="element">/div></span></pre>
        </pre><br>
        <div class="instruction-title-sec">JS代码</div>
        <br><pre class="instruction-code">
                                    <pre><span>{</span></pre>
        <pre><span>      name: 'carousel_4',</span>      <span class="comment">/*插件模块的模块名称*/</span></pre>
        <pre><span>      el: '.plugin-carousel-4',</span>      <span class="comment">/*插件渲染容器*/</span></pre>
        <pre><span>      data: {</span>      <span class="comment">/*配置参数项*/</span></pre>
        <pre><span>            carousel_data: {</span>      <span class="comment">/*插件绑定的容器中，绑定的数据对象的名称*/</span></pre>
        <pre><span>                  width: 10,</span>      <span class="comment">/*轮播图提示位置大小*/</span></pre>
        <pre><span>                  check_color: "#ffff00",</span>      <span class="comment">/*轮播图提示当前位置显示颜色*/</span></pre>
        <pre><span>                  translate: false,</span>      <span class="comment">/*是否可点击*/</span></pre>
        <pre><span>                  imgs: [{</span>      <span class="comment">/*轮播图图片数组*/</span></pre>
        <pre><span>                        img_item:[{</span>      <span class="comment">/*轮播图有几张图片就有几个img_item*/</span></pre>
        <pre><span>                              url: '*****'</span>      <span class="comment">/*一张图片分为及部分，就有几个{url,'*****'}*/</span></pre>
        <pre><span>                        }]</span></pre>
        <pre><span>                  }],</span></pre>
        <pre><span>                  up: true,</span>      <span class="comment">/*轮播图向上滑动还是向下滑动*/</span></pre>
        <pre><span>                  is_circle: true</span>      <span class="comment">/*轮播图提示当前位置是否为圆圈*/</span></pre>
        <pre><span>            }</span></pre>
        <pre><span>     }</span></pre>
        <pre><span>}</span></pre>
        </pre><br>
        <div class='plugin-explain'>
            <p class="instruction-title-sec">插件说明:</p>
            <br>
            <p class='explain'>这是一个由四张大图，16张小图组成的竖直轮播图插件，通过每四张图片的竖直旋转拼合，实现图片的动态轮播。轮播是定时自动竖直旋转轮播。
                本插件可自定义配置项包括：轮播颜色、初始颜色、圆圈显示还是方块显示、提示宽度、提示高度、提示颜色、轮播时间、轮播方向（方向上、方向下）。</p>
        </div>
    </div>
    <div class='plugin-item'>
      <div class="plugin-content el-plugin-03005">
        <div class="el-plugin" style="width:100%">
          <div class="container">
            <carousel5 :Wrapwidth="width"/>
          </div>
        </div>
      </div>
      <br>
      <div class="instruction-title-sec">HTML代码</div>
      <br><pre class="instruction-code">
                                      <pre><<span class="element">div</span> <span class="attr">class</span>="plugin-carousel-4" <span class="attr">x-plugin</span>="carousel" <span class="attr">dataName</span>="carousel_data"><<span class="element">/div></span></pre>
      </pre><br>
      <div class="instruction-title-sec">JS代码</div>
      <br>
      <pre class="instruction-code">
                                  <pre><span>{</span></pre>
      <pre><span>      name: 'carousel_4',</span>      <span class="comment">/*插件模块的模块名称*/</span></pre>
      <pre><span>      el: '.plugin-carousel-4',</span>      <span class="comment">/*插件渲染容器*/</span></pre>
      <pre><span>      data: {</span>      <span class="comment">/*配置参数项*/</span></pre>
      <pre><span>            carousel_data: {</span>      <span class="comment">/*插件绑定的容器中，绑定的数据对象的名称*/</span></pre>
      <pre><span>                  width: 10,</span>      <span class="comment">/*轮播图提示位置大小*/</span></pre>
      <pre><span>                  check_color: "#ffff00",</span>      <span class="comment">/*轮播图提示当前位置显示颜色*/</span></pre>
      <pre><span>                  translate: false,</span>      <span class="comment">/*是否可点击*/</span></pre>
      <pre><span>                  imgs: [{</span>      <span class="comment">/*轮播图图片数组*/</span></pre>
      <pre><span>                        img_item:[{</span>      <span class="comment">/*轮播图有几张图片就有几个img_item*/</span></pre>
      <pre><span>                              url: '*****'</span>      <span class="comment">/*一张图片分为及部分，就有几个{url,'*****'}*/</span></pre>
      <pre><span>                        }]</span></pre>
      <pre><span>                  }],</span></pre>
      <pre><span>                  up: true,</span>      <span class="comment">/*轮播图向上滑动还是向下滑动*/</span></pre>
      <pre><span>                  is_circle: true</span>      <span class="comment">/*轮播图提示当前位置是否为圆圈*/</span></pre>
      <pre><span>            }</span></pre>
      <pre><span>     }</span></pre>
      <pre><span>}</span></pre>
      </pre>
      <br>
      <div class='plugin-explain'>
        <p class="instruction-title-sec">插件说明:</p>
        <br>
        <p class='explain'>这是一个由四张大图，16张小图组成的竖直轮播图插件，通过每四张图片的竖直旋转拼合，实现图片的动态轮播。轮播是定时自动竖直旋转轮播。
          本插件可自定义配置项包括：轮播颜色、初始颜色、圆圈显示还是方块显示、提示宽度、提示高度、提示颜色、轮播时间、轮播方向（方向上、方向下）。</p>
      </div>
    </div>
     <div class='plugin-item'>
      <div class="plugin-content el-plugin-03005">
        <div class="el-plugin" style="width:100%">
          <div class="container">
            <carousel6 :Wrapwidth="width"/>
          </div>
        </div>
      </div>
      <br>
      <div class="instruction-title-sec">HTML代码</div>
      <br><pre class="instruction-code">
                                      <pre><<span class="element">div</span> <span class="attr">class</span>="plugin-carousel-4" <span class="attr">x-plugin</span>="carousel" <span class="attr">dataName</span>="carousel_data"><<span class="element">/div></span></pre>
      </pre><br>
      <div class="instruction-title-sec">JS代码</div>
      <br>
      <pre class="instruction-code">
                                  <pre><span>{</span></pre>
      <pre><span>      name: 'carousel_4',</span>      <span class="comment">/*插件模块的模块名称*/</span></pre>
      <pre><span>      el: '.plugin-carousel-4',</span>      <span class="comment">/*插件渲染容器*/</span></pre>
      <pre><span>      data: {</span>      <span class="comment">/*配置参数项*/</span></pre>
      <pre><span>            carousel_data: {</span>      <span class="comment">/*插件绑定的容器中，绑定的数据对象的名称*/</span></pre>
      <pre><span>                  width: 10,</span>      <span class="comment">/*轮播图提示位置大小*/</span></pre>
      <pre><span>                  check_color: "#ffff00",</span>      <span class="comment">/*轮播图提示当前位置显示颜色*/</span></pre>
      <pre><span>                  translate: false,</span>      <span class="comment">/*是否可点击*/</span></pre>
      <pre><span>                  imgs: [{</span>      <span class="comment">/*轮播图图片数组*/</span></pre>
      <pre><span>                        img_item:[{</span>      <span class="comment">/*轮播图有几张图片就有几个img_item*/</span></pre>
      <pre><span>                              url: '*****'</span>      <span class="comment">/*一张图片分为及部分，就有几个{url,'*****'}*/</span></pre>
      <pre><span>                        }]</span></pre>
      <pre><span>                  }],</span></pre>
      <pre><span>                  up: true,</span>      <span class="comment">/*轮播图向上滑动还是向下滑动*/</span></pre>
      <pre><span>                  is_circle: true</span>      <span class="comment">/*轮播图提示当前位置是否为圆圈*/</span></pre>
      <pre><span>            }</span></pre>
      <pre><span>     }</span></pre>
      <pre><span>}</span></pre>
      </pre>
      <br>
      <div class='plugin-explain'>
        <p class="instruction-title-sec">插件说明:</p>
        <br>
        <p class='explain'>这是一个由四张大图，16张小图组成的竖直轮播图插件，通过每四张图片的竖直旋转拼合，实现图片的动态轮播。轮播是定时自动竖直旋转轮播。
          本插件可自定义配置项包括：轮播颜色、初始颜色、圆圈显示还是方块显示、提示宽度、提示高度、提示颜色、轮播时间、轮播方向（方向上、方向下）。</p>
      </div>
    </div>
      <div class='plugin-item'>
      <div class="plugin-content el-plugin-03005">
        <div class="el-plugin" style="width:100%">
          <div class="container">
            <carousel7 :Wrapwidth="width"/>
          </div>
        </div>
      </div>
      <br>
      <div class="instruction-title-sec">HTML代码</div>
      <br><pre class="instruction-code">
                                      <pre><<span class="element">div</span> <span class="attr">class</span>="plugin-carousel-4" <span class="attr">x-plugin</span>="carousel" <span class="attr">dataName</span>="carousel_data"><<span class="element">/div></span></pre>
      </pre><br>
      <div class="instruction-title-sec">JS代码</div>
      <br>
      <pre class="instruction-code">
                                  <pre><span>{</span></pre>
      <pre><span>      name: 'carousel_4',</span>      <span class="comment">/*插件模块的模块名称*/</span></pre>
      <pre><span>      el: '.plugin-carousel-4',</span>      <span class="comment">/*插件渲染容器*/</span></pre>
      <pre><span>      data: {</span>      <span class="comment">/*配置参数项*/</span></pre>
      <pre><span>            carousel_data: {</span>      <span class="comment">/*插件绑定的容器中，绑定的数据对象的名称*/</span></pre>
      <pre><span>                  width: 10,</span>      <span class="comment">/*轮播图提示位置大小*/</span></pre>
      <pre><span>                  check_color: "#ffff00",</span>      <span class="comment">/*轮播图提示当前位置显示颜色*/</span></pre>
      <pre><span>                  translate: false,</span>      <span class="comment">/*是否可点击*/</span></pre>
      <pre><span>                  imgs: [{</span>      <span class="comment">/*轮播图图片数组*/</span></pre>
      <pre><span>                        img_item:[{</span>      <span class="comment">/*轮播图有几张图片就有几个img_item*/</span></pre>
      <pre><span>                              url: '*****'</span>      <span class="comment">/*一张图片分为及部分，就有几个{url,'*****'}*/</span></pre>
      <pre><span>                        }]</span></pre>
      <pre><span>                  }],</span></pre>
      <pre><span>                  up: true,</span>      <span class="comment">/*轮播图向上滑动还是向下滑动*/</span></pre>
      <pre><span>                  is_circle: true</span>      <span class="comment">/*轮播图提示当前位置是否为圆圈*/</span></pre>
      <pre><span>            }</span></pre>
      <pre><span>     }</span></pre>
      <pre><span>}</span></pre>
      </pre>
      <br>
      <div class='plugin-explain'>
        <p class="instruction-title-sec">插件说明:</p>
        <br>
        <p class='explain'>这是vue的transition-group的轮播图</p>
      </div>
    </div>
  </div>
</template>
<script>
import carousel5 from '@/components/pluginlist/carousel/carousel5.vue'
import carousel2 from '@/components/pluginlist/carousel/carousel2.vue'
import carousel3 from '@/components/pluginlist/carousel/carousel3.vue'
import carousel4 from '@/components/pluginlist/carousel/carousel4.vue'
import carousel1 from '@/components/pluginlist/carousel/carousel1.vue'
import carousel6 from '@/components/pluginlist/carousel/carousel6.vue'
import carousel7 from '@/components/pluginlist/carousel/vuecarousel.vue'
console.log(carousel1);
export default {
  name: "carousel",
  components: {
    carousel5,
    carousel2,
    carousel3,
    carousel4,
    carousel1,
    carousel6,
    carousel7
  },
  data(){
    let width=this.$store.state.width;;
    return {name:"轮播图插件",width:width}
  },
  mounted(){

  }
}

</script>
<style>
</style>
