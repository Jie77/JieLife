<template>
  <div id="app">
    <div class="header" v-if="!isLoginPage">
      <div class="headerName">{{ headerName }}</div>
      <span class="user">
        <i class="fa fa-user-o" aria-hidden="true" style="margin-right:5px"></i>{{ userName }}
      </span>
    </div>
    <router-view></router-view>
    <foot v-if="!isLoginPage" class="foot"></foot>
  </div>
</template>

<script>
import store from '@/store'
import Foot from '@/components/common/footer'
export default {
  name: 'App',
  components: {
    Foot
  },
  data () {
    return {
      isLoginPage: false,
      headerName: '',
      userName: store.state.user || '游客'
    }
  },
  computed: {
    nowPath() {
      return this.$route.path
    }
  },
  watch: {
    nowPath() {
      store.state.nowPath = this.nowPath
      console.log(this.nowPath)
      console.log(store.state.nowPath)
      switch(this.nowPath){
        case '/login':
          this.headerName = '登录'
          this.isLoginPage = true
          break
        case '/reg':
          this.headerName = '注册'
          this.isLoginPage = false
          break
        case '/publishinfo':
          this.headerName = '发布'
          this.isLoginPage = false
          break
        case '/searchinfo':
          this.headerName = '搜索'
          this.isLoginPage = false
          break
        case '/sitemail':
          this.headerName = '站内信'
          this.isLoginPage = false
          break
        case '/infodetail':
          this.headerName = '房屋详情'
          this.isLoginPage = false
          break
        case '/msgdetail':
          this.headerName = '站内信详情'
          this.isLoginPage = false
      }
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
      display: table;
      margin: 0 auto;
    }
    .user {
      position: absolute;
      color: #72a6e9;
      top: 0;
      right: 20px;
    }
  }
}
</style>
