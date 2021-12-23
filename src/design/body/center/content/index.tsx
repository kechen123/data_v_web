import React from 'react'
import { Ruler, Scroll } from './components'
import { Scroll as ScrollInterface } from '@_types/Scroll'
import style from './index.module.less'

const Content = (props: ScrollInterface) => {
  return (
    <div className={style.contentView}>
      <Ruler />
      <Scroll {...props} />
    </div>
  )
}

export default Content
