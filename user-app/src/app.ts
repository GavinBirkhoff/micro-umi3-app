import { useState } from 'react';
import { history, RequestConfig } from 'umi';
import store from 'local-store-pro';

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/login';

let masterInitialState:any = null
/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  masterInitialState?:any
  info?:any
  fetchInfo?: () => Promise<any | undefined>;
}> {
  console.log("getInitialState user-app");
  const fetchInfo = async () => {
    try {
      if (!store('token')) {
        throw Error('has no token');
      }
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };
  console.log(history.location);
  // 如果不是登录页面，执行
  if (history.location.pathname !== loginPath) {
    const info = await fetchInfo();
    return {
      masterInitialState,
      info,
      fetchInfo,
    };
  }
  return {
  };
}

export const qiankun = {
  // 应用加载之前
  async bootstrap(props: any) {
    console.log(props, 'user-app bootstrap');
  },
  // 应用 render 之前触发
  async mount(props: any) {
    console.log(props, 'user-app mount');
    masterInitialState = props.masterInitialState
  },
  // 应用卸载之后触发
  async unmount(props: any) {
    console.log(props, 'user-app unmount');
  },
};
