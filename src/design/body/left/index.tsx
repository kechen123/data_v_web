import React, { useState, useEffect } from 'react'
import { PluginList, TabList } from './components'
import style from './index.module.less'
import { Widget } from '@_types/Plugin'
import { Chosen as ChosenInterface } from '@_types/Left'
import { Echarts, Texts } from '@config/plugList'

const Left = (props) => {
  const [chosen, setChosen] = useState('Echarts')
  const [data, setData] = useState<any>([])

  const obj: ChosenInterface = {
    chosen,
    setChosen,
  }

  useEffect(() => {
    switch (chosen) {
      case 'Echarts':
        setData(Echarts)
        break
      case '文本':
        setData(Texts)
        break
      case '图表':
        setData([])
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
