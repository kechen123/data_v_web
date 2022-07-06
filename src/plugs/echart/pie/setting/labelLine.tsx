import { useState } from 'react'
import { Form, InputNumber, Switch } from 'antd'
import update from 'immutability-helper'
import eventBus from '@utils/eventBus'
import { getObjByPath } from '@utils/common'
import { LabelLine as LabelLineType } from '../_types'

const LabelLine = (props: LabelLineType) => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  }
  const [labelLine, setLabelLine] = useState<LabelLineType>(props)
  const change = (key, value) => {
    const obj = getObjByPath(key, value)
    if (obj) {
      setLabelLine(update(labelLine, obj))
      const path = 'labelLine.' + key
      eventBus.emit('changeSettingConfig', path, value)
    }
  }

  return (
    <>
      <Form {...layout} initialValues={{ layout: 'Inline' }} labelAlign="right" className="bar">
        <Form.Item label="显示">
          <Switch checked={labelLine.show} onChange={(value) => change(`show`, value)} />
        </Form.Item>
        <Form.Item label="第一段长">
          <InputNumber value={labelLine.length} onChange={(value) => change(`length`, value)} />
        </Form.Item>
        <Form.Item label="第二段长">
          <InputNumber value={labelLine.length2} onChange={(value) => change(`length2`, value)} />
        </Form.Item>
        <Form.Item label="平滑视觉">
          <Switch checked={labelLine.smooth} onChange={(value) => change(`smooth`, value)} />
        </Form.Item>
      </Form>
    </>
  )
}
export default LabelLine
