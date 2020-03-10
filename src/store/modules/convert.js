import cvt from 'color-convert'
const initColor = 'FF0000'

export default {
  state: {
    hex: initColor,
    rgb: cvt.hex.rgb(initColor),
    hsl: cvt.hex.hsl(initColor)
  },
  mutations: {
    'updateColor' (state, { space, data }) {
      for (let m of ['hex', 'rgb', 'hsl']) {
        state[m] = m === space ? data : cvt[space][m](data)
      }
    }
  }
}
