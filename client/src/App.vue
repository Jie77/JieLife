<template>
  <div id="app">
    <div class="header">
      <div class="headerName">{{ headerName }}</div>
      <span class="user">
        <i class="fa fa-user-o" aria-hidden="true" style="margin-right:5px"></i>{{ userName }}
      </span>
    </div>
    <router-view></router-view>
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
      headerName: '搜索房源',
      userName: 'Jie'
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
    z-index: 100;
    border-top: 1px solid #c7c4c4
  }
  .header {
    width: 100%;
    border-bottom: 1px solid #f7f3f3;
    height: 30px;
    box-sizing: border-box;
    padding: 0 20px;
    position: fixed;
    line-height: 30px;
    z-index: 10;
    background: #fff;
    .headerName {
      font-size: 14px;
      float: left;
      position: relative;
      left: 50%;
      margin-left: -28px;
    }
    .user {
      float: right;
      color: #72a6e9;
    }
  }
}
</style>
