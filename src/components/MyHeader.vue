<template>
  <mt-header :title="title">
    <router-link to="/" slot="left" v-if="$route.path !== '/home'">
      <mt-button icon="back">首页</mt-button>
    </router-link>
  </mt-header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    title: state => state.navinfo.title
  })
}
</script>
