import React from 'react'
import Drop from '@components/drop'
import GridDiv from '@components/gridDiv'
import { useAppSelector } from '@storeApp/hooks'
import { screen } from '@features/screenSlice'
import { widget as widgetSlice } from '@features/widgetSlice'
import Widget from '@plugs/index'
import { SetWidget } from '@_data/Plugin'
import { Scroll as ScrollInterface } from '@_data/Scroll'
import style from './index.module.less'

const Screen = (props: ScrollInterface) => {
  const { x, y } = props
  const { width, height, scale } = useAppSelector(screen)
  const widgets = useAppSelector(widgetSlice)
  return (
    <div
      className={style.screenView}
      style={{
        width: width + 'px',
        height: height + 'px',
        minWidth: width + 'px',
        minHeight: height + 'px',
        transform: `translate(${-x}px, ${-y}px)`,
      }}
    >
      <div className={style.gridDiv}>
        <GridDiv />
      </div>
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
    </div>
  )
}

export default Screen
