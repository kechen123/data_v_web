import { useState } from 'react'
import { Form, Row, InputNumber, Switch, Select } from 'antd'
import { X as XType } from '../../_types'
import { borderType, fontFamily } from '@utils/formData'

const { Option } = Select

const X = (props: XType) => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  }
  const [x, setX] = useState<XType>(props)

  const borderTypeOption = borderType.options.map((item) => {
    return (
      <Option key={item.value} value={item.value}>
        {item.label}
      </Option>
    )
  })

  const fontFamilyOption = fontFamily.options.map((item) => {
    return (
      <Option key={item.value} value={item.value}>
        {item.label}
      </Option>
    )
  })
  return (
    <Form {...layout} initialValues={{ layout: 'Inline' }} labelAlign="right">
      <Form.Item label="单位">
        <InputNumber value={x.unit} onChange={(value) => {}} />
      </Form.Item>
      <Form.Item label="坐标轴颜色">
        <InputNumber value={x.color} onChange={(value) => {}} />
      </Form.Item>
      <Form.Item label="网格线">
        <Switch checked={x.splitLineShow} onChange={(value) => {}} />
      </Form.Item>
      <Form.Item label="网格线类型">
        <Select onChange={(value) => {}}>{borderTypeOption}</Select>
      </Form.Item>
      <Form.Item label="网格线颜色">
        <InputNumber value={x.splitLineColor} onChange={(value) => {}} />
      </Form.Item>
      <Form.Item label="标签间隔">
        <InputNumber value={x.interval} onChange={(value) => {}} />
      </Form.Item>
      <Form.Item label="标签位置">
        <InputNumber value={x.margin} onChange={(value) => {}} />
      </Form.Item>
      <Form.Item label="字体">
        <Select onChange={(value) => {}}>{fontFamilyOption}</Select>
      </Form.Item>
      <Form.Item label="字号">
        <InputNumber value={x.fontSize} onChange={(value) => {}} />
      </Form.Item>
      <Form.Item label="字体颜色">
        <InputNumber value={x.margin} onChange={(value) => {}} />
      </Form.Item>
      <Form.Item label="缩略轴">
        <Switch checked={x.splitLineShow} onChange={(value) => {}} />
      </Form.Item>
    </Form>
  )
}

export default X
