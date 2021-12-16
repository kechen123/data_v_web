import React from 'react'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'
import { screen } from '@features/screenSlice'
import { widget } from '@features/widgetSlice'
import BaseAttr from './baseAttr'
const Style = () => {
  const { activeWidgets } = useAppSelector(screen)
  const widgetMap = useAppSelector(widget)
  console.log(activeWidgets, widgetMap)
  const dispatch = useAppDispatch()
  if (activeWidgets.length === 1) {
    let widget = widgetMap[activeWidgets[0]]

    return <BaseAttr />
  } else if (activeWidgets.length > 1) {
    return <BaseAttr />
  } else {
    return <></>
  }
}

export default Style
