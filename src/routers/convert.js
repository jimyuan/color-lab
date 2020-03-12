export default {
  path: '/convert',
  name: 'convert',
  component: () => import('@/views/Convert'),
  redirect: {
    name: 'hsl'
  },
  meta: {
    navi: true,
    text: '转换',
    icon: 'convert'
  },
  children: [{
    name: 'hex',
    path: 'hex',
    component: () => import('@/views/Convert/HEX')
  }, {
    name: 'rgb',
    path: 'rgb',
    component: () => import('@/views/Convert/RGB')
  }, {
    name: 'hsl',
    path: 'hsl',
    component: () => import('@/views/Convert/HSL')
  }]
}
