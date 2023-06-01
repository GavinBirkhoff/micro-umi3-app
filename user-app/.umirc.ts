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
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: './user', component: '@/pages/user' },
        { path: './dept', component: '@/pages/dept' },
        { path: './', component: '@/pages/index' },
      ],
    },
  ],
  fastRefresh: {},
});
