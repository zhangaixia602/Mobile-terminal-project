<template>
  <div class='main'>
  <Header firstIcon='arrow-left' title='质量' lastIcon='' backUrl='/'></Header>
  <div class='body' id='box'>
       <ul class='list'>
           <li v-for='(item,index) in imagesData' :class="index==0 ? 'current' : ''">
               <img :src='item' width='100%'/>
           </li>
       </ul>
       <ul class='count'>
           <li v-for='(item,index) in imagesData' :class="index==0 ? 'current' : ''">{{index+1}}</li>
       </ul>
       <i class="icon iconfont icon-arrow-left" id='left'></i>
       <i class="icon iconfont icon-arrow-right" id='right'></i>
  </div>
  </div>
</template>
<script>
   import Header from './header.vue'
   export default {
     name: 'Quality',
     data(){
            return {
              imagesData:[
               require('./../assets/images/1.jpg'),
               require('./../assets/images/2.jpg'),
               require('./../assets/images/3.png'),
               require('./../assets/images/4.png')
              ]
            }
     },
     mounted(){
        let box=document.getElementById('box');
        let $left=document.getElementById('left');
        let $right=document.getElementById('right');
        let uls=document.getElementsByTagName('ul');
        let images=uls[0].getElementsByTagName('li');
        let btn=uls[1].getElementsByTagName('li');
        let i=0,index=0;
        let play=null;
        function show(index){
           for(let i=0;i<images.length;i++){
                images[i].style.opacity=0;
                images[index].style.opacity=1;
           }
           for(let i=0;i<btn.length;i++){
                btn[i].className='';
                btn[index].className='current';
           }
        }
        for(let i=0;i<btn.length;i++){
             btn[i].index=i;
             btn[i].onmouseover=function(){
                 show(this.index);
                 clearInterval(play);
             }
        }
        autoPlay();
        function autoPlay(){
            play=setInterval(function(){
                index++
                if(index>=images.length){
                   index=0;
                }
                show(index)
             },6000)
        }
        function currentIndex(){//获取当前索引
           for(let i=0;i<btn.length;i++){
                if(btn[i].className=='current'){
                      index=i
                }
           }
        }
         box.onmouseover=function(){
           clearInterval(play);
          };
          box.onmouseout=function(){
           autoPlay();
          };
          $left.onclick=function(){
            currentIndex()
            index--
             if(index<0){
                index=images.length-1;
             }
             show(index)
          }
          $right.onclick=function(){
            currentIndex()
            index++
             if(index>images.length-1){
                index=0;
             }
             show(index)
          }
     },
     components: { Header}
   }
</script>
<style   scoped>
#box {
    position: relative;
    width: 100%;
    height: 26.2rem;
   }
   #box .list {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
   }
   #box .list li {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity:0;
    transition: opacity .3s linear;
   }
   #box .list li.current {
    opacity: 1;
   }
   #box .count {
    position: absolute;
    left: 50%;
    bottom: 1rem;
    transform: translateX(-50%);
   }
   #box .count li {
    color: #fff;
    float: left;
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    background: #adadad;
    border-radius: 50%;
    transform: scale(0.6);
    transition: all .3s linear;
   }
   #box .count li.current {
    font-weight: bold;
    background: #395cd4;
    transform: scale(1);
   }
   .iconfont{
     width: 2rem;
     height:4rem;
     line-height: 4rem;
     background-color: rgba(000,000,000,.4);
     text-align: center;
     color:white;
     position: absolute;
     top:50%;
     transform: translateY(-50%);
     font-size: 2rem;
     border:none;
   }
   .icon-arrow-right{
       right:0;
   }
</style>
