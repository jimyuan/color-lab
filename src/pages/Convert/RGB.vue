<template>
  <div>
    <mt-cell
      v-for="c of cs"
      :key="c"
      :title="c.toUpperCase()"
      :label="value[c].toString()">
        <mt-range v-model="curValue[c]" @input="chgValue" :max="255" :bar-height="2"></mt-range>
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
      cs: 'rgb',
      curValue: this.value
    }
  },
  methods: {
    chgValue () {
      this.$emit('input', this.curValue)
    }
  }

}
</script>
