import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/login'
import store from '@/store.js'
import Admin from '@/components/pages/admin'
import PublishInfo from '@/components/pages/publishInfo'
import SearchInfo from '@/components/pages/searchInfo'
import SiteMail from '@/components/pages/siteMail'
import InfoDetail from '@/components/pages/infoDetail'
import Reg from '@/components/pages/reg'
import MsgDetail from '@/components/pages/msgDetail'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        auth: true
      }
    },
    {
      path: '/publishinfo',
      name: 'publishinfo',
      component: PublishInfo,
      meta: {
        auth: true
      }
    },
    {
      path: '/searchinfo',
      name: 'searchinfo',
      component: SearchInfo
    },
    {
      path: '/sitemail',
      name: 'sitemail',
      component: SiteMail,
      meta: {
        auth: true
      }
    },
    {
      path: '/infodetail',
      name: 'infodetail',
      component: InfoDetail,
      meta: {
        auth: true
      }
    },
    {
      path: '/msgdetail',
      name: 'msgdetail',
      component: MsgDetail,
      meta: {
        auth: true
      }
    }
  ]
})

router.beforeEach((to,from,next) => {
  if (to.meta.auth){
    console.log("这个页面需要权限") 
    if (store.state.token){
      next()
    }else{
      next({
        path: '/login'
      })
    }
  }else{
    next()
  }
})


export default router
