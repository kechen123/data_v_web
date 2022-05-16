import React, { useState } from 'react'
import loadable from '@loadable/component'
import { Collapse, Row, Col, Form } from 'antd'

import { ConfigBlock } from '@_types/Config'
const { Panel } = Collapse
const json: Array<ConfigBlock> = [
  {
    name: '属性',
    rows: [
      {
        justify: 'space-between',
        col: [
          {
            id: 'name',
            span: 16,
            label: '名称',
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
            id: 'width',
            span: 10,
            label: '宽度',
            url: 'input/number',
            props: {
              addonAfter: 'px',
            },
          },
          {
            id: 'height',
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
            id: 'margin',
            span: 10,
            label: '外边距',
            url: 'input/number',
          },
          {
            id: 'padding',
            span: 10,
            label: '内边距',
            url: 'input/number',
          },
        ],
      },
    ],
  },
  {
    name: '皮肤',
    rows: [
      {
        justify: 'space-between',
        col: [
          {
            id: 'colors',
            span: 8,
            label: '多选',
            url: 'checkBox',
            option: [
              {
                label: '黑色',
                props: {},
              },
            ],
          },
          {
            id: 'colors',
            span: 8,
            label: '多选',
            url: 'checkBox',
            option: [
              {
                label: '黑色',
                props: {},
              },
            ],
          },
          {
            id: 'colors',
            span: 8,
            label: '多选',
            url: 'checkBox',
            option: [
              {
                label: '黑色',
                props: {},
              },
            ],
          },
          {
            id: 'colors',
            span: 20,
            label: '多选组',
            url: 'checkBox',
            option: [
              {
                label: '绿色',
                props: {
                  checked: true,
                },
              },
              {
                label: '黑色',
                props: {},
              },
              {
                label: '白色',
                props: {},
              },
            ],
          },
          {
            id: 'colors',
            span: 6,
            label: '颜色',
            url: 'color',
            option: [
              {
                props: {
                  color: '#FFF',
                  span: 6,
                },
              },
            ],
          },
          {
            id: 'colors',
            span: 12,
            label: '颜色组',
            url: '786',
            option: [
              {
                props: {
                  color: '#FFF',
                  span: 6,
                },
              },
              {
                props: {
                  color: '#FFF',
                  span: 6,
                },
              },
            ],
          },
        ],
      },
    ],
  },
]

const setval = (id: string, val: any) => {
  // console.log(id, val)
}

const RenderComponent = (col) => {
  const OtherComponent = loadable(() => import(`./${col.url}`), {
    cacheKey: (col) => col.url,
  })
  const props = {
    ...col,
    change: setval,
  }
  return <OtherComponent {...props} />
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
        <Panel header={block.name} key={i} extra={genExtra()}>
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
