import React, { useState, useEffect, useRef, useMemo } from 'react'
import { useEventListener, useSize } from 'ahooks'
import { WidgetObj, MoveableBox as MoveableBoxProps } from '@_types/Plugin'
import { useAppSelector } from '@storeApp/hooks'
import { widget as widgetStore } from '@features/widgetSlice'
import { screen as screenStore } from '@features/screenSlice'
import { SCREENMARGIN, SCREENHEIGHT } from '@config/index'
import styles from './index.module.less'

const w = 190
let h = 110
let move = {
  canMove: false,
  self: {
    left: 0,
    top: 0,
  },
}
const Index = (props: any) => {
  const widget = useAppSelector(widgetStore)
  const { width, height, scale, backgroundColor, backgroundImage, screenWidget } = useAppSelector(screenStore)
  //可视区域 外层
  const view: any = document.querySelector('#screenBody')
  const bodyWH = [SCREENMARGIN[1] + SCREENMARGIN[3] + width, SCREENMARGIN[0] + SCREENMARGIN[2] + height]

  const resize = useSize(view)
  const [viewRect, setViewRect] = useState({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
  })
  const scalew = w / bodyWH[0]
  const select = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<any>()

  const mousemoveHandler = (ev: MouseEvent) => {
    if (move.canMove === true) {
      const l = ev.offsetX
      const t = ev.offsetY
      const left = l - move.self.left
      const top = t - move.self.top
      let leftV = 0,
        topV = 0
      if (!select.current) {
        return
      }

      leftV = select.current.offsetLeft + left
      topV = select.current.offsetTop + top

      if (select.current.offsetLeft + select.current.offsetWidth + left >= w) {
        leftV = w - select.current.offsetWidth
      }
      if (select.current.offsetLeft + left <= 0) {
        leftV = 0
      }

      if (select.current.offsetTop + select.current.offsetHeight + top >= h) {
        topV = h - select.current.offsetHeight
      }
      if (select.current.offsetTop + top <= 0) {
        topV = 0
      }

      select.current.style.left = leftV + 'px'
      select.current.style.top = topV + 'px'
      view.scrollTo(leftV / scalew, topV / scalew)
    }
  }
  const upHandler = (ev: MouseEvent) => {
    move.canMove = false
  }

  const downHandler = (ev: MouseEvent) => {
    move.canMove = true
    move.self = {
      left: ev.offsetX,
      top: ev.offsetY,
    }
  }
  const drawRect = (item: any) => {
    const ctx = canvasRef.current?.getContext('2d')
    const {
      rect: { height, width, left, top },
    } = item
    const x = left + SCREENMARGIN[3] * scalew + 1
    const y = top + SCREENMARGIN[0] * scalew + 1
    const rectCenterPoint = {
      x: (x + width / 2) * scalew,
      y: (y + height / 2) * scalew,
    }
    if (ctx) {
      ctx.translate(rectCenterPoint.x, rectCenterPoint.y)
      // ctx.rotate((item.rotate * Math.PI) / 180)
      ctx.translate(-rectCenterPoint.x, -rectCenterPoint.y)
      ctx.fillStyle = '#ccc'
      ctx.fillRect(x * scalew, y * scalew, width * scalew, height * scalew)
      ctx.restore()
      ctx.save()
    }
  }
  useEventListener('mouseup', upHandler)
  useEventListener('mousedown', downHandler, { target: select })
  useEventListener('mousemove', mousemoveHandler, { target: select })
  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d')
    if (ctx) {
      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, w, h)
      ctx.strokeStyle = '#8dbf8d'
      ctx.lineWidth = 1
      let rectl = SCREENMARGIN[3] * scalew,
        rectt = SCREENMARGIN[0] * scalew,
        rectw = width * scalew,
        recth = height * scalew
      ctx.strokeRect(rectl, rectt, rectw, recth)
      ctx.save()
      Object.values(widget).forEach((item) => {
        drawRect(item)
      })
    }
  }, [widget, width, height])
  useEffect(() => {
    if (view) {
      const setRect = () => {
        if (move.canMove === false) {
          setViewRect({
            x: view.scrollLeft * scalew,
            y: view.scrollTop * scalew,
            w: view.offsetWidth * scalew,
            h: view.offsetHeight * scalew,
          })
        }
      }
      setRect()
      view.addEventListener('scroll', () => {
        setRect()
      })
      return view.removeEventListener('scroll', () => {
        setRect()
      })
    }
  }, [resize])

  return (
    <div className={styles.eagleEye}>
      <canvas ref={canvasRef} id="EagleEye" width={w} height={h}>
        Your browser does not support the HTML5 canvas tag.
      </canvas>
      <div
        id="select"
        ref={select}
        className={styles.select}
        style={{
          width: viewRect.w,
          height: viewRect.h,
          top: Math.floor(viewRect.y),
          left: Math.floor(viewRect.x),
        }}
      ></div>
    </div>
  )
}

export default Index
