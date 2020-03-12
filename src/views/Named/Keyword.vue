<template>
  <section class="keyword-color">
    <!-- 预命名列表区 -->
    <div class="color-bar" @click="selectColor">
      <div
        v-for="(m, i) in keywordColor" :key="m.keyword"
        :data-index="i"
        :class="{active: selected==i}"
        :style="{color: `#${m.color}`}"></div>
    </div>
    <aside class="color-params">
      <ul class="unstyled">
        <li v-text="curColor.cname"></li>
        <li v-text="curColor.keyword"></li>
        <li class="hex">#{{curHEX}}</li>
        <li data-text="R">
          <count-to :startVal="init.r" :endVal="curRGB.r" :duration='dur' />
          <i :style="{transform: `scaleX(${curRGB.r / 255})`}"></i>
        </li>
        <li data-text="G">
          <count-to :startVal="init.g" :endVal="curRGB.g" :duration='dur' />
          <i :style="{transform: `scaleX(${curRGB.g / 255})`}"></i>
        </li>
        <li data-text="B">
          <count-to :startVal="init.b" :endVal="curRGB.b" :duration='dur' />
          <i :style="{transform: `scaleX(${curRGB.b / 255})`}"></i>
        </li>
        <li class="badge">
          <mt-badge size="small">{{curColor.spec}}</mt-badge>
        </li>
        <li v-if="safety" class="badge">
          <mt-badge type="success" size="small">safety</mt-badge>
        </li>
        <li class="svg-icon">
          <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value">
            <svg-icon icon-class="mdn"></svg-icon>
          </a>
        </li>
      </ul>
    </aside>
  </section>
</template>

<script>
import countTo from 'vue-count-to'
import cvt from 'color-convert'
import keywordColor from '@/assets/data/keyword'
export default {
  name: 'keyword-color',
  components: { countTo },
  data () {
    return {
      selected: Math.floor(Math.random() * keywordColor.length),
      safety: false,
      keywordColor,
      init: {
        r: 0, g: 0, b: 0
      },
      dur: 1000
    }
  },
  computed: {
    curColor () {
      return this.keywordColor[this.selected]
    },
    curRGB () {
      const [r, g, b] = cvt.hex.rgb(this.curColor.color)
      return { r, g, b }
    },
    curHEX () {
      return this.curColor.color
    }
  },
  watch: {
    curRGB () {
      const { r, g, b } = this.curRGB
      const val = [0, 51, 102, 153, 204, 255]
      const len = val.length
      this.safety = [...new Set(val.concat([r, g, b]))].length === len
    }
  },
  methods: {
    selectColor (evt) {
      const index = evt.target.dataset.index
      if (index >= 0) {
        this.selected = index
        setTimeout(() => {
          this.init = this.curRGB
        }, 500)
      }
    }
  }
}
</script>
