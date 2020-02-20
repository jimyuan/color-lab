<template>
  <div>
    <mt-navbar v-model="selected" class="tab-nav">
      <!-- tab list -->
      <mt-tab-item
        v-for="m of tabs" :key="m"
        :id="m"
        v-text="m.toUpperCase()"/>
    </mt-navbar>
    <mt-tab-container v-model="selected" class="tab-box">
      <!-- 安全色 -->
      <mt-tab-container-item id="安全色">
        <safety-color />
      </mt-tab-container-item>
      <!-- 预命名 -->
      <mt-tab-container-item id="预命名">
        <keyword-color />
      </mt-tab-container-item>
      <!-- 诗词色 -->
      <mt-tab-container-item id="诗词色">
        <decent-color />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import KeywordColor from './KeywordColor'
import SafetyColor from './SafetyColor'
import DecentColor from './DecentColor'
export default {
  name: 'named-color',
  components: {
    KeywordColor, SafetyColor, DecentColor
  },
  data () {
    return {
      selected: '安全色',
      tabs: ['安全色', '预命名', '诗词色']
    }
  },
  computed: {
    title () {
      const val = this.selected
      switch (val) {
        case '安全色':
          return '216 WEB安全色'
        case '预命名':
          return 'CSS预命名关键词'
        case '诗词色':
          return '古色古香古诗词'
        default:
          return '命名色'
      }
    }
  },
  watch: {
    'title': 'changeTitle'
  },
  methods: {
    changeTitle () {
      const title = this.title
      this.$store.commit('navinfo', { title })
    }
  },
  created () {
    this.changeTitle()
  }
}
</script>
