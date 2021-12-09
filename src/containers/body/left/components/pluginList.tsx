import React from 'react'
import { Plug } from '@_data/Plugin'
import DragItem from '@components/dragItem'
import style from './pluginList.module.less'

interface Plugs {
  data: Array<Plug>
}

const PluginList = (props: Plugs) => {
  const { data } = props
  return (
    <div className={style.pluginView}>
      <div className={style.pluginList}>
        {data.map((item, i) => {
          return (
            <DragItem key={i} data={item}>
              <div className={style.plugin}>
                <img src={item.img} />
              </div>
            </DragItem>
          )
        })}
      </div>
    </div>
  )
}

export default PluginList
