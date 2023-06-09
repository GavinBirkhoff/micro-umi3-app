export default [
  { path: '/login', exact:true, layout:false, component: '@/pages/login',access:'guest' },
  { path: '/', name: '主应用首页', component: '@/pages/index',access:'guest' },
]
