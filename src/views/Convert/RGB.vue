<template>
  <div class="ranger-zone">
    <mt-cell
      v-for="c of cs" :key="c"
      :title="c"
      :label="value[c].toString()">
      <mt-range v-model="curValue[c]" :max="255" :bar-height="2" :style="{color: curRGB}" />
    </mt-cell>
  </div>
</template>
<script>
export default {
  name: 'rgb',
  props: {
    value: {
      type: Object
    }
  },
  data () {
    return {
      cs: 'rgb'
    }
  },
  computed: {
    curValue () {
      return this.value
    },
    curRGB () {
      return `rgb(${Object.values(this.curValue).toString()})`
    }
  }
}
</script>
