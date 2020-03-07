<template>
  <section class="color-info">
    <i :style="{backgroundColor: data.hex}"></i>
    <ruby v-for="(py, idx) in pyArr" :key="idx">
      <span>{{data.name[idx]}}</span>
      <rp>(</rp>
      <rt>{{py}}</rt>
      <rp>)</rp>
    </ruby>
    <span>{{data.hex}}</span>
  </section>
</template>
<script>
export default {
  props: {
    data: {
      type: Object
    }
  },
  data () {
    return {
      pyArr: this.data.pinyin.split(' ')
    }
  }
}
</script>
