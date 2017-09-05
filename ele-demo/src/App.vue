<template>
  <div id="app">
     <Home></Home>
  </div>
</template>

<script>
import Home from './components/Home.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: '我是首页'
    }
  },
  components:{
  	Home
  }
}
</script>

<style lang="scss">
 
</style>
