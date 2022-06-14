import React, { useRef, useState, useEffect } from 'react'
import { useDrop, useMouse } from 'ahooks'
import { v4 as uuidv4 } from 'uuid'
import eventBus from '@utils/eventBus'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'
import { dropDrag, setStatus } from '@features/dropDragSlice'
import { setWidget } from '@features/widgetSlice'
import { Widget } from '@_types/Plugin'
import { drop, screen, setActiveWidgets as setActiveWidgetsStore } from '@features/screenSlice'

const style: React.CSSProperties = {
  width: '100%',
  height: '100%',
}
interface Drag {
  children?: React.ReactNode
  className?: string
  style?: Object
}
const Drop = ({ children, className, style: pstyle }: Drag) => {
  const [isHovering, setIsHovering] = useState(false)
  const dropRef = useRef<HTMLDivElement | null>(null)
  const { status } = useAppSelector(dropDrag)
  const { widgetIndex } = useAppSelector(screen)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (status === '') {
      setIsHovering(false)
    }
  }, [status])
  useDrop(dropRef, {
    onDom: (widgetObj: Widget, e: any) => {
      const { rect, plugin } = widgetObj
      const domRect = dropRef.current?.getBoundingClientRect()
      if (!domRect) {
        return
      }
      let left = e.pageX - domRect.left
      let top = e.pageY - domRect.top
      left -= rect.width / 2
      top -= rect.height / 2
      let widget: Widget = {
        name: widgetObj.name,
        plugin: {
          name: plugin.name,
          url: plugin.url,
        },

        img: widgetObj.img,
        rect: {
          width: rect.width,
          height: rect.height,
          left: left,
          top: top,
        },
        rotate: 0,
        config: widgetObj.config,
      }
      const uid: string = uuidv4().substring(0, 8)
      dispatch(
        setWidget({
          id: uid,
          widget: widget,
        })
      )
      dispatch(setActiveWidgetsStore([uid]))
      // eventBus.emit('setActiveWidgets', [uid])
      // dispatch(setWidget(obj))
      dispatch(drop(uid))
    },
    onDragEnter: () => {
      setIsHovering(true)
      dispatch(setStatus('dragEnter'))
    },
    onDragLeave: () => {
      setIsHovering(false)
      dispatch(setStatus('dragLeave'))
    },
  })
  const opacity = isHovering ? 0.8 : 1
  return (
    <div id="screen" ref={dropRef} className={className} style={{ ...style, ...pstyle, opacity }}>
      {children}
    </div>
  )
}

export default Drop
