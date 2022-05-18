import React, { useState, useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { defaultOption, defaultConfig } from './option'
import { BasicBar as BasicBarType } from './_types'

const Index = (props: any) => {
  const [config, setConfig] = useState<BasicBarType>(defaultConfig)
  const barRef = useRef<HTMLDivElement | null>(null)
  let echart: any = null

  useEffect(() => {
    if (barRef.current) {
      echart = echarts.init(barRef.current)
      echart.setOption(defaultOption)
    }
  }, [])
  return <div style={{ width: '100%', height: '100%' }} ref={barRef}></div>
}

export default Index
