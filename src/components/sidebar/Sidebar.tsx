import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  QrcodeOutlined,
  BarsOutlined,
  UserOutlined,
  HistoryOutlined,
  LineChartOutlined,
  PieChartOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import Navbar from '../navbar/Navbar';
import QRCodeDisplay from '../pages/QRCodeManagement';
import MenuManagement from '../pages/MenuManagement';
import Routing from '../routing/Routing';
import ProfileManagement from '../pages/ProfileManagement';
import { useSelector } from 'react-redux';
import InsideRouting from '../routing/InsideRouting'

const { Header, Sider, Content } = Layout;

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('1'); // Default selected menu item
  const userLoggedIn = useSelector((state:any) => state.userInformation.userLogged)
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick = (key: string) => {
    setSelectedMenuItem(key);
  };

  const renderContent = () => {
    switch (selectedMenuItem) {
      case '1':
        return <QRCodeDisplay data="Your QR Code Data Here" />;
      case '2':
        return <MenuManagement />;
      case '3':
        return <ProfileManagement/> ;
      case '4':
        return <div>Content for History</div>;
      case '5':
        return <div>Content for Analytics</div>;
      case '6':
        return <div>Content for Restaurants</div>;
      case '7':
        return <div>Content for Help and Support</div>;
      default:
        return null;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="site-layout-background p-0 bg-white shadow-md">
        <Navbar />
      </Header>
      {userLoggedIn === undefined &&(
      <>
        <Routing/>
      </>
      )}
      {userLoggedIn && (
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{ background: 'white' }}
          >
            <div className="trigger-icon" onClick={toggleCollapsed}>
              {collapsed ? (
                <MenuUnfoldOutlined className="text-2xl p-4" style={{ color: '#800020' }} />
              ) : (
                <MenuFoldOutlined className="text-2xl p-4" style={{ color: '#800020' }} />
              )}
            </div>
            <Menu
              theme="light"
              mode="inline"
              defaultSelectedKeys={['1']}
              selectedKeys={[selectedMenuItem]}
              onClick={({ key }) => handleMenuClick(key)}
              style={{ background: 'white' }}
            >
              <Menu.Item key="1" icon={<QrcodeOutlined />} style={{ color: '#800020' }}>
                QR Code Management
              </Menu.Item>
              <Menu.Item key="2" icon={<BarsOutlined />} style={{ color: '#800020' }}>
                Menu Management
              </Menu.Item>
              <Menu.Item key="3" icon={<UserOutlined />} style={{ color: '#800020' }}>
                Profile Management
              </Menu.Item>
              <Menu.Item key="4" icon={<HistoryOutlined />} style={{ color: '#800020' }}>
                History
              </Menu.Item>
              <Menu.Item key="5" icon={<LineChartOutlined />} style={{ color: '#800020' }}>
                Analytics
              </Menu.Item>
              <Menu.Item key="6" icon={<PieChartOutlined />} style={{ color: '#800020' }}>
                Restaurants
              </Menu.Item>
              <Menu.Item key="7" icon={<QuestionCircleOutlined />} style={{ color: '#800020' }}>
                Help and Support
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Content className="p-4 bg-white" style={{ height: 'calc(100vh - 64px)', overflowY: 'auto' }}>
              {renderContent()}
            </Content>
          </Layout>
        </Layout>
      )}
    </Layout>
  );
};

export default Sidebar;