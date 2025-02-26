import React from 'react';
import { Table } from "antd"
import { useSelector } from 'react-redux';

const CryptoTable = () => {
  const { assets } = useSelector(state => state.crypto_data)

  const data = assets.map((asset) => ({
    key: asset.id,
    name: asset.id,
    price: asset.price,
    total_amount: +(asset.totalAmount).toFixed(6)
  }))

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name > b.name,
      sortDirections: ['descend'],
    },
    {
      title: 'Price, $',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
      defaultSortOrder: 'descend',
    },
    {
      title: 'Total amount',
      dataIndex: 'total_amount',
      key: 'total_amount',
      sorter: (a, b) => a.total_amount - b.total_amount,
      defaultSortOrder: 'descend',
    },
  ];

  return (
    <div style={{ marginTop: "2rem" }}>
      <Table
        pagination={false}
        columns={columns}
        dataSource={data} />
    </div>
  );
};

export default CryptoTable;