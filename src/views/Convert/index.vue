<template>
<div>
  <sub-nav>
    <router-link
      v-for="m of mod" :key="m"
      :to="{name: m}">
      {{m.toUpperCase()}}</router-link>
  </sub-nav>
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
  <!-- 当前颜色块 -->
  <div class="result-block"
    :style="demoStyle">
    {{colorStr[space]}}
  </div>
  <section class="picker-zone">
    <mt-cell :title="m" :value="colorStr[m]" v-for="m of mod" :key="m" />
  </section>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import fontColor from '@/utils/fontcolor'
import SubNav from '@/components/SubNav'

export default {
  name: 'convert',
  components: { SubNav },
  data () {
    return {
      mod: ['hex', 'rgb', 'hsl']
    }
  },
  computed: {
    ...mapGetters(['HEX', 'RGB', 'HSL']),
    // 当前所用的颜色空间
    space () {
      return this.$route.name
    },
    // 将颜色值转换成 CSS 认可的字符串
    colorStr () {
      return {
        'hex': this.HEX,
        'rgb': this.RGB,
        'hsl': this.HSL
      }
    },
    fontColor () {
      const mod = this.space
      const color = this.colorStr[mod]
      return fontColor(mod, color)
    },
    demoStyle () {
      const mod = this.space
      const color = this.colorStr[mod]
      return {
        backgroundColor: color,
        color: fontColor(this.space, color)
      }
    }
  },
  created () {
    this.$store.commit('navinfo', { title: '颜色格式互转' })
  }
}
</script>
