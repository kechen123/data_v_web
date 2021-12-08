import React, { useRef, useState } from 'react'
import { useDrop } from 'ahooks'
import { v4 as uuidv4 } from 'uuid'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'
import { dropDrag, setStatus } from '@features/dropDragSlice'
import { Plug, SetWidget } from '@_data/Plugin'
import { setWidget } from '@features/widgetSlice'

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
  const dispatch = useAppDispatch()
  useDrop(dropRef, {
    onDom: (plug: Plug, e: any) => {
      const { rect } = plug
      let left = e?.offsetX
      let top = e?.offsetY
      console.log(left, top)
      left -= rect.width / 2
      top -= rect.height / 2
      console.log(left, top)
      let widget: Plug = {
        name: plug.name,
        url: plug.url,
        rect: {
          width: 100,
          height: 100,
          left: left,
          top: top,
        },
      }
      const uid: string = uuidv4().substring(0, 8)
      let obj: SetWidget = {
        key: uid,
        plug: widget,
      }
      dispatch(setWidget(obj))
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
    <div ref={dropRef} className={className} style={{ ...style, ...pstyle, opacity }}>
      {children}
    </div>
  )
}

export default Drop
