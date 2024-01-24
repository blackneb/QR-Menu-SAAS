import React from 'react';
import { Form, Input, Button, Card } from 'antd';

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values:', values);
    // Add authentication logic here
  };

  return (
    <Card title="Login" style={{ maxWidth: '300px', margin: 'auto', marginTop: '100px' }}>
      <Form
        name="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%', background: '#800020', borderColor: '#800020' }}>
            Log in
          </Button>
        </Form.Item>

        <Form.Item style={{ textAlign: 'center' }}>
          <a href="/create-account" style={{ color: '#800020' }}>
            Create Account
          </a>
          {' | '}
          <a href="/forgot-password" style={{ color: 'black' }}>
            Forgot Password
          </a>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Login;
