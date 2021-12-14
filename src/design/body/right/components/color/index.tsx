import React from 'react'
import { Row, Col, Select, Tooltip, Button, Space, Typography } from 'antd'
import Color from '@components/color'

const index = (props: any) => {
  if (!props.option) {
    return <></>
  }
  const onChange = (index, colorHex) => {
    props.change(props.id, index, colorHex)
  }
  return (
    <Row gutter={24}>
      {props?.option.map((item, i) => {
        return (
          <Col key={i} span={item.span}>
            <Color
              onChange={(e) => {
                let colorHex = e.hex
                onChange(i, colorHex)
              }}
              color={item.color}
            />
          </Col>
        )
      })}
    </Row>
  )
}

export default index
