<template>
  <div class='main'>
  <Header firstIcon='arrow-left' title='报表' lastIcon='' backUrl='/'></Header>
  <div class='body'>
     <ul>
        <router-link :to="'/reportDetail/'+item.title" tag='li' v-for='item in reportData'>
            <label :class='item.className'><i class="icon iconfont icon-graph2"></i></label>
            <span>{{item.title}}</span>
            <i class="icon iconfont icon-arrow-right"></i>
        </router-link>
     </ul>
  </div>
  </div>
</template>
<script>
   import Header from './header.vue'
   export default {
     name: 'Report',
     data(){
            return {
              text:'报表',
              reportData:[
                 {
                   title:'生产日报表',
                   className:'production',
                   id:'01'
                 },
                 {
                   title:'车间日在制品报表',
                   className:'inout',
                   id:'02'
                 },
                 {
                   title:'工位占压报表',
                   className:'station',
                   id:'03'
                 },
                 {
                   title:'员工产量报表',
                   className:'employee',
                   id:'04'
                 },
                 {
                   title:'质量日报表',
                   className:'quality',
                   id:'05'
                 },
                 {
                   title:'质检明细',
                   className:'qualityInspection',
                   id:'06'
                 },
                 {
                   title:'质检尺寸汇总',
                   className:'size',
                   id:'07'
                 }
              ]
            }
          },
     components: {Header}
   }
</script>
<style   scoped>
ul{
    padding: 0.5rem;
    height: 25.2rem;
    overflow: auto;
}
li{
    padding: 1rem;
    background-color: white;
    border-radius: 0.3rem;
    margin-bottom: 0.5rem;
    display:flex;
    cursor: pointer;
}
li:last-of-type{
    margin-bottom:0;
}
label{
    display: inline-block;
    width: 2rem;
    height: 2rem;
    text-align: center;
    border-radius: 50%;
    position: relative;
    vertical-align: middle;
}
label>i{
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
}
span{
    flex: 1;
    padding-left: 1rem;
    line-height: 2rem;
}
li>i{
    font-size: 1rem;
    color: #dddddd;
    line-height: 2rem;
}
.production{
    background: linear-gradient(#76e2c0, #7ee2e2);
}
.inout{
    background: linear-gradient(#f5ba6e, #f8d158);
}
.station{
    background: linear-gradient(#ee7e8a, #f091bd);
}
.employee{
    background: linear-gradient(#90b9fb, #81cbfa);
}
.quality{
    background: linear-gradient(#77e2ac, #9df48c);
}
.qualityInspection{
    background: linear-gradient(#9786f8, #c6abfc);
}
.size{
    background: linear-gradient(#76e2be, #7ee2e2);
}

</style>
<style>
</style>
