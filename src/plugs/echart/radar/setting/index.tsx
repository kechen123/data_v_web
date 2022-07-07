import React, { useState } from 'react'
import { Collapse } from 'antd'
import { Radar as RadarBarType } from '../_types'

const { Panel } = Collapse

const Index = (props: RadarBarType) => {
  const [radar, setRadar] = useState<RadarBarType>(props)
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
      className="collapse-1"
    >
      <Panel header="边距" key="1" className="panel">
        jjjj
      </Panel>
    </Collapse>
  )
}

export default Index
