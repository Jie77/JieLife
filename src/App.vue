<template>
  <div id="app">
    <div class="headerName">{{ headerName }}</div>
    <keep-alive><router-view></router-view></keep-alive>
    <foot v-if="isLogin" class="foot" @changeHeader="changeHeader"></foot>
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
      isLogin: true,
      headerName: '搜索房源'
    }
  },
  methods: {
    changeHeader(headerName) {
      this.headerName = headerName
    }
  }
}
</script>

<style lang='scss'>
@import "./assets/font-awesome-4.7.0/css/font-awesome.min.css";
* {
  padding: 0;
  margin: 0;
}
html,body{
  height:100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  .foot{
    position: fixed;
    bottom: 0;
    z-index: 2;
    border-top: 1px solid #c7c4c4
  }
  .headerName {
    height: 60px;
    width: 100%;
    line-height: 60px;
    background-color: rgba(0, 176, 251, 0.659);
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    box-sizing: border-box;
    padding-left: 10px;
  }
}
</style>
