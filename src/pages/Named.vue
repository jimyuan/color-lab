<template>
  <div>
    <my-header></my-header>
    <h2>Named Color</h2>
  </div>
</template>

<script>
import MyHeader from 'COMPONENTS/MyHeader'
export default {
  created () {
    this.$store.commit('navinfo', { title: '预命名色系' })
  },

  components: { MyHeader }
}
</script>
