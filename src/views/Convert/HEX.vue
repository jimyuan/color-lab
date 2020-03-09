<template>
  <mt-picker
    class="hex-section"
    :slots="hexSlots"
    :visible-item-count="4"
    @change="onColorChange" />
</template>
<script>
export default {
  name: 'hex',
  computed: {
    // 默认 HEX 值
    hex () {
      return this.$store.state.convert.hex
    },
    // 生成 HEX 的 picker 数据
    hexSlots () {
      const r = '0123456789ABCDEF'.split('')
      return Array.from({ length: 6 }, (v, i) => i++)
        .map((v, i) => {
          return {
            values: r,
            defaultIndex: r.indexOf(this.hex[i])
          }
        })
    }
  },
  methods: {
    onColorChange (picker, values) {
      this.$store.commit('updateColor', { space: 'hex', data: values.join('') })
    }
  }
}
</script>
