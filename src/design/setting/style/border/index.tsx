import React from 'react'
import { Collapse, Row, Col, Form } from 'antd'
import Color from '@components/color'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'
import { screen } from '@features/screenSlice'
import { widget } from '@features/widgetSlice'
const { Panel } = Collapse
const Index = () => {
  const { activeWidgets } = useAppSelector(screen)
  const widgetMap = useAppSelector(widget)
  let { config } = widgetMap[activeWidgets[0]]
  console.log(config)
  const onChange = (i, e) => {
    console.log(i, e, config)
  }
  return (
    <Collapse bordered={false} defaultActiveKey={[1]}>
      <Panel key="1" header="样式">
        <Row>
          <Col span={8}>
            <Color
              onChange={(e) => {
                let colorHex = e.hex
                onChange(0, colorHex)
              }}
              color={config.color[0]}
            />
          </Col>
          <Col span={8}>
            <Color
              onChange={(e) => {
                let colorHex = e.hex
                onChange(1, colorHex)
              }}
              color={config.color[1]}
            />
          </Col>
        </Row>
      </Panel>
    </Collapse>
  )
}

export default Index
