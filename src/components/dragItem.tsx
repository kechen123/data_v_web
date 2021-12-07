import React, { useRef } from 'react'
import { useDrag } from 'ahooks'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'
import { dropDrag, setStatus } from '@features/dropDragSlice' // 引入actions
import { Plug } from '@_data/Plugin'

interface Drag {
  children?: React.ReactNode
  data: Plug
}

const DragItem = ({ children, data }: Drag) => {
  const dragRef = useRef<HTMLDivElement | null>(null)
  const { status } = useAppSelector(dropDrag)
  const dispatch = useAppDispatch()
  useDrag(data, dragRef, {
    onDragStart: () => {
      if (status === '') {
        dispatch(setStatus('dragging'))
      }
    },
    onDragEnd: () => {
      dispatch(setStatus(''))
    },
  })
  return <div ref={dragRef}>{children}</div>
}
export default DragItem
