import React, { useState, useEffect, useContext, useRef, forwardRef, useImperativeHandle, ForwardRefRenderFunction } from 'react'
import Moveable from 'react-moveable'
import update from 'react-addons-update'
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
  const [moveable, setMoveable] = useState<any>(null)
  const [frame, setFrame] = useState<WidgetObj>(widgetList[0])

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
            $set: translate[0],
          },
          top: {
            $set: translate[1],
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
    let newFrame = update(frame, {
      widget: {
        rect: {
          left: {
            $set: translate[0],
          },
          top: {
            $set: translate[1],
          },
          width: {
            $set: offsetWidth,
          },
          height: {
            $set: offsetHeight,
          },
        },
      },
    })
    setFrame(newFrame)
  }

  const onRotate = (args) => {
    const { rotate } = args
    let newFrame = update(frame, {
      widget: {
        rotate: {
          $set: rotate,
        },
      },
    })
    setFrame(newFrame)
  }

  //move resize rotate 事件结束 更新redux
  const onMoveableEventEnd = () => {
    eventBus.emit('setWidgetMap', {
      key: frame.id,
      value: frame.widget,
    })
  }
  const render = () => {
    if (moveable) {
      let { left, top, offsetWidth, offsetHeight, rotation } = moveable.getRect()
      eventBus.emit('widgetMove', {
        left,
        top,
        width: offsetWidth,
        height: offsetHeight,
      })
    }
  }
  useEffect(() => {
    eventBus.addListener('requestMoveable', (data: WidgetObj) => {})
  }, [])
  return (
    <Moveable
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
      rotatable={true}
      onRender={render}
      onDrag={(e) => {
        e.target.style.transform = e.transform
        onDrag(e)
      }}
      onDragEnd={() => {
        onMoveableEventEnd()
      }}
      onResize={(e) => {
        const beforeTranslate = e.drag.beforeTranslate
        e.target.style.width = `${e.width}px`
        e.target.style.height = `${e.height}px`
        e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px) rotate(${frame.widget.rotate}deg)`
        onResize(e)
      }}
      onResizeEnd={() => {
        onMoveableEventEnd()
      }}
      onRotateStart={(e) => {
        let rotate = frame.widget.rotate || 0
        e.set(rotate)
      }}
      onRotate={(e) => {
        e.target.style.transform = e.transform
        onRotate(e)
      }}
      onRenderEnd={() => {
        onMoveableEventEnd()
      }}
    />
  )
}
export default forwardRef(MoveableBox)
