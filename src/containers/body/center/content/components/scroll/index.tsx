import React, { useState, useEffect, useRef } from 'react'
import { Scroll as ScrollInterface } from '@_data/Scroll'
import { useEventListener, useMouse } from 'ahooks'
import style from './index.module.less'
let move = {
  canMove: false,
  x: 0,
  y: 0,
  xy: '',
  self: {
    left: 0,
    top: 0,
  },
}
const Scroll = (props: ScrollInterface) => {
  const { x, y, setX, setY } = props
  const [sx, setSx] = useState(x)
  const [sy, setSy] = useState(y)
  //编辑区域宽,高,x滚动条宽,y滚动条高
  const [screenWH, setScreenWH] = useState([0, 0, 0, 0])
  const [mouse, setMouse] = useState('')
  const ref = useRef<HTMLDivElement | null>(null)
  const refX = useRef<HTMLDivElement | null>(null)
  const refY = useRef<HTMLDivElement | null>(null)
  const mousePosition = useMouse()

  const downHandler = (ev: MouseEvent) => {
    move.canMove = true
    move.x = sx
    move.y = sy
    move.xy = (ev.target as any)?.getAttribute('data-axis')
    move.self = {
      left: mousePosition.clientX,
      top: mousePosition.clientY,
    }
  }
  const upHandler = (ev: MouseEvent) => {
    move.canMove = false
  }
  const mousemoveHandler = (ev: MouseEvent) => {
    if (move.canMove === true) {
      const l = mousePosition.clientX
      const t = mousePosition.clientY
      const left = l - move.self.left
      const top = t - move.self.top
      if (move.xy === 'y') {
        let t = move.y + top
        let limit = t + screenWH[3] >= screenWH[1]
        if (t >= 0 && !limit) {
          setSy(t)
        }
      } else if (move.xy === 'x') {
        let l = move.x + left
        let limit = l + screenWH[2] >= screenWH[0]
        if (l >= 0 && !limit) {
          setSx(l)
        }
      }
    }
  }

  useEventListener(
    'wheel',
    (e) => {
      e = e || window.event
      let val = 0
      if (e.deltaY > 0) {
        val = 20
      } else {
        val = -20
      }
      let top = sy + val
      let limit = top + screenWH[3] >= screenWH[1]
      if (top >= 0 && !limit) {
        setSy(top)
      }
    },
    { target: document.body }
  )
  useEventListener('mouseup', upHandler)
  useEventListener('mousedown', downHandler, { target: refY })
  useEventListener('mousedown', downHandler, { target: refX })
  useEventListener('mousemove', mousemoveHandler)
  useEffect(() => {
    setY(sy)
  }, [sy])
  useEffect(() => {
    setX(sx)
  }, [sx])
  useEffect(() => {
    if (ref.current && refX.current && refY.current) {
      let xWidth = refX.current.clientWidth
      let yHeight = refY.current.clientHeight
      let width = ref.current.clientWidth
      let height = ref.current.clientHeight
      setScreenWH([width, height, xWidth, yHeight])
    }
  }, [])
  const left = sx
  const top = sy
  return (
    <div ref={ref} className={style.scroll}>
      <div className={`${style.track}  ${style.xTrack}`}>
        <div ref={refX} className={style.handler} data-axis="x" style={{ left: left + 'px' }}>
          <div className={style.thumb}></div>
        </div>
      </div>
      <div className={`${style.track}  ${style.yTrack}`}>
        <div ref={refY} className={style.handler} data-axis="y" style={{ top: top + 'px' }}>
          <div className={style.thumb}></div>
        </div>
      </div>
    </div>
  )
}

export default Scroll
