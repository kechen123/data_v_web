import React from 'react'
import { PluginList } from './components'
import style from './index.module.less'
import { Plug } from '@_data/Plugin'

const list: Array<Plug> = [
  {
    name: '方块1',
    url: 'element',
  },
  {
    name: '方块2',
    url: 'element1',
  },
  {
    name: '方块3',
    url: 'element',
  },
  {
    name: '方块4',
    url: 'element',
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
