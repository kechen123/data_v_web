import React, { useState, useEffect, useMemo, useRef, forwardRef, useImperativeHandle, ForwardRefRenderFunction } from 'react'
import Moveable from 'react-moveable'
import update from 'react-addons-update'
import { useThrottleFn } from 'ahooks'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'
import { widget as widgetSlice, setWidget } from '@features/widgetSlice'
import { WidgetObj, MoveableBox as MoveableBoxProps } from '@_data/Plugin'
export interface cRef {
  moveable: any
}
// const MoveableBox  = ({ target, widgetList }: MoveableBoxProps) => {
const MoveableBox: ForwardRefRenderFunction<cRef, MoveableBoxProps> = ({ target, widgetList }, childRef) => {
  const moveRef = useRef<any>(null)
  const dispatch = useAppDispatch()
  const [moveable, setMoveable] = useState<any>(null)
  const [frame, setFrame] = useState<WidgetObj>(widgetList[0])

  const { run } = useThrottleFn(
    (widget: WidgetObj) => {
      dispatch(setWidget(widget))
    },
    { wait: 500 }
  )
  useEffect(() => {
    if (widgetList.length === 1) {
      let widget = widgetList[0]
      setFrame(widget)
    }
  }, [widgetList])

  // useEffect(() => {
  //   if (moveRef.current && target.length === 1) {
  //     const moveable = moveRef.current.moveable
  //     moveable.trigger('dragStart')
  //   }
  // }, [target])

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
    run(newFrame)
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
    run(newFrame)
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
    run(newFrame)
  }
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
      onDrag={(e) => {
        e.target.style.transform = e.transform
        onDrag(e)
      }}
      onResize={(e) => {
        const beforeTranslate = e.drag.beforeTranslate
        e.target.style.width = `${e.width}px`
        e.target.style.height = `${e.height}px`
        e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px) rotate(${frame.widget.rotate}deg)`
        onResize(e)
      }}
      onRotateStart={(e) => {
        let rotate = frame.widget.rotate || 0
        e.set(rotate)
      }}
      onRotate={(e) => {
        e.target.style.transform = e.transform
        onRotate(e)
      }}
    />
  )
}
export default forwardRef(MoveableBox)
