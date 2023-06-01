import { useEffect } from 'react';
import styles from './index.less';
import PageContainer from '@/components/PageContainer';

export default function IndexPage() {
  useEffect(() => {
    localStorage.setItem('admin-app', '1');
    console.log(localStorage);
  }, []);
  return (
    <PageContainer>
      <h1 className={styles.title}>Admin Page index3027</h1>
    </PageContainer>
  );
}
