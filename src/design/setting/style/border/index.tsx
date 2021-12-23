import React, { useEffect, useState } from 'react'
import { Collapse, Row, Col, Form } from 'antd'
import eventBus from '@utils/eventBus'
import Color from '@components/color'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'
import { screen } from '@features/screenSlice'
import { widget } from '@features/widgetSlice'
const { Panel } = Collapse
const Index = (widgetObj) => {
  // const { activeWidgets } = useAppSelector(screen)
  // const widgetMap = useAppSelector(widget)
  let {
    id,
    widget: {
      plugin: { name },
      rect,
      config: { color },
    },
  } = widgetObj

  const [selfColor, setSelfColor] = useState(color)

  const onChange1 = (e) => {
    const hex = e.hex
    let newColors = [hex, selfColor[1]]
    setSelfColor(newColors)
    changeConfig(newColors)
  }
  const onChange2 = (e) => {
    const hex = e.hex
    let newColors = [selfColor[0], hex]
    setSelfColor(newColors)
    changeConfig(newColors)
  }

  const changeConfig = (colors) => {
    eventBus.emit('changePlug', id, {
      config: {
        color: colors,
      },
    })
  }

  return (
    <Collapse bordered={false} defaultActiveKey={[1]}>
      <Panel key="1" header="样式">
        <Row>
          <Col span={8}>
            <Color onChange={onChange1} color={selfColor[0]} />
          </Col>
          <Col span={8}>
            <Color onChange={onChange2} color={selfColor[1]} />
          </Col>
        </Row>
      </Panel>
    </Collapse>
  )
}

export default Index
