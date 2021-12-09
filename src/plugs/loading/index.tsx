import React, { useState, useEffect } from 'react'
import { Loading as DVLoading } from '@jiaminghi/data-view-react'
import { SetWidget } from '@_data/Plugin'
import style from './loading.module.less'

const Loading = (props: SetWidget) => {
  const {
    id,
    plug: { rect, name },
  } = props

  return (
    <div
      className={`widget ${style.loading}`}
      style={{
        width: rect.width + 'px',
        height: rect.height + 'px',
        transform: `translate(${rect.left}px, ${rect.top}px) rotate(0deg)`,
      }}
    >
      <DVLoading>Loading...</DVLoading>
    </div>
  )
}

export default Loading
