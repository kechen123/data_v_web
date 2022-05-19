import React, { useEffect, useState } from 'react'
import update from 'immutability-helper'
import { useGetState } from 'ahooks'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'
import { screen } from '@features/screenSlice'
import { widget as widgetSotre, setWidget } from '@features/widgetSlice'
import { WidgetObj } from '@_types/Plugin'
import { getObjByPath } from '@utils/common'

const useActiveWidget = () => {
  const [widgetObj, setWidgetObj, getWidgetObj] = useGetState<WidgetObj>()
  const { activeWidgets } = useAppSelector(screen)
  const widget = useAppSelector(widgetSotre)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const newWidget = widget[activeWidgets[0]]
    if (newWidget) {
      const newWidgetObj = {
        id: activeWidgets[0],
        widget: newWidget,
      }
      setWidgetObj(newWidgetObj)
    } else {
      setWidgetObj(undefined)
    }
  }, [activeWidgets])

  const setActiveWidget = (widgetObj: WidgetObj) => {
    setWidgetObj(widgetObj)
    dispatch(setWidget(widgetObj))
  }

  const setActiveWidgetValueByPath = (path: string, value: any) => {
    const obj = getObjByPath(path, value)
    if (obj) {
      const newWidgetObj = update(getWidgetObj(), obj)
      if (newWidgetObj) {
        setWidgetObj(newWidgetObj)
        setActiveWidget(newWidgetObj)
      }
    }
  }

  return { widgetObj, setActiveWidgetValueByPath, setWidgetObj: setActiveWidget }
}
export default useActiveWidget
