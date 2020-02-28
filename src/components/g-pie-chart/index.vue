<template>
  <svg viewBox="0 0 32 32" class="pie">
    <circle r="16" cx="16" cy="16" :style="pieStyle" />
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

<style>
  svg.pie {
    width: 1rem;
    height: 1rem;
    transform: rotate(-90deg);
    border-radius: 50%;
  }

  .pie circle {
    fill: #655;
    stroke: yellowgreen;
    stroke-width: 32;
  }
</style>
