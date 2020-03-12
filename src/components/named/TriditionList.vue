<template>
  <div>
    <ul class="unstyled">
      <li
        v-for="(n, idx) of data" :key="idx"
        @click="handleCheck(idx, n)"
        :class="{selected: idx==curIdx}">
        <tridition-item :data="n" />
        <transition name="slide" mode="out-in">
          <tridition-charts v-if="idx==curIdx" :cmyk="curCMYK" :rgb="curRGB" />
        </transition>
      </li>
    </ul>
  </div>
</template>
<script>
import fontColor from '@/utils/fontcolor'
import TriditionItem from '@/components/named/TriditionItem'
import TriditionCharts from '@/components/named/TriditionCharts'
export default {
  props: {
    data: {
      type: Array,
      default () { return [] }
    }
  },
  components: { TriditionItem, TriditionCharts },
  data () {
    return {
      curIdx: 0,
      curCMYK: [],
      curRGB: []
    }
  },
  methods: {
    handleCheck (idx, color) {
      this.curIdx = idx
      this.curCMYK = color.cmyk
      this.curRGB = color.rgb
      // 向父组件传递样式
      this.$emit('input', {
        backgroundColor: color.hex,
        color: fontColor('hex', color.hex.slice(1))
      })
    }
  },
  created () {
    this.handleCheck(this.curIdx, this.data[0])
  }
}
</script>
