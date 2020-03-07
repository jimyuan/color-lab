<template>
  <article>
    <span
      v-for="(val, key) in cmykObj" :key="key"
      :data-key="key" :data-val="val"
      :class="'cmyk-'+key">
      <pie-charts :percent="val" />
    </span>
  </article>
</template>
<script>
import PieCharts from '@/components/g-pie-chart'
export default {
  props: {
    cmyk: {
      type: Array,
      default () { return [0, 0, 0, 0] }
    },
    rgb: {
      type: Array,
      default () { return [] }
    }
  },
  data () {
    return {
      cmykObj: {
        c: this.cmyk[0],
        m: this.cmyk[1],
        y: this.cmyk[2],
        k: this.cmyk[3]
      }
    }
  },
  components: { PieCharts }
}
</script>
