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
      <div className={style.loader}>
        <svg className={style.car} width="102" height="40" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(2 1)" stroke="rgb(0, 188, 255)" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
            <path
              className={style.car__body}
              d="M47.293 2.375C52.927.792 54.017.805 54.017.805c2.613-.445 6.838-.337 9.42.237l8.381 1.863c2.59.576 6.164 2.606 7.98 4.531l6.348 6.732 6.245 1.877c3.098.508 5.609 3.431 5.609 6.507v4.206c0 .29-2.536 4.189-5.687 4.189H36.808c-2.655 0-4.34-2.1-3.688-4.67 0 0 3.71-19.944 14.173-23.902zM36.5 15.5h54.01"
              strokeWidth="3"
            />
            <ellipse className={style.car__wheel__left} strokeWidth="3.2" fill="rgb(0, 188, 255)" cx="83.493" cy="30.25" rx="6.922" ry="6.808" />
            <ellipse className={style.car__wheel__right} strokeWidth="3.2" fill="rgb(0, 188, 255)" cx="46.511" cy="30.25" rx="6.922" ry="6.808" />
            <path className={`${style.car__line} ${style.car__line__top}`} d="M22.5 16.5H2.475" strokeWidth="3" />
            <path className={`${style.car__line} ${style.car__line__middle}`} d="M20.5 23.5H.4755" strokeWidth="3" />
            <path className={`${style.car__line} ${style.car__line__bottom}`} d="M25.5 9.5h-19" strokeWidth="3" />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Loading
