export default {
  name: 'named',
  path: '/named',
  component: () => import('@/views/Named'),
  redirect: { name: 'safety' },
  meta: {
    navi: true,
    text: '命名',
    icon: 'named'
  },
  children: [{
    name: 'safety',
    path: 'safety',
    component: () => import('@/views/Named/Safety'),
    meta: {
      title: '216 WEB安全色',
      text: '安全色'
    }
  }, {
    name: 'keyword',
    path: 'keyword',
    component: () => import('@/views/Named/Keyword'),
    meta: {
      title: 'CSS预命名关键词',
      text: '预命名'
    }
  }, {
    name: 'tridition',
    path: 'tridition',
    component: () => import('@/views/Named/Tridition'),
    meta: {
      title: '中国传统命名色',
      text: '传统色'
    }
  }, {
    name: 'poetry',
    path: 'poetry',
    component: () => import('@/views/Named/Poetry'),
    meta: {
      title: '古色古香诗词色',
      text: '诗词色'
    }
  }]
}
