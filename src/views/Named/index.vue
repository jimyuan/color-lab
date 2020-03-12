<template>
  <div>
    <sub-nav class="named">
      <router-link
        v-for="m of subNav" :key="m.name"
        :to="{name: m.name}">
        {{m.text}}</router-link>
    </sub-nav>
    <transition name="fade" mode="out-in">
      <router-view class="tab-box" />
    </transition>
  </div>
</template>

<script>
import router from '@/routers/named'
import SubNav from '@/components/SubNav'

export default {
  name: 'named-color',
  components: { SubNav },
  computed: {
    subNav () {
      return router.children.map(v => {
        return {
          name: v.name,
          text: v.meta.text
        }
      })
    }
  },
  watch: {
    '$route': 'changeTitle'
  },
  methods: {
    changeTitle () {
      const title = this.$route.meta.title
      this.$store.commit('navinfo', { title })
    }
  },
  created () {
    this.changeTitle()
  }
}
</script>
