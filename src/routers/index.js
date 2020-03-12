import Vue from 'vue'
import VueRouter from 'vue-router'
import convert from './convert'
import named from './named'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  name: 'home',
  component: () => import('@/views/Home'),
  meta: {
    navi: true,
    text: '首页',
    icon: 'home'
  }
},
convert, named, {
  path: '/decent-detail/:color',
  name: 'decent-detail',
  props: true,
  component: () => import('@/views/Named/DecentDetail')
}, {
  path: '/decent-detail',
  redirect: { name: 'named' }
}]

export { routes }

export default new VueRouter({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
})
