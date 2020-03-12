export default {
  state: {
    curPoetry: 0
  },
  mutations: {
    'handlePoetry' (state, data) {
      state.curPoetry = data
    }
  }
}
