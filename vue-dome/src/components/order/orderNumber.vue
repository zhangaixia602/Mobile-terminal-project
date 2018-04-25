<template>
  <div class='main'>
      <Header firstIcon='arrow-left' title='订单数量' lastIcon='' backUrl='/order'></Header>
      <div class='body'>
           <ul>
               <router-link :to="'/orderNumber/'+$route.params.id" tag='li'>区域明细</router-link>
               <router-link :to="'/orderNumber/'+$route.params.id+'/specificationDetails'" tag='li'>规格明细</router-link>
               <router-link :to="'/orderNumber/'+$route.params.id+'/companyDetails'" tag='li'>公司明细</router-link>
            </ul>
           <div>
               <router-view />
           </div>
      </div>
  </div>
</template>
<script>
   import Header from '../header.vue'
   export default {
     name: 'OrderNumber',
     data(){
            return {
              orderId:'$route.params.id'
            }
          },
     components: { Header}
   }
</script>
<style   scoped>
.body{
    background-color:white;
}
.body>div{
    height: 22.8rem;
    overflow-x: hidden;
    overflow-y: auto;
}
ul{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
li{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
    padding: 1rem 0;
    border-bottom: 0.1rem solid #dedee6;
}
.router-link-exact-active{
    color: #395cd4;
    border-bottom: 0.1rem solid #395cd4;
}

</style>
<style>
</style>
