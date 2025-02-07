import React from 'react';
import { useFakeFetch } from './../hooks/useFakeFetch';
import { useDispatch, useSelector } from 'react-redux';
import { setAssetsInfo } from '../../redux/slices/assetsSlice';
import { percentDiff } from './../../helpers';
import { Flex, Layout, List, Statistic, Typography, Spin, Tag } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import Card from 'antd/es/card/Card';

const Sider = () => {
  const dispatch = useDispatch()
  const { assets } = useSelector(state => state.assetsInfo)
  const { cryptoData, cryptoAssets, loading } = useFakeFetch()

  const siderStyle = {
    overflow: "auto",
    padding: "1rem",
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#13212b',
  };

  const cardStyle = {
    backgroundColor: "#cae0f4"
  }

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
        {assets && assets.map(asset => {
          return (
            <Card key={asset.id} style={cardStyle}>
              <Statistic
                title={asset.id}
                value={asset.totalAmount}
                precision={2}
                valueStyle={asset.grow ? { color: '#3f8600' } : { color: '#cf1322' }}
                prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                suffix="$" />
              <List
                dataSource={[
                  { title: "Total Profit:", value: asset.totalProfit.toFixed(2), isCurrency: true },
                  { title: "Difference:", value: asset.growPercent.toFixed(2), isCurrency: false },
                ]}
                renderItem={(item) => (
                  <List.Item style={{ padding: "8px 0", fontWeight: "bold" }}>
                    <span>{item.title}</span>
                    <Tag color={asset.grow ? "green" : "red"}>
                      {item.value}
                      {item.isCurrency ? "$" : "%"}
                    </Tag>
                  </List.Item>
                )}
              />
            </Card>
          )
        })}
      </Flex>
    </Layout.Sider>
  );
};

export default Sider;