import { useState } from 'react'
import { Form, Input, InputNumber, Switch, Select } from 'antd'
import update from 'immutability-helper'
import eventBus from '@utils/eventBus'
import EchartColor from '@components/echartColor'
import { Legend as LegendType } from '../_types'
import { legendOption, fontFamilyOption } from '@/utils/formData'
import { getObjByPath } from '@utils/common'

const { Option } = Select

const Legend = (props: LegendType) => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  }
  const [legend, setLegend] = useState<LegendType>(props)

  const change = (key, value) => {
    setLegend({ ...legend, [key]: value })
    const path = 'legend.' + key
    eventBus.emit('changeSettingConfig', path, value)
  }
  return (
    <Form {...layout} initialValues={{ layout: 'Inline' }} labelAlign="right">
      <Form.Item label="显示">
        <Switch checked={legend.show} onChange={(value) => change(`show`, value)} />
      </Form.Item>
      <Form.Item label="位置">
        <Select value={legend.position} onChange={(value) => change('position', value)}>
          {legendOption}
        </Select>
      </Form.Item>
      <Form.Item label="字体">
        <Select value={legend.fontFamily} onChange={(value) => change(`fontFamily`, value)}>
          {fontFamilyOption}
        </Select>
      </Form.Item>
      <Form.Item label="字号">
        <InputNumber value={legend.fontSize} onChange={(value) => change(`fontSize`, value)} />
      </Form.Item>
      <Form.Item label="字体颜色">
        <EchartColor color={legend.fontColor} onChange={(value) => change(`fontColor`, value)} />
      </Form.Item>
    </Form>
  )
}

export default Legend
