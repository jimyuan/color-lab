<template>
  <div class="ranger-zone">
    <mt-cell
      v-for="(c, idx) of $route.name" :key="c"
      :title="c"
      :label="rgb[idx].toString()">
      <mt-range v-model="rgb[idx]" :max="255" :bar-height="2" :style="{color: curRGB}" />
    </mt-cell>
  </div>
</template>
<script>
export default {
  name: 'rgb',
  computed: {
    rgb () {
      return this.$store.state.convert.rgb
    },
    curRGB () {
      return this.$store.getters.RGB
    }
  },
  watch: {
    rgb () {
      this.$store.commit('updateColor', { space: 'rgb', data: this.rgb })
    }
  }
}
</script>
