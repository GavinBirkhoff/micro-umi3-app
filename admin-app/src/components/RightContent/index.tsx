import { Link, useHistory, history, useModel } from 'umi';
import { Row, Space, Col, Avatar, Image, Button } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import store from 'local-store-pro';
import { stringify } from 'querystring';
import { logout } from '@/services/api';
import styles from './index.less';

/**
 * 退出登录，并且将当前的 url 保存
 */
const loginOut = async () => {
  await logout();
  store.clear();
  const { query = {}, search, pathname } = history.location;
  const { redirect } = query;
  // Note: There may be security issues, please note
  if (window.location.pathname !== '/login' && !redirect) {
    history.replace({
      pathname: '/login',
      search: stringify({
        redirect: pathname + search,
      }),
    });
  }
};

const RightContent = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const handleLogout = () => {
    setInitialState((s) => ({ ...s, currentUser: undefined }));
    loginOut();
  };
  return (
    <div className={styles.rightContent}>
      <Space>
        <Avatar
          style={{ backgroundColor: '#f56a00' }}
          icon={<UserOutlined />}
        />
        <span>{initialState?.currentUser?.name}</span>
        <Button
          type="text"
          style={{ color: 'white' }}
          icon={<LogoutOutlined />}
          onClick={handleLogout}
        >
          退出
        </Button>
      </Space>
    </div>
  );
};

export default RightContent;
