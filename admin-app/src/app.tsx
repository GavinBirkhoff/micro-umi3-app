import { useState } from 'react';
import {
  BasicLayoutProps,
  Settings as LayoutSettings,
} from '@ant-design/pro-layout';
import RightContent from '@/components/RightContent';
// import Footer from '@/components/Footer';

// 从接口中获取子应用配置，export 出的 qiankun 变量是一个 promise
export const qiankun = fetch('/api/config')
  .then((res) => res.json())
  .then(({ apps }: any) => {
    return {
      // 注册子应用信息
      apps: apps.map((item: any) => {
        return {
          ...item,
          // 这里向子应用传递props
          props: {
            onClick: (event: any) => console.log(event),
            name: 'xx',
            age: 1,
          },
        };
      }),
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
      // 完整生命周期钩子请看 https://qiankun.umijs.org/zh/api/#registermicroapps-apps-lifecycles
      lifeCycles: {
        afterMount: (props: any) => {
          console.log(props, 'afterMount');
        },
      },
      // 支持更多的其他配置，详细看这里 https://qiankun.umijs.org/zh/api/#start-opts
    };
  });

export async function getInitialState() {
  // const data = await fetchXXX();
  return { settings: {} };
}

export const layout = ({
  initialState,
}: {
  initialState: { settings?: LayoutSettings };
}): BasicLayoutProps => {
  return {
    rightContentRender: () => <RightContent />,
    // footerRender: () => <Footer />, 这不是重点
    onPageChange: () => {},
  };
};
export function useQiankunStateForSlave() {
  const [masterState, setMasterState] = useState({});

  return {
    masterState,
    setMasterState,
  };
}
