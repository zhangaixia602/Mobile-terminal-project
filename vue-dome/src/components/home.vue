<template>
  <div class='main'>
    <Header firstIcon='list' title='首页' lastIcon='search' backUrl=''></Header>
    <div class="body">
       <div class="message">
           <div class="message-header">
               <div class="clearfix">
                  <ul>
                     <li>
                        <label>26</label>
                        <span>生产消息</span>
                     </li>
                     <li>
                        <label>5</label>
                        <span>系统消息</span>
                     </li>
                  </ul>
                  <ul>
                     <li>
                        <span>上海 | 晴天</span>
                        <span>16~22℃</span>
                     </li>
                     <li>
                         <label>
                             <i class="icon iconfont icon-loading"></i>
                         </label>
                     </li>
                  </ul>
               </div>
           </div>
           <div class="message-body clearfix">
               <div>
                   <i class="icon iconfont icon-bell"></i>
               </div>
                <div>
                    <p>动态</p>
                    <p>[排产]<span>订单 Y2017-041625862 已排产就绪。</span></p>
                    <p>04/23<span>13:28</span></p>
                </div>
           </div>
       </div>
       <ul>
          <router-link :to="item.path" tag='li' v-for='(item,index) in mainData' v-if='index>0 && index<6' class="clearfix">
              <div class="icon-box" :style="{backgroundColor:item.color}"><i :class="'icon iconfont icon-'+item.icon"></i></div>
              <div class="title">
                 <h3>{{item.title}}</h3>
                 <p>{{item.text}}</p>
              </div>
              <i class="icon iconfont icon-arrow-right"></i>
          </router-link>
          </li>
       </ul>
    </div>
  </div>
</template>

<script>
import Header from './header.vue'
 import menuData from '../menuData'
export default {
  name: 'Home',
  components: { Header },
  data(){
     return {
       mainData:menuData
     }
  }
}
</script>

<style scoped>
   .body{
      padding:0.5rem;
   }
   .message{
     padding: 1rem 0.5rem;
   }
   .message-header{
       background-color: #0b8ff4;
       width: 100%;
       border-radius: 0.3rem;
       padding: 1rem 0.5rem;
       box-sizing: border-box;
       margin-bottom:1rem;
   }
   .message-header ul{
      width: calc(50% - 0.05rem);
      float: left;
      display: flex;
      flex-direction: row;
   }
   .message-header ul:first-of-type{
      border-right:0.1rem solid white;
   }
   .message-header li{
      flex:1;
      color: white;
   }
   li label{
       display: block;
       text-align: center;
       font-size: 2rem;
   }
   li label i{
       font-size: 2.9rem;
   }
   li span{
          font-size: 0.7rem;
          display: block;
          text-align: center;
   }
   .message-header ul:last-of-type li:first-of-type span{
      line-height:1.6rem;
   }
   .message-body{
       background-color:white;
       width: 100%;
       border-radius: 0.3rem;
       padding: 1rem 0.5rem;
       box-sizing: border-box;
   }
   .message-body div:first-of-type{
         background-color: #02ddfd;
         width: 1.4rem;
         height: 1.4rem;
         border-radius: 50%;
         position: relative;
         float:left;
   }
   .message-body div:first-of-type i{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        -webkit-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        -moz-transform: translateX(-50%) translateY(-50%);
        color: white;
   }
   .message-body div:last-of-type{
       width:calc(100% - 2rem);
       margin-left:0.6rem;
       float:left;
   }
   .message-body p:not(:last-of-type){
       margin-bottom:0.6rem;
   }
   .message-body p:last-of-type{
     color: #a6a6a6;
   }
   .message-body p span{
       margin-left:0.6rem;
   }
   .body>ul{
     height: 10.8rem;
     overflow: auto;
   }
   li.clearfix{
     background-color:white;
     padding:0.5rem;
     border-radius:0.3rem;
     margin-bottom:0.3rem;
     position:relative;
     cursor: pointer;
   }
   li.clearfix:last-of-type{
       margin-bottom:0;
   }
   li.clearfix>i{
        color: #dcdcdc;
        font-size: 1.4rem;
        position: absolute;
        top: calc(50% - 0.7rem);
        right: 0.5rem;
   }
   .icon-box{
         display: inline-block;
         width: 3rem;
         height: 3rem;
         border-radius: 50%;
         float: left;
         position: relative;
   }
   .icon-box i{
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translateX(-50%) translateY(-50%);
         -webkit-transform: translateX(-50%) translateY(-50%);
         -ms-transform: translateX(-50%) translateY(-50%);
         -moz-transform: translateX(-50%) translateY(-50%);
         color: white;
         font-size: 1.2rem;
   }
   .title{
         width: calc(100% - 5rem);
         margin-left: 0.5rem;
         float: left;
         padding: 0.4rem 0;
   }
   h3{
      font-size:1rem;
   }
   p{
      font-size:0.8rem;
   }
</style>
