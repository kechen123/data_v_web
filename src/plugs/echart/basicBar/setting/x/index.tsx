import { useState } from 'react'
import { Form, Input, InputNumber, Switch, Select } from 'antd'
import update from 'immutability-helper'
import eventBus from '@utils/eventBus'
import EchartColor from '@components/echartColor'
import { X as XType } from '../../_types'
import { borderTypeOption, fontFamilyOption } from '@/utils/formData'
import { getObjByPath } from '@utils/common'

const { Option } = Select

const X = (props: XType) => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  }
  const [x, setX] = useState<XType>(props)

  const change = (key, value) => {
    setX({ ...x, [key]: value })
    const path = 'x.' + key
    eventBus.emit('changeSettingConfig', path, value)
  }
  return (
    <Form {...layout} initialValues={{ layout: 'Inline' }} labelAlign="right">
      <Form.Item label="单位">
        <Input
          value={x.unit}
          onChange={(e) => {
            const value = e.target.value
            change(`unit`, value)
          }}
        />
      </Form.Item>
      <Form.Item label="坐标轴颜色">
        <EchartColor color={x.color} onChange={(value) => change(`color`, value)} />
      </Form.Item>
      <Form.Item label="网格线">
        <Switch checked={x.splitLineShow} onChange={(value) => change(`splitLineShow`, value)} />
      </Form.Item>
      <Form.Item label="网格线类型">
        <Select value={x.splitLineType} onChange={(value) => change(`splitLineType`, value)}>
          {borderTypeOption}
        </Select>
      </Form.Item>
      <Form.Item label="网格线颜色">
        <EchartColor color={x.splitLineColor} onChange={(value) => change(`splitLineColor`, value)} />
      </Form.Item>
      <Form.Item label="标签间隔">
        <InputNumber value={x.interval} onChange={(value) => change(`interval`, value)} />
      </Form.Item>
      <Form.Item label="标签位置">
        <InputNumber value={x.margin} onChange={(value) => change(`margin`, value)} />
      </Form.Item>
      <Form.Item label="字体">
        <Select onChange={(value) => change(`fontFamily`, value)}>{fontFamilyOption}</Select>
      </Form.Item>
      <Form.Item label="字号">
        <InputNumber value={x.fontSize} onChange={(value) => change(`fontSize`, value)} />
      </Form.Item>
      <Form.Item label="字体颜色">
        <EchartColor color={x.fontColor} onChange={(value) => change(`fontColor`, value)} />
      </Form.Item>
      <Form.Item label="缩略轴">
        <Switch checked={x.zoom} onChange={(value) => change(`zoom`, value)} />
      </Form.Item>
    </Form>
  )
}

export default X
