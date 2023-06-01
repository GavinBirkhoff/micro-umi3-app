import { Layout, Menu, MenuProps } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { FC } from 'react';
import { useHistory } from 'umi';

interface BaseLayoutProps {
  title: string;
}

const { Header, Sider, Content } = Layout;
const BaseLayout: FC<BaseLayoutProps> = (props) => {
  const history = useHistory();
  const handleClick: MenuProps['onClick'] = ({
    item,
    key,
    keyPath,
    domEvent,
  }) => {
    history.push(`/${key === 'index' ? '' : key}`);
  };
  const { children } = props;

  return (
    <Layout>
      <Sider>
        <Menu
          style={{height:'calc(100vh - 48px)'}}
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={handleClick}
          items={[
            {
              key: 'index',
              icon: <UserOutlined />,
              label: 'Index',
            },
            {
              key: 'user',
              icon: <VideoCameraOutlined />,
              label: 'User',
            },
            {
              key: 'dept',
              icon: <UploadOutlined />,
              label: 'Dept',
            },
          ]}
        />
      </Sider>
      <Content style={{ height: '100%' }}>{children}</Content>
    </Layout>
  );
};
export default BaseLayout;
