<template>
  <div>
    <div class="color-216">
      <article class="safe-item" v-for="(item, index) in combHEX" :style="{backgroundColor: '#'+item}">
        <div>
          <p>HEX: #{{ item }}</p>
          <P>RGB: {{ combRGB[index] }}</P>
          <p>HSL: {{ combHSL[index][0]}}, {{ combHSL[index][1]}}%, {{ combHSL[index][2]}}%</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import cvt from 'color-convert'
export default {
  data () {
    return {
      baseHEX: ['00', '33', '66', '99', 'CC', 'FF']
    }
  },

  computed: {
    combHEX () {
      const arr = [this.baseHEX, this.baseHEX, this.baseHEX]
      return this.combinate(arr)
    },
    combRGB () {
      return this.combHEX.map(item => cvt.hex.rgb(item).toString(', '))
    },
    combHSL () {
      return this.combHEX.map(item => cvt.hex.hsl(item))
    }
  },

  methods: {
    combinate (arr) {
      // 当数组大于等于2个的时候
      if (arr.length >= 2) {
        // 第一个数组的长度
        const len1 = arr[0].length
        // 第二个数组的长度
        const len2 = arr[1].length
        // 将 comb 的值保存进这个数组
        const items = []
        for (let i = 0; i < len1; i++) {
          for (let j = 0; j < len2; j++) {
            items.push(arr[0][i].concat(arr[1][j]))
          }
        }
        let newArr = []
        for (let i = 2; i < arr.length; i++) {
          newArr[i - 1] = arr[i]
        }
        newArr[0] = items
        return this.combinate(newArr)
      }
      return arr[0]
    }
  },
  created () {
    this.$store.commit('navinfo', { title: '216 安全色' })
  }
}
</script>
