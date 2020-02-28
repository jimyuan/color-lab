const [length, step] = [216, 0x33]
let [r, g, b] = [0, 0, 0]

export default Array.from({ length }, (v, i) => {
  b = i % 6 * step
  v = [r || '00', g || '00', b || '00']
  if (b === 0xff) {
    b = 0
    if (g < 0xff) {
      g += step
    } else {
      g = 0
      r += step
    }
  }
  return v
    .map(a => a.toString(16))
    .join('')
})
