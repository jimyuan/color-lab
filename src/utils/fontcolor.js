import cvt from 'color-convert'

export default function (mod, params) {
  const dark = '#666'
  const light = '#fff'
  // const [r, g, b] = mod === 'rgb' ? params : cvt[mod]['rgb'](params)
  // return r + g + b >= 255 ? light : dark
  const [h, s, l] = mod === 'hsl' ? params : cvt[mod]['hsl'](params)
  if (l > 70) {
    return dark
  } else if (l < 30) {
    return light
  } else if (l + s < 80) {
    return light
  } else if (h < 50 || h > 180) {
    return light
  } else if (h >= 50 && h <= 90) {
    return dark
  } else {
    return light
  }
}
