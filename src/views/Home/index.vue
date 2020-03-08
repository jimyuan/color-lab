<template>
  <div>
    <div class="cube">
      <div class="front"></div>
      <div class="back"></div>
      <div class="right"></div>
      <div class="left"></div>
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
    <h6 class="center">色彩实验室 ver. 2.0</h6>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.commit('navinfo', { title: '色彩实验室' })
  }
}
</script>
