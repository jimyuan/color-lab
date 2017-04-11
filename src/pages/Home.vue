<template>
  <div>
    <my-header></my-header>
    <div class="cube">
      <div class="front"></div>
      <div class="back"></div>
      <div class="right"></div>
      <div class="left"></div>
      <div class="top"></div>
      <div class="bottom"></div>
  </div>
  <h6 class="center">色彩实验室 ver. 1.0-alpha</h6>
  </div>
</template>

<script>
import MyHeader from 'COMPONENTS/MyHeader'
export default {
  data () {
    return {
      msg: 'HOME PAGE'
    }
  },

  created () {
    this.$store.commit('navinfo', { title: '色彩实验室' })
  },

  components: { MyHeader }
}
</script>
