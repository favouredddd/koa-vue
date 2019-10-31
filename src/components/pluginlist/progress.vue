<template>
  <div class="plugin-type el-plugin-type">
    <div class="plugin-name">{{name}}插件</div>
    <div class='plugin-item'>
      <div class="plugin-content el-plugin-11001">
          <progress1 />
      </div>
      <br>
      <div class="instruction-title-sec">HTML代码</div>
      <br><pre class="instruction-code">
                                        <pre><<span class="element">div</span> <span class="attr">class</span>='plugin-dragprobarHV' <span class="attr">style</span>="width: 300px;height: 50px;"></pre>
      <pre>      <<span class="element">div</span> <span class="attr">class</span>="plugin-process" <span class="attr">x-plugin</span>="process" <span class="attr">process</span>="drag_pro_bar_process" <span class="attr">showStyle</span>="show_style" <span class="attr">processBoxBg </span>="process_box_bg" <span class="attr">percentColor </span>="percent_color" <span class="attr">processBg</span>="process_bg" <span class="attr">dragBtnWidth</span>="drag_btn_width" <span class="attr">dragBtnColor</span>="drag_btn_color"><<span class="element">/div></span></pre>
      <pre><<span class="element">/div</span>></pre>
      </pre><br>
      <div class="instruction-title-sec">JS代码</div>
      <br><pre class="instruction-code">
                                    <pre><span>{</span></pre>
      <pre><span>      name: 'process',</span>      <span class="comment">/*插件模块的模块名称*/</span></pre>
      <pre><span>      el: '.plugin-process',</span>      <span class="comment">/*插件渲染容器*/</span></pre>
      <pre><span>      data: {</span>      <span class="comment">/*配置参数项*/</span></pre>
      <pre><span>            drag_pro_bar_process: 0.4,</span>      <span class="comment">/*当前进度条比例*/</span></pre>
      <pre><span>            process_box_bg: 'rgba(96,96,96,0.5)',</span>      <span class="comment">/*进度条盒子背景*/</span></pre>
      <pre><span>            percent_color: '#ffffff',</span>      <span class="comment">/*进度条已占比例颜色*/</span></pre>
      <pre><span>            drag_btn_width: 10,</span>      <span class="comment">/*进度条圆点大小*/</span></pre>
      <pre><span>            process_bg: '#000000',</span>      <span class="comment">/*整个进度条颜色*/</span></pre>
      <pre><span>            drag_btn_color: '#00ff00'</span>      <span class="comment">/*进度条圆点颜色*/</span></pre>
      <pre><span>     }</span></pre>
      <pre><span>}</span></pre>
      </pre><br>
      <div class='plugin-explain'>
        <p class="instruction-title-sec">插件说明:</p>
        <br>
        <p class='explain'>使用此进度条需设置绑定x-plugin标签父元素的宽度及高度，这样进度条的宽度及高度根据父元素进行适配。可以通过鼠标点击来改变进度。本插件可自定义配置项包括：背景颜色、百分比颜色、剩余百分比颜色、提示圆圈颜色，是否显示百分比数字等参数。</p>
      </div>
    </div>
    <div class='plugin-item'>
      <div class="plugin-content el-plugin-11002">
        <progress1 />
      </div>
      <br>
      <div class="instruction-title-sec">HTML代码</div>
      <br><pre class="instruction-code">
                                        <pre><<span class="element">div</span> <span class="attr">class</span>='plugin-dragprobarHV' <span class="attr">style</span>="width: 300px;height: 20px;"></pre>
      <pre>      <<span class="element">div</span> <span class="attr">class</span>="plugin-process" <span class="attr">x-plugin</span>="proBar" <span class="attr">dataItem</span>="proBar" <span class="attr">showItem</span>="percent" <span class="attr">processBgColor</span>="process_bg_color" <span class="attr">processPercentColor</span>="process_percent_color" <span class="attr">processPercentNumColor</span>="process_percent_num_color"><<span class="element">/div></span></pre>
      <pre><<span class="element">/div</span>></pre>
      </pre><br>
      <div class="instruction-title-sec">JS代码</div>
      <br><pre class="instruction-code">
                                    <pre><span>{</span></pre>
      <pre><span>      name: 'process',</span>      <span class="comment">/*插件模块的模块名称*/</span></pre>
      <pre><span>      el: '.plugin-process',</span>      <span class="comment">/*插件渲染容器*/</span></pre>
      <pre><span>      data: {</span>      <span class="comment">/*配置参数项*/</span></pre>
      <pre><span>            proBar: 0.9,</span>      <span class="comment">/*当前进度条比例*/</span></pre>
      <pre><span>            percent: true,</span>      <span class="comment">/*显示小数还是百分比，true显示百分比，false显示小数*/</span></pre>
      <pre><span>            process_percent_num_color: '#ffffff',</span>      <span class="comment">/*进度条比例数字颜色*/</span></pre>
      <pre><span>            process_percent_color: '#4A98FF',</span>      <span class="comment">/*进度条已占比例颜色*/</span></pre>
      <pre><span>            process_bg_color: '#DDDDDD'</span>      <span class="comment">/*进度条未占比例颜色*/</span></pre>
      <pre><span>     }</span></pre>
      <pre><span>}</span></pre>
      </pre><br>
      <div class='plugin-explain'>
        <p class="instruction-title-sec">插件说明:</p>
        <br>
        <p class='explain'>这是本系统第二个进度条插件，此插件显示了进度数值，以及进度的图形显示。本插件可自定义配置项包括：显示小数还是百分数、所占比例、字体颜色、百分比颜色、剩余百分比颜色。</p>
      </div>
    </div>
    <div class='plugin-item'>
      <div class="plugin-content el-plugin-11003">
        <progress3 />
      </div>
      <br>
      <div class="instruction-title-sec">HTML代码</div>
      <br><pre class="instruction-code">
                                        <pre><<span class="element">div</span> <span class="attr">class</span>="plugin-process" <span class="attr">x-plugin</span>="proBar"><<span class="element">/div></span></pre>
      </pre><br>
      <div class="instruction-title-sec">JS代码</div>
      <br><pre class="instruction-code">
                                    <pre><span>{</span></pre>
      <pre><span>      name: 'process',</span>      <span class="comment">/*插件模块的模块名称*/</span></pre>
      <pre><span>      el: '.plugin-process',</span>      <span class="comment">/*插件渲染容器*/</span></pre>
      <pre><span>      data: {</span>      <span class="comment">/*配置参数项*/</span></pre>
      <pre><span>            per: 1,</span>      <span class="comment">/*总共10份，当前进度条比例*/</span></pre>
      <pre><span>            process_all_color: '#f5f5f5',</span>      <span class="comment">/*进度条基础颜色*/</span></pre>
      <pre><span>            process_percent_color: '#4A98FF',</span>      <span class="comment">/*进度条已占比例颜色*/</span></pre>
      <pre><span>     }</span></pre>
      <pre><span>}</span></pre>
      </pre><br>
      <div class='plugin-explain'>
        <p class="instruction-title-sec">插件说明:</p>
        <br>
        <p class='explain'>这是本系统第三个进度条插件，此插件为svs圆环进度插件。显示了进度数值，以及进度的图形显示，可以通过鼠标点击来改变进度。根据用户传的数据进行渲染，根据用户选择显示百分比。
          本插件可自定义配置项包括：百分比颜色、剩余百分比颜色。</p>
      </div>
    </div>
  </div>
</template>
<script>
import progress1 from '@/components/pluginlist/progress/progress1.vue'
import progress3 from '@/components/pluginlist/progress/progress3.vue'
export default {
  name: "progresss",
  components: {
    progress1,
    progress3
  },
  data() {
    return { name: "进度条" }
  }
}

</script>
<style>
</style>
