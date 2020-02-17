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
    name: 'home',
    component: () => import('@/pages/Home/index')
  }, {
    path: '/convert',
    name: 'convert',
    component: () => import('@/pages/Convert/index')
  }, {
    path: '/safety',
    name: 'safety',
    component: () => import('@/pages/Safety/index')
  }, {
    path: '/named',
    name: 'named',
    component: () => import('@/pages/Named/index')
  }]
})

export default routers
