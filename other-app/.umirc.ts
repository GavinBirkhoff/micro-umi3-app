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
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
