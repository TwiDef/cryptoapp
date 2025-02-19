import React from 'react';
import { Button, Layout, Select, Space, Modal, Drawer } from 'antd';
import { useSelector } from 'react-redux';
import CoinInfoModal from '../CoinInfoModal';
import AddAssetForm from '../AddAssetForm';

import './Header.css';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
  const [coin, setCoin] = React.useState("")
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

  const handleSelect = (value) => {
    setCoin(coins_data.result.find((coin) => coin.id === value))
    setIsModalOpen(true)
  }

  return (
    <Layout.Header style={headerStyle}>
      <Select
        style={{ width: "20%" }}
        placeholder="select coin"
        onSelect={handleSelect}
        options={coins_data?.result?.map(coin => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon
        }))}
        optionRender={(option) => (
          <Space style={{ display: "flex", alignItems: "center" }}>
            <img style={{ width: "26px" }} src={option.data.icon} alt={option.data.label} />
            {option.label}
          </Space>
        )}
      />

      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}>
        <CoinInfoModal coin={coin} />
      </Modal>

      <Button
        onClick={() => setIsDrawerOpen(prev => !prev)}
        style={{ backgroundColor: "#cae0f4", color: "#000", fontWeight: "bold" }} type="primary">
        Add Asset
      </Button>

      <Drawer
        onClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
        destroyOnClose
        placement="left"
        title="Add Asset"
        width={600}
        style={{ background: "#344c62", color: "#ffffff" }}>

        <AddAssetForm />
      </Drawer>

    </Layout.Header>
  );
};

export default Header;