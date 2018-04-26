<template>
  <div>
      <div id='echart' ref='eCharts'></div>
  </div>
</template>
<script>
import echarts from 'echarts'
// 引入饼图
import  'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';
   export default {
     name: 'NewOrders',
     mounted () {
         let myChart = echarts.init(this.$refs.eCharts);
         myChart.setOption({
                             tooltip: {
                                 trigger: 'item',
                                 formatter: "{b}: {c} ({d}%)"
                             },
                             legend: {
                                 orient: 'horizontal',
                                 x: 'center',
                                 y:'bottom',
                                 data: ['西服','西裤','马甲','衬衣','套装']
                             },
                             series : [
                                 {
                                     type:'pie',
                                     radius : '55%',
                                     center: ['50%', '60%'],
                                     label: {
                                         normal: {
                                             position: 'inner'
                                         }
                                     },
                                     labelLine: {
                                         normal: {
                                             show: false
                                         }
                                     },
                                     data:[
                                         {value:335, name:'西服'},
                                         {value:310, name:'西裤'},
                                         {value:234, name:'马甲'},
                                         {value:135, name:'衬衣'},
                                         {value:1548, name:'套装'}
                                     ]
                                 }
                             ]
                         });
     }
   }
</script>
<style>
#echart{
    width: 100%;
    height: 22.4rem;
    background-color: white;
    padding: 1rem;
    box-sizing: border-box;
}
</style>
