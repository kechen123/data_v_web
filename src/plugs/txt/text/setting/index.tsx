import React, { useState } from 'react'
import { Collapse, Form, InputNumber, Select, Switch } from 'antd'
import eventBus from '@utils/eventBus'
import EchartColor from '@components/echartColor'
import Color from '@components/color'
import { borderTypeOption, fontFamilyOption, fontWeightOption } from '@/utils/formData'
import { Text as TextType } from '../_types'

import './index.less'

const { Panel } = Collapse
const { Option } = Select

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
}

const Index = (props: TextType) => {
  const [text, setText] = useState<TextType>(props)
  const [active, setActive] = useState<string | string[]>([''])
  const change = (key, value) => {
    setText({ ...text, [key]: value })
    const path = key
    eventBus.emit('changeSettingConfig', path, value)
  }
  return (
    <Collapse
      bordered={false}
      activeKey={active}
      expandIcon={({ isActive }) => (
        <span>
          <i className="icon iconfont icon-shouqijiantouxiao " style={{ transform: `rotate(${isActive ? 180 : 90}deg)` }} />
        </span>
      )}
      onChange={(key) => setActive(key)}
      className="basicBar"
    >
      <Panel header="文本样式" key="1" className="panel">
        <Form {...layout} initialValues={{ layout: 'Inline' }} labelAlign="right">
          <Form.Item label="显示行数">
            <InputNumber value={text.lineClamp} onChange={(value) => change(`lineClamp`, value)} />
          </Form.Item>
          <Form.Item label="字体">
            <Select value={text.fontFamily} onChange={(value) => change(`fontFamily`, value)}>
              {fontFamilyOption}
            </Select>
          </Form.Item>
          <Form.Item label="字号">
            <InputNumber value={text.fontSize} onChange={(value) => change(`fontSize`, value)} />
          </Form.Item>
          <Form.Item label="字体颜色">
            <EchartColor color={text.color} onChange={(value) => change(`color`, value)} />
          </Form.Item>
          <Form.Item label="文字粗细">
            <Select value={text.fontWeight} onChange={(value) => change(`fontWeight`, value)}>
              {fontWeightOption}
            </Select>
          </Form.Item>
          <Form.Item label="间距(左右)">
            <InputNumber value={text.letterSpacing} onChange={(value) => change(`letterSpacing`, value)} />
          </Form.Item>
          <Form.Item label="间距(上下)">
            <InputNumber value={text.lineHeight} onChange={(value) => change(`lineHeight`, value)} />
          </Form.Item>
          <Form.Item label="对齐(水平)">
            <Select value={text.textAlign} onChange={(value) => change(`textAlign`, value)}>
              <Option value="left">左对齐</Option>
              <Option value="center">居中</Option>
              <Option value="right">右对齐</Option>
            </Select>
          </Form.Item>
          <Form.Item label="对齐(垂直)">
            <Select value={text.textBaseline} onChange={(value) => change(`textBaseline`, value)}>
              <Option value="top">上对齐</Option>
              <Option value="middle">居中</Option>
              <Option value="bottom">下对齐</Option>
            </Select>
          </Form.Item>
          <Form.Item label="显示阴影">
            <Switch checked={text.showShadow} onChange={(value) => change(`showShadow`, value)} />
          </Form.Item>
          <Form.Item label="阴影颜色">
            <EchartColor color={text.shadowColor} onChange={(value) => change(`shadowColor`, value)} />
          </Form.Item>
          <Form.Item label="阴影方向(水平)">
            <InputNumber value={text.shadowOffsetX} onChange={(value) => change(`shadowOffsetX`, value)} />
          </Form.Item>
          <Form.Item label="阴影方向(垂直)">
            <InputNumber value={text.shadowOffsetY} onChange={(value) => change(`shadowOffsetY`, value)} />
          </Form.Item>
          <Form.Item label="阴影模糊度">
            <InputNumber value={text.shadowBlur} onChange={(value) => change(`shadowBlur`, value)} />
          </Form.Item>
          <Form.Item label="显示边框">
            <Switch checked={text.showBorder} onChange={(value) => change(`showBorder`, value)} />
          </Form.Item>
          <Form.Item label="边框粗细">
            <InputNumber value={text.borderWith} onChange={(value) => change(`borderWith`, value)} />
          </Form.Item>
          <Form.Item label="边框颜色">
            <EchartColor color={text.borderColor} onChange={(value) => change(`borderColor`, value)} />
          </Form.Item>
        </Form>
      </Panel>
    </Collapse>
  )
}

export default Index
