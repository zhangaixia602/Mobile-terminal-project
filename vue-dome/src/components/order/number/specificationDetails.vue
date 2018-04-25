<template>
  <div>
    <table  width='100%' cellpadding="0" cellspacing="0">
         <thead>
              <tr>
                 <th v-for='item in data.headData'>{{item}}</th>
              </tr>
         </thead>
         <tbody>
              <tr v-for='items in data.bodyData'>
                  <td v-for='item in items'>{{item}}</td>
              </tr>
         </tbody>
    </table>
  </div>
</template>
<script>
import Store from '../../../store'
   export default {
     name: 'SpecificationDetails',
      data:function(){
                     return {
                         items:Store.fetch(),//获取数据
                         data:{
                                "headData":["","尺寸","型号","产地","价格"],
                                "bodyData":[
                                  ["01","s","Y03","北京","500"],
                                  ["02","xs","W03","保定","800"],
                                  ["03","m","S03","温州","300"],
                                  ["04","s","Y03","保定","500"],
                                  ["05","L","W03","宝鸡","200"],
                                  ["06","s","W03","宝鸡","550"],
                                  ["07","m","W03","宝鸡","280"],
                                  ["08","s","W03","烟台","600"],
                                  ["09","L","W03","烟台","220"],
                                  ["10","m","S03","烟台","350"]
                                ]
                         }
                     }
         },
         watch:{//检测数据的变化
                     items:{
                        handler:function(items){
                              Store.save(items)//保存数据
                        },
                        deep:true
                     }
         },
   }
</script>
<style>
</style>
