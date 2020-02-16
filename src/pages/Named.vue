<template>
  <div>
    <section class="named-color">
      <div v-for="n in 140" :key="n"></div>
    </section>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.commit('navinfo', { title: '预命名色系' })
  }
}
</script>
