import React, { useState, useEffect, useCallback } from 'react'
import { Tabs } from 'antd'
import { useGetState } from 'ahooks'
import update from 'immutability-helper'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'
import { screen } from '@features/screenSlice'
import { widget as widgetSotre, setWidget } from '@features/widgetSlice'
import styled from 'styled-components'
import useActiveWidget from '@hooks/useActiveWidget'
import eventBus from '@utils/eventBus'
import { WidgetObj } from '@_types/Plugin'
import Style from './style'
import Data from './data/index'
import ScreenSetting from './screenSetting'

const style: React.CSSProperties = {
  width: '100%',
  height: 'calc(100vh - 96px)',
  overflow: 'auto',
  paddingBottom: '20px',
}

const Line = styled.ul`
  width: calc(100% - 12px * 2);
  height: 1px;
  margin: 12px;
  background-color: rgb(218 205 205 / 19%);
`

const { TabPane } = Tabs

const Setting = () => {
  const { widgetObj, setWidgetObj, setActiveWidgetValueByPath, setActiveWidgetConfigValue, setActiveWidgetRectValue } = useActiveWidget()
  const setConfig = (key: string | WidgetObj, val?: any) => {
    if (typeof key === 'object' && typeof val === 'undefined') {
      setWidgetObj(key)
    } else if (typeof key === 'string' && typeof val !== 'undefined') {
      setActiveWidgetConfigValue(key, val)
    }
  }
  const setRect = (key: string, val: any) => {
    setActiveWidgetRectValue(key, val)
  }
  const setBase = (key: string, val: any) => {
    let path = 'widget.' + key
    setActiveWidgetValueByPath(path, val)
  }

  useEffect(() => {
    //更新基础信息
    eventBus.addListener('changeSettingBase', setBase)
    //更新尺寸位置信息
    eventBus.addListener('changeSettingRect', setRect)
    //更新配置项信息
    eventBus.addListener('changeSettingConfig', setConfig)
    return () => {
      eventBus.removeListener('changeSettingBase', setBase)
      eventBus.removeListener('changeSettingRect', setRect)
      eventBus.removeListener('changeSettingConfig', setConfig)
    }
  }, [])

  const render = () => {
    if (widgetObj === undefined) {
      return <ScreenSetting />
    } else {
      return (
        <Tabs defaultActiveKey="1">
          <TabPane tab="基础配置" key="1">
            <div style={style}>
              <div className="style">
                <Style widgetObj={widgetObj} />
              </div>
              <Line></Line>
              <div className="data">{widgetObj.widget.dataConfig ? <Data {...widgetObj} /> : <div>当前组件不可设置数据</div>}</div>
            </div>
          </TabPane>
          <TabPane tab="交互事件" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      )
    }
  }
  return render()
}

export default Setting
