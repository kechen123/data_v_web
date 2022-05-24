import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { useEventListener } from 'ahooks'
import Selecto from 'react-selecto'
import Drop from '@components/drop'
import ContextMenu from '@components/contextmenu'
import MoveableBox, { cRef } from '@components/moveableBox'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'

import { screen, setActiveWidgets as setActiveWidgetsStore } from '@features/screenSlice'
import { setWidget, delWidget } from '@features/widgetSlice'
import eventBus from '@utils/eventBus'
import Widget from '@plugs/index'
import { WidgetObj, MoveableBox as MoveableBoxProps } from '@_types/Plugin'
import { Scroll as ScrollInterface } from '@_types/Scroll'
import { SCREENMARGIN } from '@config/index'
import { tabContextMenu } from '@config/contextmenu'
import contextMenuClick from './handleContextClick'
import style from './index.module.less'

let event: any = null

const Screen = () => {
  const [widgetMap, setWidgetMap] = useState({}) // 存储所有组件
  const [activeWidgets, setActiveWidgets] = useState<any>([]) // 存储当前激活的组件
  const widgetMapRef = useRef<any>([]) // 所有组件最新值
  const activeWidgetsRef = useRef<any>([]) // 当前激活的组件最新值
  const moveContent = useRef<HTMLDivElement>(null) // 移动组件的容器
  const [target, setTarget] = useState<Array<HTMLDivElement>>([]) // 目标组件 可以拖拽的组件
  const { width, height, scale, backgroundColor, backgroundImage, screenWidget } = useAppSelector(screen) // 获取当前屏幕基本信息
  const childRef = useRef<cRef>(null)
  const dispatch = useAppDispatch()

  //组件取消选中
  const viewClick = (e) => {
    let el = e.target.parentElement
    if (el && el.getAttribute('class') !== null && el.getAttribute('class').indexOf('moveable') > -1) {
      return
    }
    event = null
    let id = e.target.getAttribute('id')
    if (activeWidgets.length > 0 && id && id === 'screen') {
      setActiveWidgets([])
    }
  }

  //右键菜单
  const handleContextMenuClick = (...params) => {
    contextMenuClick(params)
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

  //当前选中组件data-id
  const targetId: any = useMemo(() => {
    return target.map((item) => {
      return item.getAttribute('data-id')
    })
  }, [target])

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
  const setWidgetMapBus = useCallback(
    (data: WidgetObj) => {
      const widgetMapCopy = { ...widgetMapRef.current }
      widgetMapCopy[data.id] = data.widget
      widgetMapRef.current = widgetMapCopy
      setWidgetMap(widgetMapCopy)
      dispatch(setWidget(data))
    },
    [widgetMap]
  )

  //设置选中组件id
  const setActiveWidgetsBus = (arr: Array<any>) => {
    setActiveWidgets(arr)
    activeWidgetsRef.current = arr
  }

  //组件选中
  const widgetSelect = (e) => {
    e.stopPropagation()
    const targetId = e.currentTarget.getAttribute('data-id')
    setActiveWidgetsBus([targetId])
    event = e
  }

  //删除组件
  const delWidgetMapBus = useCallback(
    (ids: string[] | string) => {
      const widgetMapCopy = { ...widgetMapRef.current }
      if (typeof ids === 'string') {
        delete widgetMapCopy[ids]
      } else {
        ids.forEach((id) => {
          delete widgetMapCopy[id]
        })
      }
      widgetMapRef.current = widgetMapCopy
      setWidgetMap(widgetMapCopy)
      dispatch(delWidget(ids))
    },
    [widgetMap]
  )

  //删除选中组件
  const delActiveWidgetsBus = useCallback(() => {
    delWidgetMapBus(activeWidgetsRef.current)
    setActiveWidgetsBus([])
  }, [activeWidgets])

  //参数修改
  const changePlug = useCallback(
    (id, data: any) => {
      let widgetCopy = { ...widgetMapRef.current[id] }
      widgetCopy = {
        ...widgetCopy,
        ...data,
      }
      const widgetMapCopy = {
        ...widgetMapRef.current,
        [id]: widgetCopy,
      }
      widgetMapRef.current = widgetMapCopy
      setWidgetMap(widgetMapCopy)
    },
    [widgetMap]
  )

  //选中组件切换
  useEffect(() => {
    dispatch(setActiveWidgetsStore(activeWidgets))
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
    if (target.length === 1) {
      if (childRef.current && event != null && event.type === 'mousedown') {
        const moveable = childRef.current.moveable
        moveable.dragStart(event)
      }
    }
  }, [target])

  //更新选中组件id
  useEffect(() => {
    if (event != null && targetId.sort().join('') != activeWidgets.sort().join('')) {
      setActiveWidgets([targetId])
    }
  }, [targetId])

  //订阅组件变更
  useEffect(() => {
    eventBus.addListener('setWidgetMap', setWidgetMapBus)
    eventBus.addListener('delWidgetMap', delWidgetMapBus)
    eventBus.addListener('setActiveWidgets', setActiveWidgetsBus)
    eventBus.addListener('delActiveWidgets', delActiveWidgetsBus)
    eventBus.addListener('changePlug', changePlug)
    return () => {
      eventBus.removeListener('setWidgetMap', setWidgetMapBus)
      eventBus.removeListener('delWidgetMap', delWidgetMapBus)
      eventBus.removeListener('setActiveWidgets', setActiveWidgetsBus)
      eventBus.removeListener('delActiveWidgets', delActiveWidgetsBus)
      eventBus.removeListener('changePlug', changePlug)
    }
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
          backgroundImage: `url(${backgroundImage})`,
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
