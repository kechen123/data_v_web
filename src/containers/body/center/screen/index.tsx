import React, { useState, useEffect, useMemo } from 'react'
import Drop from '@components/drop'
import GridDiv from '@components/gridDiv'
import MoveableBox from '@components/moveableBox'
import { useAppSelector } from '@storeApp/hooks'
import { screen } from '@features/screenSlice'
import { widget as widgetSlice } from '@features/widgetSlice'
import Widget from '@plugs/index'
import { WidgetObj, MoveableBox as MoveableBoxProps } from '@_data/Plugin'
import { Scroll as ScrollInterface } from '@_data/Scroll'
import style from './index.module.less'

const Screen = (props: ScrollInterface) => {
  const { x, y } = props
  const [target, setTarget] = useState<Array<HTMLDivElement>>([])
  const { width, height, scale, screenWidget } = useAppSelector(screen)
  const widgetMap = useAppSelector(widgetSlice)

  const widgetOnClick = (e) => {
    e.stopPropagation()
    const target = e.currentTarget
    setTarget([target])
  }

  const WidgetObjList: Array<WidgetObj> = useMemo(() => {
    return Object.keys(widgetMap).map((key) => {
      return {
        id: key,
        widget: widgetMap[key],
      }
    })
  }, [widgetMap])

  const moveableBoxProps: MoveableBoxProps = useMemo(() => {
    let widgetList: Array<WidgetObj> = []
    target.forEach((dom) => {
      let id = dom.getAttribute('data-id')
      if (id) {
        widgetList.push({
          id,
          widget: widgetMap[id],
        })
      }
    })
    return {
      target,
      setTarget,
      widgetList: widgetList,
    }
  }, [target])

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
        {WidgetObjList.map((item) => {
          let data = {
            widgetObj: item,
            onclick: widgetOnClick,
          }
          return <Widget key={item.id} {...data} />
        })}
      </Drop>
      <MoveableBox {...moveableBoxProps} />
    </div>
  )
}

export default Screen
