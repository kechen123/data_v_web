import React, { useState, useEffect, useRef, useMemo } from 'react'
import { useEventListener } from 'ahooks'
import Drop from '@components/drop'
import GridDiv from '@components/gridDiv'
import MoveableBox, { cRef } from '@components/moveableBox'
import { useAppSelector } from '@storeApp/hooks'
import { screen } from '@features/screenSlice'
import { widget as widgetSlice } from '@features/widgetSlice'
import Widget from '@plugs/index'
import { WidgetObj, MoveableBox as MoveableBoxProps } from '@_data/Plugin'
import { Scroll as ScrollInterface } from '@_data/Scroll'
import style from './index.module.less'

const Screen = (props: ScrollInterface) => {
  const { x, y } = props
  const moveContent = useRef<HTMLDivElement | null>(null)
  const [target, setTarget] = useState<Array<HTMLDivElement>>([])
  const [event, setEvent] = useState<any>(null)
  const { width, height, scale, screenWidget } = useAppSelector(screen)
  const widgetMap = useAppSelector(widgetSlice)
  const childRef = useRef<cRef>(null)
  const viewClick = (e) => {
    let el = e.target.parentElement
    if (el && el.getAttribute('class') !== null && el.getAttribute('class').indexOf('moveable') > -1) {
      return
    }
    setTarget([])
  }
  useEventListener('mousedown', viewClick)
  const widgetSelect = (e) => {
    e.stopPropagation()
    const target = e.currentTarget
    setTarget([target])
    setEvent(e)
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
      container: moveContent.current,
      target,
      setTarget,
      widgetList: widgetList,
    }
  }, [target])

  useEffect(() => {
    if (target.length === 1) {
      if (childRef.current) {
        const moveable = childRef.current.moveable
        moveable.dragStart(event)
      }
    }
  }, [target])

  return (
    <div
      // onClick={viewClick}
      ref={moveContent}
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
            select: widgetSelect,
          }
          return <Widget key={item.id} {...data} />
        })}
      </Drop>
      <MoveableBox ref={childRef} {...moveableBoxProps} />
    </div>
  )
}

export default Screen
