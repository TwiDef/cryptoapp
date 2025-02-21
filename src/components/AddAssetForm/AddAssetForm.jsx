import React from 'react';
import { Button, DatePicker, Divider, Flex, Form, InputNumber, Result, Select, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addNewAsset } from '../../redux/slices/cryptoDataSlice';

import './AddAssetForm.css';

const AddAssetForm = ({ setIsDrawerOpen }) => {
  const dispatch = useDispatch()
  const { coins_data } = useSelector(state => state.crypto_data)
  const [form] = Form.useForm()
  const [coin, setCoin] = React.useState(null)
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const assetRef = React.useRef()

  const onFinish = (values) => {
    const newAsset = {
      id: coin.id,
      amount: values.amount,
      price: values.price,
      date: Date.parse(values.date?.$d ?? new Date())
    }

    assetRef.current = newAsset
    dispatch(addNewAsset(newAsset))
    setIsSubmitted(true)
  }

  const onChangeAmount = (value) => {
    const price = form.getFieldValue("price")
    form.setFieldsValue({
      total: +(value * price).toFixed(4)
    })
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

  if (isSubmitted) {
    return (
      <Result
        status="success"
        title="New asset added"
        subTitle={`Added ${assetRef.current.amount} of ${coin.name} by price ${assetRef.current.price}$`}
        extra={
          <Button
            onClick={() => setIsDrawerOpen(false)}
            style={{ background: "#cae0f4", fontWeight: "bold", color: "#000" }}
            type="primary"
            key="close">
            Close
          </Button>
        }
      />
    )
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

  if (!isSubmitted) {
    return (
      <>
        <Flex gap={8} align="center" >
          <img style={{ width: "30px", display: "block" }} src={coin.icon} alt={coin.id} />
          <h2>{coin.id} ({coin.symbol})</h2>
        </Flex>
        <Divider style={{ borderBlockStart: "1px solid #858585" }} />

        <Form
          form={form}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: "100%",
          }}
          initialValues={{
            price: +(coin.price.toFixed(8)),
          }}
          onFinish={onFinish}
          validatemessage={validateMessage}
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
            <InputNumber
              onChange={onChangeAmount}
              placeholder="Enter coin amout"
              style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="Date" name="date">
            <DatePicker showTime />
          </Form.Item>

          <Form.Item label="Price" name="price">
            <InputNumber className="price-label" disabled style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="Total" name="total">
            <InputNumber className="total-label" disabled style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label={null}>
            <Button style={{ background: "#cae0f4", fontWeight: "bold" }} htmlType="submit">
              Add Asset
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
};

export default AddAssetForm;