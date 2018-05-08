import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/login'
import Admin from '@/components/pages/admin'
import Collection from '@/components/pages/collection'
import PublishInfo from '@/components/pages/publishInfo'
import SearchInfo from '@/components/pages/searchInfo'
import SiteMail from '@/components/pages/siteMail'
import InfoDetail from '@/components/pages/infoDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/collection',
      name: 'collection',
      component: Collection
    },
    {
      path: '/publishinfo',
      name: 'publishinfo',
      component: PublishInfo
    },
    {
      path: '/searchinfo',
      name: 'searchinfo',
      component: SearchInfo
    },
    {
      path: '/sitemail',
      name: 'sitemail',
      component: SiteMail
    },
    {
      path: '/infodetail',
      name: 'infodetail',
      component: InfoDetail
    }
  ]
})
