import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routers = new VueRouter({
  // mode: 'history',
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: () => import('@/pages/Home')
  }, {
    path: '/convert',
    component: () => import('@/pages/Convert')
  }, {
    path: '/safety',
    component: () => import('@/pages/Safety')
  }, {
    path: '/named',
    component: () => import('@/pages/Named')
  }]
})

export default routers
