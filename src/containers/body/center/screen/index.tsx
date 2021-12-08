import React from 'react'
import Drop from '@components/drop'
import { useAppSelector } from '@storeApp/hooks'
import { screen } from '@features/screenSlice'
import { widget } from '@features/widgetSlice'
import Widget from '@plugs/index'
import style from './index.module.less'

const Screen = (props) => {
  const { width, height, scale } = useAppSelector(screen)
  const widgets = useAppSelector(widget)
  console.log(widgets)
  return (
    <Drop className={style.screen} style={{ width: width + 'px', height: height + 'px' }}>
      {Object.keys(widgets).map((key) => {
        let item = widgets[key]
        return <Widget key={key} {...item} />
      })}
    </Drop>
  )
}

export default Screen
