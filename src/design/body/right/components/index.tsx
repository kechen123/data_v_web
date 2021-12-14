import React, { useState } from 'react'
import loadable from '@loadable/component'
import { Collapse, Row, Col, Form } from 'antd'

import { ConfigBlock } from '@_data/Config'
const { Panel } = Collapse
const json: Array<ConfigBlock> = [
  {
    name: '属性',
    rows: [
      {
        justify: 'space-between',
        col: [
          {
            span: 16,
            label: '宽度',
            url: 'input/text',
            props: {
              placeholder: '请输入',
            },
          },
        ],
      },
      {
        justify: 'space-between',
        col: [
          {
            span: 10,
            label: '宽度',
            url: 'input/number',
            props: {
              addonAfter: 'px',
            },
          },
          {
            span: 10,
            label: '宽度',
            url: 'select',
          },
        ],
      },
      {
        justify: 'space-between',
        col: [
          {
            span: 10,
            label: '宽度',
            url: 'input/number',
          },
          {
            span: 10,
            label: '宽度',
            url: 'input/number',
          },
        ],
      },
    ],
  },
]

const RenderComponent = (col) => {
  const OtherComponent = loadable(() => import(`./${col.url}`), {
    cacheKey: (props) => props.url,
  })
  return <OtherComponent />
}

const Build = () => {
  const col = (cols) => {
    return cols.map((col, i) => {
      return (
        <Col key={i} span={col.span}>
          <Form.Item label={col.label}>
            <RenderComponent {...col} />
          </Form.Item>
        </Col>
      )
    })
  }

  const row = (rows) => {
    return rows.map((row, i) => {
      return (
        <Row key={i} justify={row.justify}>
          {col(row.col)}
        </Row>
      )
    })
  }

  const block = (blocks) => {
    return blocks.map((block, i) => {
      return (
        <Panel header="This is panel header 1" key={i} extra={genExtra()}>
          <Form layout="vertical">{row(block.rows)}</Form>
        </Panel>
      )
    })
  }
  const genExtra = () => {
    return <i className="icon iconfont icon-fabulous " style={{ color: '#FFF', fontSize: '14px' }}></i>
  }
  return (
    <Collapse bordered={false} defaultActiveKey={[0]}>
      {block(json)}
    </Collapse>
  )

  // return (
  //   <Collapse  bordered={false} defaultActiveKey={['1']}>
  //     <Panel header="This is panel header 1" key="1" extra={genExtra()}>
  //       <div>11</div>
  //     </Panel>
  //     <Panel header="This is panel header 2" key="2" extra={genExtra()}>
  //       <div>222</div>
  //     </Panel>
  //     <Panel header="This is panel header 3" key="3" extra={genExtra()}>
  //       <div>3333</div>
  //     </Panel>
  //   </Collapse>
  // )
}

export default Build
