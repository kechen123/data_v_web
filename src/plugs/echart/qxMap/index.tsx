import { useEffect, useState } from 'react'
import * as echarts from 'echarts'
import { getFetch } from '@utils/request'
import useWidgetBus from '@hooks/useWigetBus'
import { getOption } from './option'
import Echart from '../echart'

const Index = (props: any) => {
  const data = {
    getOption,
    isUseWidgetBus: false,
    widget: props,
  }
  const { id, widget: config } = props
  const [echartData, setEchartData] = useState(data)
  const [isLoading, setIsLoading] = useState(true)
  console.log('props>>>', props)
  useWidgetBus(id, (data) => {
    const oldConfig = echartData.widget.widget.config
    const newConfig = data.widget.config
    if (oldConfig.map_code !== newConfig.map_code) {
      setEchartData((data) => {
        const widget = JSON.parse(JSON.stringify(data.widget))
        widget.widget.config.map_code = newConfig.map_code
        return {
          ...data,
          widget,
        }
      })
    }
    if (oldConfig.map !== newConfig.map) {
      setEchartData((data) => {
        const widget = JSON.parse(JSON.stringify(data.widget))
        widget.widget.config.map = newConfig.map
        return {
          ...data,
          widget,
        }
      })
    }
  })
  useEffect(() => {
    const config = echartData.widget.widget.config
    const code = config.map_code.substring(0, 6)
    const map = config.map
    const maps = echarts.getMap(map)
    if (!maps) {
      setIsLoading(true)
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
