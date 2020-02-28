<template>
<div>
  <mt-navbar v-model="selected" class="tab-nav">
    <!-- tab list -->
    <mt-tab-item
      v-for="m of mod" :key="m"
      :id="m"
      v-text="m.toUpperCase()"/>
  </mt-navbar>
  <!-- tab-container -->
  <mt-tab-container v-model="selected" class="tab-box color-select">
    <!-- HEX COLOR -->
    <mt-tab-container-item id="hex" class="hex-section">
      <hex-mod v-model="HEX" />
    </mt-tab-container-item>
    <!-- RGB COLOR -->
    <mt-tab-container-item id="rgb">
      <rgb-mod v-model="RGB" />
    </mt-tab-container-item>
    <!-- HSL COLOR -->
    <mt-tab-container-item id="hsl">
      <hsl-mod v-model="HSL" />
    </mt-tab-container-item>
  </mt-tab-container>
  <!-- 当前颜色块 -->
  <div class="result-block"
    :style="{ backgroundColor: colorStr[selected], color: fontColor }">
    {{colorStr[selected]}}
  </div>
  <section class="picker-zone">
    <mt-cell :title="m" :value="colorStr[m]" v-for="m of mod" :key="m" />
  </section>
</div>
</template>

<script>
import cvt from 'color-convert'
import fontColor from '@/utils/fontcolor'
import HexMod from './HEX'
import RgbMod from './RGB'
import HslMod from './HSL'

export default {
  name: 'convert',
  data () {
    return {
      selected: 'hsl',
      HEX: 'FF0000',
      RGB: {
        r: 255, g: 0, b: 0
      },
      HSL: {
        h: 0, s: 100, l: 50
      },
      mod: ['hex', 'rgb', 'hsl']
    }
  },
  components: {
    HexMod, RgbMod, HslMod
  },
  computed: {
    // 当前色彩空间所选择的颜色值，供 convert 函数转换用
    colorParams () {
      return {
        'hex': this.HEX,
        'rgb': Object.values(this.RGB),
        'hsl': Object.values(this.HSL)
      }
    },
    // 将颜色值转换成 CSS 认可的字符串
    colorStr () {
      const { hex, rgb, hsl } = this.colorParams
      return {
        'hex': `#${hex}`,
        'rgb': `rgb(${rgb.toString()})`,
        'hsl': `hsl(${hsl[0]},${hsl[1]}%,${hsl[2]}%)`
      }
    },
    fontColor () {
      const mod = this.selected
      const params = this.colorParams[mod]
      return fontColor(mod, params)
    }
  },
  watch: {
    'HEX': 'convert',
    'RGB.r': 'convert',
    'RGB.g': 'convert',
    'RGB.b': 'convert',
    'HSL.h': 'convert',
    'HSL.s': 'convert',
    'HSL.l': 'convert'
  },
  methods: {
    convert () {
      const fromMod = this.selected
      const color = this.colorParams[fromMod]
      let _c
      for (let m of this.mod) {
        if (fromMod !== m) {
          _c = cvt[fromMod][m](color)
          switch (m) {
            case 'hex':
              this.HEX = _c
              break
            case 'rgb':
              this.RGB = {
                r: _c[0], g: _c[1], b: _c[2]
              }
              break
            case 'hsl':
              this.HSL = {
                h: _c[0], s: _c[1], l: _c[2]
              }
              break
            default:
          }
        }
      }
    }
  },

  mounted () {
    this.$store.commit('navinfo', { title: '颜色格式互转' })
  }
}
</script>
