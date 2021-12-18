import React, { useState, useEffect, useRef, useMemo, useContext } from 'react'
import { useEventListener } from 'ahooks'
import Drop from '@components/drop'
import GridDiv from '@components/gridDiv'
import MoveableBox, { cRef } from '@components/moveableBox'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'
import { screen, setActiveWidgets } from '@features/screenSlice'
import { widget as widgetSlice } from '@features/widgetSlice'
import Widget from '@plugs/index'
import { WidgetObj, MoveableBox as MoveableBoxProps } from '@_data/Plugin'
import { Scroll as ScrollInterface } from '@_data/Scroll'
import style from './index.module.less'
let event = null

const Screen = (props: ScrollInterface) => {
  const { x, y } = props
  const moveContent = useRef<HTMLDivElement | null>(null)
  const [target, setTarget] = useState<Array<HTMLDivElement>>([])
  const { width, height, scale, screenWidget, activeWidgets } = useAppSelector(screen)
  const dispatch = useAppDispatch()
  const widgetMap = useAppSelector(widgetSlice)
  const childRef = useRef<cRef>(null)
  const viewClick = (e) => {
    let el = e.target.parentElement
    if (el && el.getAttribute('class') !== null && el.getAttribute('class').indexOf('moveable') > -1) {
      return
    }
    event = null
    let id = e.target.getAttribute('id')
    if (activeWidgets.length > 0 && id && id === 'screen') {
      dispatch(setActiveWidgets([]))
    }
  }
  useEventListener('mousedown', viewClick)
  const widgetSelect = (e) => {
    e.stopPropagation()
    const targetId = e.currentTarget.getAttribute('data-id')
    dispatch(setActiveWidgets([targetId]))
    event = e
  }

  const WidgetObjList: Array<WidgetObj> = useMemo(() => {
    return Object.keys(widgetMap).map((key) => {
      return {
        id: key,
        widget: widgetMap[key],
      }
    })
  }, [widgetMap])

  const targetId: any = useMemo(() => {
    return target.map((item) => {
      return item.getAttribute('data-id')
    })
  }, [target])

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
  }, [targetId])

  useEffect(() => {
    if (activeWidgets.length === 0 && target.length > 0) {
      setTarget([])
    } else if (activeWidgets.length === 1) {
      let target = document.querySelector(`div[data-id='${activeWidgets[0]}']`) as any
      setTarget([target])
    }
  }, [activeWidgets])

  //选中/取消选中组件
  useEffect(() => {
    if (target.length === 1) {
      if (childRef.current && event != null) {
        const moveable = childRef.current.moveable
        moveable.dragStart(event)
      }
    }
  }, [target])

  //更新选中组件id
  useEffect(() => {
    if (event != null && targetId.sort().join('') != activeWidgets.sort().join('')) {
      dispatch(setActiveWidgets([targetId]))
    }
  }, [targetId])

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
