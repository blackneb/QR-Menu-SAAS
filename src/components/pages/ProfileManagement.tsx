import React, { useState } from 'react';
import { Tabs } from 'antd';
import ChangePassword from '../profle management/ChangePassword';
import ProfileChange from '../profle management/ProfileChange';
import RestaurantProfile from '../profle management/RestaurantProfile';

const { TabPane } = Tabs;

const tabStyle = { color: '#800020' };

const ProfileManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('1');

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <div className="App">
      <Tabs activeKey={activeTab} onChange={handleTabChange} style={tabStyle}>
        <TabPane tab={<div style={tabStyle}>Profile Change</div>} key="1">
          <ProfileChange />
        </TabPane>
        <TabPane tab={<div style={tabStyle}>Restaurant Profile</div>} key="2">
          <RestaurantProfile />
        </TabPane>
        <TabPane tab={<div style={tabStyle}>Change Password</div>} key="3">
          <ChangePassword />
        </TabPane>
      </Tabs>
      <style>
        {`
          .ant-tabs-ink-bar {
            background-color: #800020 !important;
          }
        `}
      </style>
    </div>
  );
};

export default ProfileManagement;
