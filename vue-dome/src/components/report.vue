<template>
  <div class='main'>
  <Header firstIcon='arrow-left' title='报表' lastIcon='' backUrl='/'></Header>
   <p>{{text}}</p>
  </div>
</template>
<script>
   import Header from './header.vue'
   export default {
     name: 'Report',
     data(){
            return {
              text:'报表'
            }
          },
     components: { Header}
   }
</script>
<style   scoped>
</style>
<style>
</style>
