import React, { useState, useEffect } from 'react'
import { Tabs } from 'antd'
import eventBus from '@utils/eventBus'
import { WidgetObj } from '@_types/Plugin'
import Style from './style'
import ScreenSetting from './screenSetting'

const style: React.CSSProperties = {
  width: '100%',
  height: 'calc(100vh - 96px)',
  overflow: 'auto',
  paddingBottom: '20px',
}

const { TabPane } = Tabs
const Setting = (props) => {
  const [widgetObj, setWidgetObj] = useState<WidgetObj>()
  useEffect(() => {
    eventBus.addListener('setSettingObj', (data: WidgetObj) => {
      setWidgetObj(data)
    })
  }, [])

  const render = () => {
    if (widgetObj === undefined) {
      return <ScreenSetting />
    } else {
      return (
        <Tabs defaultActiveKey="1">
          <TabPane tab="外观" key="1">
            <div style={style}>
              <Style widgetObj={widgetObj} />
            </div>
          </TabPane>
          <TabPane tab="事件" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="数据" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      )
    }
  }
  return render()
}

export default Setting
