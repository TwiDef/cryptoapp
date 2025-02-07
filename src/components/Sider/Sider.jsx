import React from 'react';
import { useFakeFetch } from './../hooks/useFakeFetch';
import { useDispatch } from 'react-redux';
import { setAssetsInfo } from '../../redux/slices/assetsSlice';
import { percentDiff } from './../../helpers';
import { Flex, Layout, List, Statistic, Typography, Spin } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import Card from 'antd/es/card/Card';

const Sider = () => {
  const dispatch = useDispatch()
  const { cryptoData, cryptoAssets, loading } = useFakeFetch()

  console.log(cryptoData)
  console.log(cryptoAssets)

  const siderStyle = {
    padding: "1rem",
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#13212b',
  };

  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

  React.useEffect(() => {
    dispatch(setAssetsInfo(cryptoAssets && cryptoAssets.map(asset => {
      const coin = cryptoData.result.find(c => c.id === asset.id)

      return {
        ...asset,
        grow: asset.price < coin.price,
        totalAmount: (asset.amount * coin.price),
        totalProfit: (asset.amount * coin.price - asset.amount * asset.price),
        growPercent: percentDiff(asset.price, coin.price)
      }
    })))

  }, [cryptoAssets])

  if (loading) {
    return <Spin fullscreen tip="Loading" size="large" />
  }

  return (
    <Layout.Sider width="25%" style={siderStyle}>
      <Flex gap="middle" vertical>
        <Card>
          <Statistic
            title={cryptoAssets && cryptoAssets[0].id}
            value={56.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%" />
          <List
            dataSource={data}
            renderItem={(item) => (
              <List.Item style={{ padding: "8px 0" }}>
                <Typography.Text mark>[ITEM]</Typography.Text> {item}
              </List.Item>
            )}
          />
        </Card>
        <Card bordered={false}>
          <Statistic
            title="Idle"
            value={49.3}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
      </Flex>
    </Layout.Sider>
  );
};

export default Sider;