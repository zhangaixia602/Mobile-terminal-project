<template>
  <div class='main'>
  <Header firstIcon='arrow-left' title='产线' lastIcon='' backUrl='/'></Header>
   <p>{{text}}</p>
  </div>
</template>
<script>
   import Header from './header.vue'
   export default {
     name: 'ProductionLine',
     data(){
            return {
              text:'产线'
            }
          },
     components: { Header}
   }
</script>
<style   scoped>
</style>
