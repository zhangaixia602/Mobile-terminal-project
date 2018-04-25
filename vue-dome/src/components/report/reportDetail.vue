<template>
     <div class='main'>
          <Header firstIcon='arrow-left' :title='$route.params.id' lastIcon='' backUrl='/report'></Header>
          <div class='body'>
               <Screening></Screening>
               <ul>
                   <li v-for='item in data'>
                         <h4><i class="icon iconfont icon-puzzle"></i>{{item.title}}</h4>
                         <div class='item'>
                             <p></p>
                             <div>
                                 <p><label>员工编号</label><span>{{item.employeeNumber}}</span></p>
                                 <p><label>员工姓名</label><span>{{item.employeeName}}</span></p>
                                 <p><label>生产单</label><span>{{item.order}}</span></p>
                                 <p><label>面料货号</label><span>{{item.fabricNo}}</span></p>
                             </div>
                             <div>
                                  <p><label>样板号</label><span>{{item.modelNo}}</span></p>
                                  <p><label>工序</label><span>{{item.process}}</span></p>
                                  <p><label>件数</label><span>{{item.number}}</span></p>
                                  <p><label>统计日期</label><span>{{item.time}}</span></p>
                             </div>
                         </div>
                   </li>
               </ul>
          </div>
     </div>
</template>
<script>
   import Header from '../header.vue'
   import Screening from '../screening.vue'
   export default {
     name: 'ReportDetail',
     data(){
          return {
             data:[
                 {
                    title:'上衣整烫',
                    employeeNumber:'1712001',
                    employeeName:'张武',
                    order:'18010076',
                    fabricNo:'210404-1',
                    modelNo:'MYA001S',
                    process:'JPNZXFT002',
                    number:1,
                    time:'2017/11/28'
                 },
                 {
                    title:'上衣整烫',
                    employeeNumber:'1712001',
                    employeeName:'张武',
                    order:'18010076',
                    fabricNo:'210404-1',
                    modelNo:'MYA001S',
                    process:'JPNZXFT002',
                    number:1,
                    time:'2017/11/28'
                 },
                 {
                    title:'上衣整烫',
                    employeeNumber:'1712001',
                    employeeName:'张武',
                    order:'18010076',
                    fabricNo:'210404-1',
                    modelNo:'MYA001S',
                    process:'JPNZXFT002',
                    number:1,
                    time:'2017/11/28'
                 },
                 {
                    title:'上衣整烫',
                    employeeNumber:'1712001',
                    employeeName:'张武',
                    order:'18010076',
                    fabricNo:'210404-1',
                    modelNo:'MYA001S',
                    process:'JPNZXFT002',
                    number:1,
                    time:'2017/11/28'
                 }
             ]
          }
     },
     components: {Header,Screening}
   }
</script>
<style   scoped>
.body{
    padding: 0 0.5rem;
}
ul{
    height: 21.2rem;
    overflow: auto;
}
li{
    padding-top: 1rem;
    background-color: white;
    border-radius: 0.3rem;
    margin-bottom: 0.5rem;
}
h4>i{
    color: #3b7bd5;
    font-size: 1rem;
    margin-right: 0.5rem;
    margin-left: 0.6rem;
}
.item{
    display: flex;
    position:relative;
}
.item div{
    flex: 1;
    padding: 1rem 0.9rem;
    font-size: 0.6rem;
}
.item>p{
    display: inline-block;
    width: 0.1rem;
    height: 2rem;
    background-color: #c9c9c9;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
p label{
    display: inline-block;
    width: 3rem;
}
p label:after{
    content:' :';
}
</style>
<style>
 .foot>li:nth-of-type(2){
     color: #adadad !important;
   }
 .foot>li:nth-of-type(6){
     color:#395cd4 !important;
 }

</style>
