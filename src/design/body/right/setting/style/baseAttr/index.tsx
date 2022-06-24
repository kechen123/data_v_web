import React, { useCallback, useEffect } from 'react'
import { useSetState } from 'ahooks'
import { Form, Tooltip, Row, Col, Space, Input, InputNumber } from 'antd'
import eventBus from '@utils/eventBus'
import { getObjByPath } from '@utils/common'
import style from './index.module.less'
const margin = { marginBottom: '8px', paddingRight: '20px', paddingLeft: '20px' }
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 22 },
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
    // const [frame, setFrame] = useSetState(props)
    // const setConfig = useCallback(
    //   (key, val) => {
    //     eventBus.emit('changePlug', frame.id, {
    //       [key]: val,
    //     })
    //   },
    //   [props]
    // )
    return (
      <Row style={margin}>
        <Space size={20}>
          <Input
            style={{ width: '200px' }}
            placeholder="组件名称"
            // bordered={false}
            value={props.name}
            onChange={(e) => {
              let value = e.target.value
              // console.log('组件名称')
              eventBus.emit('changeSettingBase', 'name', value)
              // eventBus.emit('changeSettingConfig', path, value)
              // setFrame({ ...frame, name: name })
              // setConfig('name', name)
            }}
          />

          <Tooltip placement="top" title="隐藏">
            <i className={`icon iconfont icon-yanjing_xianshi_o `}></i>
          </Tooltip>

          <Tooltip placement="top" title="锁定">
            <i className={`icon iconfont icon-suoding `}></i>
          </Tooltip>
        </Space>
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

const Rect = React.memo((props: any) => {
  const { left, top, width, height, rotate } = props
  const [frame, setFrame] = useSetState<State>(() => {
    return {
      left: left,
      top: top,
      width: width,
      height: height,
      rotate: rotate,
    }
  })
  useEffect(() => {
    const setData = (data: any) => {
      setFrame(data)
    }
    eventBus.addListener('widgetMove', setData)
    return () => {
      eventBus.removeListener('widgetMove', setData)
    }
  }, [])

  useEffect(() => {
    setFrame({
      left: props.left,
      top: props.top,
      width: props.width,
      height: props.height,
      rotate: props.rotate,
    })
  }, [props])

  const change = (key, value) => {
    eventBus.emit('changeSettingRect', key, value)
    eventBus.emit('requestMoveable', key, value)
  }

  return (
    <Form {...layout}>
      <Form.Item label="尺寸" style={{ marginBottom: 0 }}>
        <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 6px)', marginRight: '6px' }}>
          <InputNumber value={frame.width} onChange={(value) => change('width', value)} />
        </Form.Item>
        <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 6px)', marginLeft: '6px' }}>
          <InputNumber value={frame.height} onChange={(value) => change('height', value)} />
        </Form.Item>
      </Form.Item>
      <Form.Item label="位置" style={{ marginBottom: 0 }}>
        <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 6px)', marginRight: '6px' }}>
          <InputNumber value={frame.left} onChange={(value) => change('left', value)} />
        </Form.Item>
        <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 6px)', marginLeft: '6px' }}>
          <InputNumber value={frame.top} onChange={(value) => change('top', value)} />
        </Form.Item>
      </Form.Item>
      <Form.Item label="角度" style={{ marginBottom: 0 }}>
        <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 6px)', marginRight: '6px' }}>
          <InputNumber value={frame.rotate} onChange={(value) => change('rotate', value)} />
        </Form.Item>
      </Form.Item>
    </Form>
  )
})

export default BaseAttr
