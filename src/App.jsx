import React from 'react';
import { Layout } from 'antd';

import Header from './components/Header';
import Content from './components/Content';
import Sider from './components/Sider';

function App() {

  const layoutStyle = {
    overflow: 'hidden',
    width: '100%',
    height: '100vh'
  };

  return (
    <Layout style={layoutStyle}>
      <Header />
      <Layout>
        <Content />
        <Sider />
      </Layout>
    </Layout>
  );
}

export default App
