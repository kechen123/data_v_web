import React, { useContext } from 'react'
import { Tooltip, Row, Col, Input, InputNumber } from 'antd'
import style from './index.module.less'
const margin = { marginBottom: '8px' }
const BaseAttr = (rect) => {
  const change = (e) => {
    console.log(e)
  }
  return (
    <div className={style.baseAttr}>
      <Row style={margin}>
        <Col span={16}>
          <Input placeholder="组件名称" bordered={false} onChange={change} />
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
          <InputNumber addonBefore="W" value={rect.width} />
        </Col>
        <Col span={10}>
          <InputNumber addonBefore="H" value={rect.height} />
        </Col>
      </Row>
      <Row justify="space-between" style={margin}>
        <Col span={10}>
          <InputNumber addonBefore="X" value={rect.left} />
        </Col>
        <Col span={10}>
          <InputNumber addonBefore="Y" value={rect.top} />
        </Col>
      </Row>
    </div>
  )
}

export default BaseAttr
