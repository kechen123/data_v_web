import { useState } from 'react'
import { Collapse, Form, Input, InputNumber, Switch, Select } from 'antd'
import update from 'immutability-helper'
import eventBus from '@utils/eventBus'
import InputNumberUnit from '@components/form/inputNumberUnit'
import EchartColor from '@components/echartColor'
import { fontFamilyOption, symboltOption } from '@/utils/formData'
import { getObjByPath } from '@utils/common'
import { Line as LineType } from '../_types'

const { Panel } = Collapse
const { Option } = Select

const Line = (props: LineType) => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  }
  const layout1 = {
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
    <>
      <Form {...layout} initialValues={{ layout: 'Inline' }} labelAlign="right" className="bar">
        <Form.Item label="线颜色">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8,20px)' }}>
            {line.colorArr.map((item, index) => {
              return <EchartColor key={index} color={item} onChange={(value) => change(`colorArr.${index}`, value)} />
            })}
          </div>
        </Form.Item>
        <Form.Item label="平滑曲线">
          <Switch checked={line.smooth} onChange={(value) => change(`smooth`, value)} />
        </Form.Item>
        <Form.Item label="标记图形">
          <Select value={line.symbol} onChange={(value) => change(`symbol`, value)}>
            {symboltOption}
          </Select>
        </Form.Item>
        <Form.Item label="图形颜色">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8,20px)' }}>
            {line.symbolColorArr.map((item, index) => {
              return <EchartColor key={index} color={item} onChange={(value) => change(`symbolColorArr.${index}`, value)} />
            })}
          </div>
        </Form.Item>

        <Form.Item label="图形尺寸">
          <InputNumberUnit value={line.symbolSize} unit={['px']} onChange={(value) => change('symbolSize', value)} />
        </Form.Item>

        <Form.Item label="阶梯线图">
          <Switch checked={line.step} onChange={(value) => change(`step`, value)} />
        </Form.Item>
        <Form.Item label="折线宽度">
          <InputNumberUnit value={line.width} unit={['px']} onChange={(value) => change('width', value)} />
        </Form.Item>
        <Form.Item label="折线类型">
          <Select value={line.type} onChange={(value) => change(`type`, value)}>
            <Option value="solid">实线</Option>
            <Option value="dashed">虚线</Option>
            <Option value="dotted">点线</Option>
          </Select>
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
          <Panel header={`文本`} key={1} className="panel">
            <Form.Item label="显示数值">
              <Switch checked={line.label.show} onChange={(value) => change(`label.show`, value)} />
            </Form.Item>
            <Form.Item label="数值位置">
              <Select value={line.label.position} onChange={(value) => change(`label.position`, value)}>
                <Option value="top">顶部</Option>
                <Option value="inside">居中</Option>
                <Option value="bottom">底部</Option>
              </Select>
            </Form.Item>
            <Form.Item label="单位">
              <Input
                value={line.label.unit}
                onChange={(e) => {
                  const value = e.target.value
                  change(`label.unit`, value)
                }}
              />
            </Form.Item>
            <Form.Item label="字体">
              <Select value={line.label.fontFamily} onChange={(value) => change(`label.fontFamily`, value)}>
                {fontFamilyOption}
              </Select>
            </Form.Item>
            <Form.Item label="字号">
              <InputNumber value={line.label.fontSize} onChange={(value) => change(`label.fontSize`, value)} />
            </Form.Item>
            <Form.Item label="字体颜色">
              <EchartColor color={line.label.color} onChange={(value) => change(`label.color`, value)} />
            </Form.Item>
          </Panel>
        </Collapse>
      </Form>
    </>
  )
}
export default Line
