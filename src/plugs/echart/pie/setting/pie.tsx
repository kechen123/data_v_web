import { useState } from 'react'
import { Collapse, Form, Input, InputNumber, Switch, Select } from 'antd'
import update from 'immutability-helper'
import eventBus from '@utils/eventBus'
import InputNumberUnit from '@components/form/inputNumberUnit'
import EchartColor from '@components/echartColor'
import { fontFamilyOption, symboltOption } from '@/utils/formData'
import { getObjByPath } from '@utils/common'
import { Pie as PieType } from '../_types'

const { Panel } = Collapse
const { Option } = Select

const Pie = (props: PieType) => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  }
  const layout1 = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  }
  const [pie, setPie] = useState<PieType>(props)

  const change = (key, value) => {
    const obj = getObjByPath(key, value)
    if (obj) {
      setPie(update(pie, obj))
      const path = key
      eventBus.emit('changeSettingConfig', path, value)
    }
  }

  return (
    <>
      <Form {...layout} initialValues={{ layout: 'Inline' }} labelAlign="right" className="bar">
        <Form.Item label="颜色集合">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8,20px)' }}>
            {pie.colors.map((item, index) => {
              return <EchartColor key={index} color={item} onChange={(value) => change(`colorArr.${index}`, value)} />
            })}
          </div>
        </Form.Item>
        <Form.Item label="选中模式">
          <Select value={pie.selectedMode} onChange={(value) => change(`selectedMode`, value)}>
            <Option value="none">禁止选中</Option>
            <Option value="single">单选</Option>
            <Option value="multiple">多选</Option>
            <Option value="series">整个系列</Option>
          </Select>
        </Form.Item>
        <Form.Item label="偏移距离">
          <InputNumberUnit value={pie.selectedOffset} unit={['px']} onChange={(value) => change('selectedOffset', value)} />
        </Form.Item>
        <Form.Item label="玫瑰图">
          <Switch checked={pie.roseType} onChange={(value) => change(`roseType`, value)} />
        </Form.Item>
        <Form.Item label="内外半径" style={{ marginBottom: 0 }}>
          <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 10px)', marginRight: '6px' }}>
            <InputNumber addonBefore="内" value={pie.insideRadius} placeholder="内半径" onChange={(value) => change('insideRadius', value)} />
          </Form.Item>
          <span style={{ display: 'inline-block', width: '8px', lineHeight: '32px', textAlign: 'center' }}>*</span>
          <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 10px)', marginLeft: '6px' }}>
            <InputNumber addonBefore="外" value={pie.outsideRadius} placeholder="外半径" onChange={(value) => change('outsideRadius', value)} />
          </Form.Item>
        </Form.Item>
        <Form.Item label="边框圆角">
          <InputNumber value={pie.borderRadius} onChange={(value) => change('borderRadius', value)} />
        </Form.Item>
        <Form.Item label="边框颜色">
          <EchartColor color={pie.borderColor} onChange={(value) => change(`borderColor`, value)} />
        </Form.Item>
        <Form.Item label="边框宽度">
          <InputNumber value={pie.borderWidth} onChange={(value) => change('borderWidth', value)} />
        </Form.Item>
      </Form>
    </>
  )
}
export default Pie
