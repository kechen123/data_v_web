import React from 'react'
import Drop from '@components/drop'
import { useAppSelector } from '@storeApp/hooks'
import { screen } from '@features/screenSlice'
import { widget as widgetSlice } from '@features/widgetSlice'
import Widget from '@plugs/index'
import { SetWidget } from '@_data/Plugin'
import style from './index.module.less'

const Screen = (props) => {
  const { width, height, scale } = useAppSelector(screen)
  const widgets = useAppSelector(widgetSlice)
  return (
    <Drop className={style.screen} style={{ width: width + 'px', height: height + 'px' }}>
      {Object.keys(widgets).map((key) => {
        let item = widgets[key]
        let plug: SetWidget = {
          id: key,
          plug: item,
        }
        return <Widget key={key} {...plug} />
      })}
    </Drop>
  )
}

export default Screen
