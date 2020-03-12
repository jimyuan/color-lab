<template>
  <div :style="{backgroundColor, ...setFontColor}">
    <div class="mini-menu">
      <span @click="toggleList">
        <svg-icon icon-class="list" v-if="fullscreen"></svg-icon>
        <svg-icon icon-class="fullscreen" v-else></svg-icon>
      </span>
      <span @click="backIndex">
        <svg-icon icon-class="close"></svg-icon>
      </span>
    </div>
    <transition name="fade" mode="out-in">
      <full-screen :data="colorArr" v-model="backgroundColor" v-if="fullscreen" />
      <decent-list :data="colorArr" v-model="backgroundColor" v-else />
    </transition>
  </div>
</template>
<script>
import data from '@/assets/data/decent'
import DecentList from '@/components/named/DecentList'
import FullScreen from '@/components/named/FullScreen'
import fontColor from '@/utils/fontcolor'

export default {
  name: 'decent-detail',
  props: {
    color: {
      type: String,
      default: '红色系'
    }
  },
  components: { DecentList, FullScreen },
  data () {
    return {
      colorArr: data[this.color],
      backgroundColor: '#fff',
      fullscreen: false
    }
  },
  computed: {
    setFontColor () {
      return { color: fontColor('hex', this.backgroundColor) }
    }
  },
  methods: {
    setTitle () {
      const title = `中国传统颜色：${this.color}(${this.colorArr.length})`
      this.$store.commit('navinfo', { title })
    },
    toggleList () {
      this.fullscreen = !this.fullscreen
    },
    backIndex () {
      this.$router.push({ name: 'poetry' })
    }
  },
  created () {
    if (!Array.isArray(this.colorArr)) {
      this.$router.push({ name: 'poetry' })
    }
    this.setTitle()
  }
}
</script>
