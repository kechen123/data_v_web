import React from 'react'
import { useAppSelector } from '@storeApp/hooks'
import { widget as widgetSlice } from '@features/widgetSlice'

interface move {
  target: Array<HTMLDivElement>
  setTarget: Function
}
const MoveableBox = () => {
  const widgets = useAppSelector(widgetSlice)
  return <div></div>
}

export default MoveableBox
