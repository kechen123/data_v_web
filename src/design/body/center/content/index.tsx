import React from 'react'
import { Ruler, Scroll, EagleEye } from './components'
import { Scroll as ScrollInterface } from '@_types/Scroll'
import style from './index.module.less'

const Content = (props: any) => {
  return (
    <>
      <Ruler />
      {/* <Scroll {...props} /> */}

      <EagleEye {...props} />
    </>
  )
}

export default Content
