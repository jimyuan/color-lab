import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  name: 'home',
  component: () => import('@/views/Home/index'),
  meta: {
    navi: true,
    text: '首页',
    icon: 'home'
  }
}, {
  path: '/convert',
  name: 'convert',
  component: () => import('@/views/Convert/index'),
  meta: {
    navi: true,
    text: '转换',
    icon: 'convert'
  }
}, {
  path: '/named',
  name: 'named',
  component: () => import('@/views/Named/index'),
  meta: {
    navi: true,
    text: '命名',
    icon: 'named'
  }
}]

export { routes }

export default new VueRouter({ routes })
