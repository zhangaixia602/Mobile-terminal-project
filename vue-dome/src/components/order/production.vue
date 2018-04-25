<template>
  <div>
      <ul>
         <li>
            <label>完成情况</label>
            <i class="icon iconfont icon-global"></i>
         </li>
         <li>
            <label>进展情况</label>
            <i class="icon iconfont icon-framework"></i>
         </li>
      </ul>
      <div class='order-main'>
        <div v-for='(item,index) in data' class='item'>
          <router-link :to="'/orderDetail/'+item.order" tag='div'>
              <label>订单号</label>
              <span>{{item.order}}</span>
              <i class="icon iconfont icon-arrow-right"></i>
          </router-link>
          <p>
              <label>客户</label>
              <span>{{item.customer}}</span>
          </p>

          <div>
              <label>交期</label>
              <span>{{item.time}}</span>
          </div>
          <div>
              <label>产线</label>
              <span>{{item.line}}</span>
          </div>
          <p>
             <i :style="{backgroundColor:item.color}"></i>
             <span :style="{color:item.color}">{{item.type}}</span>
          </p>
        </div>
      </div>

  </div>
</template>
<script>
import OrderDetail from './orderDetail'
   export default {
     name: 'Production',
     data(){
            return {
              data:[
                 {
                    order:'11111',
                    customer:'任依诺',
                    time:'2018-01-28',
                    line:'4H1/4H3',
                    type:'大货',
                    color:'#3e8fe0'
                 },
                 {
                    order:'22222',
                    customer:'旖旎',
                    time:'2018-03-28',
                    line:'4H1/4H3',
                    type:'团装',
                    color:'#56e48e'
                 },
                 {
                    order:'33333',
                    customer:'耄耋',
                    time:'2018-03-28',
                    line:'4H1/4H3',
                    type:'高订',
                    color:'#f887c9'
                 },
                 {
                    order:'444444',
                    customer:'饕餮',
                    time:'2018-03-28',
                    line:'4H1/4H3',
                    type:'高订',
                    color:'#ac54ff'
                 }
              ]
            }
     }
   }
</script>
<style   scoped>
ul{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-radius: 0.3rem;
    background-color: white;
    padding: 1rem;
}
li{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
    position: relative;
}
li label{
    display: block;
    color: #949293;
    font-size: 1.1rem;
    margin-bottom: 1rem;
}
li:first-of-type:after{
content: '';
    width: 0.1rem;
    height: 3rem;
    display: block;
    background-color: #e0e3e8;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
}
li i{
    font-size: 6rem;
    color: #949293;
}
.order-main{
    height: 11.3rem;
    overflow: auto;
}
.item{
    border-radius: 0.3rem;
    background-color: white;
    padding: 0.5rem 1rem;
    margin-top: 0.6rem;
    position:relative;
}
.item label:after{
   content:' :';
}
.item div:first-of-type{
   color: #454545;
   margin-bottom:0.6rem;
}
.item i{
   font-size:1rem;
   margin-left:1rem;
}
.item p:first-of-type{
    color: #a3a3a3;
    font-size: 0.9rem;
    margin-bottom:0.3rem;
}
.item div:not(:first-of-type){
    display: inline-block;
    color: #a3a3a3;
    font-size: 0.9rem;
}
.item p:last-of-type{
    position: absolute;
    top: 0.5rem;
    right: 1rem;
}
.item p i{
    background-color: rgb(62, 143, 224);
    width: 1rem;
    height: 1rem;
    display: inline-block;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 0.2rem;
}
</style>
