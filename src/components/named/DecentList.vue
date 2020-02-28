<template>
  <section class="decent-list">
      <article
        v-for="(item, index) in data" :key="item.name"
        :style="{borderColor: hexArr[index]}"
        @click="changeBg(index)">
        <div>{{item.name}} {{hexArr[index]}}</div>
        <div class="rgb">
          <pie-chart class="pie-chart"
            v-for="(c, idx) in rgbPercent[index]" :key="`${item.name}-${idx}`"
            :percent="c" />
        </div>
      </article>
    </section>
</template>
<script>
import PieChart from '@/components/g-pie-chart'
import cvt from 'color-convert'

export default {
  name: 'decent-list',
  props: {
    data: {
      type: Array,
      default () { return [] }
    }
  },
  components: { PieChart },
  data () {
    return {
      curIdx: 0
    }
  },
  computed: {
    hexArr () {
      return this.data.map(v => `#${cvt.rgb.hex(v.rgb.split(','))}`)
    },
    rgbPercent () {
      return this.data.map(v => v.rgb.split(',').map(n => Math.floor(+n / 255 * 100)))
    }
  },
  methods: {
    changeBg (idx = 0) {
      this.curIdx = idx
      this.$emit('input', this.hexArr[idx])
    }
  },
  created () {
    this.changeBg()
  }
}
</script>
