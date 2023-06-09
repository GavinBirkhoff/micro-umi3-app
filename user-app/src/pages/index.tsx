import { useModel } from 'umi';
import styles from './index.less';
import { useEffect } from 'react';
import { Button } from 'antd';

export default function IndexPage() {
  const masterProps = useModel('@@qiankunStateFromMaster');
  console.log(masterProps, 'masterProps');
  useEffect(() => {
    masterProps.handleClickFromMaster(`我是来自子应用user-app，'@@qiankunStateFromMaster' handleClickFromMaster`)
  }, []);
  return (
    <div>
      <h1 className={styles.title}>User Page index1</h1>
      {/* <div>{JSON.stringify(masterProps)}</div> */}
      <Button onClick={()=>{masterProps.setMasterState({a:1})}}>setMasterState</Button>
      <Button onClick={()=>{masterProps.setMasterInitialState((s:any)=>{
        return {
          ...s,
          currentUser:{
            name:"gavin"
          }
        }
      })}}>setMasterInitialState</Button>
    </div>
  );
}
