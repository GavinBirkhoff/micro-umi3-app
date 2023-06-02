import { FC, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import store from 'local-store-pro';
import { useHistory } from 'umi';
import { currentUser, login } from '@/services/api';
import styles from './index.less';
const LoginPage: FC = () => {
  const history = useHistory();
  const onFinish = async (values: any) => {
    const res = await login(values);
    // 只是简单的设置
    store('token', res.token, (res.expireIn ?? 1000) / 1000);
    await currentUser();
    history.push('/');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.warp}>
      <div className={styles.login}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ username: 'admin', password: '123456' }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
