<template>
   <div class='header'>
       <router-link :to="(backUrl || '')" :class="'icon iconfont icon-'+firstIcon"></router-link>
       <h2  v-on:click="callMe()">{{title}}</h2>
        <i :class="'icon iconfont icon-'+lastIcon"></i>
   </div>
</template>

<script>
export default{
  name:'Header',
  props: ['firstIcon','title','lastIcon','backUrl'],//父组件传递数据给子组件
  data(){
      return {
           message:'订单数量'
      }
  },
  methods:{
          callMe:function(){
             alert(this.title)
             //$emit(eventName)触发一个事件 分发,$on(eventName) 监听一个事件 监听, $off 取消监听事件
            this.$emit('child-tell-me-something',this.message)//子组件传递数据给父组件


             //$dispatch派发事件,事件沿着父链冒泡 从里往外,$broadcast广播事件,事件向下传导给所有的后代,从外往里
             //this.$dispatch('child-tell-me-something',this.message)
          }
      }
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
