import React from 'react'
import { Plug } from '@_data/Plugin'
import style from './pluginList.module.less'

interface Plugs {
  data: Array<Plug>
}

const PluginList = (props: Plugs) => {
  const { data } = props
  return (
    <div className={style.pluginList}>
      {data.map((item, i) => {
        return (
          <div key={i} className={style.plugin}>
            {item.name}
          </div>
        )
      })}
    </div>
  )
}

export default PluginList
