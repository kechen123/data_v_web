import React, { useEffect } from 'react'
import { useSetState } from 'ahooks'
import { Tooltip, Row, Col, Input, InputNumber } from 'antd'
import eventBus from '@utils/eventBus'
import style from './index.module.less'
const margin = { marginBottom: '8px' }
interface State {
  left: number
  top: number
  width: number
  height: number
}
const BaseAttr = (props) => {
  const [frame, setFrame] = useSetState<State>({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  })

  useEffect(() => {
    eventBus.addListener('widgetMove', (data: any) => {
      setFrame(data)
    })
  }, [])

  return (
    <div className={style.baseAttr}>
      <Row style={margin}>
        <Col span={16}>
          <Input placeholder="组件名称" bordered={false} />
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
      <Row justify="space-between" style={margin}>
        <Col span={10}>
          <InputNumber addonBefore="W" data-id="wiget-width" value={frame.width} />
        </Col>
        <Col span={10}>
          <InputNumber addonBefore="H" value={frame.height} />
        </Col>
      </Row>
      <Row justify="space-between" style={margin}>
        <Col span={10}>
          <InputNumber addonBefore="X" value={frame.left} />
        </Col>
        <Col span={10}>
          <InputNumber addonBefore="Y" value={frame.top} />
        </Col>
      </Row>
    </div>
  )
}

export default BaseAttr
