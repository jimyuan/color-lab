<template>
  <svg viewBox="0 0 32 32" class="pie">
    <circle cx="16" cy="16" r="16"></circle>
    <circle cx="16" cy="16" r="16" :style="pieStyle"></circle>
  </svg>
</template>

<script>
export default {
  props: {
    percent: {
      type: Number,
      default: 20
    }
  },
  data () {
    return {
      pieStyle: {
        strokeDasharray: `${this.percent} 100`
      }
    }
  }
}
</script>

<style lang="scss">
  svg.pie {
    width: 1rem;
    height: 1rem;
    transform: rotate(-90deg);
    border-radius: 50%;
  }

  .pie > circle {
    fill: none;
    stroke-width: 15;
    stroke: rgb(29, 161, 242);

    &:first-child {
      opacity: 0.2;
    }
  }
</style>
