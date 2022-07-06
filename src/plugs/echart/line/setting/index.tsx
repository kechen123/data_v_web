import React, { useState } from 'react'
import { Collapse } from 'antd'
import { Line as LineType } from '../_types'
import Margin from './margin'
import Line from './line'
import X from './x'
import Y from './y'
import Legend from './legend'
import Tooltip from './tooltip'

const { Panel } = Collapse

const Index = (props: LineType) => {
  const [line, setLine] = useState<LineType>(props)
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
        <Margin {...line.grid} />
      </Panel>
      <Panel header="折线" key="2" className="panel">
        <Line {...line} />
      </Panel>
      <Panel header="X轴" key="3" className="panel">
        <X {...line.x} />
      </Panel>
      <Panel header="Y轴" key="4" className="panel">
        <Y {...line.y} />
      </Panel>
      <Panel header="图例" key="5" className="panel">
        <Legend {...line.legend} />
      </Panel>
      <Panel header="提示层" key="6" className="panel">
        <Tooltip {...line.tooltip} />
      </Panel>
    </Collapse>
  )
}

export default Index
