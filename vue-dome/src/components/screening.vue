<template>
     <div class='screening'>
        <div class='screening-box'>
            <label>刷新开关</label>
            <span :class="flag ? 'active' : ''"  v-on:click='upDate'></span>
        </div>
        <div :class="'container '+ (popUp ? ' translate' : '')">
            <div class='item'></div>
            <div class='item'>
                 <div>
                     <label>姓名</label>
                     <input type='text' />
                 </div>
                 <div>
                     <label>性别</label>
                     男<input type='radio' name='like'/>
                     女<input type='radio' name='like'/>
                 </div>
                 <div>
                     <label>年龄</label>
                     <input type='number' />
                 </div>
                 <div>
                     <label>星座</label>
                     <select>
                          <option>双鱼座</option>
                          <option>处女座</option>
                          <option>狮子座</option>
                          <option>天秤座</option>
                          <option>摩羯座</option>
                          <option>白羊座</option>
                          <option>金牛座</option>
                          <option>双子座</option>
                          <option>巨蟹座</option>
                          <option>射手座</option>
                          <option>天蝎座</option>
                          <option>水瓶座</option>
                     </select>
                 </div>
                 <div>
                     <button v-on:click='determine'>保存</button>
                     <button v-on:click='cancel'>取消</button>
                 </div>
            </div>
        </div>
     </div>
</template>
<script>
     export default{
          name:'Screening',
          data(){
              return {
                 flag:false,
                 popUp:false,
              }
          },
          methods:{
             upDate:function(){
                 if(this.flag){
                    this.flag=this.flag;
                 }else{
                    this.flag=!this.flag;
                 }
                 this.popUp=!this.popUp
             },
             determine:function(){
                 if(this.flag){
                    this.flag=this.flag;
                 }else{
                    this.flag=!this.flag;
                 }
                 this.popUp=!this. popUp
             },
             cancel:function(){
                 this.flag=!this.flag;
                 this.popUp=!this.popUp
             }
          }
     }
</script>
<style  scoped>
.screening{
    position:relative;
}
.screening-box{
    background-color: white;
    margin-bottom: 1rem;
    padding: 1rem 0.6rem;
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    display:flex;
}
.screening-box label{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    line-height: 2rem;
}
.screening-box span{
    display: inline-block;
    background-color: #ddd;
    width: 4rem;
    border-radius: 1rem;
    position:relative;
    cursor: pointer;
}
.screening-box span.active{
    background-color: #26e37f;
}
.screening-box span:after{
    content: '';
    display: inline-block;
    width: 1.8rem;
    height: 1.8rem;
    position: absolute;
    top: 0.1rem;
    right: 2.1rem;
    background-color: white;
    border-radius: 50%;
}
.screening-box span.active:after{
    right: 0.1rem;
}
.container{
    position: absolute;
    top: 0;
    transform: translateX(calc(100% + 0.5rem));
    transition: all 0.5s ease;
    z-index: 99;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.container.translate{
    transform: translateX(0);
}
.item{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    background-color:white;
}
.item:first-of-type{
    background-color: rgba(000,000,000,.3);
}
.item label:after{
   content:' :';
}
.item>div{
    padding: 0.5rem;
}
.item>div:last-of-type{
    text-align:center;
}
.item input:not([type='radio']),.item select{
    width: calc(100% - 3rem);
    box-sizing: border-box;
    border: 1px solid #ddd;
}
button{
    border: none;
    font-size: 1rem;
    padding: 0.5rem;
    color:white;
    cursor: pointer;
}
button:first-of-type{
   background-color: #395cd4;
}
</style>
