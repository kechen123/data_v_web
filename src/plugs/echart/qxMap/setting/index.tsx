import React, { useState, useEffect } from 'react'
import { Collapse } from 'antd'
import Area from './area'
import Map from './map'
import Dot from './dot'
import Line from './line'
import { QXMAP } from '../_types'
const { Panel } = Collapse

const Index = (props: QXMAP) => {
  const [qx, setQx] = useState<QXMAP>(props)
  const [active, setActive] = useState<string | string[]>([''])
  const [chinaArea, setChinaArea] = useState()
  useEffect(() => {
    if (!chinaArea) {
      ;(async () => {
        const response = await fetch(`./geoMapData/chinaArea.json`)
        const area = await response.json()
        setChinaArea(area)
      })()
    }
  }, [])
  if (!chinaArea) {
    return <></>
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
      <Panel header="区域" key="1" className="panel">
        <Area {...{ ...qx, chinaArea }} />
      </Panel>
      <Panel header="地图样式" key="2" className="panel">
        <Map {...qx} />
      </Panel>
      <Panel header="点样式" key="3" className="panel">
        <Dot {...qx.dot} />
      </Panel>
      <Panel header="线样式" key="4" className="panel">
        <Line {...qx.line} />
      </Panel>
    </Collapse>
  )
}

export default Index
