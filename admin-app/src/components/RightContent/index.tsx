import { Link } from 'umi';
import { Row, Space, Col, Avatar, Image, Button } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import styles from './index.less';

const Footer = () => {
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
        >
          退出
        </Button>
      </Space>
    </div>
  );
};

export default Footer;
