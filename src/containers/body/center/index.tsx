import React from 'react'
import Content from './content'
import  Screen from './screen'
import style from './index.module.less'

const Center = (props) => {
  return (
      <div className={style.center}>
          <div className={style.screen}>
              <Screen/>
          </div>
          <div className={style.content}>
              <Content/>
          </div>
      </div>
  )
}

export default Center
