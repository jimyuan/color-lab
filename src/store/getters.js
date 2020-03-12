export default {
  HEX: state => `#${state.convert.hex}`,
  RGB: state => `rgb(${state.convert.rgb.toString()})`,
  HSL: state => {
    const [h, s, l] = state.convert.hsl
    return `hsl(${h}, ${s}%, ${l}%)`
  },
  curPoetry: state => state.named.curPoetry
}
