import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  DashboardOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const SidebarComponent = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} theme="dark">
      <div style={{ display: 'flex', justifyContent: 'center', padding: '16px 0' }}>
        {collapsed ? (
          <MenuUnfoldOutlined onClick={toggleCollapsed} />
        ) : (
          <MenuFoldOutlined onClick={toggleCollapsed} />
        )}
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']} inlineCollapsed={collapsed}>
        <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
          <span>Dashboard</span>
        </Menu.Item>
        <Menu.Item key="profile" icon={<UserOutlined />}>
          <span>Profile</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SidebarComponent;
