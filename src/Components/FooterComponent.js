
import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      copyright ©{new Date().getFullYear()} Mapup
    </Footer>
  );
};

export default FooterComponent;
