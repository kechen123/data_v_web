import React, { useEffect, useRef, useState } from 'react'
import { useEventListener } from 'ahooks'
import { useAppSelector } from '@storeApp/hooks'
import update from 'immutability-helper'
import eventBus from '@utils/eventBus'
import { screen as screenStore } from '@features/screenSlice'
import Ruler from '@kedachen/ruler'
import style from './index.module.less'

interface LineData {
  position: number
  value: number
  scroll: number
}

const Rulers = (props) => {
  const { width, height, scale } = useAppSelector(screenStore)
  const zoom = scale / 100
  const xRuler = useRef<HTMLDivElement | null>(null)
  const yRuler = useRef<HTMLDivElement | null>(null)
  const [xLine, setXLine] = useState<LineData[]>([])
  const [yLine, setYLine] = useState<LineData[]>([])
  const [mouseDown, setMouseDown] = useState({
    down: false,
    lineType: '',
    lineIndex: -1,
  })

  const x = {
    width: width + 1000,
    height: 20,
    zoom: zoom,
    backgroundColor: '#0a192f',
    scaleLineStyle: {
      color: '#9f9f9f',
    },
    textStyle: {
      color: '#9f9f9f',
    },
    min: -50 / zoom,
    max: width,
  }
  const y = {
    width: 20,
    height: height + 1000,
    zoom: zoom,
    backgroundColor: '#0a192f',
    scaleLineStyle: {
      color: '#9f9f9f',
    },
    textStyle: {
      color: '#9f9f9f',
    },
    horizontal: false,
    min: -50 / zoom,
    max: 1080,
  }

  const getXY = (ev, start: number) => {
    const ruler = document.querySelector('#ruler')
    if (!ruler) {
      return [0, 0]
    }
    const { left, top, width, height } = ruler.getBoundingClientRect()
    const { clientX, clientY } = ev
    const x = clientX - left + start
    const y = clientY - top + start
    return [Math.round(x), Math.round(y)]
  }

  useEventListener(
    'mousedown',
    (ev) => {
      const [x, y] = getXY(ev, -70)
      console.log(y)
      setXLine((line) => {
        return line.concat({
          position: y + 70,
          value: y,
          scroll: 0,
        })
      })
      setMouseDown({
        down: true,
        lineType: 'x',
        lineIndex: xLine.length,
      })
    },
    { target: xRuler }
  )

  useEventListener(
    'mousedown',
    (ev) => {
      const [x, y] = getXY(ev, -70)
      setYLine((line) => {
        return line.concat({
          position: x + 70,
          value: x,
          scroll: 0,
        })
      })
      setMouseDown({
        down: true,
        lineType: 'y',
        lineIndex: yLine.length,
      })
    },
    { target: yRuler }
  )
  useEventListener('mousedown', (ev) => {
    const target = ev.target as HTMLDivElement
    if (target) {
      if (target.className.indexOf('xline') > -1 && target.dataset['i']) {
        const i = parseInt(target.dataset['i'])
        setMouseDown({
          down: true,
          lineType: 'x',
          lineIndex: i,
        })
      } else if (target.className.indexOf('yline') > -1 && target.dataset['i']) {
        const i = parseInt(target.dataset['i'])
        setMouseDown({
          down: true,
          lineType: 'y',
          lineIndex: i,
        })
      }
    }
  })
  useEventListener('mousemove', (ev) => {
    if (mouseDown.down) {
      const [x, y] = getXY(ev, -70)
      if (mouseDown.lineType === 'x') {
        let newxLine = update(xLine, {
          [mouseDown.lineIndex]: {
            $set: {
              position: y + 70,
              value: y,
              scroll: 0,
            },
          },
        })
        setXLine(newxLine)
      } else if (mouseDown.lineType === 'y') {
        let newyLine = update(yLine, {
          [mouseDown.lineIndex]: {
            $set: {
              position: x + 70,
              value: x,
              scroll: 0,
            },
          },
        })
        setYLine(newyLine)
      }
    }
  })
  useEventListener('mouseup', (ev) => {
    const [x, y] = getXY(ev, -70)
    console.log(x, y)
    if (mouseDown.lineType === 'x' && y < -50) {
      let newxLine = update(xLine, {
        $splice: [[mouseDown.lineIndex, 1]],
      })
      setXLine(newxLine)
    } else if (mouseDown.lineType === 'y' && x < -50) {
      let newxLine = update(yLine, {
        $splice: [[mouseDown.lineIndex, 1]],
      })
      setYLine(newxLine)
    }
    setMouseDown({
      down: false,
      lineType: '',
      lineIndex: -1,
    })
  })
  useEffect(() => {
    const scroll = ([x, y]) => {
      setXLine((lines) => {
        return lines.map((line) => {
          return {
            ...line,
            scroll: parseInt(y),
          }
        })
      })
      setYLine((lines) => {
        return lines.map((line) => {
          return {
            ...line,
            scroll: parseInt(x),
          }
        })
      })
    }
    eventBus.addListener('setRulerLinePosition', scroll)
    return () => {
      eventBus.removeListener('setRulerLinePosition', scroll)
    }
  }, [])
  return (
    <div className={style.ruler} id="ruler">
      <div className={style.hContainer} style={{ width: width + 'px' }} id="rulerX">
        <Ruler {...x} />
        <div ref={xRuler} className={style.rulerEventWrapper}></div>
        <div className={style.rulerXLine}>
          {xLine.map((line, i) => {
            return (
              <div key={i} data-i={i} style={{ width: width + 'px', transform: `translateY(${line.position - line.scroll}px)` }} className={`${style.line} xline`}>
                {mouseDown.lineIndex === i && mouseDown.lineType === 'x' ? <div className={style.value}>{line.value}px</div> : ''}
              </div>
            )
          })}
        </div>
      </div>
      <div className={style.vContainer} style={{ height: height + 'px' }} id="rulerY">
        <Ruler {...y} />
        <div ref={yRuler} className={style.rulerEventWrapper}></div>
        <div className={style.rulerYLine}>
          {yLine.map((line, i) => {
            return (
              <div key={i} data-i={i} style={{ height: height + 'px', transform: `translateX(${line.position - line.scroll}px)` }} className={`${style.line} yline`}>
                {mouseDown.lineIndex === i && mouseDown.lineType === 'y' ? <div className={style.value}>{line.value}px</div> : ''}
              </div>
            )
          })}
        </div>
      </div>
      <div className={style.origin}>
        <i className="icon iconfont icon-yuandian"></i>
      </div>
    </div>
  )
}

export default Rulers
