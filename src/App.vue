<template>
  <div class="root">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'vue',
}

</script>
<style>
body{
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
input{
  -webkit-appearance: none;
}
.slide-left-enter-active {
  transition: all .3s ease;
}
.slide-left-leave-active {
  transition: all .8s ease  ;
}
.slide-left-enter
{
  transform: translateX(100%);
  opacity: 0;
}
.slide-left-leave-to{
 transform: translateX(-100%);
  opacity: 0;
}

.slide-right-enter-active {
  transition: all .3s ease;
}
.slide-right-leave-active {
  transition: all .8s ease  ;
}
.slide-right-enter{
  transform: translateX(-100%);
  opacity: 0;
}
.slide-right-leave-to{
    transform: translateX(100%);
    opacity: 0;
}
</style>
<style lang="less">
::selection { background:#2196f3; color: #fff; }
.instruction-title {
  color: #333;
  font-size: 14px;
  font-weight: bold;
  text-indent: .5rem;
}
* {
  margin: 0;
  padding: 0;
}
li{
  list-style-type: none;
}
code {
  font-size: 14px;
  box-shadow: 2px 2px 5px rgba(2,2,2,.1);
}
.introduce {
  background: #ff9933;
  border-radius: 5px;
  padding: 5px;
  line-height: 24px;
  font-size: 12px;
}
.title,
.jsTitle {
  margin-bottom: .5rem;
  .instruction-title;
}
.hljs {
  background-color: #f0f0f0;
  white-space: pre-wrap;
  margin-bottom: .5rem;
}
.scale-enter, .scale-leave-to {
  transform: scale(0)
}
.scale-leave, .scale-enter-to {
  transform: scale(1)
}
.scale-enter-active, .scale-leave-active {
  transition: all .2s
}

</style>
