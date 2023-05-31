import { useModel } from 'umi';
import styles from './index.less';

export default function IndexPage() {
  const masterProps = useModel('@@qiankunStateFromMaster');
  console.log(masterProps, 'masterProps');
  return (
    <div>
      <h1 className={styles.title}>User Page index1</h1>
      <div>{JSON.stringify(masterProps)}</div>
    </div>
  );
}
