import React from 'react';
import { Layout } from 'antd';

const Header = () => {

  const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 60,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#344c62',
  }

  return (
    <Layout.Header style={headerStyle}>
      Header
    </Layout.Header>
  );
};

export default Header;