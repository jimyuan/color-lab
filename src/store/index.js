import Vue from 'vue'
import Vuex from 'vuex'
import convert from './modules/convert'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: { convert },
  state: {
    navinfo: {
      title: ''
    },
    curDecent: 0
  },
  mutations: {
    'navinfo' (state, data) {
      state.navinfo = { ...state.navinfo, ...data }
    },
    'handleDecent' (state, data) {
      state.curDecent = data
    }
  }
})
