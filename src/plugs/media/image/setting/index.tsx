import React, { useState } from 'react'
import update from 'immutability-helper'
import { Form, Collapse, Input, Switch, InputNumber, AutoComplete, Select, message } from 'antd'
import { ImageBox } from '@components/upload/image'
import eventBus from '@utils/eventBus'
import { getObjByPath } from '@utils/common'
import { Image as ImageType } from '../_types'
const { Option } = Select

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
}

const { Panel } = Collapse

const Index = (props: ImageType) => {
  const [image, setImage] = useState<ImageType>(props)
  const [active, setActive] = useState<string | string[]>([''])
  const change = (key, value) => {
    const obj = getObjByPath(key, value)
    if (obj) {
      setImage(update(image, obj))
      const path = key
      eventBus.emit('changeSettingConfig', path, value)
    }
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
      className="collapse-1"
    >
      <Panel header="样式" key="1" className="panel">
        <Form {...layout} initialValues={{ layout: 'Inline' }} labelAlign="right">
          <Form.Item label="背景图片">
            <ImageBox
              imgData={{
                url: image.url,
                opacity: 1,
              }}
              upImage={(val) => {
                change(`url`, val)
              }}
            />
          </Form.Item>

          <Form.Item label="标记图形">
            <Select value={image.type} onChange={(value) => change(`type`, value)}>
              <Option key="1" value="contain">
                等比例缩放
              </Option>
              <Option key="2" value="cover">
                自适应平铺
              </Option>
            </Select>
          </Form.Item>
        </Form>
      </Panel>
    </Collapse>
  )
}

export default Index
