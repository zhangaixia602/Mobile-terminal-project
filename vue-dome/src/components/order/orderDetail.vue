<template>
  <div  class='main'>
       <Header firstIcon='arrow-left' title='订单详情' lastIcon='' backUrl='/order'></Header>
       <div class='body'>
            <ul>
               <li>
                  <h3>{{ $route.params.id }}</h3>
                  <p>订单号</p>
                  <div class='item  line'>
                       <label>客户</label>
                       <span></span>
                  </div>
               </li>
               <li>
                  <div class='item'>
                       <label><i class="icon iconfont icon-dateselect blue"></i>商品货号</label>
                       <span></span>
                  </div>
                   <router-link :to="'/orderNumber/'+orderNumber" tag='div'  class='item active'>
                        <label><i class="icon iconfont icon-material_tab gray"></i>订单数量</label>
                        <span>{{orderNumber}}</span>
                        <i class="icon iconfont icon-arrow-right"></i>
                   </router-link>
                   <div class='item'>
                        <label><i class="icon iconfont icon-cancel2 litter-blue"></i>面料代号</label>
                        <span></span>
                   </div>
                   <div class='item'>
                        <label><i class="icon iconfont icon-web litter-blue"></i>面料名称</label>
                        <span></span>
                   </div>
                   <div class='item'>
                        <label><i class="icon iconfont icon-feather green"></i>面料批号</label>
                        <span></span>
                   </div>
                   <div class='item'>
                        <label><i class="icon iconfont icon-stocking gray"></i>面料成分</label>
                        <span></span>
                   </div>
                   <div class='item line'>
                        <div>
                            <label><i class="icon iconfont icon-archive blue"></i>到货日期</label>
                            <span></span>
                        </div>
                         <div>
                             <label>到货数量</label>
                             <span></span>
                         </div>
                   </div>
               </li>
               <li>
                  <div class='item'>
                       <div>
                           <label>面料外观质量</label>
                           <span></span>
                       </div>
                       <div>
                           <label>签名/日期</label>
                           <span></span>
                       </div>
                  </div>
                  <div class='item'>
                       <div>
                           <label>面料内在质量</label>
                           <span></span>
                       </div>
                       <div>
                           <label>签名/日期</label>
                           <span></span>
                       </div>
                  </div>
                  <div class='item line'>
                       <div>
                           <label>质检主管审核</label>
                           <span></span>
                       </div>
                       <div>
                           <label>签名/日期</label>
                           <span></span>
                       </div>
                  </div>
               </li>
               <li>
                  <div class='item line'>
                        <label>工单明细</label>
                        <span></span>
                  </div>
               </li>
            </ul>
       </div>
  </div>
</template>
<script>
import Header from '../header.vue'
   export default {
     name: 'OrderDetail',
     data(){
            return {
              orderNumber:'345677'
            }
     },
      components: { Header}
   }
</script>
<style   scoped>
.body{
    padding: 0.5rem 1rem;
}
ul{
    height: 25.2rem;
    overflow: auto;
}
li{
    background-color: white;
    border-radius: 0.3rem;
    padding: 0.3rem 0 0;
    margin-bottom:0.3rem;
}
li:last-of-type{
    margin-bottom:0.3rem;
}
h3{
    color: #395cd4;
    text-align: center;
    padding: 1rem;
    font-size: 1.6rem;
}
p{
    text-align: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e0e3e8;
}
label{
    font-size: 0.9rem;
}
label i{
    font-size: 0.9rem;
    margin-right: 0.3rem;
}
label:after{
    content:' :';

}
.item{
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #e0e3e8;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    position: relative;
}
.active{
    cursor: pointer;
}
.item>div{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.item>i{
        font-size: 1rem;
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
}
.line{
     border-bottom: none;
}
.blue{
    color:#418de1;
}
.litter-blue{
    color:#5cc5d8;
}
.gray{
    color:#746783;
}
.green{
    color:#2ac279;
}
</style>
<style>
 .foot>li:nth-of-type(2){
       color:#395cd4 !important;
   }
</style>
