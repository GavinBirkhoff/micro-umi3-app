export const qiankun = {
  // 应用加载之前
  async bootstrap(props: any) {
    console.log(props, 'other-app bootstrap');
  },
  // 应用 render 之前触发
  async mount(props: any) {
    console.log(props, 'other-app mount');
  },
  // 应用卸载之后触发
  async unmount(props: any) {
    console.log(props, 'other-app unmount');
  },
};
