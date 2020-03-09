<template>
  <header>{{title}}</header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    title: state => state.navinfo.title
  })
}
</script>
