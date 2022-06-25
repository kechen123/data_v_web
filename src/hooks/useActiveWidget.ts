import { widget } from './../store/features/widgetSlice'
import React, { useEffect, useMemo } from 'react'
import update from 'immutability-helper'
import { useGetState } from 'ahooks'
import eventBus from '@utils/eventBus'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'
import { screen } from '@features/screenSlice'
import { widget as widgetSotre, setWidget } from '@features/widgetSlice'
import { WidgetObj } from '@_types/Plugin'
import { getObjByPath } from '@utils/common'

const useActiveWidget = () => {
  const [widgetObj, setWidgetObj, getWidgetObj] = useGetState<WidgetObj>()
  const { activeWidgets: activeWidgetsId } = useAppSelector(screen)
  const widget = useAppSelector(widgetSotre)
  const dispatch = useAppDispatch()

  const activeWidgets = useMemo(() => {
    return activeWidgetsId.map((id) => {
      return {
        id,
        widget: widget[id],
      }
    })
  }, [activeWidgetsId, widget])

  useEffect(() => {
    const newWidget = widget[activeWidgetsId[0]]
    if (newWidget) {
      if (JSON.stringify(newWidget) !== JSON.stringify(widgetObj)) {
        const newWidgetObj = {
          id: activeWidgetsId[0],
          widget: newWidget,
        }
        setWidgetObj(newWidgetObj)
      }
    } else {
      setWidgetObj(undefined)
    }
  }, [activeWidgetsId, widget])

  const setActiveWidget = (widgetObj: WidgetObj) => {
    setWidgetObj(widgetObj)
    eventBus.emit('chengeActiveConfig', widgetObj) //更新页面数据
    dispatch(setWidget(widgetObj)) //更新store数据
  }

  const setActiveWidgetValueByPath = (path: string, value: any) => {
    const obj = getObjByPath(path, value)
    if (obj) {
      const widget = getWidgetObj()
      const newWidgetObj = update(widget, obj)
      if (newWidgetObj) {
        setActiveWidget(newWidgetObj)
      }
    }
  }

  const setActiveWidgetRectValue = (key: string, value: any) => {
    let path = 'widget.rect.' + key
    if (key === 'rotate') {
      path = 'widget.rotate'
    }
    setActiveWidgetValueByPath(path, value)
  }

  const setActiveWidgetConfigValue = (key: string, value: any) => {
    const path = 'widget.config.' + key

    setActiveWidgetValueByPath(path, value)
  }

  return { widgetObj, activeWidgets, activeWidgetsId, setWidgetObj: setActiveWidget, setActiveWidgetValueByPath, setActiveWidgetRectValue, setActiveWidgetConfigValue }
}
export default useActiveWidget
