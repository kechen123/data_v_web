import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
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
import eventBus from '@utils/eventBus'
import Widget from '@plugs/index'
import { WidgetObj, MoveableBox as MoveableBoxProps } from '@_types/Plugin'
import { Scroll as ScrollInterface } from '@_types/Scroll'
import { SCREENMARGIN } from '@config/index'
import { tabContextMenu } from '@config/contextmenu'
import { getUrlParam } from '@utils/common'
import { baseHost } from '@config/http'
// import contextMenuClick from './handleContextClick'
import useContextClick from './useContextClick'
import style from './index.module.less'

let event: any = null

const defaultScreenData = async () => {
  const id = getUrlParam('id')
  if (id) {
    const res = await getFetch('/rs/screen?id=' + id)
    if (res.data.length === 1) {
      const data = res.data[0]
      const widgetData = data.widget
      const screenData = data.screen
      return { widgetData, screenData }
    }
  }
  return {}
}

const Screen = () => {
  // const [widgetMap, setWidgetMap] = useState({}) // 存储所有组件
  // const [activeWidgets, setActiveWidgets] = useState<any>([]) // 存储当前激活的组件
  // const widgetMapRef = useRef<any>([]) // 所有组件最新值
  // const activeWidgetsRef = useRef<any>([]) // 当前激活的组件最新值
  const moveContent = useRef<HTMLDivElement>(null) // 移动组件的容器
  const [target, setTarget] = useState<Array<HTMLDivElement>>([]) // 目标组件 可以拖拽的组件
  const widgetMap = useAppSelector(widget)
  const { width, height, scale, backgroundColor, backgroundImage, screenWidget, activeWidgets } = useAppSelector(screen) // 获取当前屏幕基本信息
  const childRef = useRef<cRef>(null)
  const dispatch = useAppDispatch()
  const contextMenuClick = useContextClick({ widgetMap, activeWidgets })

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

  //右键菜单
  const handleContextMenuClick = (...params) => {
    console.log('del', params)
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

    // const param = {
    //   ev: ev,
    //   group: group,
    //   item: item,
    //   data: {
    //     widgetMap: widgetMapRef.current,
    //     activeWidget: activeWidgetsRef.current,
    //   },
    // }
    // contextMenuClick(param)
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
      container: moveContent.current,
      target,
      setTarget,
      widgetList: widgetList,
    }
  }, [target])

  //新增，变更组件
  // const setWidgetMapBus = useCallback(
  //   (data: WidgetObj) => {
  //     dispatch(setWidget(data))
  //   },
  //   [widgetMap]
  // )

  //组件选中
  const widgetSelect = (e) => {
    e.stopPropagation()
    const targetId = e.currentTarget.getAttribute('data-id')
    dispatch(setActiveWidgetsStore([targetId]))
    event = e
  }

  //删除组件
  // const delWidgetMapBus = useCallback(
  //   (ids: string[] | string) => {
  //     const widgetMapCopy = { ...widgetMapRef.current }
  //     if (typeof ids === 'string') {
  //       delete widgetMapCopy[ids]
  //     } else {
  //       ids.forEach((id) => {
  //         delete widgetMapCopy[id]
  //       })
  //     }
  //     widgetMapRef.current = widgetMapCopy
  //     setWidgetMap(widgetMapCopy)
  //     dispatch(delWidget(ids))
  //     message.success('删除成功')
  //   },
  //   [widgetMap]
  // )

  //删除选中组件
  // const delActiveWidgetsBus = useCallback(() => {
  //   delWidgetMapBus(activeWidgetsRef.current)
  //   setActiveWidgetsBus([])
  // }, [activeWidgets])

  //参数修改
  // const changePlug = useCallback(
  //   (id, data: any) => {
  //     // let widgetCopy = { ...widgetMapRef.current[id] }
  //     // widgetCopy = {
  //     //   ...widgetCopy,
  //     //   ...data,
  //     // }
  //     // const widgetMapCopy = {
  //     //   ...widgetMapRef.current,
  //     //   [id]: widgetCopy,
  //     // }
  //     // widgetMapRef.current = widgetMapCopy
  //     // setWidgetMap(widgetMapCopy)
  //   },
  //   [widgetMap]
  // )

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

  //订阅组件变更
  useEffect(() => {
    // eventBus.addListener('setWidgetMap', setWidgetMapBus)
    // eventBus.addListener('delWidgetMap', delWidgetMapBus)
    // eventBus.addListener('delActiveWidgets', delActiveWidgetsBus)
    // eventBus.addListener('changePlug', changePlug)
    return () => {
      // eventBus.removeListener('setWidgetMap', setWidgetMapBus)
      // eventBus.removeListener('delWidgetMap', delWidgetMapBus)
      // eventBus.removeListener('setActiveWidgets', setActiveWidgetsBus)
      // eventBus.removeListener('delActiveWidgets', delActiveWidgetsBus)
      // eventBus.removeListener('changePlug', changePlug)
    }
  }, [])

  //编辑回显
  useEffect(() => {
    ;(async () => {
      const id = getUrlParam('id')
      if (!id) return
      const { widgetData, screenData } = await defaultScreenData()
      // const widgetMapCopy = { ...widgetMapRef.current }
      // let widgetList = Object.keys(widgetData).map((item) => {
      //   return {
      //     id: item,
      //     widget: widgetData[item],
      //   }
      // })
      // widgetList.forEach((item) => {
      //   widgetMapCopy[item.id] = item.widget
      // })
      // widgetMapRef.current = widgetMapCopy
      // setWidgetMap(widgetMapCopy)
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
  console.log(WidgetObjList)
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
              cursor: 'move',
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
