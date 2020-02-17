<template>
  <mt-header :title="title"></mt-header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    title: state => state.navinfo.title
  })
}
</script>
