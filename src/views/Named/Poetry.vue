<template>
  <div class="decent-color">
    <div class="decent-items">
      <span
        v-for="(c, idx) in cs" :key="idx"
        v-text="c[0]"
        :style="{backgroundColor: `rgb(${proxyBg[idx]})`, color: proxyText[idx]}"
        @click="goDetail(c)"></span>
    </div>
  </div>
</template>
<script>
import fontColor from '@/utils/fontcolor'
import data from '@/assets/data/decent'
export default {
  name: 'decent-color',
  data () {
    return {
      colors: data
    }
  },
  computed: {
    cs () {
      return Object.keys(this.colors)
    },
    proxyBg () {
      const { colors, cs } = this
      return cs.map(v => colors[v][0]['rgb'])
    },
    proxyText () {
      return this.proxyBg.map(v => fontColor('rgb', v.split(',')))
    }
  },
  methods: {
    goDetail (color) {
      this.$router.push({
        name: 'decent-detail', params: { color }
      })
    }
  }
}
</script>
