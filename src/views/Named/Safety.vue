<template>
  <div class="color-216">
    <article v-for="color of  HEX216" :key="color"
      :style="{background: '#'+color}"
      :data-color="color">
    </article>
  </div>
</template>

<script>
import HEX216 from '@/assets/data/safety'
export default {
  name: 'safety-color',
  data () {
    return {
      HEX216
    }
  }
}
</script>
