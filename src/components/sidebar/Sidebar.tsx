// Sidebar.tsx

import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import Navbar from '../navbar/Navbar';

const { Header, Sider, Content } = Layout;

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className={`sidebar-layout ${collapsed ? 'collapsed' : ''}`} style={{minHeight:'100vh', backgroundColor:'white'}}>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{backgroundColor:'white', marginTop:60}}>
        <div className="logo" />
        <Menu mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Users
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background p-0">
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger text-white',
            onClick: toggleSidebar,
          })}
          <Navbar/>
        </Header>
        <Content className="site-layout-background">
          {/* Your content goes here */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
