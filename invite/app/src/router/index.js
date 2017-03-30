import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Exchange from '@/components/Exchange'
import Goodsinfo from '@/components/Goodsinfo'
import Invite1 from '@/components/Invite1'
import Invite2 from '@/components/Invite2'
import Invite3 from '@/components/Invite3'
import Rules from '@/components/Rules'

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
    },
    {
      path: '/invite1',
      name: 'Invite1',
      component: Invite1
    },
    {
      path: '/invite2',
      name: 'Invite2',
      component: Invite2
    },
    {
      path: '/invite3',
      name: 'Invite3',
      component: Invite3
    },
    {
      path: '/rules',
      name: 'Rules',
      component: Rules
    }
  ]
})
