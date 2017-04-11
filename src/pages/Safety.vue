<template>
  <div>
    <my-header></my-header>
    <h2>216 web-safety</h2>
  </div>
</template>

<script>
import MyHeader from 'COMPONENTS/MyHeader'
export default {
  created () {
    this.$store.commit('navinfo', { title: '216 安全色' })
  },
  components: { MyHeader }
}
</script>
