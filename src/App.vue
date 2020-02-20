<template>
  <main>
    <my-header></my-header>
    <transition name="fade">
      <router-view class="child-view"></router-view>
    </transition>
    <navbar></navbar>
  </main>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import Navbar from '@/components/Navbar'
export default {
  components: { MyHeader, Navbar }
}
</script>
