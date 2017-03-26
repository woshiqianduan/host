import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Publish from '@/components/Publish'
import Apply from '@/components/Apply'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/Publish',
      component: Publish
    },
    {
      path: '/Apply',
      component: Apply
    }
  ]
})
