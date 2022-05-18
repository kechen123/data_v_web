import React, { useState, useEffect, useCallback } from 'react'
import { Tabs } from 'antd'
import { useGetState } from 'ahooks'
import eventBus from '@utils/eventBus'
import update from 'immutability-helper'
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
  const [widgetObj, setWidgetObj, getWidgetObj] = useGetState<WidgetObj>()

  const changeWidget = useCallback(
    (key: string, val: any) => {
      const nowWidgetObj = getWidgetObj()
      if (nowWidgetObj === undefined) return
      let obj: any = {
        widget: {
          rect: {
            [key]: {
              $set: val,
            },
          },
        },
      }
      if (key === 'rotate') {
        obj = {
          widget: {
            rotate: {
              $set: val,
            },
          },
        }
      }
      let widgetObjCopy = update(nowWidgetObj, obj)
      setWidgetObj(widgetObjCopy)
      eventBus.emit('requestMoveable', key, val)
      // eventBus.emit('setWidgetMap', {
      //   id: widgetObjCopy.id,
      //   widget: widgetObjCopy.widget,
      // })
    },
    [widgetObj]
  )

  useEffect(() => {
    //更新整个页面的widgetObj
    eventBus.addListener('setSettingObj', (data: WidgetObj) => {
      setWidgetObj(data)
    })
    //更新widgetObj单个的值
    eventBus.addListener('changeSettingVal', changeWidget)
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
