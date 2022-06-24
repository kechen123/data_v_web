import React, { useEffect, useState } from 'react'
import { Form, Collapse, Input, Switch, InputNumber, AutoComplete, Select, message } from 'antd'
import update from 'immutability-helper'
import InputNumberUnit from '@components/form/inputNumberUnit'
import EchartColor from '@components/echartColor'
import eventBus from '@utils/eventBus'
import { getObjByPath } from '@utils/common'
import { fontFamilyOption } from '@/utils/formData'
import { QXMAP } from '../_types'

const { Panel } = Collapse

const Map = (props: QXMAP) => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  }
  const [map, setMap] = useState<QXMAP>(props)
  const change = (key, value) => {
    const obj = getObjByPath(key, value)
    if (obj) {
      const newMap = update(map, obj)
      setMap(newMap)
      const path = key
      eventBus.emit('changeSettingConfig', path, value)
    }
  }
  return (
    <Form {...layout} initialValues={{ layout: 'Inline' }} labelAlign="right">
      <Form.Item label="显示文本">
        <Switch checked={map.label.show} onChange={(value) => change(`label.show`, value)} />
      </Form.Item>
      <Form.Item label="文本颜色">
        <EchartColor color={map.label.color} onChange={(value) => change(`label.color`, value)} />
      </Form.Item>
      <Form.Item label="字体">
        <Select value={map.label.fontFamily} onChange={(value) => change(`label.fontFamily`, value)}>
          {fontFamilyOption}
        </Select>
      </Form.Item>
      <Form.Item label="字号">
        <InputNumber value={map.label.fontSize} onChange={(value) => change(`label.fontSize`, value)} />
      </Form.Item>
      <Form.Item label="区域颜色">
        <EchartColor color={map.itemStyle.areaColor} onChange={(value) => change(`itemStyle.areaColor`, value)} />
      </Form.Item>
      <Form.Item label="边线颜色">
        <EchartColor color={map.itemStyle.borderColor} onChange={(value) => change(`itemStyle.borderColor`, value)} />
      </Form.Item>
      <Form.Item label="边线粗细">
        <InputNumberUnit value={map.itemStyle.borderWidth} unit={['px']} onChange={(value) => change('itemStyle.borderWidth', value)} />
      </Form.Item>
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => (
          <span>
            <i className="icon iconfont icon-shouqijiantouxiao " style={{ transform: `rotate(${isActive ? 180 : 90}deg)` }} />
          </span>
        )}
        className="collapse-1-1"
      >
        <Panel header="悬浮" key="1" className="panel">
          <Form {...layout} initialValues={{ layout: 'Inline' }} labelAlign="right">
            <Form.Item label="显示文本">
              <Switch checked={map.emphasis.label.show} onChange={(value) => change(`emphasis.label.show`, value)} />
            </Form.Item>
            <Form.Item label="文本颜色">
              <EchartColor color={map.emphasis.label.color} onChange={(value) => change(`emphasis.label.color`, value)} />
            </Form.Item>
            <Form.Item label="字体">
              <Select value={map.emphasis.label.fontFamily} onChange={(value) => change(`emphasis.label.fontFamily`, value)}>
                {fontFamilyOption}
              </Select>
            </Form.Item>
            <Form.Item label="字号">
              <InputNumber value={map.emphasis.label.fontSize} onChange={(value) => change(`emphasis.label.fontSize`, value)} />
            </Form.Item>
            <Form.Item label="区域颜色">
              <EchartColor color={map.emphasis.itemStyle.areaColor} onChange={(value) => change(`emphasis.itemStyle.areaColor`, value)} />
            </Form.Item>
            <Form.Item label="边线颜色">
              <EchartColor color={map.emphasis.itemStyle.borderColor} onChange={(value) => change(`emphasis.itemStyle.borderColor`, value)} />
            </Form.Item>
            <Form.Item label="边线粗细">
              <InputNumberUnit value={map.emphasis.itemStyle.borderWidth} unit={['px']} onChange={(value) => change('emphasis.itemStyle.borderWidth', value)} />
            </Form.Item>
          </Form>
        </Panel>
      </Collapse>
    </Form>
  )
}

export default Map
