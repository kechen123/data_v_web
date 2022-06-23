import { useEffect, useState } from 'react'
import * as echarts from 'echarts'
import { getFetch } from '@utils/request'
import { getOption } from './option'
import Echart from '../echart'

const Index = (props: any) => {
  const data = {
    getOption,
    widget: props,
  }
  const { widget: config } = props
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const code = config.config.map_code
    const depth = config.config.map_depth
    const maps = echarts.getMap(code)
    if (!maps) {
      ;(async () => {
        const path = depth === 1 ? code : depth === 2 ? `province/${code}` : `citys/${code}`
        const response = await fetch(`./geoMapData/${path}.json`)
        const data = await response.json()
        echarts.registerMap(code, data)
        setIsLoading(false)
      })()
    } else {
      setIsLoading(false)
    }
  }, [])
  if (isLoading) {
    return <></>
  }

  return <Echart {...data} />
}

export default Index
