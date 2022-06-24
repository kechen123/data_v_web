import React, { useEffect, useState } from 'react'
import { Form, Collapse, Input, Switch, InputNumber, AutoComplete, Select, message } from 'antd'
import update from 'immutability-helper'
import InputNumberUnit from '@components/form/inputNumberUnit'
import EchartColor from '@components/echartColor'
import eventBus from '@utils/eventBus'
import { symboltOption } from '@/utils/formData'
import { getObjByPath } from '@utils/common'
import { Line as LineType } from '../_types'

const { Option } = Select
const { Panel } = Collapse

const Dot = (props: LineType) => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  }
  const [line, setLine] = useState<LineType>(props)
  const change = (key, value) => {
    const obj = getObjByPath(key, value)
    if (obj) {
      setLine(update(line, obj))
      const path = 'line.' + key
      eventBus.emit('changeSettingConfig', path, value)
    }
  }
  return (
    <Form {...layout} initialValues={{ layout: 'Inline' }} labelAlign="right">
      <Form.Item label="显示飞线">
        <Switch checked={line.show} onChange={(value) => change(`show`, value)} />
      </Form.Item>
      <Form.Item label="线颜色">
        <EchartColor color={line.color} onChange={(value) => change(`color`, value)} />
      </Form.Item>
      <Form.Item label="线宽度">
        <InputNumberUnit value={line.width} unit={['px']} onChange={(value) => change('width', value)} />
      </Form.Item>
      <Form.Item label="涟漪特效">
        <Switch checked={line.effect.show} onChange={(value) => change(`effect.show`, value)} />
      </Form.Item>
      <Form.Item label="动画时间">
        <InputNumberUnit value={line.effect.period} unit={['S']} onChange={(value) => change('effect.period', value)} />
      </Form.Item>
      <Form.Item label="动画速度">
        <InputNumberUnit value={line.effect.trailLength} unit={['S']} onChange={(value) => change('effect.trailLength', value)} />
      </Form.Item>
      <Form.Item label="标记图形">
        <Select value={line.effect.symbol} onChange={(value) => change(`effect.symbol`, value)}>
          {symboltOption}
        </Select>
      </Form.Item>
      <Form.Item label="图形颜色">
        <EchartColor color={line.effect.color} onChange={(value) => change(`effect.color`, value)} />
      </Form.Item>
      <Form.Item label="图形尺寸">
        <InputNumberUnit value={line.effect.symbolSize} unit={['px']} onChange={(value) => change('effect.symbolSize', value)} />
      </Form.Item>
      <Form.Item label="线曲度0-1">
        <InputNumberUnit value={line.curveness} stringMode={true} onChange={(value) => change('curveness', value)} />
      </Form.Item>
    </Form>
  )
}

export default Dot
