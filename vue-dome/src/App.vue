<template>
   <div id='app'>
       <router-view/>
        <Foot></Foot>
   </div>
</template>
<script>
import Foot from '@/components/foot.vue'
export default {
  name: 'App',
  components: { Foot }
}
</script>

<style>
</style>
