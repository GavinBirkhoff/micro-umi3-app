import { useModel } from 'umi';
import styles from './index.less';
import { useEffect } from 'react';

export default function IndexPage() {
  const masterProps = useModel('@@qiankunStateFromMaster');
  console.log(masterProps, 'masterProps');
  useEffect(() => {
    localStorage.setItem('user-app', '1');
    console.log(localStorage);
    console.log(window);
  }, []);
  return (
    <div>
      <h1 className={styles.title}>User Page index1</h1>
      {/* <div>{JSON.stringify(masterProps)}</div> */}
    </div>
  );
}
