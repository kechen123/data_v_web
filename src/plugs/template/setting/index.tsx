import React, { useState } from 'react'
import { Collapse } from 'antd'
import { Text as TextBarType } from '../_types'

import './index.less'

const { Panel } = Collapse

const Index = (props: TextBarType) => {
  const [bar, setBar] = useState<TextBarType>(props)
  const [active, setActive] = useState<string | string[]>([''])
  return (
    <Collapse
      bordered={false}
      activeKey={active}
      expandIcon={({ isActive }) => (
        <span>
          <i className="icon iconfont icon-shouqijiantouxiao " style={{ transform: `rotate(${isActive ? 180 : 90}deg)` }} />
        </span>
      )}
      onChange={(key) => setActive(key)}
      className="basicBar"
    >
      <Panel header="边距" key="1" className="panel">
        jjjj
      </Panel>
    </Collapse>
  )
}

export default Index
