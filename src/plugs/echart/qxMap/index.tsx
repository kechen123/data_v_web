import { useEffect, useState } from 'react'
import * as echarts from 'echarts'
import { useGetState } from 'ahooks'
import { WidgetObj } from '@_types/Plugin'
import { getFetch } from '@utils/request'
import useWidgetBus from '@hooks/useWigetBus'
import { getOption } from './option'
import Echart from '../echart'

const Index = (widgetObj: WidgetObj) => {
  const { id, widget: config } = widgetObj
  // const [echartData, setEchartData, getEchartData] = useGetState(() => {
  //   return {
  //     getOption,
  //     isUseWidgetBus: false,
  //     widget: props,
  //   }
  // })

  const [echartData, setEchartData] = useState(() => {
    return {
      getOption,
      isUseWidgetBus: false,
      widget: widgetObj,
    }
  })

  const [isLoading, setIsLoading] = useState(true)

  useWidgetBus(id, (data) => {
    setEchartData((echartData) => {
      return {
        ...echartData,
        widget: data,
      }
    })
  })

  // useWidgetBus(id, (data) => {
  //   const oldConfig = getEchartData().widget.widget.config
  //   const newConfig = data.widget.config
  //   if (oldConfig.map_code !== newConfig.map_code || oldConfig.map !== newConfig.map) {
  //     setEchartData((data) => {
  //       const widget = JSON.parse(JSON.stringify(data.widget))
  //       widget.widget.config.map_code = newConfig.map_code
  //       widget.widget.config.map = newConfig.map
  //       return {
  //         ...data,
  //         widget,
  //       }
  //     })
  //   }
  // })

  useEffect(() => {
    const config = echartData.widget.widget.config
    const code = config.map_code
    const map = config.map
    const maps = echarts.getMap(map)
    setIsLoading(true)
    if (!maps) {
      ;(async () => {
        const path = map === '中国' ? 'china' : map.indexOf('-') > -1 ? 'citys/' + code : 'province/' + code
        const response = await fetch(`./geoMapData/${path}.json`)
        const data = await response.json()
        echarts.registerMap(map, data)
        setIsLoading(false)
      })()
    } else {
      setIsLoading(false)
    }
  }, [echartData])

  if (isLoading) {
    return <></>
  }
  return <Echart {...echartData} />
}

export default Index
