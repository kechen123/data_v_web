import { useState } from 'react'
import { Collapse, Form, Input, InputNumber, Select } from 'antd'
import update from 'immutability-helper'
import eventBus from '@utils/eventBus'
import InputNumberUnit from '@components/form/inputNumberUnit'
import { getObjByPath } from '@utils/common'
import { Bar as BarType, Options as OptionsType, Option as OptionType } from '../../_types'
import './index.less'

const { Panel } = Collapse
const { Option } = Select

const Bar = (props: BarType) => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  }
  const layout1 = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  }
  const [bar, setBar] = useState<BarType>(props)

  const selectAfter = (data: OptionsType) => {
    return (
      <Select defaultValue={data.default ? data.default : data.option[0].value} style={{ width: 50 }}>
        {data.option.map((item: OptionType) => {
          return (
            <Option key={item.value} value={item.value}>
              {item.label}
            </Option>
          )
        })}
      </Select>
    )
  }

  const gapSelect: OptionsType = {
    option: [
      {
        label: 'px',
        value: 'px',
      },
      {
        label: '%',
        value: '%',
      },
    ],
    default: 'px',
  }

  const change = (key, value) => {
    const obj = getObjByPath(key, value)
    if (obj) {
      setBar(update(bar, obj))
      const path = 'bar.' + key
      eventBus.emit('changeSettingConfig', path, value)
    }
  }

  return (
    <>
      <Form {...layout} initialValues={{ layout: 'Inline' }} labelAlign="right" className="bar">
        <Form.Item label="柱子占比">
          <InputNumberUnit value={bar.barGap} unit={['px', '%']} onChange={(value) => change('barGap', value)} style={{ width: '100px' }} />
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
          className="barCollapse"
        >
          {bar.bars.map((item, index) => {
            return (
              <Panel header={`柱子` + (index + 1)} key={index + 1} className="barPanel">
                <Form.Item label="填充颜色">
                  <InputNumber value={item.color} onChange={(value) => {}} />
                </Form.Item>
                <Form.Item label="悬浮颜色">
                  <InputNumber value={item.color} onChange={(value) => {}} />
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
                  <InputNumber value={item.borderColor} onChange={(value) => {}} />
                </Form.Item>
                <Form.Item label="内容位置">
                  <Select value={item.barPosition} onChange={(value) => change(`bars.${index}.barPosition`, value)}>
                    <Option value="top">顶部</Option>
                    <Option value="inside">居中</Option>
                    <Option value="bottom">底部</Option>
                  </Select>
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
        </Collapse>
      </Form>
    </>
  )
}
export default Bar
