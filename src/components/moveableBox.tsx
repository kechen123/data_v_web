import React, { useState, useEffect, useMemo } from 'react'
import Moveable from 'react-moveable'
import { useThrottleFn } from 'ahooks'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'
import { widget as widgetSlice, setWidget } from '@features/widgetSlice'
import { WidgetObj, MoveableBox as MoveableBoxProps } from '@_data/Plugin'

const MoveableBox = ({ target, widgetList }: MoveableBoxProps) => {
  console.log(widgetList)
  const dispatch = useAppDispatch()
  const [frame, setFrame] = useState<WidgetObj>(widgetList[0])
  const { run } = useThrottleFn(
    (widget: WidgetObj) => {
      dispatch(setWidget(widget))
    },
    { wait: 500 }
  )
  useEffect(() => {
    if (widgetList.length === 1) {
      let widget = widgetList[0]
      setFrame(widget)
    }
  }, [widgetList])
  const frameCopy = useMemo(() => {
    try {
      return JSON.parse(JSON.stringify(frame))
    } catch (error) {}
  }, [frame])
  return (
    <Moveable
      target={target}
      resizable={true}
      keepRatio={false}
      throttleResize={0}
      renderDirections={['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se']}
      edge={false}
      zoom={1}
      origin={true}
      padding={{ left: 0, top: 0, right: 0, bottom: 0 }}
      onResizeStart={(e) => {
        e.setOrigin(['%', '%'])
        e.dragStart && e.dragStart.set([frameCopy.widget.rect.left || 0, frameCopy.widget.rect.top || 0])
      }}
      onResize={(e) => {
        const beforeTranslate = e.drag.beforeTranslate
        // let frameCopy:WidgetObj = JSON.parse(JSON.stringify(frame)
        console.log(frameCopy)
        // try {
        //   frameCopy.widget.rect.left = beforeTranslate[0]
        //   frameCopy.widget.rect.top = beforeTranslate[1]
        //   frameCopy.widget.rect.width = e.width
        //   frameCopy.widget.rect.height = e.height
        //   run(frameCopy)
        // } catch (error) {
        //   debugger
        // }

        e.target.style.width = `${e.width}px`
        e.target.style.height = `${e.height}px`
        e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`
      }}
    />
  )
}

export default MoveableBox
