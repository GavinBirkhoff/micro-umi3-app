// 从接口中获取子应用配置，export 出的 qiankun 变量是一个 promise
export const qiankun = fetch('/api/config')
  .then((res) => res.json())
  .then(({ apps }: any) => {
    return {
      // 注册子应用信息
      apps,
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
      ],
      // 完整生命周期钩子请看 https://qiankun.umijs.org/zh/api/#registermicroapps-apps-lifecycles
      lifeCycles: {
        afterMount: (props: any) => {
          console.log(props);
        },
      },
      // 支持更多的其他配置，详细看这里 https://qiankun.umijs.org/zh/api/#start-opts
    };
  });
