<template>
  <div class="full-screen">
    <mt-swipe :auto="0" :showIndicators="false" :defaultIndex="curIdx" @change="handleChange">
      <mt-swipe-item
        v-for="color of data" :key="color.name">
        <h2 class="center">{{color.name}}</h2>
        <h4 class="center">
          {{color.quote}}<br>
          ({{hexArr[curIdx]}})
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
  name: 'full-screen',
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
      return this.$store.state.curDecent
    }
  },
  methods: {
    handleChange (index) {
      this.$store.commit('handleDecent', index)
      this.$emit('input', this.hexArr[index])
    }
  }
}
</script>
