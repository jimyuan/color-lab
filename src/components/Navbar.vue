<template>
  <mt-tabbar class="nav-bar">
    <router-link :to="{ name: val }" v-for="(val, key) in navList" :key="val">
      <svg-icon :icon-class="val"></svg-icon>
      <span v-text="key"></span>
    </router-link>
  </mt-tabbar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      toPath: this.$route.path || '/',
      navList: {
        '首页': 'home',
        '转换': 'convert',
        '安全色': 'safety',
        '预命名': 'named'
      }
    }
  },

  computed: mapState({
    navinfo: state => state.navinfo
  }),

  watch: {
    'toPath' () {
      this.goNav(this.toPath)
    }
  },

  methods: {
    goNav (path) {
      this.$router.push({ path })
      this.$store.commit('navinfo', { path: this.toPath })
    }
  }
}
</script>
