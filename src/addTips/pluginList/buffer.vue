<template>
  <div class="plugin-type el-plugin-type">
    <div class="plugin-name">{{name}}插件</div>
    <p class="explain">本章节主要介绍缓冲动画插件，用户可根据需求选择不同类型，主要用途为：当请求数据时，会有一段时间的空白，使用缓冲动画插件，可提高用户体验。</p>
    <div class='plugin-item'>
      <div class="plugin-content el-plugin-02001">
        <div class="plugin-buffering">
          <buffer1 />
        </div>
      </div>
      <br>
      <div class="instruction-title-sec">HTML代码</div>
      <br><pre class="instruction-code">
                                    <pre><<span class="element">div</span> <span class="attr">class</span>="plugin-buffering-1" <span class="attr">x-plugin</span>="buffering" <span class="attr">dataName</span>="buffering_data"><<span class="element">/div></span></pre>
      </pre><br>
      <div class="instruction-title-sec">JS代码</div>
      <br><pre class="instruction-code">
                                    <pre><span>{</span></pre>
      <pre><span>      name: 'buffering_1',</span>      <span class="comment">/*插件模块的模块名称*/</span></pre>
      <pre><span>      el: '.plugin-buffering-1',</span>      <span class="comment">/*插件渲染容器*/</span></pre>
      <pre><span>      data: {</span>      <span class="comment">/*配置参数项*/</span></pre>
      <pre><span>            buffering_data: {</span>      <span class="comment">/*插件绑定的容器中，绑定的数据对象的名称*/</span></pre>
      <pre><span>                  show: true</span>      <span class="comment">/*在接收到消息时，显示动画*/</span></pre>
      <pre><span>                  color: "#FF0000",</span>      <span class="comment">/*缓冲动画颜色*/</span></pre>
      <pre><span>                  animation_time: 1</span>      <span class="comment">/*缓冲动画时间*/</span></pre>
      <pre><span>                  radius: 5</span>      <span class="comment">/*缓冲动画单个圆半径*/</span></pre>
      <pre><span>            }</span></pre>
      <pre><span>     }</span></pre>
      <pre><span>}</span></pre>
      </pre><br>
      <div class='plugin-explain'>
        <p class="instruction-title-sec">插件说明:</p>
        <br>
        <p class='explain'>这是本系统第一个缓冲插件，即加载动画，由动感动画组成。本插件可自定义配置项包括：泡泡颜色、动画时间、单个元素半径。</p>
      </div>
    </div>
    <div class='plugin-item'>
      <div class="plugin-content el-plugin-02002">
        <buffer2 />
      </div>
      <br>
      <div class="instruction-title-sec">HTML代码</div>
      <br><pre class="instruction-code">
                                    <pre><<span class="element">div</span> <span class="attr">class</span>="plugin-buffering-2" <span class="attr">x-plugin</span>="buffering" <span class="attr">dataName</span>="buffering_data"><<span class="element">/div></span></pre>
      </pre><br>
      <div class="instruction-title-sec">JS代码</div>
      <br><pre class="instruction-code">
                                    <pre><span>{</span></pre>
      <pre><span>      name: 'buffering_2',</span>      <span class="comment">/*插件模块的模块名称*/</span></pre>
      <pre><span>      el: '.plugin-buffering-2',</span>      <span class="comment">/*插件渲染容器*/</span></pre>
      <pre><span>      data: {</span>      <span class="comment">/*配置参数项*/</span></pre>
      <pre><span>            buffering_data: {</span>      <span class="comment">/*插件绑定的容器中，绑定的数据对象的名称*/</span></pre>
      <pre><span>                  show: true</span>      <span class="comment">/*在接收到消息时，显示动画*/</span></pre>
      <pre><span>                  color: "#FF0000",</span>      <span class="comment">/*缓冲动画颜色*/</span></pre>
      <pre><span>                  animation_time: 1</span>      <span class="comment">/*缓冲动画时间*/</span></pre>
      <pre><span>                  width: 50,</span>      <span class="comment">/*缓冲动画长方形盒子宽度*/</span></pre>
      <pre><span>                  height: 50</span>      <span class="comment">/*缓冲动画长方形盒子高度*/</span></pre>
      <pre><span>            }</span></pre>
      <pre><span>     }</span></pre>
      <pre><span>}</span></pre>
      </pre><br>
      <div class='plugin-explain'>
        <p class="instruction-title-sec">插件说明:</p>
        <br>
        <p class='explain'>这是本系统第二个缓冲插件，即加载动画，由动感动画组成。本插件可自定义配置项包括：方块颜色、动画时间、动画外层盒子宽度、高度。</p>
      </div>
    </div>
    <div class='plugin-item'>
      <div class="plugin-content el-plugin-02003">
        <div style="width: 100%; height: 100px;">
          <buffer3 />
        </div>
      </div>
      <br>
      <div class="instruction-title-sec">HTML代码</div>
      <br><pre class="instruction-code">
                                    <pre><<span class="element">div</span> <span class="attr">class</span>="plugin-buffering-3" <span class="attr">x-plugin</span>="buffering" <span class="attr">dataName</span>="buffering_data"><<span class="element">/div></span></pre>
      </pre><br>
      <div class="instruction-title-sec">JS代码</div>
      <br><pre class="instruction-code">
                                    <pre><span>{</span></pre>
      <pre><span>      name: 'buffering_3',</span>      <span class="comment">/*插件模块的模块名称*/</span></pre>
      <pre><span>      el: '.plugin-buffering-3',</span>      <span class="comment">/*插件渲染容器*/</span></pre>
      <pre><span>      data: {</span>      <span class="comment">/*配置参数项*/</span></pre>
      <pre><span>            buffering_data: {</span>      <span class="comment">/*插件绑定的容器中，绑定的数据对象的名称*/</span></pre>
      <pre><span>                  show: true</span>      <span class="comment">/*在接收到消息时，显示动画*/</span></pre>
      <pre><span>                  color: '#409EFF'</span>      <span class="comment">/*动画颜色*/</span></pre>
      <pre><span>                  animation_time: 3</span>      <span class="comment">/*动画时间*/</span></pre>
      <pre><span>                  size: 64</span>      <span class="comment">/*圆圈大小*/</span></pre>
      <pre><span>            }</span></pre>
      <pre><span>     }</span></pre>
      <pre><span>}</span></pre>
      </pre><br>
      <div class='plugin-explain'>
        <p class="instruction-title-sec">插件说明:</p>
        <br>
        <p class='explain'>这是本系统第三个缓冲插件，即加载动画，由圆圈组成。在圆圈中间可设置加载动画图片，比如logo。</p>
      </div>
    </div>
    <div class='plugin-item'>
      <div class="plugin-content el-plugin-02004">
        <div class="el-animation-4">
          <div style="height:60px" dataName='buffering_data'>
            <buffer4 />
          </div>
        </div>
      </div>
      <br>
      <div class="instruction-title-sec">HTML代码</div>
      <br><pre class="instruction-code">
                                    <pre><<span class="element">div</span> <span class="attr">class</span>="plugin-buffering-4" <span class="attr">x-plugin</span>="buffering" <span class="attr">dataName</span>="buffering_data"><<span class="element">/div></span></pre>
      </pre><br>
      <div class="instruction-title-sec">JS代码</div>
      <br><pre class="instruction-code">
                                    <pre><span>{</span></pre>
      <pre><span>      name: 'buffering_4',</span>      <span class="comment">/*插件模块的模块名称*/</span></pre>
      <pre><span>      el: '.plugin-buffering-4',</span>      <span class="comment">/*插件渲染容器*/</span></pre>
      <pre><span>      data: {</span>      <span class="comment">/*配置参数项*/</span></pre>
      <pre><span>            buffering_data: {</span>      <span class="comment">/*插件绑定的容器中，绑定的数据对象的名称*/</span></pre>
      <pre><span>                  show: true</span>      <span class="comment">/*在接收到消息时，显示动画*/</span></pre>
      <pre><span>                  color: "#00bfff",</span>      <span class="comment">/*缓冲动画颜色*/</span></pre>
      <pre><span>                  time: 0.8</span>      <span class="comment">/*缓冲动画时间*/</span></pre>
      <pre><span>                  width: 150,</span>      <span class="comment">/*缓冲动画长方形盒子宽度*/</span></pre>
      <pre><span>                  height: 70</span>      <span class="comment">/*缓冲动画长方形盒子高度*/</span></pre>
      <pre><span>            }</span></pre>
      <pre><span>     }</span></pre>
      <pre><span>}</span></pre>
      </pre><br>
      <div class='plugin-explain'>
        <p class="instruction-title-sec">插件说明:</p>
        <br>
        <p class='explain'>这是本系统第四个缓冲插件，即加载动画，由动感动画组成。本插件可自定义配置项包括：颜色、动画时间、动画外层盒子宽度、高度。</p>
      </div>
    </div>
    <div class='plugin-item'>
      <div class="plugin-content el-plugin-02005">
        <div class="el-animation-5">
          <buffer5 />
        </div>
      </div>
      <br>
      <div class="instruction-title-sec">HTML代码</div>
      <br><pre class="instruction-code">
                                    <pre><<span class="element">div</span> <span class="attr">class</span>="plugin-buffering-5" <span class="attr">x-plugin</span>="buffering" <span class="attr">dataName</span>="buffering_data"><<span class="element">/div></span></pre>
      </pre><br>
      <div class="instruction-title-sec">JS代码</div>
      <br><pre class="instruction-code">
                                    <pre><span>{</span></pre>
      <pre><span>      name: 'buffering_5',</span>      <span class="comment">/*插件模块的模块名称*/</span></pre>
      <pre><span>      el: '.plugin-buffering-5',</span>      <span class="comment">/*插件渲染容器*/</span></pre>
      <pre><span>      data: {</span>      <span class="comment">/*配置参数项*/</span></pre>
      <pre><span>            buffering_data: {</span>      <span class="comment">/*插件绑定的容器中，绑定的数据对象的名称*/</span></pre>
      <pre><span>                  show: true</span>      <span class="comment">/*在接收到消息时，显示动画*/</span></pre>
      <pre><span>                  color: "#363636",</span>      <span class="comment">/*缓冲动画颜色*/</span></pre>
      <pre><span>                  time: 2</span>      <span class="comment">/*缓冲动画时间*/</span></pre>
      <pre><span>                  radius: 5</span>      <span class="comment">/*缓冲动画单个圆半径*/</span></pre>
      <pre><span>            }</span></pre>
      <pre><span>     }</span></pre>
      <pre><span>}</span></pre>
      </pre><br>
      <div class='plugin-explain'>
        <p class="instruction-title-sec">插件说明:</p>
        <br>
        <p class='explain'>这是本系统第五个缓冲插件，即加载动画，由水滴动画组成。本插件可自定义配置项包括：颜色、动画时间、单个元素半径。</p>
      </div>
    </div>
    <div class='plugin-item'>
      <div class="plugin-content el-plugin-02006">
        <div class="plugin-buffering" style="height: 100px;">
          <buffer6 />
        </div>
      </div>
      <br>
      <div class="instruction-title-sec">HTML代码</div>
      <br><pre class="instruction-code">
                                    <pre><<span class="element">div</span> <span class="attr">class</span>="plugin-buffering-6" <span class="attr">x-plugin</span>="buffering" <span class="attr">dataName</span>="buffering_data"><<span class="element">/div></span></pre>
      </pre><br>
      <div class="instruction-title-sec">JS代码</div>
      <br><pre class="instruction-code">
                                    <pre><span>{</span></pre>
      <pre><span>      name: 'buffering_6',</span>      <span class="comment">/*插件模块的模块名称*/</span></pre>
      <pre><span>      el: '.plugin-buffering-6',</span>      <span class="comment">/*插件渲染容器*/</span></pre>
      <pre><span>      data: {</span>      <span class="comment">/*配置参数项*/</span></pre>
      <pre><span>            buffering_data: {</span>      <span class="comment">/*插件绑定的容器中，绑定的数据对象的名称*/</span></pre>
      <pre><span>                  show: true</span>      <span class="comment">/*在接收到消息时，显示动画*/</span></pre>
      <pre><span>                  color: "#FF0000",</span>      <span class="comment">/*缓冲动画颜色*/</span></pre>
      <pre><span>                  animation_time: 1</span>      <span class="comment">/*缓冲动画时间*/</span></pre>
      <pre><span>                  radius: 5</span>      <span class="comment">/*缓冲动画单个圆半径*/</span></pre>
      <pre><span>            }</span></pre>
      <pre><span>     }</span></pre>
      <pre><span>}</span></pre>
      </pre><br>
      <div class='plugin-explain'>
        <p class="instruction-title-sec">插件说明:</p>
        <br>
        <p class='explain'>这是本系统第一个缓冲插件，即加载动画，由多个长方形旋转组成。本插件可自定义配置项包括：长方形颜色、动画时间</p>
      </div>
    </div>
  </div>
</template>
<script>
import buffer1 from '@/components/pluginlist/buffer/buffer1.vue'
import buffer2 from '@/components/pluginlist/buffer/buffer2.vue'
import buffer3 from '@/components/pluginlist/buffer/buffer3.vue'
import buffer4 from '@/components/pluginlist/buffer/buffer4.vue'
import buffer5 from '@/components/pluginlist/buffer/buffer5.vue'
import buffer6 from '@/components/pluginlist/buffer/buffer6.vue'
export default {
  name: "buffer",
  components: {
    buffer1,
    buffer2,
    buffer3,
    buffer4,
    buffer5,
    buffer6
  },
  data() {
    let width = this.$store.state.width;;
    return { name: "轮播图插件", width: width }
  },
  mounted() {

  }
}

</script>
<style>
</style>
