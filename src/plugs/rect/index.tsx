import React from 'react'
import { SetWidget } from '@_data/Plugin'
import style from './index.module.less'
const index = (props: SetWidget) => {
  const {
    id,
    plug: { rect, name },
  } = props
  return (
    <div
      id={id}
      className={`widget ${style.rect} `}
      style={{
        width: rect.width + 'px',
        height: rect.height + 'px',
        transform: `translate(${rect.left}px, ${rect.top}px) rotate(0deg)`,
      }}
    >
      {name}
    </div>
  )
}

export default index
