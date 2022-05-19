import React, { useState, useEffect, useCallback } from 'react'
import { Tabs } from 'antd'
import { useGetState } from 'ahooks'
import update from 'immutability-helper'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'
import { screen } from '@features/screenSlice'
import { widget as widgetSotre, setWidget } from '@features/widgetSlice'
import useActiveWidget from '@hooks/useActiveWidget'
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

const Setting = () => {
  const { widgetObj, setActiveWidgetConfigValue, setActiveWidgetRectValue } = useActiveWidget()
  const setConfig = (key: string, val: any) => {
    setActiveWidgetConfigValue(key, val)
  }
  const setRect = (key: string, val: any) => {
    setActiveWidgetRectValue(key, val)
  }

  useEffect(() => {
    //更新基础信息
    eventBus.addListener('changeSettingRect', setRect)
    //更新配置项信息
    eventBus.addListener('changeSettingConfig', setConfig)
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
