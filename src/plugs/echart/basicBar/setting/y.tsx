import { useState } from 'react'
import { Collapse, Form, Row, Input, InputNumber, Switch, Select } from 'antd'
import update from 'immutability-helper'
import eventBus from '@utils/eventBus'
import EchartColor from '@components/echartColor'
import { Y as YType, YTitle as YTitleType, YSplitLine as YSplitLineType } from '../_types'
import { borderTypeOption, fontFamilyOption } from '@/utils/formData'
import { getObjByPath } from '@utils/common'

const { Panel } = Collapse
const { Option } = Select

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
}

const YLine = (props: YType) => {
  const [y, setY] = useState<YType>(props)

  const change = (key, value) => {
    const obj = getObjByPath(key, value)
    if (obj) {
      setY(update(y, obj))
      const path = 'y.' + key
      eventBus.emit('changeSettingConfig', path, value)
    }
  }
  return (
    <Form {...layout} initialValues={{ layout: 'Inline' }} labelAlign="right">
      <Form.Item label="位置">
        <Select value={y.position} onChange={(value) => change('position', value)}>
          <Option value="left">左</Option>
          <Option value="right">右</Option>
        </Select>
      </Form.Item>
      <Form.Item label="轴线距离">
        <InputNumber value={y.offset} onChange={(value) => change('offset', value)} />
      </Form.Item>
      <Form.Item label="最小值">
        <InputNumber value={y.min} onChange={(value) => change('offset', value)} />
      </Form.Item>
      <Form.Item label="最大值">
        <InputNumber value={y.max} onChange={(value) => change('max', value)} />
      </Form.Item>
      <Form.Item label="单位">
        <Input
          value={y.unit}
          onChange={(e) => {
            const value = e.target.value
            change(`unit`, value)
          }}
        />
      </Form.Item>
      <Form.Item label="字体">
        <Select value={y.fontFamily} onChange={(value) => change('fontFamily', value)}>
          {fontFamilyOption}
        </Select>
      </Form.Item>
      <Form.Item label="字号">
        <InputNumber value={y.fontSize} onChange={(value) => change('fontSize', value)} />
      </Form.Item>
      <Form.Item label="字体颜色">
        <EchartColor color={y.fontColor} onChange={(value) => change('fontColor', value)} />
      </Form.Item>
      <Form.Item label="坐标轴颜色">
        <EchartColor color={y.color} onChange={(value) => change('color', value)} />
      </Form.Item>
    </Form>
  )
}

const YTitle = (props: YTitleType) => {
  const [y, setY] = useState<YTitleType>(props)
  const change = (key, value) => {
    const obj = getObjByPath(key, value)
    if (obj) {
      setY(update(y, obj))
      const path = 'y.title.' + key
      eventBus.emit('changeSettingConfig', path, value)
    }
  }
  return (
    <Form {...layout} initialValues={{ layout: 'Inline' }} labelAlign="right">
      <Form.Item label="标题">
        <Input
          value={y.name}
          onChange={(e) => {
            const value = e.target.value
            change(`name`, value)
          }}
        />
      </Form.Item>
      <Form.Item label="标题位置">
        <Select value={y.location} onChange={(value) => change('location', value)}>
          <Option value="end">顶部</Option>
          <Option value="center">中间</Option>
          <Option value="start">底部</Option>
        </Select>
      </Form.Item>
      <Form.Item label="标题角度">
        <InputNumber value={y.rotate} onChange={(value) => change('rotate', value)} />
      </Form.Item>

      <Form.Item label="字体">
        <Select value={y.fontFamily} onChange={(value) => change('fontFamily', value)}>
          {fontFamilyOption}
        </Select>
      </Form.Item>
      <Form.Item label="字号">
        <InputNumber value={y.fontSize} onChange={(value) => change('fontSize', value)} />
      </Form.Item>
      <Form.Item label="字体颜色">
        <EchartColor color={y.fontColor} onChange={(value) => change('fontColor', value)} />
      </Form.Item>
    </Form>
  )
}

const YSplitLine = (props: YSplitLineType) => {
  const [y, setY] = useState<YSplitLineType>(props)
  const change = (key, value) => {
    const obj = getObjByPath(key, value)
    if (obj) {
      setY(update(y, obj))
      const path = 'y.splitLine.' + key
      eventBus.emit('changeSettingConfig', path, value)
    }
  }
  return (
    <Form {...layout} initialValues={{ layout: 'Inline' }} labelAlign="right">
      <Form.Item label="网格线">
        <Switch checked={y.show} onChange={(value) => change('show', value)} />
      </Form.Item>
      <Form.Item label="线类型">
        <Select value={y.type} onChange={(value) => change('type', value)}>
          {borderTypeOption}
        </Select>
      </Form.Item>
      <Form.Item label="线颜色">
        <EchartColor color={y.color} onChange={(value) => change('color', value)} />
      </Form.Item>
    </Form>
  )
}

const Y = (props: YType) => {
  const [y, setY] = useState<YType>(props)

  return (
    <Collapse
      bordered={false}
      expandIcon={({ isActive }) => (
        <span>
          <i className="icon iconfont icon-shouqijiantouxiao " style={{ transform: `rotate(${isActive ? 180 : 90}deg)` }} />
        </span>
      )}
      className="collapse-1-1"
    >
      <Panel header="轴线" key="1" className="panel">
        <YLine {...y} />
      </Panel>
      <Panel header="标题" key="2" className="panel">
        <YTitle {...y.title} />
      </Panel>
      <Panel header="网格线" key="3" className="panel">
        <YSplitLine {...y.splitLine} />
      </Panel>
    </Collapse>
  )
}

export default Y
