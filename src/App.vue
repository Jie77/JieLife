<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss'>
* {
  padding: 0;
  margin: 0;
}
body {
  &:before{
    content:'';
    position:fixed;
    z-index:-1;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background: url("./assets/bg.jpg") 0 center no-repeat;
    background-size: 100% 100%;
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
