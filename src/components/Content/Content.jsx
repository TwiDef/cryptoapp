import React from 'react';
import { Flex, Layout, Typography } from 'antd';
import { useSelector } from 'react-redux';

const Content = () => {

  const contentStyle = {
    textAlign: 'center',
    padding: '1rem',
    color: '#fff',
    backgroundColor: '#202f3d',
  }

  const { assets, coins_data } = useSelector(state => state.crypto_data)

  return (
    <Layout.Content style={contentStyle}>
      <Flex align="center" gap={10}>
        <img src="https://cdn-icons-png.flaticon.com/512/2108/2108625.png " width="40" height="40" alt="money" />
        <Typography.Title level={3} style={{ textAlign: "left", color: "#fff" }}>
          Total asset amount:
          <span style={{ marginLeft: "6px", color: "#92ff97" }}>
            {assets
              .map((asset) => {
                const coin = coins_data.result.find((c) => c.id === asset.id)
                return asset.amount * coin.price
              })
              .reduce((acc, coin) => acc += coin, 0)
              .toFixed(2)
            }$
          </span>
        </Typography.Title>
      </Flex>
    </Layout.Content>
  );
};

export default Content;