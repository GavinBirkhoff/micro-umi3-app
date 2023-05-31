import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'user-app', // 唯一 id
          entry: '//localhost:7011', // html entry
        },
        {
          name: 'other-app', // 唯一 id
          entry: '//localhost:7012', // html entry
        },
      ],
    },
  },
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: 'admin-app',
    locale: false,
    layout: 'side',
  },
  hash: true,
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/user',
      microApp: 'user-app',
      name: 'User',
    },
    {
      path: '/other',
      microApp: 'other-app',
      name: 'Other',
    },
    { path: '/', name: '主应用首页', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
