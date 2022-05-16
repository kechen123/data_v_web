import React, { useState, useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import option from './option'

const Index = (config: any) => {
  const barRef = useRef<HTMLDivElement | null>(null)
  let echart: any = null

  useEffect(() => {
    if (barRef.current) {
      echart = echarts.init(barRef.current)
      echart.setOption(option)
    }
  }, [])
  return <div style={{ width: '100%', height: '100%' }} ref={barRef}></div>
}

export default Index
