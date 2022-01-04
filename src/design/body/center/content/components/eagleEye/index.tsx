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
  // const [bodyWH, setBodyWH] = useState<any>([])
  //可视区域比例
  const [scaleView, setScaleView] = useState(1)
  //大屏比例
  const [scaleBody, setScaleBody] = useState(1)

  const widget = useAppSelector(widgetStore)
  const { width, height, scale, backgroundColor, backgroundImage, screenWidget } = useAppSelector(screenStore)
  //可视区域 外层
  const view: any = document.querySelector('#screenBody')

  const resize = useSize(view)
  const [selectRect, setSelectRect] = useState({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
  })

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
      view.scrollTo(leftV / scaleView, topV / scaleView)
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
    const x = left + SCREENMARGIN[3] * scaleView + 1
    const y = top + SCREENMARGIN[0] * scaleView + 1
    const rectCenterPoint = {
      x: (x + width / 2) * scaleView,
      y: (y + height / 2) * scaleView,
    }
    if (ctx) {
      ctx.translate(rectCenterPoint.x, rectCenterPoint.y)
      // ctx.rotate((item.rotate * Math.PI) / 180)
      ctx.translate(-rectCenterPoint.x, -rectCenterPoint.y)
      ctx.fillStyle = '#ccc'
      ctx.fillRect(x * scaleView, y * scaleView, width * scaleView, height * scaleView)
      ctx.restore()
      ctx.save()
    }
  }
  useEventListener('mouseup', upHandler)
  useEventListener('mousedown', downHandler, { target: select })
  useEventListener('mousemove', mousemoveHandler, { target: select })
  useEffect(() => {
    let ww = SCREENMARGIN[1] + SCREENMARGIN[3] + width,
      hh = SCREENMARGIN[0] + SCREENMARGIN[2] + height
    let sw = (ww * scale) / 100,
      sh = (hh * scale) / 100
    // setBodyWH([sw, sh])
    let sww = w / sw
    let shh = h / sh
    sww = Math.min(sww, shh)
    setScaleView(sww)

    let ssw = w / ww
    let ssh = h / hh
    ssw = Math.min(ssw, ssh)
    setScaleBody(ssw)
  }, [scale])
  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d')
    if (ctx) {
      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, w, h)
      ctx.strokeStyle = '#8dbf8d'
      ctx.lineWidth = 1
      let rectl = SCREENMARGIN[3] * scaleBody,
        rectt = SCREENMARGIN[0] * scaleBody,
        rectw = width * scaleBody,
        recth = height * scaleBody
      ctx.strokeRect(rectl, rectt, rectw, recth)
      ctx.save()
      Object.values(widget).forEach((item) => {
        drawRect(item)
      })
    }
  }, [widget, width, height, scaleBody])
  useEffect(() => {
    if (view) {
      const setRect = () => {
        if (move.canMove === false) {
          let vx = view.scrollLeft * scaleView,
            vy = view.scrollTop * scaleView,
            vw = view.offsetWidth * scaleView,
            vh = view.offsetHeight * scaleView
          if (vw >= w) {
            vw = w
          }
          if (vh >= h) {
            vh = h
          }
          setSelectRect({
            x: vx,
            y: vy,
            w: vw,
            h: vh,
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
  }, [resize, width, height, scaleView])

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
          width: selectRect.w,
          height: selectRect.h,
          top: Math.floor(selectRect.y),
          left: Math.floor(selectRect.x),
        }}
      ></div>
    </div>
  )
}

export default Index
