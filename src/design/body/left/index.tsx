import React, { useState, useEffect } from 'react'
import { PluginList, TabList } from './components'
import style from './index.module.less'
import { Widget } from '@_data/Plugin'
import { Chosen as ChosenInterface } from '@_data/Left'
import { BORDER as list } from '@config/plugList'

const Left = (props) => {
  const [chosen, setChosen] = useState('边框')
  const [data, setData] = useState<any>([])

  const obj: ChosenInterface = {
    chosen,
    setChosen,
  }

  useEffect(() => {
    switch (chosen) {
      case '边框':
        setData(list)
        break
      default:
        setData([])
        break
    }
  }, [chosen])

  return (
    <div className={style.left}>
      <TabList {...obj} />
      <PluginList data={data} />
    </div>
  )
}

Left.propTypes = {}

export default Left
