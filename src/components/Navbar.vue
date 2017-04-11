<template>
  <mt-tabbar v-model="navinfo.path">
    <mt-tab-item v-for="(val, key) in navList" :key="key" :id="'/'+val" class="nav-bottom">
      <i slot="icon" class="iconfont" :class="'icon-'+val" @click="goNav(val)"></i>
      <span v-text="key" @click="goNav(val)"></span>
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
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

  methods: {
    goNav (path) {
      this.$router.push({ path })
      this.$store.commit('navinfo', { path })
    }
  }
}
</script>
