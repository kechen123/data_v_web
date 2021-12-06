import React, { useRef } from 'react'
import { useDrop, useDrag } from 'ahooks'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'
import { dropDrag, setStatus } from '@features/dropDragSlice' // 引入actions

interface Drag {
  children?: React.ReactNode
}
const Drop = ({ children }: Drag) => {
  const dropRef = useRef<HTMLDivElement | null>(null)
  const { status } = useAppSelector(dropDrag)
  const dispatch = useAppDispatch()
  useDrop(dropRef, {
    onDom: (content: string, e) => {
      console.log(content)
    },
    onDragEnter: () => {
      dispatch(setStatus('dragEnter'))
    },
    onDragLeave: () => {
      dispatch(setStatus('dragLeave'))
    },
  })
  return (
    <div ref={dropRef} style={{ border: '1px dashed #e8e8e8', padding: 16, textAlign: 'center' }}>
      {status}
      {children}
    </div>
  )
}

export default Drop
