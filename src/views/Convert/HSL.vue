<template>
  <div class="ranger-zone">
    <mt-cell
      v-for="c of cs" :key="c"
      :title="c"
      :label="value[c].toString()">
      <mt-range v-model="curValue[c]" :max="c == 'h' ? 359 : 100" :bar-height="2" :style="{color: curHSL}" />
    </mt-cell>
  </div>
</template>
<script>
export default {
  name: 'hsl',
  props: {
    value: {
      type: Object
    }
  },
  data () {
    return {
      cs: 'hsl'
    }
  },
  computed: {
    curValue () {
      return this.value
    },
    curHSL () {
      const { h, s, l } = this.curValue
      return `hsl(${h}, ${s}%, ${l}%)`
    }
  }
}
</script>
