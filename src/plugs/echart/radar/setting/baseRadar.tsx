import { useState } from 'react'
import { Collapse, Form, Input, InputNumber, Switch, Select } from 'antd'
import update from 'immutability-helper'
import eventBus from '@utils/eventBus'
import InputNumberUnit from '@components/form/inputNumberUnit'
import EchartColor from '@components/echartColor'
import { fontFamilyOption, borderTypeOption, symboltOption } from '@/utils/formData'
import { getObjByPath } from '@utils/common'
import { BaseRadar as BaseRadarType } from '../_types'

const { Panel } = Collapse
const { Option } = Select

const BaseRadar = (props: BaseRadarType) => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  }
  const layout1 = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  }
  const [radar, setRadar] = useState<BaseRadarType>(props)

  const change = (key, value) => {
    const obj = getObjByPath(key, value)
    if (obj) {
      setRadar(update(radar, obj))
      const path = 'radar.' + key
      eventBus.emit('changeSettingConfig', path, value)
    }
  }

  return (
    <>
      <Form {...layout} initialValues={{ layout: 'Inline' }} labelAlign="right" className="bar">
        <Form.Item label="形状">
          <Select value={radar.shape} onChange={(value) => change(`shape`, value)}>
            <Option value="polygon">多边形</Option>
            <Option value="circle">圆形</Option>
          </Select>
        </Form.Item>
        <Form.Item label="分割段数">
          <InputNumber value={radar.splitNumber} onChange={(value) => change(`splitNumber`, value)} />
        </Form.Item>
      </Form>
      <Form {...layout1} initialValues={{ layout: 'Inline' }} labelAlign="right">
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <span>
              <i className="icon iconfont icon-shouqijiantouxiao " style={{ transform: `rotate(${isActive ? 180 : 90}deg)` }} />
            </span>
          )}
          className="collapse-1-1"
        >
          <Panel header={`指示器`} key={1} className="panel">
            <Form.Item label="显示">
              <Switch checked={radar.axisName.show} onChange={(value) => change(`axisName.show`, value)} />
            </Form.Item>
            <Form.Item label="单位">
              <Input
                value={radar.axisName.unit}
                onChange={(e) => {
                  const value = e.target.value
                  change(`axisName.unit`, value)
                }}
              />
            </Form.Item>
            <Form.Item label="字体颜色">
              <EchartColor color={radar.axisName.color} onChange={(value) => change(`axisName.color`, value)} />
            </Form.Item>
            <Form.Item label="字体">
              <Select value={radar.axisName.fontFamily} onChange={(value) => change(`axisName.fontFamily`, value)}>
                {fontFamilyOption}
              </Select>
            </Form.Item>
            <Form.Item label="字号">
              <InputNumber value={radar.axisName.fontSize} onChange={(value) => change(`axisName.fontSize`, value)} />
            </Form.Item>
          </Panel>
          <Panel header={`轴线`} key={2} className="panel">
            <Form.Item label="显示">
              <Switch checked={radar.axisLine.show} onChange={(value) => change(`axisLine.show`, value)} />
            </Form.Item>
            <Form.Item label="标记图形">
              <Select value={radar.axisLine.symbol} onChange={(value) => change(`axisLine.symbol`, value)}>
                {symboltOption}
              </Select>
            </Form.Item>
            <Form.Item label="图形尺寸" style={{ marginBottom: 0 }}>
              <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 10px)', marginRight: '6px' }}>
                <InputNumber addonBefore="宽" value={radar.axisLine.symbolSize[0]} placeholder="图形宽度" onChange={(value) => change('axisLine.symbolSize.0', value)} />
              </Form.Item>
              <span style={{ display: 'inline-block', width: '8px', lineHeight: '32px', textAlign: 'center' }}>*</span>
              <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 10px)', marginLeft: '6px' }}>
                <InputNumber addonBefore="高" value={radar.axisLine.symbolSize[1]} placeholder="图形高度" onChange={(value) => change('axisLine.symbolSize.1', value)} />
              </Form.Item>
            </Form.Item>
            <Form.Item label="轴线颜色">
              <EchartColor color={radar.axisLine.lineStyle.color} onChange={(value) => change(`axisLine.lineStyle.color`, value)} />
            </Form.Item>
            <Form.Item label="轴线宽度">
              <InputNumber value={radar.axisLine.lineStyle.width} onChange={(value) => change(`axisLine.lineStyle.width`, value)} />
            </Form.Item>
            <Form.Item label="边框类型">
              <Select value={radar.axisLine.lineStyle.type} onChange={(value) => change('axisLine.lineStyle.type', value)}>
                {borderTypeOption}
              </Select>
            </Form.Item>
          </Panel>
          <Panel header={`分隔线`} key={3} className="panel">
            <Form.Item label="显示">
              <Switch checked={radar.splitLine.show} onChange={(value) => change(`splitLine.show`, value)} />
            </Form.Item>
            <Form.Item label="线颜色">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8,20px)' }}>
                {radar.splitLine.lineStyle.color.map((item, index) => {
                  return <EchartColor key={index} color={item} onChange={(value) => change(`splitLine.lineStyle.color.${index}`, value)} />
                })}
              </div>
            </Form.Item>
            <Form.Item label="线宽度">
              <InputNumber value={radar.splitLine.lineStyle.width} onChange={(value) => change(`splitLine.lineStyle.width`, value)} />
            </Form.Item>
            <Form.Item label="线类型">
              <Select value={radar.splitLine.lineStyle.type} onChange={(value) => change('splitLine.lineStyle.type', value)}>
                {borderTypeOption}
              </Select>
            </Form.Item>
          </Panel>
          <Panel header={`分隔区域`} key={4} className="panel">
            <Form.Item label="显示">
              <Switch checked={radar.splitArea.show} onChange={(value) => change(`splitArea.show`, value)} />
            </Form.Item>
            <Form.Item label="线颜色">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8,20px)' }}>
                {radar.splitArea.areaStyle.color.map((item, index) => {
                  return <EchartColor key={index} color={item} onChange={(value) => change(`splitArea.areaStyle.color.${index}`, value)} />
                })}
              </div>
            </Form.Item>
          </Panel>
        </Collapse>
      </Form>
    </>
  )
}
export default BaseRadar
