<template>
  <section class="poetry-list">
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
  name: 'poetry-list',
  props: {
    data: {
      type: Array,
      default () { return [] }
    }
  },
  components: { PieChart },
  computed: {
    hexArr () {
      return this.data.map(v => `#${cvt.rgb.hex(v.rgb.split(','))}`)
    },
    rgbPercent () {
      return this.data.map(v => v.rgb.split(',').map(n => Math.floor(+n / 255 * 100)))
    },
    curIdx () {
      return this.$store.getters.curPoetry
    }
  },
  methods: {
    changeBg (idx = this.curIdx) {
      if (!this.hexArr[idx]) idx = 0
      this.$emit('input', this.hexArr[idx])
      this.$store.commit('handlePoetry', idx)
    }
  },
  created () {
    this.changeBg()
  }
}
</script>
