import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ContextMenu as ContextMenuType } from '@_types/Global'
import MenuBody from './MenuBody'

interface Props {
  menu: Array<Array<ContextMenuType>>
  target?: Element | Document | Window
  selector?: string
  onContextMenu?: (ev: React.MouseEvent<HTMLElement>) => void
  onClick?: (...params: any[]) => void
}

const ContextMenu = (props: Props) => {
  const [el] = useState(document.createElement('div'))
  el.className = 'context-menu'
  useEffect(() => {
    document.getElementById('root')?.appendChild(el)
    return () => {
      document.getElementById('root')?.removeChild(el)
    }
  }, [])

  return createPortal(<MenuBody {...props} />, el)
}
export default ContextMenu
