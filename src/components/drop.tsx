import React, { useRef,useState  } from 'react'
import { useDrop } from 'ahooks'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'
import { dropDrag, setStatus } from '@features/dropDragSlice' // 引入actions

const style: React.CSSProperties = {
  width: '100%',
  height: '100%',
}
interface Drag {
  children?: React.ReactNode
  className?:string
  style?:Object
}
const Drop = ({ children,className,style:pstyle }: Drag) => {
  const [isHovering, setIsHovering] = useState(false);
  const dropRef = useRef<HTMLDivElement | null>(null)
  const { status } = useAppSelector(dropDrag)
  const dispatch = useAppDispatch()
  useDrop(dropRef, {
    onDom: (content: string, e) => {
      console.log(content)
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
    <div ref={dropRef} className={className} style={{...style,...pstyle,opacity}}>
      {status}---
      {children}
    </div>
  )
}

export default Drop
