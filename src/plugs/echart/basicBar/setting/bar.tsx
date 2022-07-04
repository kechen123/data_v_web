import { useState } from 'react'
import { Collapse, Form, Input, InputNumber, Switch, Select } from 'antd'
import update from 'immutability-helper'
import eventBus from '@utils/eventBus'
import InputNumberUnit from '@components/form/inputNumberUnit'
import EchartColor from '@components/echartColor'
import { fontFamilyOption } from '@/utils/formData'
import { getObjByPath } from '@utils/common'
import { Bar as BarType, NumberText, Options as OptionsType, Option as OptionType } from '../_types'

const { Panel } = Collapse
const { Option } = Select

interface Props {
  bar: BarType
  number: NumberText
}

const Bar = (props: Props) => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  }
  const layout1 = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  }
  const [bar, setBar] = useState<BarType>(props.bar)
  const [number, setNumber] = useState<NumberText>(props.number)

  const change = (key, value) => {
    const obj = getObjByPath(key, value)
    if (obj) {
      setBar(update(bar, obj))
      const path = 'bar.' + key
      eventBus.emit('changeSettingConfig', path, value)
    }
  }

  const changeNum = (key, value) => {
    const obj = getObjByPath(key, value)
    if (obj) {
      setNumber(update(number, obj))
      const path = 'numberText.' + key
      eventBus.emit('changeSettingConfig', path, value)
    }
  }

  return (
    <>
      <Form {...layout} initialValues={{ layout: 'Inline' }} labelAlign="right" className="bar">
        <Form.Item label="柱子占比">
          <InputNumberUnit value={bar.barGap} unit={['px', '%']} onChange={(value) => change('barGap', value)} style={{ width: '100px' }} />
        </Form.Item>
        <Form.Item label="柱子方向">
          <Select value={bar.direction} onChange={(value) => change(`direction`, value)}>
            <Option value="horizontally">水平</Option>
            <Option value="vertical">垂直</Option>
          </Select>
        </Form.Item>
        <Form.Item label="堆叠">
          <Switch checked={bar.stack} onChange={(value) => change(`stack`, value)} />
        </Form.Item>
      </Form>
      <Form {...layout1} initialValues={{ layout: 'Inline' }} labelAlign="right">
        <Collapse
          bordered={false}
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => (
            <span>
              <i className="icon iconfont icon-shouqijiantouxiao " style={{ transform: `rotate(${isActive ? 180 : 90}deg)` }} />
            </span>
          )}
          className="collapse-1-1"
        >
          {bar.bars.map((item, index) => {
            return (
              <Panel header={`柱子` + (index + 1)} key={index + 1} className="panel">
                <Form.Item label="填充颜色">
                  <EchartColor color={item.color} onChange={(value) => change(`bars.${index}.color`, value)} />
                </Form.Item>
                <Form.Item label="悬浮颜色">
                  <EchartColor color={item.emphasisColor} onChange={(value) => change(`bars.${index}.emphasisColor`, value)} />
                </Form.Item>
                <Form.Item label="宽度占比">
                  <InputNumberUnit value={item.width} unit={['px', '%']} onChange={(value) => change(`bars.${index}.width`, value)} />
                </Form.Item>
                <Form.Item label="圆角">
                  <InputNumber value={item.borderRadius} min={0} onChange={(value) => change(`bars.${index}.borderRadius`, value)} />
                </Form.Item>
                <Form.Item label="边框粗细">
                  <Select value={item.borderWidth} onChange={(value) => change(`bars.${index}.borderWidth`, value)}>
                    <Option value="0">0</Option>
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                    <Option value="4">4</Option>
                    <Option value="5">5</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="边框类型">
                  <Select value={item.borderType} onChange={(value) => change(`bars.${index}.borderType`, value)}>
                    <Option value="solid">实线</Option>
                    <Option value="dashed">虚线</Option>
                    <Option value="dotted">点线</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="边框颜色">
                  <EchartColor color={item.borderColor} onChange={(value) => change(`bars.${index}.borderColor`, value)} />
                </Form.Item>
                <Form.Item label="单位">
                  <Input
                    value={item.barUnit}
                    onChange={(e) => {
                      const value = e.target.value
                      change(`bars.${index}.barUnit`, value)
                    }}
                  />
                </Form.Item>
              </Panel>
            )
          })}

          <Panel header={`文本`} key={bar.bars.length + 1} className="panel">
            <Form.Item label="显示数值">
              <Switch checked={number.show} onChange={(value) => changeNum(`show`, value)} />
            </Form.Item>
            <Form.Item label="数值位置">
              <Select value={number.position} onChange={(value) => changeNum(`position`, value)}>
                <Option value="top">顶部</Option>
                <Option value="inside">居中</Option>
                <Option value="bottom">底部</Option>
              </Select>
            </Form.Item>
            <Form.Item label="字体">
              <Select value={number.fontFamily} onChange={(value) => changeNum(`fontFamily`, value)}>
                {fontFamilyOption}
              </Select>
            </Form.Item>
            <Form.Item label="字号">
              <InputNumber value={number.fontSize} onChange={(value) => changeNum(`fontSize`, value)} />
            </Form.Item>
            <Form.Item label="字体颜色">
              <EchartColor color={number.color} onChange={(value) => changeNum(`color`, value)} />
            </Form.Item>
          </Panel>
        </Collapse>
      </Form>
    </>
  )
}
export default Bar
