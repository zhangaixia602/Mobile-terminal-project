<template>
   <ul class='foot'>
      <router-link :to="item.path" tag='li' v-for='(item,index) in menuData'  v-if='index<6'>
         <i :class="'icon iconfont icon-'+item.icon"></i>
         <span>{{item.title}}</span>
      </router-link>
   </ul>
</template>
<script>
   import menuData from '../menuData'
   export default{
     name:'Foot',
     data(){
        return {
          menuData:menuData
        }
     }
   }
</script>
<style   scoped>
ul{
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      border-top: 0.1rem solid #dedee6;
      padding: 0.5rem 0;
      background-color:#fefefe;
}
i{
   display:block;
   font-size:1rem;
   margin-bottom: 0.2rem;
}
li{
     -webkit-box-flex: 1;
     -ms-flex: 1;
     flex: 1;
     text-align: center;
     color:#adadad;
     font-size:0.7rem;
      cursor: pointer;
}
.router-link-exact-active{
   color:#395cd4;
}
</style>
