<template>
  <div>
      <h1>
         <label>
               <i class='icon iconfont icon-material_tab'></i>
               订单数量
         </label>
         <span>{{$route.params.id}}</span>
      </h1>
      <table width='100%' cellpadding="0" cellspacing="0">
         <thead>
            <tr>
               <th width='10%'></th>
               <th width='20%'>面料代码<i class="icon iconfont icon-delta_up1"></i></th>
               <th width='20%'>样板号<i class="icon iconfont icon-delta_up1"></i></th>
               <th width='15%'>地区<i class="icon iconfont icon-delta_up1"></i></th>
               <th width='15%'>数量<i class="icon iconfont icon-delta_up1"></i></th>
               <th width='20%'>交期<i class="icon iconfont icon-delta_up1"></i></th>
            </tr>
         </thead>
         <tbody>
            <tr v-for='tableData in tableData'>
                 <td v-for='(item,index) in tableData'>
                     {{item}}
                 </td>
            </tr>
         </tbody>
      </table>
  </div>
</template>
<script>
   export default {
     name: 'AreaDetails',
     data(){
          return {
              tableData:[
                      ["01","710019KZTP","VYMAIU","东部","3836","2017/09/12"],
                      ["01","710019KZTP","VYMAIU","西部","3836","2017/09/12"],
                      ["01","710019KZTP","VYMAIU","东部","3836","2017/09/12"],
                      ["01","710019KZTP","VYMAIU","西部","3836","2017/09/12"],
                      ["01","710019KZTP","VYMAIU","东部","3836","2017/09/12"],
                      ["01","710019KZTP","VYMAIU","西部","3836","2017/09/12"],
                      ["01","710019KZTP","VYMAIU","东部","3836","2017/09/12"],
                      ["01","710019KZTP","VYMAIU","西部","3836","2017/09/12"]
              ]
          }
     }
   }
</script>
<style   scoped>
h1{
    color: #395cd4;
    text-align: center;
    padding: 1rem 0;
}
label:after{
    content:' :';
    margin-right:0.8rem;
}
i{
    font-size: 2rem;
    margin-right: 0.8rem;
}
</style>
