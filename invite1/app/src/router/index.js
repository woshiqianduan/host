import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Exchange from '@/components/Exchange'
import Goodsinfo from '@/components/Goodsinfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/exchange',
      name: 'Exchange',
      component: Exchange
    },
    {
      path: '/goodsinfo',
      name: 'Goodsinfo',
      component: Goodsinfo
    }
  ]
})
