import React from 'react'
import { Plug } from '@_data/Plugin'
import style from './index.module.less'
const index = (props: Plug) => {
  const { rect, name } = props
  return (
    <div
      className={`widget ${style.circular} `}
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
