import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Plotsvy from '@/components/Plotsvy'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/plotsvy',
      name: 'Plotsvy',
      component: Plotsvy
    }
  ]
})
