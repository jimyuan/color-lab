<template>
  <nav>
    <router-link :to="{ name: val.name }" v-for="val of navList" :key="val.name">
      <svg-icon :icon-class="val.meta.icon"></svg-icon>
      <span v-text="val.meta.text"></span>
    </router-link>
  </nav>
</template>

<script>
import { routes } from '@/routers'
export default {
  data () {
    return {
      navList: routes.filter(v => v.meta && v.meta.navi)
    }
  }
}
</script>
