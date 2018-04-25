<template>
  <div>
    <table  width='100%' cellpadding="0" cellspacing="0">
         <thead>
              <tr>
                 <th v-for='item in items.headData'>{{item}}</th>
              </tr>
         </thead>
         <tbody>
              <tr v-for='items in items.bodyData'>
                  <td v-for='item in items'>{{item}}</td>
              </tr>
         </tbody>
    </table>
  </div>
</template>
<script>
   export default {
     name: 'CompanyDetails',
     data:function(){
              return {
                    items:
                         {
                                "headData":["","分公司名称","订单数量","类型","已完成数"],
                                "bodyData":[
                                  ["01","如意","500","西服","400"],
                                  ["02","爱丽芬","400","马甲","200"],
                                  ["03","雅戈尔","800","西服","600"],
                                  ["04","庄吉","900","西裤","500"],
                                  ["05","雅戈尔","600","衬衣","600"],
                                  ["06","雅戈尔","300","大衣","200"],
                                  ["07","庄吉","400","马甲","280"],
                                  ["08","如意","200","套装","190"],
                                  ["09","如意","700","衬衣","320"],
                                  ["10","雅戈尔","650","西裤","450"]
                                ]
                         }
              }
     }
   }
</script>
<style>
</style>
