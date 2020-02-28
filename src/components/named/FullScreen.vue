<template>
  <div class="full-screen">
    <mt-swipe :auto="0" :showIndicators="false" @change="handleChange">
      <mt-swipe-item
        v-for="color of data" :key="color.name">
        <h2 class="center">{{color.name}}</h2>
        <h4 class="center">{{color.quote}}</h4>
      </mt-swipe-item>
    </mt-swipe>
    <div class="center">
      <strong>{{cur + 1}}</strong> / {{data.length}}
    </div>
  </div>
</template>
<script>
import cvt from 'color-convert'

export default {
  name: 'full-screen',
  props: {
    data: {
      type: Array,
      default () { return [] }
    }
  },
  data () {
    return {
      cur: 0
    }
  },
  computed: {
    hexArr () {
      return this.data.map(v => `#${cvt.rgb.hex(v.rgb.split(','))}`)
    },
    rgbPercent () {
      return this.data.map(v => v.rgb.split(',').map(n => Math.floor(+n / 255 * 100)))
    }
  },
  methods: {
    handleChange (index) {
      this.cur = index
      this.$emit('input', this.hexArr[index])
    }
  }
}
</script>
