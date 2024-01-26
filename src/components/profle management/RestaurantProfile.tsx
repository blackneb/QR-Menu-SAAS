import React, { useState } from 'react';
import { Form, Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const RestaurantProfile: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    console.log(values);
    try {
      setLoading(true);
      // Add your account creation logic here, e.g., make an API request
      // Simulate a delay for demonstration purposes (remove in a real application)
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Profile update successful!');
    } catch (error: any) {
      console.error('Profile update failed:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col mt-8 md:flex-row justify-center items-center">
      <div className="bg-white shadow-md px-8 flex items-center rounded-2xl justify-center w-full md:w-1/2 lg:w-1/3">
        <div className="w-full h-100">
          <div className="flex align-center justify-center mb-8">
          </div>

          <Form
            name="profileForm"
            onFinish={onFinish}
            labelCol={{ flex: '150px', span: 30 }}
            labelAlign="left"
            labelWrap
          >
            <Form.Item label="Restaurant Name" name="restaurant">
              <Input />
            </Form.Item>

            {/* Other fields */}
            <Form.Item label="Profile Image" name="profileImage">
              <Upload maxCount={1} beforeUpload={() => false}>
                <Button icon={<UploadOutlined />} style={{color: '#800020', width: '180px', borderColor: '#800020',}}>Upload Image</Button>
              </Upload>
            </Form.Item>

            <Form.Item label="Email" name="email">
              <Input disabled />
            </Form.Item>

            <Form.Item label="Phone" name="phone">
              <Input />
            </Form.Item>

            <Form.Item label="Address" name="address">
              <Input />
            </Form.Item>

            <Form.Item>
              <div className="flex justify-center">
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    backgroundColor: '#800020',
                    width: '180px',
                    borderColor: '#800020',
                  }}
                  loading={loading}
                >
                  {loading ? 'Updating Profile' : 'Update Profile'}
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default RestaurantProfile;
