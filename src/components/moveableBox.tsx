import React, { useState, useEffect, useContext, useRef, forwardRef, useImperativeHandle, ForwardRefRenderFunction } from 'react'
import { flushSync } from 'react-dom'
import Moveable from 'react-moveable'
import { useGetState } from 'ahooks'
import update from 'immutability-helper'
import { useAppDispatch } from '@storeApp/hooks'
import { setWidget } from '@features/widgetSlice'
import eventBus from '@utils/eventBus'
import { WidgetObj, MoveableBox as MoveableBoxProps } from '@_types/Plugin'
export interface cRef {
  moveable: any
}

// const MoveableBox  = ({ target, widgetList }: MoveableBoxProps) => {
const MoveableBox: ForwardRefRenderFunction<cRef, MoveableBoxProps> = ({ target, widgetList }, childRef) => {
  const dispatch = useAppDispatch()
  const [moveable, setMoveable, getMoveable] = useGetState<any>(null)

  let frame = widgetList[0]
  const setFrame = (data: any) => {
    frame = data
  }
  const getFrame = () => {
    return frame
  }

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
    const frame = getFrame()
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
  }

  const onResize = (args) => {
    const {
      offsetWidth,
      offsetHeight,
      drag: { translate },
    } = args
    const frame = getFrame()
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
  }

  const onRotate = (args) => {
    const { rotate } = args
    const frame = getFrame()
    let newFrame = update(frame, {
      widget: {
        rotate: {
          $set: Math.round(rotate),
        },
      },
    })
    setFrame(newFrame)
  }

  //move resize rotate 事件结束 更新
  const onMoveableEventEnd = () => {
    const frame = getFrame()
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
    eventBus.emit('setWidgetMap', {
      id: id,
      widget: newFrame.widget,
    })
  }
  const render = () => {
    if (moveable) {
      let { left, top, offsetWidth, offsetHeight, rotation } = moveable.getRect()
      let leftM = Math.round(left),
        topM = Math.round(top),
        offsetWidthM = Math.round(offsetWidth),
        offsetHeightM = Math.round(offsetHeight),
        rotationM = Math.round(rotation)
      eventBus.emit('widgetMove', {
        left: leftM,
        top: topM,
        width: offsetWidthM,
        height: offsetHeightM,
        rotate: rotationM,
      })
      eventBus.emit('widgetMoveEye', [offsetWidthM, offsetHeightM, leftM, topM, rotationM])
    }
  }

  useEffect(() => {
    eventBus.addListener('requestMoveable', (key: string, val: number) => {
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
      // if (requester) requester.requestEnd()
    })
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
      onRender={render}
      onDrag={(e) => {
        e.target.style.transform = e.transform
        onDrag(e)
      }}
      onDragEnd={(args) => {
        const { isDrag } = args
        if (isDrag) onMoveableEventEnd()
      }}
      onResize={(e) => {
        const beforeTranslate = e.drag.beforeTranslate
        e.target.style.width = `${e.width}px`
        e.target.style.height = `${e.height}px`
        e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px) rotate(${frame.widget.rotate}deg)`
        onResize(e)
      }}
      onResizeEnd={(args) => {
        const { isDrag } = args
        if (isDrag) onMoveableEventEnd()
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
        const { isDrag } = args
        if (isDrag) onMoveableEventEnd()
      }}
      // onRenderEnd={(args) => {
      //   console.log('', args)
      //   onMoveableEventEnd()
      // }}
    />
  )
}
export default React.memo(forwardRef(MoveableBox))
