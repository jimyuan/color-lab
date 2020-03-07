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
        strokeDasharray: '0, 100'
      }
    }
  },
  created () {
    setTimeout(() => {
      this.pieStyle = {
        strokeDasharray: `${this.percent} 100`
      }
    }, 500)
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
    transition: stroke-dasharray 0.5s;

    &:first-child {
      opacity: 0.2;
    }

    &:last-child {
      stroke-dasharray: 0 100;
    }
  }
</style>
