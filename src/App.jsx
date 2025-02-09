import React from 'react';
import { useFakeFetch } from './components/hooks/useFakeFetch';
import { useDispatch } from 'react-redux';
import { setAssetsInfo, setCoinsInfo } from './redux/slices/cryptoDataSlice';
import { Layout, Spin } from 'antd';

import Header from './components/Header';
import Content from './components/Content';
import Sider from './components/Sider';

function App() {

  const layoutStyle = {
    overflow: 'hidden',
    width: '100%',
    height: '100vh'
  }

  const dispatch = useDispatch()
  const { cryptoData, cryptoAssets, loading } = useFakeFetch()

  React.useEffect(() => {
    dispatch(setCoinsInfo(cryptoData))
    dispatch(setAssetsInfo(cryptoAssets))
  }, [cryptoData, cryptoAssets])

  if (loading) {
    return <Spin fullscreen tip="Loading" size="large" />
  }

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
