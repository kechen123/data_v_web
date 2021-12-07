import React from 'react'
import Ruler from '@components/ruler'
import Background from '@components/background'
import style from './index.module.less'

const Content = (props) => {
  return (
    <>
      <div className={style.ruler}>
        <Ruler />
      </div>
      <div className={style.background}>
        <Background />
      </div>
    </>
  )
}

export default Content
