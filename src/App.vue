<template>
  <main>
    <my-header></my-header>
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
    <navbar></navbar>
  </main>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import Navbar from '@/components/Navbar'
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

  components: { MyHeader, Navbar }
}
</script>
