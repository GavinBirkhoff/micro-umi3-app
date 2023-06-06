import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
    slave: {},
  },
  dva: {
    immer: true,
    hmr: false,
  },
  hash: true,
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/login', exact:true, layout:false, component: '@/pages/login' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: './list', component: '@/pages/list' },
        { path: './about', component: '@/pages/about' },
        { path: './', component: '@/pages/index' },
      ],
    },
  ],
  fastRefresh: {},
});
