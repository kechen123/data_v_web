import { useCallback, useRef } from 'react'
import { useDocumentEventListener } from 'react-datasheet-grid/dist/hooks/useDocumentEventListener'
import { ContextMenuItem, ContextMenuComponentProps } from 'react-datasheet-grid/dist/types'
import './contextMenu.less'

interface OtherMenu {
  type: string
  action: () => void
}
interface Props {
  propsMenu: ContextMenuComponentProps
  otherMenu?: OtherMenu[]
}
const renderItem = (item: ContextMenuItem) => {
  if (item.type === 'DELETE_ROW') {
    return '删除行'
  }

  if (item.type === 'DELETE_ROWS') {
    return (
      <>
        删除行 <b>{item.fromRow}</b> to <b>{item.toRow}</b>
      </>
    )
  }

  if (item.type === 'INSERT_ROW_BELLOW') {
    return '下方插入一行'
  }

  if (item.type === 'DUPLICATE_ROW') {
    return '复制行'
  }

  if (item.type === 'DUPLICATE_ROWS') {
    return (
      <>
        复制行 <b>{item.fromRow}</b> to <b>{item.toRow}</b>
      </>
    )
  }

  return item.type
}

const renderOtherItem = (item: OtherMenu) => {
  if (item.type === 'INSERT_COLUMN') {
    return '插入列'
  }
  return item.type
}

const ContextMenu = (props: Props) => {
  const { propsMenu, otherMenu } = props
  const { clientX, clientY, items, close } = propsMenu
  const containerRef = useRef<HTMLDivElement>(null)

  const onClickOutside = useCallback(
    (event: MouseEvent) => {
      const clickInside = containerRef.current?.contains(event.target as Node)

      if (!clickInside) {
        close()
      }
    },
    [close]
  )
  useDocumentEventListener('mousedown', onClickOutside)
  let menus = items
  if (otherMenu) {
    menus = items.concat(otherMenu as any)
  }

  return (
    <div className="dsg-context-menu" style={{ left: clientX + 'px', top: clientY + 'px' }} ref={containerRef}>
      {items.map((item) => (
        <div key={item.type} onClick={item.action} className="dsg-context-menu-item">
          {renderItem(item)}
        </div>
      ))}
      {otherMenu
        ? otherMenu.map((item) => (
            <div key={item.type} onClick={item.action} className="dsg-context-menu-item">
              {renderOtherItem(item)}
            </div>
          ))
        : ''}
    </div>
  )
}

export default ContextMenu
