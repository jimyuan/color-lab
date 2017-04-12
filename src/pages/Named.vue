<template>
  <div>
    <h2>Named Color</h2>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.commit('navinfo', { title: '预命名色系' })
  }
}
</script>
