<template>
<div>
  <my-header></my-header>
  <mt-navbar v-model="selected" class="color-mod">
    <mt-tab-item id="hex">HEX</mt-tab-item>
    <mt-tab-item id="rgb">RGB</mt-tab-item>
    <mt-tab-item id="hsl">HSL</mt-tab-item>
  </mt-navbar>
  <!-- tab-container -->
  <mt-tab-container v-model="selected" class="color-select">
    <!-- HEX COLOR -->
    <mt-tab-container-item id="hex" class="hex-section">
      <mt-cell title="#">
        <mt-picker :slots="hexSlots" :visible-item-count="4" @change="onValuesChange"></mt-picker>
      </mt-cell>
    </mt-tab-container-item>
    <!-- RGB COLOR -->
    <mt-tab-container-item id="rgb">
      <mt-cell v-for="c of 'rgb'.split('')" :key="c" :title="c.toUpperCase()" :label="RGB[c].toString()">
        <mt-range v-model="RGB[c]" :max="255" :bar-height="2"></mt-range>
      </mt-cell>
    </mt-tab-container-item>
    <!-- HSL COLOR -->
    <mt-tab-container-item id="hsl">
      <mt-cell v-for="c of 'hsl'.split('')" :key="c" :title="c.toUpperCase()" :label="HSL[c].toString()">
        <mt-range v-model="HSL[c]" :max="c === 'h' ? 359 : 100" :bar-height="2"></mt-range>
      </mt-cell>
    </mt-tab-container-item>
  </mt-tab-container>
  <section class="picker-zone">
    <mt-cell :title="m.toUpperCase()" :value="convert(m)" v-for="m of mod" :key="m"></mt-cell>
  </section>
</div>
</template>

<script>
import MyHeader from 'COMPONENTS/MyHeader'
import range from 'range-function'
import cvt from 'color-convert'

export default {
  data () {
    return {
      selected: 'hsl',
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

  computed: {
    // 当前色彩空间所选择的颜色，用 HSL 表示
    color () {
      let _color = ''
      switch (this.selected) {
        case 'hex':
          _color = this.HEX
          break
        case 'rgb':
          _color = Object.values(this.RGB)
          break
        case 'hsl':
          _color = Object.values(this.HSL)
          break
        default:
      }
      return _color
    },
    // 生成 HEX 的 picker 数据
    hexSlots () {
      const r = [...range(0, 9, 'inclusive'), 'A', 'B', 'C', 'D', 'E', 'F']
      return [{
        values: r,
        defaultIndex: 10
      }, {
        values: r,
        defaultIndex: 10
      }, {
        values: r,
        defaultIndex: 5
      }, {
        values: r,
        defaultIndex: 5
      }, {
        values: r,
        defaultIndex: 12
      }, {
        values: r,
        defaultIndex: 12
      }]
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
  },

  components: { MyHeader }
}
</script>
