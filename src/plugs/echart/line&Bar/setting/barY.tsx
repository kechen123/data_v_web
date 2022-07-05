import { useState } from 'react'
import { Collapse, Form, Row, Input, InputNumber, Switch, Select } from 'antd'
import update from 'immutability-helper'
import eventBus from '@utils/eventBus'
import EchartColor from '@components/echartColor'
import { Y as YType } from '../_types'
import { borderTypeOption, fontFamilyOption } from '@/utils/formData'
import { getObjByPath } from '@utils/common'

const { Option } = Select

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
}

const BarY = (props: YType) => {
  const [y, setY] = useState<YType>(props)
  const change = (key, value) => {
    const obj = getObjByPath(key, value)
    if (obj) {
      setY(update(y, obj))
      const path = 'barY.' + key
      eventBus.emit('changeSettingConfig', path, value)
    }
  }
  return (
    <Form {...layout} initialValues={{ layout: 'Inline' }} labelAlign="right">
      <Form.Item label="位置">
        <Select value={y.position} onChange={(value) => change('position', value)}>
          <Option value="left">左</Option>
          <Option value="right">右</Option>
        </Select>
      </Form.Item>
      <Form.Item label="轴线距离">
        <InputNumber value={y.offset} onChange={(value) => change('offset', value)} />
      </Form.Item>
      <Form.Item label="最小值">
        <InputNumber value={y.min} onChange={(value) => change('min', value)} />
      </Form.Item>
      <Form.Item label="最大值">
        <InputNumber value={y.max} onChange={(value) => change('max', value)} />
      </Form.Item>
      <Form.Item label="单位">
        <Input
          value={y.unit}
          onChange={(e) => {
            const value = e.target.value
            change(`unit`, value)
          }}
        />
      </Form.Item>
      <Form.Item label="字体">
        <Select value={y.fontFamily} onChange={(value) => change('fontFamily', value)}>
          {fontFamilyOption}
        </Select>
      </Form.Item>
      <Form.Item label="字号">
        <InputNumber value={y.fontSize} onChange={(value) => change('fontSize', value)} />
      </Form.Item>
      <Form.Item label="字体颜色">
        <EchartColor color={y.fontColor} onChange={(value) => change('fontColor', value)} />
      </Form.Item>
      <Form.Item label="坐标轴颜色">
        <EchartColor color={y.color} onChange={(value) => change('color', value)} />
      </Form.Item>
      <Form.Item label="网格线">
        <Switch checked={y.splitLineShow} onChange={(value) => change('splitLineShow', value)} />
      </Form.Item>
      <Form.Item label="线类型">
        <Select value={y.splitLineType} onChange={(value) => change('splitLineType', value)}>
          {borderTypeOption}
        </Select>
      </Form.Item>
      <Form.Item label="线颜色">
        <EchartColor color={y.splitLineColor} onChange={(value) => change('splitLineColor', value)} />
      </Form.Item>
    </Form>
  )
}

export default BarY
