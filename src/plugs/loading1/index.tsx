import React, { useState, useEffect } from 'react'
import { WidgetObj } from '@_types/Plugin'
import style from './index.module.less'

const Loading = (props: WidgetObj) => {
  const {
    id,
    widget: { rect, name },
  } = props

  return (
    <div
      className={`${style.loading}`}
      style={{
        width: rect.width + 'px',
        height: rect.height + 'px',
      }}
    >
      <svg className={style.loading_icon} xmlns="http://www.w3.org/2000/svg" viewBox="-100 -100 200 200">
        <clipPath id="loading-icon-clip-path">
          <circle r="95"></circle>
        </clipPath>

        <circle className={style.loading_icon__background} r="95" fill="#f3f3f7"></circle>

        <circle className={style.loading_icon__animated_stroke} clip-path="url(#loading-icon-clip-path)" r="100" fill="none" strokeWidth="20px" stroke="#aaaaaa"></circle>

        <circle className={style.loading_icon__static_stroke_section} clip-path="url(#loading-icon-clip-path)" r="100" fill="none" strokeWidth="20px" stroke="#aaaaaa"></circle>

        <path d="M -20,40 20,40 L 0,25 Z" stroke="none" fill="#aaaaaa" />

        <path d="M 0,0 C 0,0 -15,-10 -15,-20 H 15 C 15,-10 0,0 0,0 Z " stroke="none" fill="#aaaaaa" />

        <path d="M 0,0 L 0,40" strokeWidth="1px" stroke="#aaaaaa" fill="none" />

        <path d="M -25,-40 C -25,0 25,0 25,40 H -25 C -25,0 25,0 25,-40 Z " strokeWidth="5px" stroke="#cacaca" fill="none" />

        <text y="140" fill="#777777" text-anchor="middle">
          &nbsp;&nbsp;Loading...
        </text>
      </svg>
    </div>
  )
}

export default Loading
