import React from 'react';
import { useSelector } from 'react-redux';
import { Flex, Layout, List, Statistic, Tag } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import Card from 'antd/es/card/Card';

const Sider = () => {
  const { assets } = useSelector(state => state.crypto_data)

  const siderStyle = {
    overflow: "auto",
    padding: "1rem",
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#13212b',
  };

  return (
    <Layout.Sider width="25%" style={siderStyle}>
      <Flex gap="middle" vertical>
        {assets && assets.map(asset => {
          return (
            <Card key={asset.id} style={{ backgroundColor: "#cae0f4" }}>
              <Statistic
                title={asset.id}
                value={asset.totalAmount}
                precision={2}
                valueStyle={asset.grow ? { color: '#3f8600' } : { color: '#cf1322' }}
                prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                suffix="$" />
              <List
                dataSource={[
                  { title: "Total Profit:", value: asset.totalProfit.toFixed(6), isCurrency: true },
                  { title: "Difference:", value: asset.growPercent.toFixed(6), isCurrency: false },
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