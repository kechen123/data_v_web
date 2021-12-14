import React from 'react'
import { Select } from 'antd'

const { Option } = Select
const Index = () => {
  return (
    <Select defaultValue="lucy">
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
  )
}

export default Index
