<template>
   <div class='header'>
       <router-link :to="(backUrl || '')" :class="'icon iconfont icon-'+firstIcon"></router-link>
       <h2>{{title}}</h2>
        <i :class="'icon iconfont icon-'+lastIcon"></i>
   </div>
</template>

<script>
export default{
  name:'Header',
  props: ['firstIcon','title','lastIcon','backUrl']//父组件传递数据给子组件
}
</script>

<style  scoped>
.header{
   background-color:#395cd4;
   padding:1rem;
   color:white;
   display:flex;
}
h2{
   display:inline-block;
   flex:1;
   font-size:1.2rem;
   font-weight:normal;
   text-align:center;
}
.iconfont {
    font-size:1.2rem;
    vertical-align: bottom;
    padding-top:0.25rem;
}
</style>
