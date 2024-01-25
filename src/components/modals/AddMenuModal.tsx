import { Form, InputNumber, Select, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const AddMenuModal = () => {
  const onFinish = (values:any) => {
    console.log('Received values:', values);
    // Handle the form submission logic here
  };

  const normFile = (e:any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <div>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        onFinish={onFinish}
      >
        <Form.Item label="Menu Name" name="menuName" rules={[{ required: true, message: 'Please enter the menu name' }]}>
          <Select>
            <Option value="dish1">Dish 1</Option>
            <Option value="dish2">Dish 2</Option>
            {/* Add more options as needed */}
          </Select>
        </Form.Item>
        <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please enter the price' }]}>
          <InputNumber min={0} step={0.01} />
        </Form.Item>
        <Form.Item label="Image" name="image" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" style={{background: '#800020', borderColor: '#800020' }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddMenuModal;
