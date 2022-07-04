import React, { useState } from 'react'
import { Collapse } from 'antd'
import { ColorBar as ColorBarType } from '../_types'
import Margin from './margin'
import Bar from './bar'
import X from './x'
import Y from './y'

import Tooltip from './tooltip'

const { Panel } = Collapse

const Index = (props: ColorBarType) => {
  const [bar, setBar] = useState<ColorBarType>(props)
  const [active, setActive] = useState<string | string[]>([''])
  const barParam = {
    bar: bar.bar,
    number: bar.numberText,
  }
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
        <Margin {...bar.grid} />
      </Panel>
      <Panel header="柱状条" key="2" className="panel">
        <Bar {...barParam} />
      </Panel>
      <Panel header="X轴" key="3" className="panel">
        <X {...bar.x} />
      </Panel>
      <Panel header="Y轴" key="4" className="panel">
        <Y {...bar.y} />
      </Panel>

      <Panel header="提示层" key="6" className="panel">
        <Tooltip {...bar.tooltip} />
      </Panel>
    </Collapse>
  )
}

export default Index
