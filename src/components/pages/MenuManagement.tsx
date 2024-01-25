// MenuManagement.tsx
import React, { useState } from 'react';
import { Card, Row, Col, Button, Input, Collapse, Modal, Form, InputNumber } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const menuData = {
    "menu": {
      "categories": [
        {
          "name": "Appetizers",
          "items": [
            {"name": "Spinach Artichoke Dip", "price": 8.99},
            {"name": "Bruschetta", "price": 7.49},
            {"name": "Mozzarella Sticks", "price": 6.99}
          ]
        },
        {
          "name": "Soups",
          "items": [
            {"name": "Tomato Basil Soup", "price": 4.99},
            {"name": "Chicken Noodle Soup", "price": 5.49},
            {"name": "Seafood Chowder", "price": 6.99}
          ]
        },
        {
          "name": "Salads",
          "items": [
            {"name": "Caesar Salad", "price": 9.99},
            {"name": "Greek Salad", "price": 10.49},
            {"name": "Cobb Salad", "price": 11.99}
          ]
        },
        {
          "name": "Main Courses",
          "items": [
            {"name": "Grilled Salmon", "price": 16.99},
            {"name": "Chicken Alfredo", "price": 14.49},
            {"name": "Steak with Mushroom Sauce", "price": 18.99}
          ]
        },
        {
          "name": "Pasta",
          "items": [
            {"name": "Spaghetti Bolognese", "price": 12.99},
            {"name": "Vegetarian Lasagna", "price": 11.99},
            {"name": "Shrimp Scampi", "price": 15.99}
          ]
        },
        {
          "name": "Sandwiches/Burgers",
          "items": [
            {"name": "Classic Burger", "price": 10.99},
            {"name": "Grilled Chicken Sandwich", "price": 9.99},
            {"name": "Veggie Wrap", "price": 8.49}
          ]
        },
        {
          "name": "Pizza",
          "items": [
            {"name": "Margherita Pizza", "price": 13.99},
            {"name": "Meat Lovers Pizza", "price": 15.99},
            {"name": "Vegetarian Pizza", "price": 14.99}
          ]
        },
        {
          "name": "Side Dishes",
          "items": [
            {"name": "Garlic Bread", "price": 4.49},
            {"name": "Seasoned Fries", "price": 3.99},
            {"name": "Steamed Vegetables", "price": 5.99}
          ]
        },
        {
          "name": "Desserts",
          "items": [
            {"name": "Chocolate Lava Cake", "price": 7.99},
            {"name": "New York Cheesecake", "price": 8.49},
            {"name": "Tiramisu", "price": 6.99}
          ]
        },
        {
          "name": "Beverages",
          "items": [
            {"name": "Soda", "price": 2.49},
            {"name": "Iced Tea", "price": 2.99},
            {"name": "Red Wine (Glass)", "price": 7.99}
          ]
        },
        {
          "name": "Specials",
          "items": [
            {"name": "Chef's Special Pasta", "price": 17.99},
            {"name": "Seasonal Grilled Fish", "price": 19.99},
            {"name": "Vegetarian Delight Platter", "price": 16.49}
          ]
        },
        {
          "name": "Vegan/Vegetarian",
          "items": [
            {"name": "Quinoa Salad Bowl", "price": 12.99},
            {"name": "Vegan Pizza", "price": 14.99},
            {"name": "Stuffed Bell Peppers", "price": 13.49}
          ]
        }
      ]
    }
  };

const MenuManagement: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | string[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory((prevState) => {
      if (typeof prevState === 'string') {
        return categoryName === prevState ? [] : [categoryName];
      } else {
        return prevState.includes(categoryName)
          ? prevState.filter((category) => category !== categoryName)
          : [...prevState, categoryName];
      }
    });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const okButtonStyle = { backgroundColor: '#800020', borderColor: '#800020', color: 'white' };

  const filteredCategories = menuData.menu.categories.filter((category) => {
    const items = category.items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return items.length > 0;
  });

  return (
    <div className="p-8">
      <Button type="primary" icon={<PlusOutlined />} style={{ backgroundColor: '#800020', borderColor: '#800020' }} onClick={showModal}>
        Add Menu
      </Button>

      <Modal title="Add Menu" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okButtonProps={{ style: okButtonStyle }}>
        {/* Add your form content here */}
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={(values) => {
            console.log('Received values:', values);
            // Handle the form submission logic here
          }}
        >
          <Form.Item label="Menu Name" name="menuName" rules={[{ required: true, message: 'Please enter the menu name' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please enter the price' }]}>
            <InputNumber min={0} step={0.01} />
          </Form.Item>
        </Form>
      </Modal>

      <div className="mt-8">
        <Input
          placeholder="Search"
          className="mb-4"
          prefix={<SearchOutlined />}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Categories Card List */}
        <Collapse accordion activeKey={selectedCategory} onChange={(key: string | string[]) => setSelectedCategory(key)}>
          {filteredCategories.map((category, index) => (
            <Panel header={category.name} key={category.name}>
              <Row gutter={[16, 16]}>
                {category.items.map((item, itemIndex) => (
                  <Col key={itemIndex} xs={24} sm={12} md={8} lg={6}>
                    <Card title={item.name} className="custom-card">
                      <p>Price: ${item.price.toFixed(2)}</p>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

export default MenuManagement;
