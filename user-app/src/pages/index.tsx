import { useModel, useRouteMatch } from 'umi';
import styles from './index.less';
import { useEffect } from 'react';
import { Button } from 'antd';

export default function IndexPage() {
  const masterProps = useModel('@@qiankunStateFromMaster');
  console.log(masterProps, 'masterProps');
  const match =  useRouteMatch()
  console.log(match);
  useEffect(() => {
  }, []);
  return (
    <div>
      <h1 className={styles.title}>User Page index1</h1>
      {/* <div>{JSON.stringify(masterProps)}</div> */}
      <Button onClick={()=>{masterProps.setMasterState({a:1})}}>setMasterState</Button>
    </div>
  );
}
