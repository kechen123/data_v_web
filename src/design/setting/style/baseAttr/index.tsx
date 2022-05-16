import React, { useCallback, useEffect } from 'react'
import { useSetState } from 'ahooks'
import { Form, Tooltip, Row, Col, Input, InputNumber } from 'antd'
import eventBus from '@utils/eventBus'
import style from './index.module.less'
const margin = { marginBottom: '8px' }
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
}
interface State {
  left: number
  top: number
  width: number
  height: number
  rotate: number
}
const BaseAttr = (props) => {
  const {
    id,
    widget: { name, rect, rotate },
  } = props
  return (
    <div className={style.baseAttr}>
      <Info id={id} name={name} />
      <Rect {...{ ...rect, rotate: rotate }} />
    </div>
  )
}

const Info = React.memo(
  (props: any) => {
    const [frame, setFrame] = useSetState(props)
    useEffect(() => {
      setFrame(props)
    }, [props])
    const setConfig = useCallback(
      (key, val) => {
        eventBus.emit('changePlug', frame.id, {
          [key]: val,
        })
      },
      [props]
    )
    return (
      <Row style={margin}>
        <Col span={16}>
          <Input
            placeholder="组件名称"
            bordered={false}
            value={frame.name}
            onChange={(e) => {
              let name = e.target.value
              setFrame({ ...frame, name: name })
              setConfig('name', name)
            }}
          />
        </Col>
        <Col span={4}>
          <Tooltip placement="left" title="隐藏">
            <i className={`icon iconfont icon-yanjing_xianshi_o `}></i>
          </Tooltip>
        </Col>
        <Col span={4}>
          <Tooltip placement="left" title="锁定">
            <i className={`icon iconfont icon-suoding `}></i>
          </Tooltip>
        </Col>
      </Row>
    )
  },
  (prevProps, nextProps) => {
    if (JSON.stringify(prevProps) === JSON.stringify(nextProps)) {
      return true
    }
    return false
  }
)

const Rect = React.memo(({ left, top, width, height, rotate }: any) => {
  const [frame, setFrame] = useSetState<State>({
    left: left,
    top: top,
    width: width,
    height: height,
    rotate: rotate,
  })
  useEffect(() => {
    eventBus.addListener('widgetMove', (data: any) => {
      setFrame(data)
    })
  }, [])

  return (
    <Form {...layout}>
      <Form.Item label="图表尺寸" style={{ marginBottom: 0 }}>
        <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 6px)', marginRight: '6px' }}>
          <InputNumber value={frame.width} onChange={(value) => {}} />
        </Form.Item>
        <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 6px)', marginLeft: '6px' }}>
          <InputNumber value={frame.height} onChange={(value) => {}} />
        </Form.Item>
      </Form.Item>
      <Form.Item label="图表位置" style={{ marginBottom: 0 }}>
        <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 6px)', marginRight: '6px' }}>
          <InputNumber value={frame.left} onChange={(value) => {}} />
        </Form.Item>
        <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 6px)', marginLeft: '6px' }}>
          <InputNumber value={frame.top} onChange={(value) => {}} />
        </Form.Item>
      </Form.Item>
      <Form.Item label="旋转角度" style={{ marginBottom: 0 }}>
        <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 6px)', marginRight: '6px' }}>
          <InputNumber value={frame.rotate} onChange={(value) => {}} />
        </Form.Item>
      </Form.Item>
    </Form>
  )
})

export default BaseAttr
