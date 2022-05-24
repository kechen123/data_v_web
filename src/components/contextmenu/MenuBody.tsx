import React, { useState, useEffect, useRef } from 'react'
import { useEventListener, useClickAway } from 'ahooks'
import { ContextMenu as ContextMenuType } from '@_types/Global'
import styles from './menuBody.module.less'

interface BodyProps {
  menu: Array<Array<ContextMenuType>>
  target?: Element | Document | Window
  selector?: string
  onContextMenu?: (ev: React.MouseEvent<HTMLElement>) => void
  onClick?: (...params: any[]) => void
}

const MenuBody = (props: BodyProps) => {
  const { menu, selector, onContextMenu, onClick } = props
  const [visible, setVisible] = useState(false)
  const [rect, setRect] = useState([0, 0])
  const ref = useRef<HTMLDivElement>(null)
  const target = props?.target || document

  const handle = (ev) => {
    if (ref.current) {
      const pageSize = document.body.getBoundingClientRect()
      const pageHeight = pageSize.height
      const pageWidth = pageSize.width
      const rect = ref.current.getBoundingClientRect()
      const contextHeight = rect.height
      const contextWidth = rect.width
      const top = ev.clientY
      const left = ev.clientX
      const x = left + contextWidth > pageWidth ? pageWidth - contextWidth - 10 : left
      const y = top + contextHeight > pageHeight ? pageHeight - contextHeight - 10 : top
      setRect([x, y])
      setVisible(true)
      onContextMenu && onContextMenu(ev)
    }
  }

  useEffect(() => {
    window.addEventListener('contextmenu', function (event) {
      event.preventDefault()
    })
    target.addEventListener('contextmenu', function (event) {
      event.preventDefault()
      if (selector) {
        let el = event.target as Element,
          b = true
        while (!el.matches(selector)) {
          if (target === el || !el.parentElement) {
            b = false
            return
          }
          el = el.parentElement as Element
        }
        b && handle(event)
      } else {
        handle(event)
      }
    })
  }, [])

  useClickAway(() => {
    setVisible(false)
  }, ref)

  const renderMenu = () => {
    return menu.map((item, key) => {
      return (
        <div className={styles.group} key={key}>
          {item.map((item1, key1) => {
            return (
              <div
                className={styles.item}
                key={key1}
                onClick={(ev) => {
                  item1.handler && item1.handler(ev, item, item1)
                  onClick && onClick(ev, item, item1)
                  setVisible(false)
                }}
              >
                <div>{item1.label}</div>
                <div>
                  {item1.keyPress ? (
                    <span>
                      {item1.keyPress}+{item1.keyCode}
                    </span>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )
    })
  }

  return (
    <div className={`${styles.contextMenuRoot} contextMenuRoot`} style={{ display: visible ? 'block' : 'none' }}>
      <div className={styles.mask}></div>
      <div className={styles.wrap}>
        <div className={styles.contextView} ref={ref} style={{ left: rect[0], top: rect[1] }}>
          <div className={styles.context}>{renderMenu()}</div>
        </div>
      </div>
    </div>
  )
}
export default MenuBody
