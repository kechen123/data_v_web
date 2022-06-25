import React, { useState, useEffect, useContext, useTransition, useRef, forwardRef, useImperativeHandle, ForwardRefRenderFunction } from 'react'
import { flushSync } from 'react-dom'
import Moveable from 'react-moveable'
import { useGetState } from 'ahooks'
import update from 'immutability-helper'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'
import { widget as widgetSotre, setWidget } from '@features/widgetSlice'
import { screen } from '@features/screenSlice'
import eventBus from '@utils/eventBus'
import useActiveWidget from '@hooks/useActiveWidget'
import { WidgetObj, Rect, MoveableBox as MoveableBoxProps } from '@_types/Plugin'
export interface cRef {
  moveable: any
}
interface Rects {
  rect: Rect
  rotate?: number
}

// const MoveableBox  = ({ target, widgetList }: MoveableBoxProps) => {
const MoveableBox: ForwardRefRenderFunction<cRef, MoveableBoxProps> = ({ target }, childRef) => {
  const dispatch = useAppDispatch()
  const { setWidgetObj, activeWidgets: widgetList } = useActiveWidget()
  const [moveable, setMoveable, getMoveable] = useGetState<any>(null)
  // const [frame, setFrame] = useState(() => {
  //   return widgetList[0]
  // })

  const [frame, setFrame] = useState(widgetList[0])

  // let frame = widgetList[0]
  // const setFrame = (data: any) => {
  //   frame = data
  // }
  // const getFrame = () => {
  //   return frame
  // }

  // const [frame, setFrame, getFrame] = useGetState<WidgetObj>(widgetList[0])
  useEffect(() => {
    render()
  }, [target])
  useEffect(() => {
    if (widgetList.length === 1) {
      let widget = widgetList[0]
      setFrame(widget)
    }
  }, [widgetList])

  useImperativeHandle(childRef, () => ({
    moveable: moveable,
  }))

  const onDrag = (param) => {
    const { translate } = param
    let newFrame = update(frame, {
      widget: {
        rect: {
          left: {
            $set: Math.round(translate[0]),
          },
          top: {
            $set: Math.round(translate[1]),
          },
        },
      },
    })
    setFrame(newFrame)
    render({
      rect: newFrame.widget.rect,
      rotate: newFrame.widget.rotate,
    })
  }

  const onResize = (args) => {
    const {
      offsetWidth,
      offsetHeight,
      drag: { translate },
    } = args
    let newFrame = update(frame, {
      widget: {
        rect: {
          left: {
            $set: Math.round(translate[0]),
          },
          top: {
            $set: Math.round(translate[1]),
          },
          width: {
            $set: Math.round(offsetWidth),
          },
          height: {
            $set: Math.round(offsetHeight),
          },
        },
      },
    })
    setFrame(newFrame)
    render({
      rect: newFrame.widget.rect,
      rotate: newFrame.widget.rotate,
    })
  }

  const onRotate = (args) => {
    const { rotate } = args
    let newFrame = update(frame, {
      widget: {
        rotate: {
          $set: Math.round(rotate),
        },
      },
    })
    setFrame(newFrame)
    render({
      rect: newFrame.widget.rect,
      rotate: newFrame.widget.rotate,
    })
  }

  //move resize rotate 事件结束 更新
  const onMoveableEventEnd = (from?: string) => {
    if (moveable) {
      let { left, top, offsetWidth, offsetHeight, rotation } = moveable.getRect()

      let leftM = Math.round(left),
        topM = Math.round(top),
        offsetWidthM = Math.round(offsetWidth),
        offsetHeightM = Math.round(offsetHeight),
        rotationM = Math.round(rotation)
      let newFrame = update(frame, {
        widget: {
          rect: {
            left: {
              $set: leftM,
            },
            top: {
              $set: topM,
            },
            width: {
              $set: offsetWidthM,
            },
            height: {
              $set: offsetHeightM,
            },
          },
          rotate: {
            $set: rotationM,
          },
        },
      })
      const id = target[0].getAttribute('data-id')
      setWidgetObj({
        id: id || '',
        widget: newFrame.widget,
      })
    }
  }
  const render = (props?: Rects) => {
    let data = props
    if (moveable) {
      if (!data) {
        let { left, top, offsetWidth, offsetHeight, rotation } = moveable.getRect()
        data = {
          rect: {
            left,
            top,
            width: offsetWidth,
            height: offsetHeight,
          },
          rotate: rotation,
        }
      }
      let {
        rect: { left, top, width, height },
        rotate,
      } = data
      let leftM = Math.round(left || 0),
        topM = Math.round(top || 0),
        offsetWidthM = Math.round(width || 0),
        offsetHeightM = Math.round(height || 0),
        rotationM = Math.round(rotate || 0)
      if (props) {
        eventBus.emit('widgetMove', {
          left: leftM,
          top: topM,
          width: offsetWidthM,
          height: offsetHeightM,
          rotate: rotationM,
        })
      }
      eventBus.emit('widgetMoveEye', [offsetWidthM, offsetHeightM, leftM, topM, rotationM])
    }
  }

  useEffect(() => {
    const request = (key: string, val: number) => {
      const moveable = getMoveable()
      let requester: any = undefined
      if (!moveable) return
      switch (key) {
        case 'left':
          // requester = moveable.request('draggable')
          // requester?.request({ x: val })
          moveable.request('draggable', { x: val }, true)
          break
        case 'top':
          // requester = moveable.request('draggable')
          // requester?.request({ y: val })
          moveable.request('draggable', { y: val }, true)
          break
        case 'width':
          // requester = moveable.request('resizable')
          // requester?.request({ offsetWidth: val })
          moveable.request('resizable', { offsetWidth: val }, true)
          break
        case 'height':
          // requester = moveable.request('resizable')
          // requester?.request({ offsetHeight: val })
          moveable.request('resizable', { offsetHeight: val }, true)
          break
        case 'rotate':
          // requester = moveable.request('rotatable')
          // requester?.request({ rotate: val })
          moveable.request('rotatable', { rotate: val }, true)
          break
        default:
          break
      }
    }
    eventBus.addListener('requestMoveable', request)
    return () => {
      eventBus.removeListener('requestMoveable', request)
    }
  }, [])
  return (
    <Moveable
      flushSync={flushSync}
      ref={(e) => {
        setMoveable(e)
      }}
      target={target}
      throttleResize={0}
      renderDirections={['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se']}
      edge={false}
      zoom={1}
      origin={false}
      padding={{ left: 0, top: 0, right: 0, bottom: 0 }}
      draggable={true}
      resizable={true}
      rotatable={false}
      // onRender={render}
      onDrag={(e) => {
        e.target.style.transform = e.transform
        onDrag(e)
      }}
      onDragEnd={(args) => {
        const { isDrag, inputEvent } = args
        if (isDrag && inputEvent) onMoveableEventEnd('drag')
      }}
      onResize={(e) => {
        const beforeTranslate = e.drag.beforeTranslate
        e.target.style.width = `${e.width}px`
        e.target.style.height = `${e.height}px`
        e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px) rotate(${frame.widget.rotate}deg)`
        onResize(e)
      }}
      onResizeEnd={(args) => {
        const { isDrag, inputEvent } = args
        if (isDrag && inputEvent) onMoveableEventEnd('resize')
      }}
      onRotateStart={(e) => {
        let rotate = frame.widget.rotate || 0
        e.set(rotate)
      }}
      onRotate={(e) => {
        e.target.style.transform = e.transform
        onRotate(e)
      }}
      onRotateEnd={(args) => {
        const { isDrag, inputEvent } = args
        if (isDrag && inputEvent) onMoveableEventEnd('rotate')
      }}
      // onRenderEnd={(args) => {
      //   console.log('', args)
      //   onMoveableEventEnd()
      // }}
    />
  )
}
export default React.memo(forwardRef(MoveableBox))
