<template>
  <figure
  :class="'img-figure '+(position.isInverse ? ' is-inverse' : '')"
  :style="{
  left:position.pos.left+'px',
  top:position.pos.top+'px',
  transform:'rotate('+position.rotate+'deg)',
  zIndex:position.isCenter ? 10 : 1}"
  v-on:click='upDate(index)'
  >
   <img :src="imageUrl" :alt='title' width="240" height="240"/>
   <figcaption>
         <h2 class='img-title'>{{title}}</h2>
         <div class='img-back'>
              <p>{{desc}}</p>
         </div>
   </figcaption>
  </figure>
</template>
<script>
   export default {
     name: 'ImgFigure',
     props: ['imageUrl','title','desc','index','position'],
     methods:{
        upDate:function(index){
             this.$emit('tellParentComponent',index)
        }
     }
   }
</script>

