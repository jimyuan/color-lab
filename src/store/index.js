import Vue from 'vue'
import Vuex from 'vuex'
import convert from './modules/convert'
import named from './modules/named'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: { convert, named },
  state: {
    navinfo: { title: '' }
  },
  mutations: {
    'navinfo' (state, data) {
      state.navinfo = { ...state.navinfo, ...data }
    }
  }
})
