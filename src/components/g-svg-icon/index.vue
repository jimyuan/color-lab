<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'g-svg-icon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    },
    svgClass () {
      return this.className ? `svg-icon${this.className}` : 'svg-icon'
    }
  },
  beforeCreate () {
    const requireAll = requireContext => requireContext.keys().map(requireContext)
    const req = require.context('@/assets/svg', false, /\.svg$/)
    const iconMap = requireAll(req)
    const generateIconsView = {
      state: {
        iconsMap: []
      },
      generate (iconsMap) {
        this.state.iconsMap = iconsMap
      }
    }
    generateIconsView.generate(iconMap)
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
