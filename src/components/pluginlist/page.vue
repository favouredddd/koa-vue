<template>
  <div class="plugin-type el-plugin-type">
    <div class="plugin-name">{{name}}插件</div>
    <p class='explain'>因分页插件应用场景的不同，当当前页发生变化时，需要请求数据，因此需要在插件模块中定义updatePage函数，具体用法详见<a href="http://www.nodom.org">NoDom官网</a>模块中方法的使用</p>
    <div class='plugin-item'>
      <div class="plugin-content el-plugin-10001">
        <div class="plugin-page">
          <page2 />
        </div>
      </div>
      <br>
      <div class="instruction-title-sec">HTML代码</div>
      <br><pre class="instruction-code">
                                        <pre><<span class="element">div</span> <span class="attr">class</span>="plugin-paging" <span class="attr">x-plugin</span>="paging_big"><<span class="element">/div></span></pre>
      </pre><br>
      <div class="instruction-title-sec">JS代码</div>
      <br><pre class="instruction-code">
                                    <pre><span>{</span></pre>
      <pre><span>      name: 'paging',</span>      <span class="comment">/*插件模块的模块名称*/</span></pre>
      <pre><span>      el: '.plugin-paging',</span>      <span class="comment">/*插件渲染容器*/</span></pre>
      <pre><span>      data: {</span>      <span class="comment">/*配置参数项*/</span></pre>
      <pre><span>            page: 1,</span>      <span class="comment">/*分页插件当前页*/</span></pre>
      <pre><span>            row: 10,</span>      <span class="comment">/*分页插件每页条数*/</span></pre>
      <pre><span>            total: 30,</span>      <span class="comment">/*分页插件总条数*/</span></pre>
      <pre><span>            to_page: 1</span>      <span class="comment">/*分页插件需跳转页数*/</span></pre>
      <pre><span>            page_color: '#FF0000'</span>      <span class="comment">/*分页插件页数颜色*/</span></pre>
      <pre><span>     }</span></pre>
      <pre><span>}</span></pre>
      </pre><br>
      <div class='plugin-explain'>
        <p class="instruction-title-sec">插件说明:</p>
        <br>
        <p class='explain'>本分页插件不仅有普通插件的翻页功能，点击即跳转至目的页码，并可以直接跳转到首页或末页。更额外添加了中间页码的智能展示、记录总数展示以及总页数展示。本插件可自定义配置项包括：页数颜色（总页数、总条数、当前页）、当前页、每页条数、跳转页数、总条数。</p>
      </div>
    </div>
    <div class='plugin-item'>
      <div class="plugin-content el-plugin-10002">
        <div class="plugin-page">
        <page1 /> 
        </div>
      </div>
      <br>
      <div class="instruction-title-sec">HTML代码</div>
      <br><pre class="instruction-code">
                                        <pre><<span class="element">div</span> <span class="attr">class</span>="plugin-paging" <span class="attr">x-plugin</span>="paging_big" <span class="attr">dataName</span>="paging_data"><<span class="element">/div></span></pre>
      </pre><br>
      <div class="instruction-title-sec">JS代码</div>
      <br><pre class="instruction-code">
                                    <pre><span>{</span></pre>
      <pre><span>      name: 'paging',</span>      <span class="comment">/*插件模块的模块名称*/</span></pre>
      <pre><span>      el: '.plugin-paging',</span>      <span class="comment">/*插件渲染容器*/</span></pre>
      <pre><span>      data: {</span>      <span class="comment">/*配置参数项*/</span></pre>
      <pre><span>            paging_data: {</span>      <span class="comment">/*分页插件当前页*/</span></pre>
      <pre><span>                  pre_page: 1,</span>      <span class="comment">/*分页插件当前页*/</span></pre>
      <pre><span>                  go_page: 1,</span>      <span class="comment">/*分页插件需跳转页数*/</span></pre>
      <pre><span>                  all_page: 16,</span>      <span class="comment">/*分页插件总页数*/</span></pre>
      <pre><span>                  page_rows: [],</span>      <span class="comment">/*插件渲染需要，只需传入空数组*/</span></pre>
      <pre><span>                  pre_color: '#5eaee3',</span>      <span class="comment">/*当前页颜色*/</span></pre>
      <pre><span>                  word_color: '#999999'</span>      <span class="comment">/*页码字体颜色*/</span></pre>
      <pre><span>            }</span></pre>
      <pre><span>     }</span></pre>
      <pre><span>}</span></pre>
      </pre><br>
      <div class='plugin-explain'>
        <p class="instruction-title-sec">插件说明:</p>
        <br>
        <p class='explain'>分页插件不仅有普通插件的翻页功能，更额外添加了中间页码的智能展示，点击即跳转至目的页码。分页插件需配置当前页、跳转页、总页数。</p>
      </div>
    </div>
  </div>
</template>
<script>
import page1 from '@/components/pluginlist/page/page1.vue'
import page2 from '@/components/pluginlist/page/page2.vue'
export default {
  name: "page",
  components:{
    page1,
      page2
  },
  data(){
    return {name:'分页插件'}
  }
}
</script>
<style>
.plugin-page{
  overflow: auto;
}
</style>
