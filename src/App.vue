<template>
  <div id="app">
    <router-view/>
    <foot v-if="isLogin" class="foot"></foot>
  </div>
</template>

<script>
import Foot from '@/components/common/footer'
export default {
  name: 'App',
  components: {
    Foot
  },
  data () {
    return {
      isLogin: true
    }
  }
}
</script>

<style lang='scss'>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .foot{
    position: fixed;
    bottom: 0;
    z-index: 2;
    border-top: 1px solid #c7c4c4
  }
}
</style>
