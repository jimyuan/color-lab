<template>
  <div class="poetry-color">
    <div class="poetry-items">
      <span
        v-for="(c, idx) in cs" :key="idx"
        v-text="c[0]"
        :style="{backgroundColor: `rgb(${proxyBg[idx]})`, color: proxyText[idx]}"
        @click="handleList(c)"></span>
    </div>
    <!-- 列表区，默认隐藏 -->
    <transition name="fade">
      <div class="poetry-color-container" v-if="listFlag" :style="curStyle">
        <!-- 关闭弹层区域 -->
        <div class="mini-menu">
          <span @click="toggleList">
            <svg-icon icon-class="list" v-if="fullscreen"></svg-icon>
            <svg-icon icon-class="fullscreen" v-else></svg-icon>
          </span>
          <span @click="closeList">
            <svg-icon icon-class="close"></svg-icon>
          </span>
        </div>
        <!-- 颜色列表或全屏方式 -->
        <transition name="fade" mode="out-in">
          <poetry-view-full
            :data="curColorArr"
            v-model="backgroundColor"
            v-if="fullscreen" />
          <poetry-view-list
            :data="curColorArr"
            v-model="backgroundColor"
            v-else />
        </transition>
      </div>
    </transition>
  </div>
</template>
<script>
import fontColor from '@/utils/fontcolor'
import colors from '@/assets/data/decent'
import PoetryViewList from '@/components/named/PoetryViewList'
import PoetryViewFull from '@/components/named/PoetryViewFull'
export default {
  name: 'poetry-color',
  components: { PoetryViewList, PoetryViewFull },
  data () {
    return {
      colors,
      curColorArr: [],
      backgroundColor: '#fff',
      listFlag: false,
      fullscreen: true
    }
  },
  computed: {
    cs () {
      return Object.keys(this.colors)
    },
    proxyBg () {
      const { colors, cs } = this
      return cs.map(v => colors[v][0]['rgb'])
    },
    proxyText () {
      return this.proxyBg.map(v => fontColor('rgb', v.split(',')))
    },
    curStyle () {
      return {
        backgroundColor: this.backgroundColor,
        color: fontColor('hex', this.backgroundColor)
      }
    }
  },
  methods: {
    // 选择色系
    handleList (color) {
      this.listFlag = true
      this.curColorArr = this.colors[color]
      this.$store.commit('navinfo', {
        title: `${color}诗词色 (${this.curColorArr.length})`
      })
    },
    // 替换不同的显示方式
    toggleList () {
      this.fullscreen = !this.fullscreen
    },
    closeList () {
      this.listFlag = false
      this.$store.commit('navinfo', {
        title: this.$route.meta.title
      })
    }
  }
}
</script>
