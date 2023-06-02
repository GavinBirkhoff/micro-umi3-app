export default {
  '/api/config': {
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
    // 注册子应用路由
    routes: [
      {
        path: '/user',
        microApp: 'user-app',
        microAppProps: {
          autoSetLoading: true,
        },
        name: 'User',
      },
      {
        path: '/other',
        microApp: 'other-app',
        microAppProps: {
          autoSetLoading: true,
        },
        name: 'Other',
      },
    ],
  },
};
