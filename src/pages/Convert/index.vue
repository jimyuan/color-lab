<template>
<div>
  <mt-navbar v-model="selected" class="color-mod">
    <!-- tab list -->
    <mt-tab-item
      v-for="m of mod" :key="m"
      :id="m">{{ m.toUpperCase() }}</mt-tab-item>
  </mt-navbar>
  <!-- tab-container -->
  <mt-tab-container v-model="selected" class="color-select">
    <!-- HEX COLOR -->
    <mt-tab-container-item id="hex" class="hex-section">
      <hex-mod v-model="HEX"></hex-mod>
    </mt-tab-container-item>
    <!-- RGB COLOR -->
    <mt-tab-container-item id="rgb">
      <rgb-mod v-model="RGB"></rgb-mod>
    </mt-tab-container-item>
    <!-- HSL COLOR -->
    <mt-tab-container-item id="hsl">
      <mt-cell v-for="c of mod[2]" :key="c" :title="c.toUpperCase()" :label="HSL[c].toString()">
        <mt-range v-model="HSL[c]" :max="c === 'h' ? 359 : 100" :bar-height="2"></mt-range>
      </mt-cell>
    </mt-tab-container-item>
  </mt-tab-container>
  <!-- 当前颜色块 -->
  <div class="result-block" v-text="formatColor" :style="{backgroundColor: formatColor}"></div>
  <section class="picker-zone">
    <mt-cell :title="m.toUpperCase()" :value="convert(m)" v-for="m of mod" :key="m"></mt-cell>
  </section>
</div>
</template>

<script>
import cvt from 'color-convert'
import HexMod from './HEX'
import RgbMod from './RGB'

export default {
  name: 'convert',
  data () {
    return {
      selected: 'hex',
      HEX: '',
      RGB: {
        r: 128,
        g: 128,
        b: 128
      },
      HSL: {
        h: 0,
        s: 100,
        l: 50
      },
      mod: ['hex', 'rgb', 'hsl']
    }
  },

  components: {
    HexMod, RgbMod
  },

  computed: {
    // 当前色彩空间所选择的颜色值
    color () {
      let color = ''
      switch (this.selected) {
        case 'hex':
          // eg: 'AA55CC'
          color = this.HEX
          break
        case 'rgb':
          // eg: [128, 128, 128] or [0, 100, 50]
          color = Object.values(this.RGB)
          break
        case 'hsl':
          // eg: [0, 100, 50]
          color = Object.values(this.HSL)
          break
        default:
      }
      return color
    },
    // 当前色彩空间所选格式值（格式化形式）
    formatColor () {
      let color = this.color
      switch (this.selected) {
        case 'hex':
          color = `#${color}`
          break
        case 'rgb':
          color = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
          break
        case 'hsl':
          color = `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`
          break
        default:
      }
      return color
    },
    // 当前颜色值的 HSL 格式值
    hslVal () {
      let hsl = Object.values(this.HSL)
      const selected = this.selected
      return selected === 'hsl' ? hsl : cvt[selected].hsl(this.color)
    }
  },

  methods: {
    convert (toMod) {
      const fromMod = this.selected
      const gotColor = this.color
      let _tmp, _color
      // 用 convert 库得到转换后的颜色值
      if (fromMod === toMod) {
        _tmp = gotColor
      } else {
        _tmp = Array.isArray(gotColor)
          ? cvt[fromMod][toMod].apply(null, gotColor)
          : cvt[fromMod][toMod].call(null, gotColor)
      }
      // 格式化为通常的颜色值格式
      switch (toMod) {
        case 'hex':
          _color = `#${_tmp}`
          break
        case 'rgb':
          _color = `rgb(${_tmp[0]}, ${_tmp[1]}, ${_tmp[2]})`
          break
        case 'hsl':
          _color = `hsl(${_tmp[0]}, ${_tmp[1]}%, ${_tmp[2]}%)`
          break
        default:
      }
      return _color
    },

    onValuesChange (picker, values) {
      this.HEX = values.join('')
    }
  },

  mounted () {
    this.$store.commit('navinfo', {
      title: '颜色格式互转'
    })
  }
}
</script>
