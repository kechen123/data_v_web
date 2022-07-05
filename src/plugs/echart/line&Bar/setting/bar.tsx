import { useState } from 'react'
import { Collapse, Form, Input, InputNumber, Switch, Select } from 'antd'
import update from 'immutability-helper'
import eventBus from '@utils/eventBus'
import InputNumberUnit from '@components/form/inputNumberUnit'
import EchartColor from '@components/echartColor'
import { fontFamilyOption } from '@/utils/formData'
import { getObjByPath } from '@utils/common'
import { BaseBar as BaseBarType } from '../_types'

const { Panel } = Collapse
const { Option } = Select

const Bar = (props: BaseBarType) => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  }
  const layout1 = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  }
  const [bar, setBar] = useState<BaseBarType>(props)

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
          <InputNumberUnit value={bar.baseBar.barGap} unit={['px', '%']} onChange={(value) => change('baseBar.barGap', value)} style={{ width: '100px' }} />
        </Form.Item>
        <Form.Item label="堆叠">
          <Switch checked={bar.baseBar.stack} onChange={(value) => change(`baseBar.stack`, value)} />
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
          {bar.baseBar.bars.map((item, index) => {
            return (
              <Panel header={`柱子` + (index + 1)} key={index + 1} className="panel">
                <Form.Item label="填充颜色">
                  <EchartColor color={item.color} onChange={(value) => change(`baseBar.bars.${index}.color`, value)} />
                </Form.Item>
                <Form.Item label="悬浮颜色">
                  <EchartColor color={item.emphasisColor} onChange={(value) => change(`baseBar.bars.${index}.emphasisColor`, value)} />
                </Form.Item>
                <Form.Item label="宽度占比">
                  <InputNumberUnit value={item.width} unit={['px', '%']} onChange={(value) => change(`baseBar.bars.${index}.width`, value)} />
                </Form.Item>
                <Form.Item label="圆角">
                  <InputNumber value={item.borderRadius} min={0} onChange={(value) => change(`baseBar.bars.${index}.borderRadius`, value)} />
                </Form.Item>
                <Form.Item label="边框粗细">
                  <Select value={item.borderWidth} onChange={(value) => change(`baseBar.bars.${index}.borderWidth`, value)}>
                    <Option value="0">0</Option>
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                    <Option value="4">4</Option>
                    <Option value="5">5</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="边框类型">
                  <Select value={item.borderType} onChange={(value) => change(`baseBar.bars.${index}.borderType`, value)}>
                    <Option value="solid">实线</Option>
                    <Option value="dashed">虚线</Option>
                    <Option value="dotted">点线</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="边框颜色">
                  <EchartColor color={item.borderColor} onChange={(value) => change(`baseBar.bars.${index}.borderColor`, value)} />
                </Form.Item>
                <Form.Item label="单位">
                  <Input
                    value={item.barUnit}
                    onChange={(e) => {
                      const value = e.target.value
                      change(`baseBar.bars.${index}.barUnit`, value)
                    }}
                  />
                </Form.Item>
              </Panel>
            )
          })}

          <Panel header={`文本`} key={bar.baseBar.bars.length + 1} className="panel">
            <Form.Item label="显示数值">
              <Switch checked={bar.label.show} onChange={(value) => change(`label.show`, value)} />
            </Form.Item>
            <Form.Item label="数值位置">
              <Select value={bar.label.position} onChange={(value) => change(`label.position`, value)}>
                <Option value="top">顶部</Option>
                <Option value="inside">居中</Option>
                <Option value="bottom">底部</Option>
              </Select>
            </Form.Item>
            <Form.Item label="字体">
              <Select value={bar.label.fontFamily} onChange={(value) => change(`label.fontFamily`, value)}>
                {fontFamilyOption}
              </Select>
            </Form.Item>
            <Form.Item label="字号">
              <InputNumber value={bar.label.fontSize} onChange={(value) => change(`label.fontSize`, value)} />
            </Form.Item>
            <Form.Item label="字体颜色">
              <EchartColor color={bar.label.color} onChange={(value) => change(`label.color`, value)} />
            </Form.Item>
          </Panel>
        </Collapse>
      </Form>
    </>
  )
}
export default Bar
