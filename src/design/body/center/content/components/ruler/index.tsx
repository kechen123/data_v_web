import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import { useAppSelector } from '@storeApp/hooks'
import { screen as screenStore } from '@features/screenSlice'
import Ruler from '@kedachen/ruler'
import style from './index.module.less'

const Rulers = (props) => {
  const { width, height, scale } = useAppSelector(screenStore)
  const zoom = scale / 100

  const XOver = (num, ev) => {
    console.log('XOver')
    // const el = document.getElementById('rulerXLine')
    // if (el === null) throw new Error('rulerXLine container missing in index.html')
    // const root = ReactDOM.createRoot(el)
    // root.render(<div className={`${style.hlineTemp} tempXLine`} style={{ height: height + 'px', left: ev.offsetX + 'px' }}></div>)
  }
  const XOut = () => {
    // console.log('XOut')
    // document.querySelectorAll('.tempXLine').forEach((item) => {
    //   const parent = item.parentElement
    //   parent?.removeChild(item)
    // })
  }
  const XMove = (num, ev) => {
    // const line = document.querySelector('.tempXLine') as HTMLDivElement
    // line.style.left = ev.offsetX + 'px'
  }
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
    onMouseOver: XOver,
    onMouseOut: XOut,
    onMouseMove: XMove,
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

  return (
    <div className={style.ruler}>
      <div className={style.hContainer} style={{ width: width + 'px' }} id="rulerX">
        <Ruler {...x} />
        <div id="rulerXLine"></div>
      </div>
      <div className={style.vContainer} style={{ height: height + 'px' }} id="rulerY">
        <Ruler {...y} />
      </div>
      <div className={style.origin}>
        <i className="icon iconfont icon-yuandian"></i>
      </div>
    </div>
  )
}

export default Rulers
