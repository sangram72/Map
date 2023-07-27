import React from 'react';
import { Layout } from 'antd';
import RegionForm from './RegionForm';
import RegionInfoCard from './RegionInfoCard';
import MapComponent from '../Components/map';
import SidebarComponent from './SidebarComponent'; // If you have a custom SidebarComponent
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

const { Header, Sider, Content, Footer } = Layout;

const AppLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>

      <SidebarComponent />


      <Layout style={{ minHeight: 'calc(100vh - 64px)' }}>
        <Header style={{ background: '#fff', padding: 0 }}>
          
          <HeaderComponent/>
        </Header>
        <Content style={{ margin: '16px' }}>
          <RegionForm />
          <MapComponent />
          <RegionInfoCard />
        </Content>
    <FooterComponent/>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
