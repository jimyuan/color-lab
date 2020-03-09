<template>
  <div class="ranger-zone">
    <mt-cell
      v-for="(c, idx) of $route.name" :key="c"
      :title="c"
      :label="hsl[idx].toString()">
      <mt-range v-model="hsl[idx]" :max="c == 'h' ? 359 : 100" :bar-height="2" :style="{color: curHSL}" />
    </mt-cell>
  </div>
</template>
<script>
export default {
  name: 'hsl',
  computed: {
    hsl () {
      return this.$store.state.convert.hsl
    },
    curHSL () {
      return this.$store.getters.HSL
    }
  },
  watch: {
    hsl () {
      this.$store.commit('updateColor', { space: 'hsl', data: this.hsl })
    }
  }
}
</script>
