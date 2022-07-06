import React, { useState } from 'react'
import { Collapse } from 'antd'
import { BarLine as BarLineType } from '../_types'
import Margin from './margin'
import Bar from './bar'
import Line from './line'
import X from './x'
import BarY from './barY'
import LineY from './lineY'
import Legend from './legend'
import Tooltip from './tooltip'

const { Panel } = Collapse

const Index = (props: BarLineType) => {
  const [barLine, setBarLine] = useState<BarLineType>(props)
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
        <Margin {...barLine.grid} />
      </Panel>
      <Panel header="柱状条" key="2" className="panel">
        <Bar {...barLine.bar} />
      </Panel>
      <Panel header="折线" key="3" className="panel">
        <Line {...barLine.line} />
      </Panel>
      <Panel header="X轴" key="4" className="panel">
        <X {...barLine.x} />
      </Panel>
      <Panel header="柱子Y轴" key="5" className="panel">
        <BarY {...barLine.barY} />
      </Panel>
      <Panel header="折线Y轴" key="6" className="panel">
        <LineY {...barLine.lineY} />
      </Panel>
      <Panel header="图例" key="5" className="panel">
        <Legend {...barLine.legend} />
      </Panel>
      <Panel header="提示层" key="7" className="panel">
        <Tooltip {...barLine.tooltip} />
      </Panel>
    </Collapse>
  )
}

export default Index
