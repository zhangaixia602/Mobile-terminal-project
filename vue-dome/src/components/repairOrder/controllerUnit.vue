<template>
  <span :class="'controller-unit '+ (position.isCenter ? ' is-center' : '')+(position.isInverse ? ' is-inverse' : '')"
  v-on:click='upDate(index)'
  ></span>
</template>
<script>
   export default {
     name: 'ControllerUnit',
     props: ['index','position'],
      methods:{
            upDate:function(index){
                   this.$emit('upDate',index)
            }
      }
   }
</script>
