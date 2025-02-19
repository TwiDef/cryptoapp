import React from 'react';
import { Button, DatePicker, Divider, Flex, Form, InputNumber, Select, Space } from 'antd';
import { useSelector } from 'react-redux';

import './AddAssetForm.css';

const AddAssetForm = () => {
  const { coins_data } = useSelector(state => state.crypto_data)
  const [coin, setCoin] = React.useState(null)
  //

  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const validateMessage = {
    required: "${label} is required",
    types: {
      number: "${label} is not valid number"
    },
    number: {
      range: "${label} should be between ${min} and ${max}"
    }
  }

  if (!coin) {
    return (
      <Select
        style={{ width: "100%" }}
        placeholder="select coin"
        onSelect={(value) => setCoin(coins_data.result.find(coin => coin.id === value))}
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
    )
  }

  return (
    <>
      <Flex gap={8} align="center" >
        <img style={{ width: "30px", display: "block" }} src={coin.icon} alt={coin.id} />
        <h2>{coin.id} ({coin.symbol})</h2>
      </Flex>
      <Divider style={{ borderBlockStart: "1px solid #858585" }} />

      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: "100%",
        }}
        initialValues={{}}
        onFinish={onFinish}
        validateMessage={validateMessage}
      >
        <Form.Item
          label="Amount"
          name="amount"
          rules={[
            {
              required: true,
              type: "number",
              min: 0,
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Date" name="date">
          <DatePicker showTime />
        </Form.Item>

        <Form.Item label="Price" name="price">
          <InputNumber value={1} className="price-label" disabled style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Total" name="total">
          <InputNumber value={1} className="total-label" disabled style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label={null}>
          <Button style={{ background: "#cae0f4", fontWeight: "bold" }} htmlType="submit">
            Add Asset
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddAssetForm;