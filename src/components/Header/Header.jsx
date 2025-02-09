import React from 'react';
import { Button, Layout, Select, Space } from 'antd';
import { useSelector } from 'react-redux';

const Header = () => {
  const { coins_data } = useSelector(state => state.crypto_data)

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    height: 60,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#344c62',
  }

  return (
    <Layout.Header style={headerStyle}>
      <Select
        style={{ width: "20%" }}
        placeholder="select coin"
        options={coins_data?.result?.map(coin => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon
        }))}
        optionRender={(option) => (
          <Space style={{ display: "flex", alignItems: "center" }}>
            <img style={{ width: "30px" }} src={option.data.icon} alt={option.data.label} />
            {option.label}
          </Space>
        )}
      />
      <Button
        style={{ backgroundColor: "#cae0f4", color: "#000", fontWeight: "bold" }} type="primary">
        Primary Button
      </Button>
    </Layout.Header>
  );
};

export default Header;