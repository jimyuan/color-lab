<template>
  <main>
    <my-header></my-header>
    <section>
      <transition name="fade">
        <router-view class="child-view"></router-view>
      </transition>
    </section>
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
