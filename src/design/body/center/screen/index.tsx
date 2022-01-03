import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { useEventListener } from 'ahooks'
import Selecto from 'react-selecto'
import Drop from '@components/drop'

import MoveableBox, { cRef } from '@components/moveableBox'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'

import { screen } from '@features/screenSlice'
import { setWidget } from '@features/widgetSlice'
import eventBus from '@utils/eventBus'
import Widget from '@plugs/index'
import { WidgetObj, MoveableBox as MoveableBoxProps } from '@_types/Plugin'
import { Scroll as ScrollInterface } from '@_types/Scroll'
import { SCREENMARGIN } from '@config/index'
import style from './index.module.less'

let event = null

const Screen = (props: any) => {
  const [widgetMap, setWidgetMap] = useState({})
  const [activeWidgets, setActiveWidgets] = useState<any>([])
  const widgetMapRef = useRef<any>([])
  const activeWidgetsRef = useRef<any>([])
  const moveContent = useRef<HTMLDivElement>(null)
  const [target, setTarget] = useState<Array<HTMLDivElement>>([])
  const { width, height, scale, backgroundColor, backgroundImage, screenWidget } = useAppSelector(screen)
  const childRef = useRef<cRef>(null)
  const dispatch = useAppDispatch()
  const widgetSelect = (e) => {
    e.stopPropagation()
    const targetId = e.currentTarget.getAttribute('data-id')
    setActiveWidgets([targetId])
    event = e
  }
  const viewClick = (e) => {
    let el = e.target.parentElement
    if (el && el.getAttribute('class') !== null && el.getAttribute('class').indexOf('moveable') > -1) {
      return
    }
    event = null
    let id = e.target.getAttribute('id')
    if (activeWidgets.length > 0 && id && id === 'screen') {
      setActiveWidgets([])
      eventBus.emit('setSettingObj', undefined)
    }
  }

  const WidgetObjList: Array<WidgetObj> = useMemo(() => {
    return Object.keys(widgetMap).map((key) => {
      return {
        id: key,
        widget: widgetMap[key],
      }
    })
  }, [widgetMap])

  const targetId: any = useMemo(() => {
    return target.map((item) => {
      return item.getAttribute('data-id')
    })
  }, [target])

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
  }, [targetId])

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

  useEffect(() => {
    if (activeWidgets.length === 0 && target.length > 0) {
      setTarget([])
    } else if (activeWidgets.length === 1) {
      let target = document.querySelector(`div[data-id='${activeWidgets[0]}']`) as any
      if (target) {
        setTarget([target])
      }
      eventBus.emit('setSettingObj', {
        id: activeWidgets[0],
        widget: widgetMap[activeWidgets[0]],
      })
    }
  }, [activeWidgets])

  //选中/取消选中组件
  useEffect(() => {
    if (target.length === 1) {
      if (childRef.current && event != null) {
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
  useEffect(() => {
    const setActiveWidgetsBus = (arr: Array<any>) => {
      setActiveWidgets(arr)
      activeWidgetsRef.current = arr
    }

    eventBus.addListener('setWidgetMap', setWidgetMapBus)
    eventBus.addListener('setActiveWidgets', setActiveWidgetsBus)
    eventBus.addListener('changePlug', changePlug)
    return () => {
      eventBus.removeListener('setWidgetMap', setWidgetMapBus)
      eventBus.removeListener('setActiveWidgets', setActiveWidgetsBus)
      eventBus.removeListener('changePlug', changePlug)
    }
  }, [])
  useEventListener('mousedown', viewClick)
  let bodyW = (scale / 100) * width + SCREENMARGIN[1] + SCREENMARGIN[3]
  let bodyH = (scale / 100) * height + SCREENMARGIN[0] + SCREENMARGIN[2]
  return (
    <div
      ref={moveContent}
      className={`${style.screenView} moveContent`}
      style={{
        width: bodyW + 'px',
        height: bodyH + 'px',
        transform: `translate(0px, 0px) scale(${scale / 100})`,
      }}
    >
      <Drop
        className={`${style.screen}  wd_list`}
        style={{
          width: width + 'px',
          height: height + 'px',
          backgroundColor: backgroundColor,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'auto 100%',
        }}
      >
        <WidgetList WidgetObjList={WidgetObjList} widgetSelect={widgetSelect} />
      </Drop>
      {/* <Selecto
        rootContainer={document.getElementById('screen')}
        selectableTargets={['.widget']}
        hitRate={30}
        selectByClick={false}
        selectFromInside={false}
        ratio={0}
        toggleContinueSelect={['shift']}
        onDragStart={(e: any) => {
          console.log(e)
          if (childRef && childRef.current) {
            const ismove = childRef.current.moveable.isMoveableElement(e.inputEvent.target)
            if (ismove) {
              e.stop()
            }
          }
        }}
        onSelect={(e: any) => {
          console.log(e)
        }}
      ></Selecto> */}

      <MoveableBox ref={childRef} {...moveableBoxProps} />
    </div>
  )
}

const WidgetList = ({ WidgetObjList, widgetSelect }: any) => {
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
}

export default Screen
