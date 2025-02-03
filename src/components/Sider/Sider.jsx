import React from 'react';
import { Layout } from 'antd';

const Sider = () => {

  const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#13212b',
  };

  return (
    <Layout.Sider width="25%" style={siderStyle}>
      Sider
    </Layout.Sider>
  );
};

export default Sider;