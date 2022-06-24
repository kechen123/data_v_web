import React, { useEffect, useState } from 'react'
import { Form, Collapse, Input, Switch, InputNumber, AutoComplete, Select, message } from 'antd'
import update from 'immutability-helper'
import InputNumberUnit from '@components/form/inputNumberUnit'
import EchartColor from '@components/echartColor'
import eventBus from '@utils/eventBus'
import { symboltOption } from '@/utils/formData'
import { getObjByPath } from '@utils/common'
import { Dot as DotType } from '../_types'

const { Option } = Select
const { Panel } = Collapse

const Dot = (props: DotType) => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  }
  const [dot, setDot] = useState<DotType>(props)
  const change = (key, value) => {
    const obj = getObjByPath(key, value)
    if (obj) {
      setDot(update(dot, obj))
      const path = 'dot.' + key
      eventBus.emit('changeSettingConfig', path, value)
    }
  }
  return (
    <Form {...layout} initialValues={{ layout: 'Inline' }} labelAlign="right">
      <Form.Item label="显示标记">
        <Switch checked={dot.show} onChange={(value) => change(`show`, value)} />
      </Form.Item>
      <Form.Item label="涟漪特效">
        <Switch checked={dot.scatter} onChange={(value) => change(`scatter`, value)} />
      </Form.Item>
      <Form.Item label="标记图形">
        <Select value={dot.symbol} onChange={(value) => change(`symbol`, value)}>
          {symboltOption}
        </Select>
      </Form.Item>
      <Form.Item label="图形尺寸">
        <InputNumberUnit value={dot.symbolSize} unit={['px']} onChange={(value) => change('symbolSize', value)} />
      </Form.Item>
      <Form.Item label="颜色">
        <EchartColor color={dot.color} onChange={(value) => change(`color`, value)} />
      </Form.Item>
      <Form.Item label="特效周期">
        <InputNumberUnit value={dot.rippleEffect.period} unit={['S']} onChange={(value) => change('rippleEffect.period', value)} />
      </Form.Item>
    </Form>
  )
}

export default Dot
