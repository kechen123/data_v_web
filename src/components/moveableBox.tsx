import React from 'react'
import { useAppSelector } from '@storeApp/hooks'
import { widget as widgetSlice } from '@features/widgetSlice'
import { SetWidget } from '@_data/Plugin'

interface move {
  target: Array<HTMLDivElement>
  setTarget: Function
  setWidget: SetWidget
}
const MoveableBox = () => {
  const widgets = useAppSelector(widgetSlice)
  return <div></div>
}

export default MoveableBox
