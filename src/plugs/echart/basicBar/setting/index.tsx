import React, { useState } from 'react'
import { Collapse } from 'antd'
import { BasicBar as BasicBarType } from '../_types'
import Margin from './margin'
import Bar from './bar'
import X from './x'
import Y from './y'
import './index.less'

const { Panel } = Collapse

const Index = (props: BasicBarType) => {
  const [bar, setBar] = useState<BasicBarType>(props)
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
        <Margin {...bar.grid} />
      </Panel>
      <Panel header="柱状条" key="2" className="panel">
        <Bar {...bar.bar} />
      </Panel>
      <Panel header="X轴" key="3" className="panel">
        <X {...bar.x} />
      </Panel>
      <Panel header="Y轴" key="4" className="panel">
        <Y {...bar.y} />
      </Panel>
    </Collapse>
  )
}

export default Index
