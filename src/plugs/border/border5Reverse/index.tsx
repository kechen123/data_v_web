import React, { useState, useEffect } from 'react'
import { BorderBox5 } from '@jiaminghi/data-view-react'
import { SetWidget } from '@_data/Plugin'
import style from './index.module.less'

const Index = (props: SetWidget) => {
  const {
    id,
    plug: { rect, name },
  } = props

  return (
    <div
      className={`widget `}
      style={{
        width: rect.width + 'px',
        height: rect.height + 'px',
        transform: `translate(${rect.left}px, ${rect.top}px) rotate(0deg)`,
      }}
    >
      <BorderBox5 reverse="{true}" color={['#235fa7', '#4fd2dd']} backgroundColor="transparent" />
    </div>
  )
}

export default Index
