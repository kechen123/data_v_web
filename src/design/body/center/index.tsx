import React, { useState, useEffect } from 'react'
import Content from './content'
import Screen from './screen'
import { Scroll } from '@_types/Scroll'
import style from './index.module.less'

const Center = (props) => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const scrollObj = {
    x,
    y,
    setX,
    setY,
  }
  return (
    <div className={style.center}>
      <div className={style.screen}>
        <Screen {...scrollObj} />
      </div>
      <div className={style.content}>
        <Content {...scrollObj} />
      </div>
    </div>
  )
}

export default Center
