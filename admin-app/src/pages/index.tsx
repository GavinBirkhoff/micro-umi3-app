import { FC, useEffect } from 'react';
import styles from './index.less';
import PageContainer from '@/components/PageContainer';

const IndexPage:FC = (props)=>{
  console.log(props,'props IndexPage');
  useEffect(() => {
  }, []);
  return (
    <PageContainer>
      <h1 className={styles.title}>Admin Page index3027</h1>
    </PageContainer>
  );
}

export default IndexPage
