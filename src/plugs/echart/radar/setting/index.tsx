import React, { useState } from 'react'
import { Collapse } from 'antd'
import { Radar as RadarBarType } from '../_types'
import BaseRadar from './baseRadar'
import DataList from './dataList'
import Legend from './legend'
import Tooltip from './tooltip'

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
      <Panel header="全局样式" key="1" className="panel">
        <BaseRadar {...radar.radar} />
      </Panel>
      <Panel header="数据样式" key="2" className="panel">
        <DataList {...radar.dataItem} />
      </Panel>
      <Panel header="图例" key="3" className="panel">
        <Legend {...radar.legend} />
      </Panel>
      <Panel header="提示层" key="4" className="panel">
        <Tooltip {...radar.tooltip} />
      </Panel>
    </Collapse>
  )
}

export default Index
