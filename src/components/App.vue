<template>
  <main>
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
    <Navbar></Navbar>
  </main>
</template>

<script>
import Navbar from 'COMPONENTS/Navbar'
export default {
  data () {
    return {
      // transitionName: 'slide-left'
      transitionName: 'fade'
    }
  },

  watch: {
    '$route' (to) {
      const path = to.path
      if (this.transitionName !== 'fade') {
        this.transitionName = path === '/home' ? 'slide-right' : 'slide-left'
      }
      this.$store.commit('navinfo', { path })
    }
  },

  components: { Navbar }
}
</script>

<style lang="scss">
@import "../scss/docs";
</style>
