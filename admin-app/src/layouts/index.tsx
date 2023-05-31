import { FC } from 'react';

interface BaseLayoutProps {
  title: string;
}

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
