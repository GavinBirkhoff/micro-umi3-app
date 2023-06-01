import { FC } from 'react';
import styles from './index.less';

const PageContainer: FC<{}> = ({ children }) => {
  return <div className={styles.page}>{children}</div>;
};

export default PageContainer;
