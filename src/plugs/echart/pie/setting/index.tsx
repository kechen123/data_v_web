import React, { useState } from 'react'
import { Collapse } from 'antd'
import { Pie as PieBarType } from '../_types'
import Pie from './pie'
import Label from './label'
import LabelLine from './labelLine'
import Legend from './legend'
import Tooltip from './tooltip'

const { Panel } = Collapse

const Index = (props: PieBarType) => {
  const [pie, setPie] = useState<PieBarType>(props)
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
      <Panel header="基础设置" key="1" className="panel">
        <Pie {...pie} />
      </Panel>
      <Panel header="标签" key="2" className="panel">
        <Label {...pie.label} />
      </Panel>
      <Panel header="标签线" key="3" className="panel">
        <LabelLine {...pie.labelLine} />
      </Panel>
      <Panel header="图例" key="4" className="panel">
        <Legend {...pie.legend} />
      </Panel>
      <Panel header="提示层" key="5" className="panel">
        <Tooltip {...pie.tooltip} />
      </Panel>
    </Collapse>
  )
}

export default Index
