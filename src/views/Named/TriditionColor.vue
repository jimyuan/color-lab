<template>
  <section class="tridition-items">
    <h2
      v-for="(v, k) in colorGroup" :key="k"
      class="tridition-key"
      :style="coverStyle[k]"
      @click="handleList(k)">{{k}}</h2>
    <p class="center">
      <a href="http://zhongguose.com/" target="new">参看: 色谱 中科院科技情报编委会名词室.科学出版社,1957.</a>
    </p>
    <!-- 列表区，默认隐藏 -->
    <div class="tridition-list" v-if="listFlag" :style="curStyle">
      <div class="mini-menu">
        <span @click="listFlag=false">
          <svg-icon icon-class="close"></svg-icon>
        </span>
      </div>
      <tridition-list :data="curColorArr" v-model="curStyle" />
    </div>
  </section>
</template>
<script>
import data from '@/assets/data/tridition'
import fontColor from '@/utils/fontcolor'
import TriditionList from '@/components/named/TriditionList'
export default {
  name: 'tridition-color',
  components: { TriditionList },
  data () {
    return {
      colorArr: data,
      listFlag: false,
      curColorArr: [],
      curStyle: {}
    }
  },
  computed: {
    colorGroup () {
      const group = {
        '红': [],
        '紫': [],
        '蓝': [],
        '绿': [],
        '黄': [],
        '橙': [],
        '棕': [],
        '灰': [],
        '白': [],
        '...': []
      }
      let lastChart = ''
      for (let color of this.colorArr) {
        lastChart = color.name.slice(-1)
        group[lastChart] ? group[lastChart].push(color) : group['...'].push(color)
      }
      return group
    },
    colorKeys () {
      return Object.keys(this.colorGroup)
    },
    coverStyle () {
      const obj = {}
      let bgColor
      for (let color of this.colorKeys) {
        bgColor = this.colorGroup[color][0]['hex']
        obj[color] = {
          backgroundColor: bgColor,
          color: fontColor('hex', bgColor.slice(1))
        }
      }
      return obj
    }
  },
  methods: {
    handleList (key) {
      // const curColorArr = this.colorGroup[key]
      this.curColorArr = this.colorGroup[key]
      this.listFlag = true
    }
  }
}
</script>
