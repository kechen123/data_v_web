import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useEventListener } from 'ahooks'
import { message, Modal } from 'antd'
import Selecto from 'react-selecto'
import Drop from '@components/drop'
import ContextMenu from '@components/contextmenu'
import MoveableBox, { cRef } from '@components/moveableBox'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'
import { getFetch } from '@utils/request'
import { screen, initScreen, setActiveWidgets as setActiveWidgetsStore } from '@features/screenSlice'
import { widget, initWidget, setWidget, delWidget } from '@features/widgetSlice'
import Widget from '@plugs/index'
import { WidgetObj, MoveableBox as MoveableBoxProps } from '@_types/Plugin'
import { Scroll as ScrollInterface } from '@_types/Scroll'
import { SCREENMARGIN } from '@config/index'
import { tabContextMenu } from '@config/contextmenu'
import { getUrlParam, equalArr } from '@utils/common'
import useContextClick from './useContextClick'
import style from './index.module.less'

const baseHost = window.gConfig.baseHost

interface Props {
  preview: boolean
  setPreview: (preview: boolean) => void
}

let event: any = null

const defaultScreenData = async (id: string) => {
  try {
    const res = await getFetch('/rs/screen?id=' + id)
    if (res.data.length === 1) {
      const data = res.data[0]
      const widgetData = data.widget
      const screenData = data.screen
      return { widgetData, screenData }
    }
    const error = new Error(res.data.message)
    throw error
  } catch (error: any) {
    message.error(error.message)
    return {}
  }
}

const Screen = (props: Props) => {
  const [searchParams] = useSearchParams()
  const moveContent = useRef<HTMLDivElement>(null) // 移动组件的容器
  const prohibit = props.preview // 是否预览
  const [target, setTarget] = useState<Array<HTMLDivElement>>([]) // 目标组件 可以拖拽的组件
  const widgetMap = useAppSelector(widget)
  const { width, height, scale, backgroundColor, backgroundImage, screenWidget, activeWidgets } = useAppSelector(screen) // 获取当前屏幕基本信息
  const childRef = useRef<cRef>(null)
  const dispatch = useAppDispatch()
  const contextMenuClick = useContextClick({ widgetMap, activeWidgets })

  //右键菜单
  const handleContextMenuClick = (...params) => {
    const [ev, group, item] = params
    const { id, label } = item
    switch (id) {
      case 'copy':
      case 'top':
      case 'bottom':
      case 'up':
      case 'down':
      case 'group':
      case 'hide':
      case 'lock':
      case 'del':
        contextMenuClick[id]()
        break
      default:
        break
    }
  }

  //组件list
  const WidgetObjList: Array<WidgetObj> = useMemo(() => {
    return Object.keys(widgetMap).map((key) => {
      return {
        id: key,
        widget: widgetMap[key],
      }
    })
  }, [widgetMap])

  //组件移动参数
  const moveableBoxProps: MoveableBoxProps = useMemo(() => {
    let widgetList: Array<WidgetObj> = []
    target.forEach((dom) => {
      let id = dom.getAttribute('data-id')
      if (id) {
        widgetList.push({
          id,
          widget: widgetMap[id],
        })
      }
    })
    return {
      target,
      widgetList: widgetList,
    }
  }, [target])

  //组件选中
  const widgetSelect = (e) => {
    if (prohibit) return
    e.stopPropagation()
    const targetId = e.currentTarget.getAttribute('data-id')
    const newActiveWidgets = [targetId]
    if (!equalArr(newActiveWidgets, activeWidgets)) {
      dispatch(setActiveWidgetsStore(newActiveWidgets))
    }
    event = e
  }

  //组件取消选中
  const viewClick = (e) => {
    let el = e.target.parentElement
    if (el && el.getAttribute('class') !== null && el.getAttribute('class').indexOf('moveable') > -1) {
      return
    }
    event = null
    let id = e.target.getAttribute('id')
    if (activeWidgets.length > 0 && id && id === 'screen') {
      dispatch(setActiveWidgetsStore([]))
    }
  }

  //设置可以拖拽的组件
  useEffect(() => {
    document.querySelectorAll(`.widget`).forEach((item) => {
      item.classList.remove('active')
      if (item.classList.contains('active')) {
        item.classList.remove('active')
      }
      if (activeWidgets.includes(item.getAttribute('data-id') || '')) {
        item.classList.add('active')
      }
    })

    if (activeWidgets.length === 0 && target.length > 0) {
      setTarget([])
    } else if (activeWidgets.length === 1) {
      let target = document.querySelector(`div[data-id='${activeWidgets[0]}']`) as any
      if (target) {
        setTarget([target])
      }
    } else {
      let targets = activeWidgets.map((item) => {
        return document.querySelector(`div[data-id='${item}']`) as any
      })
      setTarget(targets)
    }
  }, [activeWidgets])

  //选中/取消选中组件
  useEffect(() => {
    if (activeWidgets.length === 1) {
      if (childRef.current && event != null && event.type === 'mousedown') {
        const moveable = childRef.current.moveable
        moveable.dragStart(event)
      }
    }
  }, [target])

  //全屏预览取消选中
  useEffect(() => {
    if (props.preview && activeWidgets.length > 0) {
      event = null
      dispatch(setActiveWidgetsStore([]))
    }
  }, [props.preview])

  //编辑回显
  useEffect(() => {
    ;(async () => {
      // const id = getUrlParam('id')
      const id = searchParams.get('id')
      if (!id) return
      const { widgetData, screenData } = await defaultScreenData(id)
      dispatch(initWidget(widgetData))
      dispatch(initScreen(screenData))
    })()
  }, [])

  useEventListener('mousedown', viewClick)
  useEventListener('mouseup', (e) => {
    event = e
  })

  let bodyW = (scale / 100) * width + SCREENMARGIN[1] + SCREENMARGIN[3]
  let bodyH = (scale / 100) * height + SCREENMARGIN[0] + SCREENMARGIN[2]
  return (
    <div
      ref={moveContent}
      className={`${style.screenView} moveContent`}
      style={{
        width: bodyW + 'px',
        height: bodyH + 'px',
      }}
    >
      <Drop
        className={`${style.screen}  wd_list`}
        style={{
          width: width + 'px',
          height: height + 'px',
          transform: `translate(0px, 0px) scale(${scale / 100})`,
          backgroundColor: backgroundColor,
          backgroundImage: `url(${baseHost + backgroundImage})`,
          backgroundSize: 'auto 100%',
        }}
      >
        <WidgetList WidgetObjList={WidgetObjList} widgetSelect={widgetSelect} />
        <MoveableBox ref={childRef} {...moveableBoxProps} />
        {moveContent.current ? <ContextMenu menu={tabContextMenu} target={moveContent.current as Element} selector=".widget" onClick={handleContextMenuClick} /> : ''}
      </Drop>
      {/* <Selecto
        container={document.getElementById('view')}
        selectableTargets={['.widget']}
        hitRate={30}
        selectByClick={false}
        selectFromInside={false}
        ratio={0}
        toggleContinueSelect={['shift']}
        onDragStart={(e: any) => {
          if (childRef && childRef.current) {
            const ismove = childRef.current.moveable.isMoveableElement(e.inputEvent.target)
            if (ismove) {
              e.stop()
            }
          }
        }}
        onSelect={(e: any) => {
          const target = e.selected.map((item) => {
            return item.getAttribute('data-id')
          })
          setActiveWidgets(target)
        }}
      ></Selecto> */}
    </div>
  )
}

const WidgetList = React.memo(({ WidgetObjList, widgetSelect }: any) => {
  return (
    <>
      {WidgetObjList.map((item) => {
        const {
          id,
          widget: {
            plugin: { url },
            rect,
            rotate,
          },
        } = item
        return (
          <div
            key={id}
            // onClick={widgetSelect}
            onMouseDown={widgetSelect}
            data-id={id}
            className={`widget `}
            style={{
              width: rect.width + 'px',
              height: rect.height + 'px',
              transform: `translate(${rect.left}px, ${rect.top}px) rotate(${rotate}deg)`,
            }}
          >
            <Widget {...item} />
          </div>
        )
      })}
    </>
  )
})

export default Screen
