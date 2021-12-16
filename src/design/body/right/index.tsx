import React from 'react'
import { Tabs } from 'antd'
import Style from '@setting/style'
import './index.less'
import style from './index.module.less'

const { TabPane } = Tabs
const Right = (props) => {
  return (
    <div className={style.right}>
      <aside>
        <Tabs defaultActiveKey="1">
          <TabPane tab="外观" key="1">
            <Style />
          </TabPane>
          <TabPane tab="事件" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="数据" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </aside>
    </div>
  )
}

Right.propTypes = {}

export default Right
