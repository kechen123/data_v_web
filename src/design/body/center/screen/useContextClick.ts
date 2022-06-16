import React, { useEffect, useState } from 'react'
import { message, Modal } from 'antd'
import { v4 as uuidv4 } from 'uuid'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'
import { screen, initScreen, setActiveWidgets as setActiveWidgetsStore } from '@features/screenSlice'
import { initWidget, setWidget, delWidget } from '@features/widgetSlice'

interface ContextMenuProps {
  widgetMap: any
  activeWidgets: any
}
const useContextClick = (props: ContextMenuProps) => {
  const { widgetMap, activeWidgets } = props
  const dispatch = useAppDispatch()

  const copy = () => {
    const uid: string = uuidv4().substring(0, 8)
    activeWidgets.forEach((key) => {
      if (activeWidgets.length === 1) {
        if (key === activeWidgets[0]) {
          const widget = widgetMap[key]
          const newWidgetObj = {
            id: uid,
            widget: {
              ...widget,
              rect: {
                ...widget.rect,
                left: widget.rect.left + 20,
                top: widget.rect.top + 20,
              },
              name: `${widgetMap[key].name} copy`,
            },
          }
          dispatch(setWidget(newWidgetObj))
          dispatch(setActiveWidgetsStore([uid]))
          message.success('复制成功')
        }
      }
    })
    // const newWidgetObj = {
    // ...widgetObj,
  }

  const top = (text: string) => {}

  const bottom = (text: string) => {}

  const up = (text: string) => {}

  const down = (text: string) => {}

  const group = (text: string) => {}

  const hide = (text: string) => {}

  const lock = (text: string) => {}

  const del = () => {
    Modal.confirm({
      title: '删除组件',
      centered: true,
      content: '删除后无法恢复！确定要删除?',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        dispatch(delWidget(activeWidgets))
        dispatch(setActiveWidgetsStore([]))
        message.success('删除成功')
      },
    })
  }

  return { copy, top, bottom, up, down, group, hide, lock, del }
}

export default useContextClick
