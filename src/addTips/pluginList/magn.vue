<template>
  <div class="plugin-type el-plugin-type">
    <div class="plugin-name">{{name}}插件</div>
    <div class='plugin-item'>
      <div class="plugin-content el-plugin-08001">
        <div class="el-plugin" style="overflow: auto">
          <magn1 />
        </div>
      </div>
      <br>
      <div class="instruction-title-sec">HTML代码</div>
      <br><pre class="instruction-code">
                                        <pre><<span class="element">div</span> <span class="attr">class</span>="plugin-photo-to-big" <span class="attr">x-plugin</span>="photo_to_big" <span class="attr">dataName</span>="photo_to_big_data"><<span class="element">/div></span></pre>
      </pre><br>
      <div class="instruction-title-sec">JS代码</div>
      <br><pre class="instruction-code">
                                    <pre><span>{</span></pre>
      <pre><span>      name: 'photo_to_big',</span>      <span class="comment">/*插件模块的模块名称*/</span></pre>
      <pre><span>      el: '.plugin-photo-to-big',</span>      <span class="comment">/*插件渲染容器*/</span></pre>
      <pre><span>      data: {</span>      <span class="comment">/*配置参数项*/</span></pre>
      <pre><span>            photo_to_big_data: {</span>      <span class="comment">/*插件绑定的容器中，绑定的数据对象的名称*/</span></pre>
      <pre><span>                  small_img: '*****',</span>      <span class="comment">/*图片放大镜插件小图片路径*/</span></pre>
      <pre><span>                  big_img: '*****',</span>      <span class="comment">/*图片放大镜插件大图片路径*/</span></pre>
      <pre><span>                  radio: '2',</span>      <span class="comment">/*图片放大镜放大比例*/</span></pre>
      <pre><span>                  mark_color: '#666666',</span>      <span class="comment">/*图片放大镜遮罩层颜色*/</span></pre>
      <pre><span>                  mark_opacity: 0.2,</span>      <span class="comment">/*图片放大镜遮罩层透明度*/</span></pre>
      <pre><span>            }</span></pre>
      <pre><span>     }</span></pre>
      <pre><span>}</span></pre>
      </pre><br>
      <div class='plugin-explain'>
        <p class="instruction-title-sec">插件说明:</p>
        <br>
        <p class='explain'>这是一款图片放大镜插件。可以一定程度上放大鼠标选中的区域。本插件可自定义配置项包括：放大比例、颜色、透明度、图片路径。在使用时，需定义图片标签的父元素标签的大小（width,height）。</p>
      </div>
    </div>
    <div class='plugin-item'>
      <div class="plugin-content el-plugin-08002" style="display: block!important">
                 <magn1 />
      </div>
      <br>
      <div class="instruction-title-sec">HTML代码</div>
      <br><pre class="instruction-code">
                                        <pre><<span class="element">div</span> <span class="attr">class</span>="plugin-photo-to-big" <span class="attr">x-plugin</span>="photo_to_big" <span class="attr">dataName</span>="photo_to_big_data"><<span class="element">/div></span></pre>
      </pre><br>
      <div class="instruction-title-sec">JS代码</div>
      <br><pre class="instruction-code">
                                    <pre><span>{</span></pre>
      <pre><span>      name: 'photo_to_big',</span>      <span class="comment">/*插件模块的模块名称*/</span></pre>
      <pre><span>      el: '.plugin-photo-to-big',</span>      <span class="comment">/*插件渲染容器*/</span></pre>
      <pre><span>      data: {</span>      <span class="comment">/*配置参数项*/</span></pre>
      <pre><span>            photo_to_big_data: {</span>      <span class="comment">/*插件绑定的容器中，绑定的数据对象的名称*/</span></pre>
      <pre><span>                  small_img: '*****',</span>      <span class="comment">/*图片放大镜插件小图片路径*/</span></pre>
      <pre><span>                  imgs: '*****',</span>      <span class="comment">/*图片切换数组*/</span></pre>
      <pre><span>                   big_img: '*****',</span>      <span class="comment">/*图片放大镜插件大图片路径*/</span></pre>
      <pre><span>                  radio: '2',</span>      <span class="comment">/*图片放大镜放大比例*/</span></pre>
      <pre><span>                  mark_color: '#666666',</span>      <span class="comment">/*图片放大镜遮罩层颜色*/</span></pre>
      <pre><span>                  mark_opacity: 0.2,</span>      <span class="comment">/*图片放大镜遮罩层透明度*/</span></pre>
      <pre><span>            }</span></pre>
      <pre><span>     }</span></pre>
      <pre><span>}</span></pre>
      </pre><br>
      <div class='plugin-explain'>
        <p class="instruction-title-sec">插件说明:</p>
        <br>
        <p class='explain'>这是一款图片放大镜插件。可以一定程度上放大鼠标选中的区域。本插件可自定义配置项包括：放大比例、颜色、透明度、图片路径。在使用时，需定义图片标签的父元素标签的大小（width,height）。</p>
      </div>
    </div>
  </div>
</template>
<script>
  import magn1 from '@/components/pluginlist/magn/magn1.vue'
export default {
  name: "magn",
  components:{
    magn1,
  },
  data() {
    return {
      name:"magn"
    };
  },
  methods: {
  },
  computed: {
  }
}

</script>
<style>
</style>
