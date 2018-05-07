<template>
  <div class='main'>
  <Header firstIcon='arrow-left' title='工单' lastIcon='' backUrl='/'></Header>
    <section class="stage body" ref="stage">
           <section class="img-sec">
             <ImgFigure v-for='(item ,index) in imagesData'
              :imageUrl='item.imageUrl'
               :title='item.title'
                :desc='item.desc'
                 :ref="'imgFigure'+index"
                 :index='index'
                 :position='imagesArray[index]'
                 v-on:tellParentComponent='tallChild'
                 ></ImgFigure>
           </section>
           <nav class="controller">
             <ControllerUnit  v-for='(item ,index) in imagesData'
                  :index='index'
                  :position='imagesArray[index]'
                  v-on:upDate='tallChild'
             ></ControllerUnit>
           </nav>
    </section>
  </div>
</template>
<script>

   import Header from './header.vue'
   import '../assets/css/repairOrder.css'
   import ImgFigure from './repairOrder/imgFigure.vue'//图片组件
   import ControllerUnit from './repairOrder/controllerUnit.vue'//控制器组件
   let imageData=require('../data/imagesData.json');//获取图片数据
   //利用自执行函数获取图片路径url
   let imagesData=(function getImageUrl(imageData){
     for(let i=0;i<imageData.length;i++){
       let imgDataArr=imageData[i];
       imgDataArr.imageUrl=require('./../assets/images/'+imgDataArr.fileName);
       imageData[i]=imgDataArr;
     }
     return imageData
   })(imageData);
   function getRangeRandom(low,high){//从区间随机取值
     return Math.ceil(Math.random() * (high - low) + low)
   };
   function getRotateRandom(){//获取一个随机的正负30度
     return (Math.random() >0.5 ? '' : '-' +Math.ceil(Math.random() * 30));
   };
   let  Constant={
                      centerPos:{
                        left:0,
                        top:0
                        },
                      hPosRan:{//水平方向取值范围
                        leftSecx:[0,0],
                        rightSecx:[0,0],
                        y:[0,0]
                      },
                      VPosRan:{//垂直方向取值范围
                        topY:[0,0],
                        x:[0,0]
                      }
   };
   export default {
     name: 'RepairOrder',
     data(){
            return {
              imagesData:imagesData,
              imagesArray:[
                    {
                        pos:{
                          left:0,
                          top:0
                        },
                        rotate:0,
                        isInverse:false,
                        isCenter:false
                    },
                    {
                              pos:{
                                left:0,
                                top:0
                              },
                              rotate:0,
                              isInverse:false,
                              isCenter:false
                     },
                     {
                               pos:{
                                 left:0,
                                 top:0
                               },
                               rotate:0,
                               isInverse:false,
                               isCenter:false
                             },
                             {
                                       pos:{
                                         left:0,
                                         top:0
                                       },
                                       rotate:0,
                                       isInverse:false,
                                       isCenter:false
                                     },
                                     {
                                               pos:{
                                                 left:0,
                                                 top:0
                                               },
                                               rotate:0,
                                               isInverse:false,
                                               isCenter:false
                                             }
              ],
              number:0
            }
     },
     methods:{
      clickInverse:function(index){
         let imagesArray=this.imagesArray;
         imagesArray[index].isInverse= !imagesArray[index].isInverse;
         this.imagesArray=imagesArray;
       },
       //居中图片的index
       rearRange:function(centerIndex){
         let imagesArray=this.imagesArray,
           centerPos=Constant.centerPos,
           hPosRan=Constant.hPosRan,
           hPosRanLeftSecx=hPosRan.leftSecx,
           hPosRanRightSecx=hPosRan.rightSecx,
           hPosRanY=hPosRan.y,
           VPosRan=Constant.VPosRan;
           let VPosRanTopY=VPosRan.topY,
           VPosRanX=VPosRan.x;


           //上侧图片
           let imagesTopArray=[],
           topImgNum=Math.floor(Math.random() *2),//取一个或不取图片Math.floor()向下取整,Math.ceil()向上取整
           topImgSpliceIndex=0,//图片在数组中的位置

           //居中图片
           imagesMiddleArray=imagesArray.splice(centerIndex,1);
           imagesMiddleArray[0]={
               pos:centerPos,
               rotate:0,
               isInverse:false,
               isCenter:true
           };

           //取出要在上侧的图片状态信息
           topImgSpliceIndex= Math.ceil(Math.random() * (imagesArray.length - topImgNum));//向下取整
           imagesTopArray = imagesArray.splice(topImgSpliceIndex,topImgNum);

           imagesTopArray.forEach(function(item,index){
             imagesTopArray[index]={
               pos:{
                 left:getRangeRandom(VPosRanX[0],VPosRanX[1]),
                 top:getRangeRandom(VPosRanTopY[0],VPosRanTopY[1])
               },
               rotate:getRotateRandom(),
               isInverse:false,
               isCenter:false
             };

           });

           //取出要在左右两侧的图片状态信息
           for(var i=0, j=imagesArray.length, k= j / 2 ; i<j; i++){
             let hPosRanLORX=null;
             //前半部分布局左边,后半部分布局右边
             if(i<k){
               hPosRanLORX=hPosRanLeftSecx
             }else{
               hPosRanLORX=hPosRanRightSecx
             }
             imagesArray[i]={
               rotate:getRotateRandom(),
               pos:{
               top:getRangeRandom(hPosRanY[0],hPosRanY[1]),
               left:getRangeRandom(hPosRanLORX[0],hPosRanLORX[1])
               },
               isInverse:false,
               isCenter:false
             }
           }
           if(imagesTopArray && imagesTopArray[0]){
             imagesArray.splice(topImgSpliceIndex,0,imagesTopArray[0])
           }
           imagesArray.splice(centerIndex,0,imagesMiddleArray[0]);

          this.imagesArray=imagesArray;
       },
         /*
         *利用rearRange,居中对应index的图片
         *index需要被居中图片在图片信息状态组里的位置
          */
         centerImage:function(index){
           this.rearRange(index)
         },
         tallChild:function(index){
              this.number=index;
              if(this.imagesArray[this.number].isCenter){
                    this.clickInverse(this.number)
              }else{
                    this.centerImage(this.number)
              }

         }
     },
     mounted:function(){
      //获取dom元素及舞台大小
      let stageDom=this.$refs.stage,
        stageW=stageDom.offsetWidth,
        stageH=stageDom.offsetHeight,
        halfStageW=Math.ceil( stageW / 2),
        halfStageH=Math.ceil( stageH / 2);
        console.log(stageW)
        console.log(stageH)
      //获得每张照片的dom及大小
      let imgFigureDom=this.$refs.imgFigure0,
        //imgFigureW=imgFigureDom.offsetWidth,
        imgFigureW=320,
        //imgFigureH=imgFigureDom.offsetHeight,
        imgFigureH=360,
        halfImgFigureW=Math.ceil( imgFigureW / 2),
        halfImgFigureH=Math.ceil( imgFigureH / 2);

       console.log(imgFigureW)
      //居中图片的位置范围
      Constant.centerPos={
        left:halfStageW - halfImgFigureW,
        top:halfStageH - halfImgFigureH
      };
      //计算左右两侧图片的位置范围
      Constant.hPosRan.leftSecx[0]= -halfImgFigureW;
      Constant.hPosRan.leftSecx[1]= halfStageW - halfImgFigureW * 3;
      Constant.hPosRan.rightSecx[0]= halfStageW + halfImgFigureW;
      Constant.hPosRan.rightSecx[1]= stageW - halfImgFigureW;
      Constant.hPosRan.y[0]= -halfImgFigureH;
      Constant.hPosRan.y[1]= stageH - halfImgFigureH;

      //计算上侧图片的位置范围
      Constant.VPosRan.topY[0]= -halfImgFigureH;
      Constant.VPosRan.topY[1]= halfStageH - halfImgFigureH * 3;
      Constant.VPosRan.x[0]= halfStageW - imgFigureW;
      Constant.VPosRan.x[1]= halfStageW;
      console.log(Constant)
      this.rearRange(0);//指定第一张图片居中
      imagesData.forEach(function(value,index){
            if(!this.imagesArray[index]){//初始化状态对象
              this.imagesArray[index]={
                pos:{
                  left:0,
                  top:0
                },
                rotate:0,//旋转角度
                isInverse:false,//控制图片的正反面
                isCenter:false//图片是否居中
              }
            }
          }.bind(this));
     },
     components: { Header,ImgFigure,ControllerUnit}
   }
</script>
<style   scoped>
</style>
