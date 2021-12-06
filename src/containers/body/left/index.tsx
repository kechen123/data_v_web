import React from 'react'
import { PluginList } from './components'
import style from './index.module.less'
import { Plug } from '@_data/Plugin'

const list: Array<Plug> = [
  {
    name: '方块',
  },
  {
    name: '方块',
  },
  {
    name: '方块',
  },
  {
    name: '方块',
  },
]

const Left = (props) => {
  return (
    <div className={style.left}>
      <PluginList data={list} />
    </div>
  )
}

Left.propTypes = {}

export default Left
