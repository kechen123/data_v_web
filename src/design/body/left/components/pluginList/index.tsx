import React from 'react'
import { Widget } from '@_types/Plugin'
import DragItem from '@components/dragItem'
import style from './index.module.less'

interface Props {
  data: Array<Widget>
}

const PluginList = (props: Props) => {
  const { data } = props
  return (
    <div className={style.pluginView}>
      <div className={style.pluginList}>
        {data.map((item, i) => {
          return (
            <DragItem key={item.name} data={item}>
              <div className={style.plugin}>
                <div className={style.imgWrapper}>
                  <img src={item.img} />
                </div>
                <div className={style.name}>{item.name}</div>
              </div>
            </DragItem>
          )
        })}
      </div>
    </div>
  )
}

export default PluginList
