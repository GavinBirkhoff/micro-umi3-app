import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
    slave: {},
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
