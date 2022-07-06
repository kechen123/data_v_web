import { useState } from 'react'
import { Form, Input, InputNumber, Switch, Select } from 'antd'
import update from 'immutability-helper'
import eventBus from '@utils/eventBus'
import EchartColor from '@components/echartColor'
import { fontFamilyOption } from '@/utils/formData'
import { getObjByPath } from '@utils/common'
import { Label as LabelType } from '../_types'

const { Option } = Select

const Label = (props: LabelType) => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  }
  const layout1 = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  }
  const [label, setLabel] = useState<LabelType>(props)

  const change = (key, value) => {
    const obj = getObjByPath(key, value)
    if (obj) {
      setLabel(update(label, obj))
      const path = 'label.' + key
      eventBus.emit('changeSettingConfig', path, value)
    }
  }

  return (
    <>
      <Form {...layout} initialValues={{ layout: 'Inline' }} labelAlign="right" className="bar">
        <Form.Item label="显示标签">
          <Switch checked={label.show} onChange={(value) => change(`show`, value)} />
        </Form.Item>
        <Form.Item label="数值位置">
          <Select value={label.position} onChange={(value) => change(`position`, value)}>
            <Option value="outside">外侧</Option>
            <Option value="inside">内部</Option>
            <Option value="center">中心位置</Option>
          </Select>
        </Form.Item>
        <Form.Item label="单位">
          <Input
            value={label.unit}
            onChange={(e) => {
              const value = e.target.value
              change(`unit`, value)
            }}
          />
        </Form.Item>
        <Form.Item label="字体颜色">
          <EchartColor color={label.color} onChange={(value) => change(`color`, value)} />
        </Form.Item>
        <Form.Item label="字体">
          <Select value={label.fontFamily} onChange={(value) => change(`fontFamily`, value)}>
            {fontFamilyOption}
          </Select>
        </Form.Item>
        <Form.Item label="字号">
          <InputNumber value={label.fontSize} onChange={(value) => change(`fontSize`, value)} />
        </Form.Item>
        <Form.Item label="行高">
          <InputNumber value={label.lineHeight} onChange={(value) => change(`lineHeight`, value)} />
        </Form.Item>
      </Form>
    </>
  )
}
export default Label
