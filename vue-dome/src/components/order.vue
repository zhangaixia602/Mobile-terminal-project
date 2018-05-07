<template>
  <div class='main'>
      <Header firstIcon='arrow-left' title='订单' lastIcon='' backUrl='/'></Header>
      <div class='body'>
        <ul>
            <router-link to="/order/" tag='li'>生产中</router-link>
            <router-link to="/order/newOrders" tag='li'>新订单</router-link>
            <router-link to="/order/hasEnded" tag='li'>已结束</router-link>
        </ul>
        <div class='container'>
            <router-view/>
        </div>
      </div>
  </div>
</template>
<script>
   import Header from './header.vue'
   export default {
     name: 'Order',
     data(){
            return {
              text:'订单',
              flag:true
            }
          },
     components: { Header}
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
           background-color: #3961d3;
           padding: 1rem 1rem 6rem;
   }
   li{
          -webkit-box-flex: 1;
          -ms-flex: 1;
          flex: 1;
          text-align: center;
          color: #92a6eb;
          cursor: pointer;
   }
   .router-link-exact-active{
          color:white;
   }
   .router-link-exact-active:after{
                  content: '';
                  display: block;
                  border: none;
                  width: 1rem;
                  height: 1rem;
                  background-color: white;
                  transform: rotate(45deg);
                  -webkit-transform: rotate(45deg);
                  margin: 1rem auto 0;
                  z-index: 1;
   }
   .container{
       margin-top: -6.5rem;
       padding: 0 1rem;
       width: 100%;
       box-sizing: border-box;
   }
</style>
<style>
 .foot>li.router-link-active:nth-of-type(2){
       color:#395cd4 !important;
   }
</style>
