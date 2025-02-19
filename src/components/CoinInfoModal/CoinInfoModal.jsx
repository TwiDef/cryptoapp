import React from 'react';
import { Divider, Flex, Tag, Typography } from 'antd';

const CoinInfoModal = ({ coin }) => {

  return (
    <>

      <Flex gap={8} align="center" >
        <img style={{ width: "30px", display: "block" }} src={coin.icon} alt={coin.id} />
        <h2>{coin.id} ({coin.symbol})</h2>
      </Flex>

      <Divider />

      <Typography.Paragraph>
        <Typography.Text style={{ marginRight: "10px" }} strong>1 hour:</Typography.Text>
        <Tag color={coin.priceChange1h > 0 ? "green" : "red"}>{coin.priceChange1h}%</Tag>

        <Typography.Text style={{ marginRight: "10px" }} strong>1 day:</Typography.Text>
        <Tag color={coin.priceChange1d > 0 ? "green" : "red"}>{coin.priceChange1d}%</Tag>

        <Typography.Text style={{ marginRight: "10px" }} strong>1 week:</Typography.Text>
        <Tag color={coin.priceChange1w > 0 ? "green" : "red"}>{coin.priceChange1w}%</Tag>
      </Typography.Paragraph>


      <Flex vertical="true">
        <Typography.Paragraph>
          <Typography.Text strong>Price: </Typography.Text>
          {(coin.price).toFixed(2)}$
        </Typography.Paragraph>

        <Typography.Paragraph>
          <Typography.Text strong>Price BTC: </Typography.Text>
          {(coin.priceBtc).toFixed(6)}
        </Typography.Paragraph>

        <Typography.Paragraph>
          <Typography.Text strong>Market Capitalization: </Typography.Text>
          {Math.round(coin.marketCap)}$
        </Typography.Paragraph>
      </Flex>


    </>
  );
};

export default CoinInfoModal;