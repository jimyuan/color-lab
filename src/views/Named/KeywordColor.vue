<template>
  <section class="named-color">
    <aside class="color-bar" @click="selectColor($event)">
      <div
        v-for="(m, i) in keywordColor"
        :key="m.keyword"
        :data-index="i"
        :class="{active: selected==i}"
        :style="{backgroundColor: `rgb(${m.color})`}"></div>
    </aside>
    <div class="color-detail">
      <ul class="unstyled">
        <li v-text="curColor.cname"></li>
        <li v-text="curColor.keyword"></li>
        <li class="hex">#{{curHEX}}</li>
        <li data-text="R">
          <count-to :startVal="init.r" :endVal="curRGB.r" :duration='dur' />
          <i :style="{transform: `scaleX(${curRGB.r / 255})`}"></i>
        </li>
        <li data-text="G">
          <count-to :startVal="init.g" :endVal="curRGB.g" :duration='dur' />
          <i :style="{transform: `scaleX(${curRGB.g / 255})`}"></i>
        </li>
        <li data-text="B">
          <count-to :startVal="init.b" :endVal="curRGB.b" :duration='dur' />
          <i :style="{transform: `scaleX(${curRGB.b / 255})`}"></i>
        </li>
        <li v-if="safety" class="badge">
          <mt-badge type="primary" size="small">safety color</mt-badge>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import countTo from 'vue-count-to'
import cvt from 'color-convert'
export default {
  name: 'keyword-color',
  components: { countTo },
  data () {
    return {
      selected: 0,
      safety: false,
      keywordColor: [
        {
          'keyword': 'light pink',
          'color': '255,182,193',
          'cname': '浅粉红'
        },
        {
          'keyword': 'pink',
          'color': '255,192,203',
          'cname': '粉红'
        },
        {
          'keyword': 'crimson red',
          'color': '220,20,60',
          'cname': '猩红'
        },
        {
          'keyword': 'lavender blush',
          'color': '255,240,245',
          'cname': '淡紫红'
        },
        {
          'keyword': 'pale violet red',
          'color': '219,112,147',
          'cname': '弱紫罗兰红'
        },
        {
          'keyword': 'hot pink',
          'color': '255,105,180',
          'cname': '热情的粉红'
        },
        {
          'keyword': 'deep pink',
          'color': '255,20,147',
          'cname': '深粉红'
        },
        {
          'keyword': 'medium violet red',
          'color': '199,21,133',
          'cname': '中紫罗兰红'
        },
        {
          'keyword': 'orchid',
          'color': '218,112,214',
          'cname': '兰花紫'
        },
        {
          'keyword': 'thistle',
          'color': '216,191,216',
          'cname': '蓟'
        },
        {
          'keyword': 'plum',
          'color': '221,160,221',
          'cname': '李子紫'
        },
        {
          'keyword': 'violet',
          'color': '238,130,238',
          'cname': '紫罗兰'
        },
        {
          'keyword': 'magenta',
          'color': '255,0,255',
          'cname': '洋红'
        },
        {
          'keyword': 'fuchsia',
          'color': '244,0,161',
          'cname': '灯笼海棠'
        },
        {
          'keyword': 'dark magenta',
          'color': '139,0,139',
          'cname': '深洋红'
        },
        {
          'keyword': 'purple',
          'color': '128,0,128',
          'cname': '紫色'
        },
        {
          'keyword': 'medium orchid',
          'color': '186,85,211',
          'cname': '中兰花紫'
        },
        {
          'keyword': 'dark violet',
          'color': '148,0,211',
          'cname': '暗紫罗兰'
        },
        {
          'keyword': 'dark orchid',
          'color': '153,50,204',
          'cname': '暗兰花紫'
        },
        {
          'keyword': 'indigo',
          'color': '75,0,130',
          'cname': '靛青'
        },
        {
          'keyword': 'blue violet',
          'color': '138,43,226',
          'cname': '蓝紫罗兰'
        },
        {
          'keyword': 'medium purple',
          'color': '147,112,219',
          'cname': '中紫色'
        },
        {
          'keyword': 'medium slate blue',
          'color': '123,104,238',
          'cname': '中板岩蓝'
        },
        {
          'keyword': 'slate blue',
          'color': '106,90,205',
          'cname': '板岩蓝'
        },
        {
          'keyword': 'dark slate blue',
          'color': '72,61,139',
          'cname': '暗板岩蓝'
        },
        {
          'keyword': 'lavender',
          'color': '230,230,250',
          'cname': '熏衣草淡紫'
        },
        {
          'keyword': 'ghost white',
          'color': '248,248,255',
          'cname': '幽灵白'
        },
        {
          'keyword': 'blue',
          'color': '0,0,255',
          'cname': '纯蓝'
        },
        {
          'keyword': 'medium blue',
          'color': '0,0,205',
          'cname': '中蓝色'
        },
        {
          'keyword': 'midnight blue',
          'color': '25,25,112',
          'cname': '午夜蓝'
        },
        {
          'keyword': 'dark blue',
          'color': '0,0,139',
          'cname': '暗蓝色'
        },
        {
          'keyword': 'navy blue',
          'color': '0,0,128',
          'cname': '海军蓝'
        },
        {
          'keyword': 'royal blue',
          'color': '65,105,225',
          'cname': '皇家蓝'
        },
        {
          'keyword': 'corn flower blue',
          'color': '100,149,237',
          'cname': '矢车菊蓝'
        },
        {
          'keyword': 'light steel blue',
          'color': '176,196,222',
          'cname': '亮钢蓝'
        },
        {
          'keyword': 'light slate gray',
          'color': '119,136,153',
          'cname': '亮石板灰'
        },
        {
          'keyword': 'slate gray',
          'color': '112,128,144',
          'cname': '石板灰'
        },
        {
          'keyword': 'dodger blue',
          'color': '30,144,255',
          'cname': '道奇蓝'
        },
        {
          'keyword': 'alice blue',
          'color': '240,248,255',
          'cname': '爱丽丝蓝'
        },
        {
          'keyword': 'steel blue',
          'color': '70,130,180',
          'cname': '铁青'
        },
        {
          'keyword': 'light sky blue',
          'color': '135,206,250',
          'cname': '亮天蓝色'
        },
        {
          'keyword': 'sky blue',
          'color': '135,206,235',
          'cname': '天蓝色'
        },
        {
          'keyword': 'deep sky blue',
          'color': '0,191,255',
          'cname': '深天蓝'
        },
        {
          'keyword': 'light blue',
          'color': '173,216,230',
          'cname': '亮蓝'
        },
        {
          'keyword': 'powder blue',
          'color': '176,224,230',
          'cname': '火药青'
        },
        {
          'keyword': 'cadet blue',
          'color': '95,158,160',
          'cname': '军服蓝'
        },
        {
          'keyword': 'azure',
          'color': '240,255,255',
          'cname': '蔚蓝色'
        },
        {
          'keyword': 'light cyan',
          'color': '224,255,255',
          'cname': '淡青色'
        },
        {
          'keyword': 'pale turquoise',
          'color': '175,238,238',
          'cname': '弱绿宝石'
        },
        {
          'keyword': 'cyan',
          'color': '0,255,255',
          'cname': '青色'
        },
        {
          'keyword': 'aqua',
          'color': '175,223,228',
          'cname': '水色'
        },
        {
          'keyword': 'dark turquoise',
          'color': '0,206,209',
          'cname': '暗绿宝石'
        },
        {
          'keyword': 'dark slate gray',
          'color': '47,79,79',
          'cname': '暗石板灰'
        },
        {
          'keyword': 'dark cyan',
          'color': '0,139,139',
          'cname': '暗青色'
        },
        {
          'keyword': 'teal',
          'color': '0,128,128',
          'cname': '水鸭色'
        },
        {
          'keyword': 'medium turquoise',
          'color': '72,209,204',
          'cname': '中绿宝石'
        },
        {
          'keyword': 'light sea green',
          'color': '32,178,170',
          'cname': '浅海洋绿'
        },
        {
          'keyword': 'turquoise',
          'color': '64,224,208',
          'cname': '绿宝石'
        },
        {
          'keyword': 'aquamarine',
          'color': '127,255,212',
          'cname': '宝石碧绿'
        },
        {
          'keyword': 'medium aquamarine',
          'color': '102,205,170',
          'cname': '中宝石碧绿'
        },
        {
          'keyword': 'medium springgreen',
          'color': '0,250,154',
          'cname': '中春绿色'
        },
        {
          'keyword': 'mint cream',
          'color': '245,255,250',
          'cname': '薄荷奶油'
        },
        {
          'keyword': 'spring green',
          'color': '0,255,127',
          'cname': '春绿色'
        },
        {
          'keyword': 'medium sea green',
          'color': '60,179,113',
          'cname': '中海洋绿'
        },
        {
          'keyword': 'sea green',
          'color': '46,139,87',
          'cname': '海洋绿'
        },
        {
          'keyword': 'honeydew',
          'color': '240,255,240',
          'cname': '蜜瓜色'
        },
        {
          'keyword': 'light green',
          'color': '144,238,144',
          'cname': '淡绿色'
        },
        {
          'keyword': 'pale green',
          'color': '152,251,152',
          'cname': '弱绿色'
        },
        {
          'keyword': 'dark sea green',
          'color': '143,188,143',
          'cname': '暗海洋绿'
        },
        {
          'keyword': 'lime green',
          'color': '50,205,50',
          'cname': '闪光深绿'
        },
        {
          'keyword': 'lime',
          'color': '0,255,0',
          'cname': '闪光绿'
        },
        {
          'keyword': 'forest green',
          'color': '34,139,34',
          'cname': '森林绿'
        },
        {
          'keyword': 'green',
          'color': '0,128,0',
          'cname': '纯绿'
        },
        {
          'keyword': 'dark green',
          'color': '0,100,0',
          'cname': '暗绿色'
        },
        {
          'keyword': 'chartreuse',
          'color': '127,255,0',
          'cname': '查特酒绿'
        },
        {
          'keyword': 'lawn green',
          'color': '124,252,0',
          'cname': '草坪绿'
        },
        {
          'keyword': 'green yellow',
          'color': '173,255,47',
          'cname': '绿黄色'
        },
        {
          'keyword': 'dark olive green',
          'color': '85,107,47',
          'cname': '暗橄榄绿'
        },
        {
          'keyword': 'yellow green',
          'color': '154,205,50',
          'cname': '黄绿色'
        },
        {
          'keyword': 'olive drab',
          'color': '107,142,35',
          'cname': '橄榄褐色'
        },
        {
          'keyword': 'beige',
          'color': '245,245,220',
          'cname': '米色'
        },
        {
          'keyword': 'light goldenrod yellow',
          'color': '250,250,210',
          'cname': '亮菊黄'
        },
        {
          'keyword': 'ivory',
          'color': '255,255,240',
          'cname': '象牙'
        },
        {
          'keyword': 'light yellow',
          'color': '255,255,224',
          'cname': '浅黄色'
        },
        {
          'keyword': 'yellow',
          'color': '255,255,0',
          'cname': '纯黄'
        },
        {
          'keyword': 'olive',
          'color': '128,128,0',
          'cname': '橄榄'
        },
        {
          'keyword': 'dark khaki',
          'color': '189,183,107',
          'cname': '深卡叽布'
        },
        {
          'keyword': 'lemon chiffon',
          'color': '255,250,205',
          'cname': '柠檬绸'
        },
        {
          'keyword': 'pale goldenrod',
          'color': '238,232,170',
          'cname': '灰菊黄'
        },
        {
          'keyword': 'khaki',
          'color': '240,230,140',
          'cname': '卡叽布'
        },
        {
          'keyword': 'gold',
          'color': '255,215,0',
          'cname': '金色'
        },
        {
          'keyword': 'cornsilk',
          'color': '255,248,220',
          'cname': '玉米丝色'
        },
        {
          'keyword': 'goldenrod',
          'color': '218,165,32',
          'cname': '金菊黄'
        },
        {
          'keyword': 'dark goldenrod',
          'color': '184,134,11',
          'cname': '暗金菊黄'
        },
        {
          'keyword': 'floral white',
          'color': '255,250,240',
          'cname': '花的白色'
        },
        {
          'keyword': 'old lace',
          'color': '253,245,230',
          'cname': '旧蕾丝'
        },
        {
          'keyword': 'wheat',
          'color': '245,222,179',
          'cname': '小麦色'
        },
        {
          'keyword': 'moccasin',
          'color': '255,228,181',
          'cname': '鹿皮靴'
        },
        {
          'keyword': 'orange',
          'color': '255,165,0',
          'cname': '橙色'
        },
        {
          'keyword': 'papaya whip',
          'color': '255,239,213',
          'cname': '番木瓜'
        },
        {
          'keyword': 'blanched almond',
          'color': '255,235,205',
          'cname': '发白的杏仁色'
        },
        {
          'keyword': 'navajo white',
          'color': '255,222,173',
          'cname': '土著白'
        },
        {
          'keyword': 'antique white',
          'color': '250,235,215',
          'cname': '古董白'
        },
        {
          'keyword': 'tan',
          'color': '210,180,140',
          'cname': '茶色'
        },
        {
          'keyword': 'burly wood',
          'color': '222,184,135',
          'cname': '硬木色'
        },
        {
          'keyword': 'bisque',
          'color': '255,228,196',
          'cname': '陶坯黄'
        },
        {
          'keyword': 'dark orange',
          'color': '255,140,0',
          'cname': '深橙色'
        },
        {
          'keyword': 'linen',
          'color': '250,240,230',
          'cname': '亚麻布'
        },
        {
          'keyword': 'peru',
          'color': '205,133,63',
          'cname': '秘鲁'
        },
        {
          'keyword': 'peach puff',
          'color': '255,218,185',
          'cname': '桃肉色'
        },
        {
          'keyword': 'sandy brown',
          'color': '244,164,96',
          'cname': '沙棕色'
        },
        {
          'keyword': 'chocolate',
          'color': '210,105,30',
          'cname': '巧克力'
        },
        {
          'keyword': 'saddle brown',
          'color': '139,69,19',
          'cname': '马鞍棕色'
        },
        {
          'keyword': 'seashell',
          'color': '255,245,238',
          'cname': '海贝壳'
        },
        {
          'keyword': 'sienna',
          'color': '160,82,45',
          'cname': '黄土赭色'
        },
        {
          'keyword': 'light salmon',
          'color': '255,160,122',
          'cname': '浅鲑鱼肉色'
        },
        {
          'keyword': 'coral',
          'color': '255,127,80',
          'cname': '珊瑚'
        },
        {
          'keyword': 'orange red',
          'color': '255,69,0',
          'cname': '橙红色'
        },
        {
          'keyword': 'dark salmon',
          'color': '233,150,122',
          'cname': '深鲜肉色'
        },
        {
          'keyword': 'tomato',
          'color': '255,99,71',
          'cname': '番茄红'
        },
        {
          'keyword': 'misty rose',
          'color': '255,228,225',
          'cname': '薄雾玫瑰'
        },
        {
          'keyword': 'salmon',
          'color': '250,128,114',
          'cname': '鲜肉色'
        },
        {
          'keyword': 'snow',
          'color': '255,250,250',
          'cname': '雪'
        },
        {
          'keyword': 'light coral',
          'color': '240,128,128',
          'cname': '淡珊瑚色'
        },
        {
          'keyword': 'rosy brown',
          'color': '188,143,143',
          'cname': '玫瑰棕色'
        },
        {
          'keyword': 'indian red',
          'color': '205,92,92',
          'cname': '印度红'
        },
        {
          'keyword': 'red',
          'color': '255,0,0',
          'cname': '纯红'
        },
        {
          'keyword': 'brown',
          'color': '165,42,42',
          'cname': '棕色'
        },
        {
          'keyword': 'fire brick',
          'color': '178,34,34',
          'cname': '耐火砖'
        },
        {
          'keyword': 'dark red',
          'color': '139,0,0',
          'cname': '深红色'
        },
        {
          'keyword': 'maroon',
          'color': '128,0,0',
          'cname': '栗色'
        },
        {
          'keyword': 'white',
          'color': '255,255,255',
          'cname': '纯白'
        },
        {
          'keyword': 'white smoke',
          'color': '245,245,245',
          'cname': '白烟'
        },
        {
          'keyword': 'gainsboro',
          'color': '220,220,220',
          'cname': '庚斯博罗灰色'
        },
        {
          'keyword': 'light grey',
          'color': '211,211,211',
          'cname': '浅灰色'
        },
        {
          'keyword': 'silver',
          'color': '192,192,192',
          'cname': '银灰色'
        },
        {
          'keyword': 'dark gray',
          'color': '169,169,169',
          'cname': '深灰色'
        },
        {
          'keyword': 'gray',
          'color': '128,128,128',
          'cname': '灰色'
        },
        {
          'keyword': 'dim gray',
          'color': '105,105,105',
          'cname': '暗淡的灰色'
        },
        {
          'keyword': 'black',
          'color': '0,0,0',
          'cname': '纯黑'
        }
      ],
      init: {
        r: 0, g: 0, b: 0
      },
      dur: 1000
    }
  },
  computed: {
    curColor () {
      return this.keywordColor[this.selected]
    },
    curRGB () {
      const [r, g, b] = this.curColor.color.split(',').map(v => +v)
      return { r, g, b }
    },
    curHEX () {
      return cvt['rgb']['hex'](Object.values(this.curRGB))
    }
  },
  watch: {
    curRGB () {
      const { r, g, b } = this.curRGB
      const val = [0, 51, 102, 153, 204, 255]
      const len = val.length
      this.safety = [...new Set(val.concat([r, g, b]))].length === len
    }
  },
  methods: {
    selectColor (evt) {
      const index = evt.target.dataset.index
      if (index >= 0) {
        this.selected = index
        setTimeout(() => {
          this.init = this.curRGB
        }, 1000)
      }
    }
  }
}
</script>
