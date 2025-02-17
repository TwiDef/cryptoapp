import React from 'react';
import { Space } from 'antd';

const CoinInfoModal = ({ coin }) => {

  return (
    <Space style={{ display: "flex", alignItems: "center" }}>
      <img style={{ width: "30px", display: "block" }} src={coin.icon} alt={coin.id} />
      <h2>{coin.id}</h2>
    </Space>
  );
};

export default CoinInfoModal;