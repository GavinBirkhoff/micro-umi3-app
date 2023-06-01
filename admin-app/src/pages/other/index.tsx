import { useEffect } from 'react';
import styles from './index.less';
import PageContainer from '@/components/PageContainer';
import { MicroApp } from 'umi';

export default function OtherPage() {
  return (
    <PageContainer>
      <MicroApp name="other-app" autoSetLoading />
    </PageContainer>
  );
}
