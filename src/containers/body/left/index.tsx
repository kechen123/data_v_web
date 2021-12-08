import React from 'react'
import { PluginList } from './components'
import style from './index.module.less'
import { Plug } from '@_data/Plugin'
import { PLUGLIST as list } from '@config/plugList'

const Left = (props) => {
  return (
    <div className={style.left}>
      <PluginList data={list} />
    </div>
  )
}

Left.propTypes = {}

export default Left
