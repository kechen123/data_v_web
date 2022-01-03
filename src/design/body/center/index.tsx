import React, { useState, useRef } from 'react'
import { useSize } from 'ahooks'
import Content from './content'
import Screen from './screen'
import Bottom from './bottom'

import style from './index.module.less'

const Center = (props) => {
  const view = useRef(null)

  const resize = useSize(view)
  return (
    <div className={style.center} id="view" ref={view}>
      <div className={style.content}>
        <Content {...resize} />
        <div className={style.screen} id="screenBody">
          <Screen />
        </div>
      </div>
      <div className={style.bottom}>
        <Bottom />
      </div>
    </div>
  )
}

export default Center
