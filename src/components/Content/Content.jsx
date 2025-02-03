import React from 'react';
import { Layout } from 'antd';

const Content = () => {

  const contentStyle = {
    textAlign: 'center',
    padding: '1rem',
    color: '#fff',
    backgroundColor: '#202f3d',
  };

  return (
    <Layout.Content style={contentStyle}>
      Content
    </Layout.Content>
  );
};

export default Content;