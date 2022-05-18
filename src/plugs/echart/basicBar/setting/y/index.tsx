import { useState } from 'react'
import { Collapse, Form, Row, Input, InputNumber, Switch, Select } from 'antd'
import { Y as YType, YTitle as YTitleType, YSplitLine as YSplitLineType } from '../../_types'
import { borderType, fontFamily } from '@utils/formData'

const { Panel } = Collapse
const { Option } = Select

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
}

const borderTypeOption = borderType.options.map((item) => {
  return (
    <Option key={item.value} value={item.value}>
      {item.label}
    </Option>
  )
})

const fontFamilyOption = fontFamily.options.map((item) => {
  return (
    <Option key={item.value} value={item.value}>
      {item.label}
    </Option>
  )
})

const YLine = (props: YType) => {
  const [y, setY] = useState<YType>(props)
  return (
    <Form {...layout} initialValues={{ layout: 'Inline' }} labelAlign="right">
      <Form.Item label="位置">
        <Select onChange={(value) => {}}>
          <Option value="left">左</Option>
          <Option value="right">右</Option>
        </Select>
      </Form.Item>
      <Form.Item label="轴线距离">
        <InputNumber value={y.offset} onChange={(value) => {}} />
      </Form.Item>
      <Form.Item label="最小值">
        <InputNumber value={y.min} onChange={(value) => {}} />
      </Form.Item>
      <Form.Item label="最大值">
        <InputNumber value={y.max} onChange={(value) => {}} />
      </Form.Item>
      <Form.Item label="单位">
        <Input value={y.unit} onChange={(value) => {}} />
      </Form.Item>
      <Form.Item label="字体">
        <Select onChange={(value) => {}}>{fontFamilyOption}</Select>
      </Form.Item>
      <Form.Item label="字号">
        <InputNumber value={y.fontSize} onChange={(value) => {}} />
      </Form.Item>
      <Form.Item label="字体颜色">
        <InputNumber value={y.fontColor} onChange={(value) => {}} />
      </Form.Item>
      <Form.Item label="坐标轴颜色">
        <InputNumber value={y.color} onChange={(value) => {}} />
      </Form.Item>
    </Form>
  )
}

const YTitle = (props: YTitleType) => {
  const [y, setY] = useState<YTitleType>(props)
  return (
    <Form {...layout} initialValues={{ layout: 'Inline' }} labelAlign="right">
      <Form.Item label="标题">
        <Input value={y.name} onChange={(value) => {}} />
      </Form.Item>
      <Form.Item label="标题位置">
        <Select onChange={(value) => {}}>
          <Option value="end">顶部</Option>
          <Option value="center">中间</Option>
          <Option value="start">底部</Option>
        </Select>
      </Form.Item>
      <Form.Item label="标题角度">
        <InputNumber value={y.rotate} onChange={(value) => {}} />
      </Form.Item>

      <Form.Item label="字体">
        <Select onChange={(value) => {}}>{fontFamilyOption}</Select>
      </Form.Item>
      <Form.Item label="字号">
        <InputNumber value={y.fontSize} onChange={(value) => {}} />
      </Form.Item>
      <Form.Item label="字体颜色">
        <InputNumber value={y.fontColor} onChange={(value) => {}} />
      </Form.Item>
    </Form>
  )
}

const YSplitLine = (props: YSplitLineType) => {
  const [y, setY] = useState<YSplitLineType>(props)
  return (
    <Form {...layout} initialValues={{ layout: 'Inline' }} labelAlign="right">
      <Form.Item label="网格线">
        <Switch checked={y.show} onChange={(value) => {}} />
      </Form.Item>
      <Form.Item label="标题位置">
        <Select onChange={(value) => {}}>
          <Option value="end">顶部</Option>
          <Option value="center">中间</Option>
          <Option value="start">底部</Option>
        </Select>
      </Form.Item>
      <Form.Item label="线类型">
        <Select onChange={(value) => {}}>{borderTypeOption}</Select>
      </Form.Item>
      <Form.Item label="线颜色">
        <InputNumber value={y.color} onChange={(value) => {}} />
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
      className="yCollapse"
    >
      <Panel header="轴线" key="1" className="yPanel">
        <YLine {...y} />
      </Panel>
      <Panel header="标题" key="2" className="yPanel">
        <YTitle {...y.title} />
      </Panel>
      <Panel header="网格线" key="3" className="yPanel">
        <YSplitLine {...y.splitLine} />
      </Panel>
    </Collapse>
  )
}

export default Y
