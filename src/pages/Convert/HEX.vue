<template>
  <mt-cell title="#">
    <mt-picker :slots="hexSlots" :visible-item-count="4" @change="onValuesChange"></mt-picker>
  </mt-cell>
</template>
<script>
import range from 'range-function'

export default {
  name: 'hex',
  props: {
    value: {
      type: String
    }
  },
  computed: {
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
    onValuesChange (picker, values) {
      this.$emit('input', values.join(''))
    }
  }
}
</script>
