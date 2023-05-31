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
  },
};
