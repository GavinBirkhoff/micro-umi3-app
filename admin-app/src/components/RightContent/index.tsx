import { Link, useHistory } from 'umi';
import { Row, Space, Col, Avatar, Image, Button } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import store from 'local-store-pro';
import styles from './index.less';

const Footer = () => {
  const history = useHistory();
  const handleLogout = () => {
    store.clear();
    history.push('/login');
  };
  return (
    <div className={styles.rightContent}>
      <Space>
        <Avatar
          style={{ backgroundColor: '#f56a00' }}
          icon={<UserOutlined />}
        />
        <span>Admin</span>
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

export default Footer;
