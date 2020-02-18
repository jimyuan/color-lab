<template>
  <mt-cell title="#">
    <mt-picker
      :slots="hexSlots"
      :visible-item-count="4"
      @change="onValuesChange" />
  </mt-cell>
</template>
<script>
export default {
  name: 'hex',
  props: {
    value: {
      type: String
    }
  },
  computed: {
    pre () {
      return this.value
    },
    // 生成 HEX 的 picker 数据
    hexSlots () {
      const r = '0123456789ABCDEF'.split('')
      return Array.from({ length: 6 }, (v, i) => i++).map((v, i) => ({
        values: r,
        defaultIndex: r.indexOf(this.pre[i])
      }))
    }
  },
  methods: {
    onValuesChange (picker, values) {
      this.$emit('input', values.join(''))
    }
  }
}
</script>
