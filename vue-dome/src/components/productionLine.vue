<template>
  <div class='main'>
  <Header firstIcon='arrow-left' title='产线' lastIcon='' backUrl='/'></Header>
  <div class='body'>
       <table  width='100%' cellpadding="0" cellspacing="0">
            <thead>
                 <tr>
                    <th></th>
                    <th>Price</th>
                    <th>Shipping</th>
                    <th>Handling</th>
                    <th>Discount</th>
                    <th>总和</th>
                 </tr>
            </thead>
            <tbody>
                 <tr>
                    <td>产线一</td>
                    <td><input v-model="price"  v-on:focus="selectAll" type='number'/></td>
                    <td><input v-model="shipping"  v-on:focus="selectAll" type='number'/></td>
                    <td><input v-model="handling"  v-on:focus="selectAll" type='number'/></td>
                    <td><input v-model="discount"  v-on:focus="selectAll" type='number'/></td>
                    <td>{{ total }}</td>
                 </tr>
            </tbody>
       </table>
       <div id='echart' ref='eCharts'>输入数据可以看到效果图</div>
  </div>
  </div>
</template>
<script>
import echarts from 'echarts'
// 引入饼图
import  'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';
   import Header from './header.vue'
   export default {
     name: 'ProductionLine',
     data(){
         return {
            price: 0,
            shipping: 0,
            handling: 0,
            discount: 0
         }
     },
     methods: {
          selectAll: function (event) {
                setTimeout(function () {
                     event.target.select()
                 }, 0)
          }
     },
     computed:{
                 total: function () {
                     return (
                             Math.ceil(this.price) +
                             Math.ceil(this.shipping) +
                             Math.ceil(this.handling) -
                             Math.ceil(this.discount)
                     )
                 }
      },
      updated: function () {
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
                                                             data: ['Price','Shipping','Handling','Discount']
                                                         },
                                                         series : [
                                                             {
                                                                 type:'pie',
                                                                 radius : '55%',
                                                                 center: ['50%', '40%'],
                                                                 data:[
                                                                     {value:Math.ceil(this.price), name:'Price'},
                                                                     {value:Math.ceil(this.shipping), name:'Shipping'},
                                                                     {value:Math.ceil(this.handling), name:'Handling'},
                                                                     {value:Math.ceil(this.discount), name:'Discount'}
                                                                 ]
                                                             }
                                                         ]
                                                     });
      },
     components: { Header}
   }
</script>
<style   scoped>
input{
   border:none;
   padding:0.5rem;
}
#echart{
    width: 100%;
    height: 21.2rem;
    text-align:center;
    line-height:21.2rem;
    background-color: white;
    padding: 1rem;
    box-sizing: border-box;
}
</style>
