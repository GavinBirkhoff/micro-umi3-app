import { FC } from 'react';

interface BaseLayoutProps {
  title: string;
}
// 根据自己的业务去使用，这里我没使用直接用的pro-layout省事，要不是的自定义路由菜单映射等。
// 子应用都使用自定义layout
const BaseLayout: FC<BaseLayoutProps> = (props) => {
  const { children } = props;
  return (
    <div>
      <h2>BaseLayout</h2>
      <div>{children}</div>
    </div>
  );
};
export default BaseLayout;
