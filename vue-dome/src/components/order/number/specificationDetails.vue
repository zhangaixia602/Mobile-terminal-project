<template>
   <div id="calender">
                  <ul id="celender_head">
                      <li id="prev" class="icon iconfont icon-allLeft" @click="prev()"></li>
                      <li id="left" class="icon iconfont icon-arrow-left" @click="left()"></li>
                      <li id="celender_head_inner" class="celender_head">{{header}}</li>
                      <li id="right" class="icon iconfont icon-arrow-right" @click="right()"></li>
                      <li id="next" class="icon iconfont icon-allRight" @click="next()"></li>
                  </ul>
                  <div id="calender_body">
                      <table>
                          <tr class='head'>
                              <td v-for="head in heads" >{{head}}</td>
                          </tr>
                           <tr v-for="item in show">
                          <td :class="{now:item1.now, last_month:item1.attr == 'last_month',next_month:item1.attr == 'next_month'}" v-for="item1 in item " @click="tip(item1)">{{item1.num}}</td>
                          </tr>
                      </table>
                  </div>
                  <div id="calender_foot">
                      <p @click="backToday">回到今天</p>
                  </div>
              </div>
</template>
<script>
import Store from '../../../store'
   export default {
     name: 'SpecificationDetails',
      created(){
           this.setCalender(new Date())
      },

        methods:{
            initline:function(){
                this.datas=new Array()
                this.show=new Array();

            },
          backToday:function(){
              this.setCalender(new Date())
          },
          tip:function(data){
             if(data.attr!='last_month' && data.attr!='next_month'){
                 this.collection(data.num)
             }
          },
          getcurrentDates:function (calender_Date) {
              this.initline()
              var months=calender_Date.getMonth();
              months=months+1;
              calender_Date.setMonth(months);
              calender_Date.setDate(0)


              return calender_Date.getDate();
          },
          getlastDates:  function (calenderdDate) {
              var curDate = calenderdDate;
              curDate.setDate(0);
              return curDate.getDate();
          },
          left:function(){
              this.collection('','prev')
          },
          right:function(){
              this.collection('','next')
           },
           prev:function(){
              this.year('prev')
           },
           next:function(){
               this.year('next')
           },
           year:function(type){
              this.initline();
              var yy=this.currentYear+1;
                switch(type){
                   case 'prev':
                         var yy=this.currentYear-1;
                         break;
                   case 'next':
                         var yy=this.currentYear+1;
                         break;
                   default:
                         break;

                }
              var mm=this.currentMonth+1;
              var dd=this.currentDay;
              var calenderrDate=yy+"-"+mm+"-"+dd;
              this.setCalender(new Date(calenderrDate));
           },
            collection:function(data,type){
                this.initline()
                var yy=this.currentYear;
                var dd=data || 1;
                switch(type){
                   case 'prev':
                         var mm=this.currentMonth;
                         if(yy==new Date().getFullYear()&&mm==new Date().getMonth()+1){
                               dd=new Date().getDate();
                         }
                         if(mm==0){
                               mm=12;yy=yy-1;
                               this.currentMonth=mm;
                               this.currentYear=yy;
                        }
                        break;
                   case 'next':
                        var mm=this.currentMonth+2;
                        if(yy==new Date().getFullYear()&&mm==new Date().getMonth()+1){
                                dd=new Date().getDate();
                        }
                        if(mm>12){
                                 mm=1;yy++;
                                 this.currentMonth=mm;
                                 this.currentYear=yy;
                        }
                         break;
                   default:
                        var mm=this.currentMonth+1;
                }
                var calenderrDate=yy+"-"+mm+"-"+dd;
                this.setCalender(new Date(calenderrDate));
            },
            setCalender:function(dateNow){
              //显示日历部分
              var firstday;
              var today = dateNow;
              var yy = today.getFullYear();
              this.currentYear=yy;
              var mm = today.getMonth() + 1;//today=2;mm=3
              this.currentMonth=mm-1;//this.curr=2
              var dd = today.getDate();
              this.currentDay=dd;//30
              firstday = yy + "-" + mm + "-1";//2018-3-1
              //本月第一天是星期几,也表示前面有几个空的天数
              var firstday_day = new Date(firstday).getDay();
              //日历头
              this.header=yy+"年"+mm+"月"+dd+"号";
              var cur_days = this.getcurrentDates(today);
              //上一月有多少天
              var last_days = this.getlastDates(dateNow);

              //上个月从哪天开始出现
              var last_first_day = last_days - firstday_day + 1;
              //firstline
              //存上个月的日期
              for (var i = last_first_day; i <= last_days;i++) {
                  var date=new Object();
                  date.num=i;
                  date.attr='last_month'
                  date.now=false
                  this.datas.push(date);
                  // this.dateData.firstline.push(date);
              }
              //temp存放换行前上一个数据
              //下一行第一个数字
              var num_second = 7 - firstday_day + 1;
              //存本月日期
              for (var i = 1; i <= cur_days; i++) {
                  var date=new Object();
                  date.num=i;
                  date.attr='this_month'
                  //if(i == this.currentDay && this.currentMonth == new Date().getMonth()&&this.currentYear==new Date().getFullYear()){
                  if(i == this.currentDay){
                      date.now=true
                  }else{
                      date.now=false
                  }
                  this.datas.push(date);
              }
              for(var i=1;i<=42-cur_days-(last_days-last_first_day+1);i++){
                  var date=new Object();
                  date.num=i;
                  date.attr='next_month'
                  this.datas.push(date);
              }

              var k=0;
              for(var i=0;i<6;i++){
                  var line=new Array();
                  for(var j=0;j<7;j++){
                      line.push(this.datas[k++]);
                  }
                  this.show.push(line);
              }

        }
        },
        data (){
          return {
                  body:'',
                  header:'',
                  currentYear:'',
                  currentMonth:'',
                  currentDay:'',
                  heads:["日","一","二","三","四","五","六"],
                  datas:new Array(),
                  show:new Array()
              }
          }

   }
</script>
<style   scoped>
#calender{
    overflow: auto;
    margin: 0 auto;
    width: 14rem;
}
#celender_head{
    height: 2rem;
    width: 14rem;
    background-color: blue;
    display:flex;
}
li:not(.celender_head){
    color: white;
    line-height:2rem;
    text-align: center;
    flex:1;
    cursor: pointer;
}
li.celender_head{
    color: white;
    line-height:2rem;
    text-align: center;
}
td{
    width: 2rem;
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    border-radius: 50%;
}
td:hover{
   background-color: #395cd4;
   color: white;
   cursor: pointer;
}
td.now {
   color: red;
}
.last_month,.next_month {
   color:lightgray;
}
.next_month:hover,.last_month:hover {
    background-color:rgb(248,248,248);
    color:lightgray;
    cursor: no-drop;
}
#calender_foot{
    background-color:rgb(248,248,248);
    text-align: center;
    line-height:2rem;
    border-left: 1px solid #dedee6;
    border-right: 1px solid #dedee6;
}
#calender_foot p{
    color: blue;
    font-size: 0.7rem;
    cursor: pointer;
}
</style>
