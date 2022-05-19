import { useState } from 'react'
import { Form, Row, InputNumber } from 'antd'
import eventBus from '@utils/eventBus'
import { Margin as GridType } from '../../_types'

const Margin = (props: GridType) => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  }
  const [grid, setGrid] = useState<GridType>(props)

  const change = (key, value) => {
    setGrid({ ...grid, [key]: value })
    const path = 'grid.' + key
    // eventBus.emit('changeSettingConfig', path, value)
  }
  return (
    <Form {...layout} initialValues={{ layout: 'Inline' }}>
      <Row>
        <Form.Item label="上" style={{ width: 'calc(50% - 6px)', marginRight: '6px' }}>
          <InputNumber value={grid.top} onChange={(value) => change('top', value)} />
        </Form.Item>
        <Form.Item label="右" style={{ width: 'calc(50% - 6px)' }}>
          <InputNumber value={grid.right} onChange={(value) => {}} />
        </Form.Item>
      </Row>
      <Row>
        <Form.Item label="下" style={{ width: 'calc(50% - 6px)', marginRight: '6px' }}>
          <InputNumber value={grid.bottom} onChange={(value) => {}} />
        </Form.Item>
        <Form.Item label="左" style={{ width: 'calc(50% - 6px)' }}>
          <InputNumber value={grid.left} onChange={(value) => {}} />
        </Form.Item>
      </Row>
    </Form>
  )
}

export default Margin
