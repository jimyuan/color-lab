import 'normalize.css'
import 'mint-ui/lib/style.css'
import '@/assets/scss/docs.scss'
import Vue from 'vue'
import MintUI from 'mint-ui'
import App from './App'
import router from './routers'
import store from './store'
import svgIcon from '@/components/g-svg-icon'
import '@/filters'

Vue.use(MintUI)
Vue.component('svg-icon', svgIcon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
