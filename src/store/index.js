import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
