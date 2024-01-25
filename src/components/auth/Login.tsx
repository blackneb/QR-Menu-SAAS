import React, { useState } from 'react';
import { Form, Input, Button, Card } from 'antd'; // Import UserOutlined and LockOutlined
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    console.log(values)
    try {
      setLoading(true);
      // Add your authentication logic here, e.g., make an API request
      // Simulate a delay for demonstration purposes (remove in a real application)
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Authentication successful!');
    } catch (error: any) {
      console.error('Authentication failed:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Card title="Login" style={{ maxWidth: '400px', width: '100%' }}>
        <Form name="login-form" initialValues={{ remember: true }} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="username"
            label="Username" // Add label for the username field
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Username" prefix={<UserOutlined />} /> {/* Add UserOutlined icon */}
          </Form.Item>

          <Form.Item
            name="password"
            label="Password" // Add label for the password field
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" prefix={<LockOutlined />} /> {/* Add LockOutlined icon */}
          </Form.Item>

          <Form.Item style={{ textAlign: 'right' }}>
            <a href="/forgot-password" style={{ color: 'black' }}>
              Forgot Password?
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: '100%', background: '#800020', borderColor: '#800020' }}
              loading={loading}
            >
              Log in
            </Button>
          </Form.Item>
          <div className="flex items-center w-full justify-between h-8">
            <div className="flex flex-row w-full justify-between items-center">
              <div className="mr-2">Don't have an account? </div>
              <div>
                <Button type="text" style={{ color: '#800020', fontWeight: 'bold' }} onClick={()=>{ navigate("/createaccount") }}>
                  Create Account
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
