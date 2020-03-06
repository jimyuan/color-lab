<template>
  <div>
    <ul class="unstyled">
      <li
        v-for="(n, idx) of data" :key="idx"
        @click="handleCheck(idx, n.hex)"
        :class="{selected: idx==curIdx}">
        <i :style="{backgroundColor: n.hex}"></i>
        <ruby>{{n.name}}<rp>(</rp><rt>{{n.pinyin}}</rt><rp>)</rp></ruby>
      </li>
    </ul>
  </div>
</template>
<script>
import fontColor from '@/utils/fontcolor'
export default {
  props: {
    data: {
      type: Array
    }
  },
  data () {
    return {
      curIdx: 0
    }
  },
  methods: {
    handleCheck (idx, hex) {
      this.curIdx = idx
      // 向父组件传递样式
      this.$emit('input', {
        backgroundColor: hex,
        color: fontColor('hex', hex.slice(1))
      })
    }
  },
  created () {
    this.handleCheck(this.curIdx, this.data[0].hex)
  }
}
</script>
