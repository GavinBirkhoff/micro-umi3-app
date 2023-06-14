import { useState } from 'react';
import { SettingDrawer, PageLoading } from '@ant-design/pro-layout';
import { RunTimeLayoutConfig, useModel, useSelector } from 'umi';
import { history, RequestConfig } from 'umi';
import store from 'local-store-pro';
import RightContent from '@/components/RightContent';
// import Footer from '@/components/Footer';
import defaultSettings from '../config/defaultSettings';
import { currentUser as queryCurrentUser } from './services/api';
import { requestInterceptors } from './utils/request';

const isDev = process.env.NODE_ENV === 'development';
const isDebug = isDev || history.location.query?.debug === 'true'
const loginPath = '/login';

// 从接口中获取子应用配置，export 出的 qiankun 变量是一个 promise
export const qiankun = fetch('/api/config')
  .then((res) => res.json())
  .then(({ apps, routes }: any) => {
    return {
      // 注册子应用信息
      apps: apps.map((item: any) => {
        return {
          ...item,
          entry: isDebug ? `//localhost:${item.devPort}`: item.entry,
          // 这里向子应用传递props
          props: {
            handleClickFromMaster: (event: any) => console.log(event),
            msg: `我是来自主应用的值 ${item.name}`,
          },
        };
      }),
      routes,
      // 完整生命周期钩子请看 https://qiankun.umijs.org/zh/api/#registermicroapps-apps-lifecycles
      lifeCycles: {
        afterMount: (props: any) => {
          console.log(props, 'afterMount');
        },
      },
      prefetch:false
      // 支持更多的其他配置，详细看这里 https://qiankun.umijs.org/zh/api/#start-opts
    };
  });

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<any>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  console.log('getInitialState admin-app');
  const fetchUserInfo = async () => {
    try {
      if (!store('token')) {
        throw Error('has no token');
      }
      const msg = await queryCurrentUser();
      return msg.data;
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };
  // 如果不是登录页面，执行
  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: defaultSettings,
    };
  }
  return {
    fetchUserInfo,
    settings: defaultSettings,
  };
}

export const layout: RunTimeLayoutConfig = ({
  initialState,
  setInitialState,
}) => {
  return {
    rightContentRender: () => <RightContent />,
    // footerRender: () => <Footer />, 这不是重点
    onPageChange: () => {},
    childrenRender: (children, props) => {
      return (
        <>
          {children}
          {!props.location?.pathname?.includes('/login') && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
        </>
      );
    },
    ...initialState?.settings,
  };
};

export const useQiankunStateForSlave = (): any => {
  const [masterState, setMasterState] = useState({});
  const { initialState, setInitialState } = useModel('@@initialState');
  console.log(initialState,'useQiankunStateForSlave')
  return {
    masterState,
    setMasterState,
    masterInitialState: initialState,
    setMasterInitialState: setInitialState,
  };
};

export const request: RequestConfig = {
  timeout: 60 * 1000,
  errorConfig: {},
  middlewares: [],
  requestInterceptors: [requestInterceptors],
  responseInterceptors: [],
};
