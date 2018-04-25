<template>
  <div class='main'>
  <Header firstIcon='arrow-left' title='质量' lastIcon='' backUrl='/'></Header>
   <p>{{text}}</p>
  </div>
</template>
<script>
   import Header from './header.vue'
   export default {
     name: 'Quality',
     data(){
            return {
              text:'质量'
            }
          },
     components: { Header}
   }
</script>
<style   scoped>
</style>
