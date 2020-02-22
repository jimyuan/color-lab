<template>
  <div class="color-216">
    <article class="color-item" v-for="color of  HEX216" :key="color" :style="{backgroundColor: '#'+color}" :data-color="color">
    </article>
  </div>
</template>

<script>
// import cvt from 'color-convert'
export default {
  name: 'safety-color',
  computed: {
    // 216 安全色字符串, HEX 格式
    HEX216 () {
      const length = 216
      const step = 0x33
      let r = 0
      let g = 0
      let b = 0
      return Array.from({ length }, (v, i) => {
        b = i % 6 * step
        v = [r || '00', g || '00', b || '00']
        if (b === 0xff && g < 0xff) {
          b = 0
          g += step
        }
        if (b === 0xff && g === 0xff) {
          g = 0
          r += step
        }
        return v
          .map(a => a.toString(16))
          .join('')
      })
    }
  }
}
</script>
