import { useState } from 'react'
import { Form, Input, InputNumber, Switch, Select } from 'antd'
import update from 'immutability-helper'
import eventBus from '@utils/eventBus'
import EchartColor from '@components/echartColor'
import { Tooltip as TooltipType } from '../_types'
import { borderTypeOption, fontFamilyOption } from '@/utils/formData'
import { getObjByPath } from '@utils/common'

const Tooltip = (props: TooltipType) => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  }
  const [tooltip, setTooltip] = useState<TooltipType>(props)

  const change = (key, value) => {
    setTooltip({ ...tooltip, [key]: value })
    const path = 'tooltip.' + key
    eventBus.emit('changeSettingConfig', path, value)
  }
  return (
    <Form {...layout} initialValues={{ layout: 'Inline' }} labelAlign="right">
      <Form.Item label="显示">
        <Switch checked={tooltip.show} onChange={(value) => change(`show`, value)} />
      </Form.Item>
      <Form.Item label="圆角">
        <InputNumber value={tooltip.borderRadius} onChange={(value) => change(`borderRadius`, value)} />
      </Form.Item>
      <Form.Item label="背景颜色">
        <EchartColor color={tooltip.backgroundColor} onChange={(value) => change(`backgroundColor`, value)} />
      </Form.Item>
      <Form.Item label="边框类型">
        <Select value={tooltip.borderType} onChange={(value) => change('borderType', value)}>
          {borderTypeOption}
        </Select>
      </Form.Item>
      <Form.Item label="边框宽度">
        <InputNumber value={tooltip.borderWidth} onChange={(value) => change(`borderWidth`, value)} />
      </Form.Item>
      <Form.Item label="边框颜色">
        <EchartColor color={tooltip.borderColor} onChange={(value) => change(`borderColor`, value)} />
      </Form.Item>
      <Form.Item label="字体">
        <Select value={tooltip.fontFamily} onChange={(value) => change(`fontFamily`, value)}>
          {fontFamilyOption}
        </Select>
      </Form.Item>
      <Form.Item label="字号">
        <InputNumber value={tooltip.fontSize} onChange={(value) => change(`fontSize`, value)} />
      </Form.Item>
      <Form.Item label="字体颜色">
        <EchartColor color={tooltip.fontColor} onChange={(value) => change(`fontColor`, value)} />
      </Form.Item>
    </Form>
  )
}

export default Tooltip
