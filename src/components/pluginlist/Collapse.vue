<template>
  <div class="plugin-type el-plugin-type">
    <div class="plugin-name">{{name}}插件</div>
    <div class='plugin-item'>
      <div class="plugin-content el-plugin-07001">
        <div class="plugin-collapse">
        <Collapse1/>	
        </div>
      </div>
      <br>
      <div class="instruction-title-sec">HTML代码</div>
      <br><pre class="instruction-code">
                                        <pre><<span class="element">div</span> <span class="attr">class</span>="collapse" <span class="attr">x-plugin</span>="collapse" <span class="attr">dataName</span>="collapse_data"><<span class="element">/div></span></pre>
      </pre><br>
      <div class="instruction-title-sec">JS代码</div>
      <br><pre class="instruction-code">
                                    <pre><span>{</span></pre>
      <pre><span>      name: 'collapse',</span>      <span class="comment">/*插件模块的模块名称*/</span></pre>
      <pre><span>      el: '.plugin-collapse',</span>      <span class="comment">/*插件渲染容器*/</span></pre>
      <pre><span>      data: {</span>      <span class="comment">/*配置参数项*/</span></pre>
      <pre><span>            collapse_data: {</span>      <span class="comment">/*插件绑定的容器中，绑定的数据对象的名称*/</span></pre>
      <pre><span>                  time: 0.5,</span>      <span class="comment">/*折叠动画时间*/</span></pre>
      <pre><span>                  isCollapse: true,</span>      <span class="comment">/*折叠插件是打开状态还是折叠状态*/</span></pre>
      <pre><span>                  heading: '点击展开，再次点击折叠',</span>      <span class="comment">/*插件头部文字信息*/</span></pre>
      <pre><span>                  content: 'NoDom提供了丰富的指令集，如x-repeat( 重复条目渲染 )、x-model(数据模型)、x-if/x-else(条件)、x-show(显示和隐藏)、x-route／x-router(路由)、 x-field(字段和双向绑定)、x-validity(字段验证)。 同时提供了自定义指令集，指令可以帮助简化模版，丰富渲染内容。',</span>      <span class="comment">/*插件具体内容信息*/</span></pre>
      <pre><span>                  head_color: '#f5f5f5',</span>      <span class="comment">/*折叠插件头部背景颜色*/</span></pre>
      <pre><span>                  content_color: '#FFFFFF',</span>      <span class="comment">/*插件具体内容背景颜色*/</span></pre>
      <pre><span>                  head_font_color: '#666666',</span>      <span class="comment">/*插件具体头部字体颜色*/</span></pre>
      <pre><span>                  content_font_color: '#999999',</span>      <span class="comment">/*插件具体内容字体颜色*/</span></pre>
      <pre><span>                  head_font_size: 16,</span>      <span class="comment">/*折叠插件头部字体大小*/</span></pre>
      <pre><span>                  content_font_size: 14,</span>      <span class="comment">/*插件具体内容字体大小*/</span></pre>
      <pre><span>            }</span></pre>
      <pre><span>     }</span></pre>
      <pre><span>}</span></pre>
      </pre><br>
      <div class='plugin-explain'>
        <p class="instruction-title-sec">插件说明:</p>
        <br>
        <p class='explain'>这是一个折叠插件，通过点击来实现内容的折叠隐藏与显示。使页面展示效果更佳。
          本插件可自定义配置项包括：头部内容、头部背景颜色、头部字体大小、头部字体颜色，具体内容、具体内容背景颜色、具体内容字体大小、具体内容字体颜色、折叠时间。</p>
      </div>
    </div>
  </div>
</template>
<script>
	import Collapse1  from '@/components/pluginlist/Collapse/Collapse1.vue'
	export default {
		name:"Collapse",
		data(){
			return {name:"日期选择"}
		},
		components:{
			Collapse1
		}
	}
</script>
