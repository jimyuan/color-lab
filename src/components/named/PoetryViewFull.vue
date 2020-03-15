<template>
  <div class="full-screen">
    <mt-swipe :auto="0" :showIndicators="false" :defaultIndex="curIdx" @change="handleChange">
      <mt-swipe-item
        v-for="(color, idx) of data" :key="color.name">
        <span class="color-hex">/ {{hexArr[idx]}} /</span>
        <h2 class="center">{{color.name}}</h2>
        <h4 class="center">
          <p class="color-quote" :style="keywordPosition(color)">{{color.quote}}</p>
          <p v-if="color.title">{{color.author}}《{{color.title}}》</p>
        </h4>
      </mt-swipe-item>
    </mt-swipe>
    <div class="center">
      <strong>{{curIdx + 1}}</strong> / {{data.length}}
    </div>
  </div>
</template>
<script>
import cvt from 'color-convert'

export default {
  name: 'peotry-fullscreen',
  props: {
    data: {
      type: Array,
      default () { return [] }
    }
  },
  computed: {
    hexArr () {
      return this.data.map(v => `#${cvt.rgb.hex(v.rgb.split(','))}`)
    },
    rgbPercent () {
      return this.data.map(v => v.rgb.split(',').map(n => Math.floor(+n / 255 * 100)))
    },
    curIdx () {
      return this.$store.getters.curPoetry
    }
  },
  methods: {
    handleChange (idx = this.curIdx) {
      if (!this.hexArr[idx]) idx = 0
      this.$store.commit('handlePoetry', idx)
      this.$emit('input', this.hexArr[idx])
    },
    keywordPosition (color) {
      const { name, quote } = color
      const idx = quote.indexOf(name)
      return idx > -1
        ? { backgroundPosition: `${idx}em 1.5em`, backgroundSize: `${name.length}em 1px` }
        : {}
    }
  },
  created () {
    this.handleChange()
  }
}
</script>
