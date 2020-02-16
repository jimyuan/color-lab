import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    navinfo: {
      title: '',
      path: ''
    }
  },
  mutations: {
    [types.NAVINFO]: (state, data) => {
      state.navinfo = { ...state.navinfo, ...data }
    }
  }
})
