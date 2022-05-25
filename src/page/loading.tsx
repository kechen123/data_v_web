import React from 'react'

import style from '@assets/less/pageLoading.module.less'
const Loading = () => {
  return (
    <div className={style.loading}>
      <svg width="200" height="200" viewBox="0 0 40 60">
        <polygon className={style.triangle} fill="none" stroke="#fff" strokeWidth="1" points="16,1 32,32 1,32" />
        <text className={style.text} x="0" y="45" fill="#fff">
          Loading...
        </text>
      </svg>
    </div>
  )
}

export default Loading
