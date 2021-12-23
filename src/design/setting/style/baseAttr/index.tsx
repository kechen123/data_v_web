import React, { useCallback, useEffect } from 'react'
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
  const {
    id,
    widget: { name, rect },
  } = props

  return (
    <div className={style.baseAttr}>
      <Info id={id} name={name} />
      <Rect {...rect} />
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

const Rect = React.memo(({ left, top, width, height }: any) => {
  const [frame, setFrame] = useSetState<State>({
    left: left,
    top: top,
    width: width,
    height: height,
  })
  useEffect(() => {
    eventBus.addListener('widgetMove', (data: any) => {
      setFrame(data)
    })
  }, [])
  return (
    <>
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
    </>
  )
})

export default BaseAttr
