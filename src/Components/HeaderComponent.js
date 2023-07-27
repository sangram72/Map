import React from 'react';
import { Layout, Button } from 'antd';

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header style={{ background: '#fff', padding: '0 16px', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <Button type="link">Login</Button>
        <Button type="link">Logout</Button>
        <Button type="primary">Profile</Button>
      </div>
    </Header>
  );
};

export default HeaderComponent;
