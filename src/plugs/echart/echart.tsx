import React, { useState, useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import eventBus from '@utils/eventBus'
import { WidgetObj } from '@_types/Plugin'

interface Props {
  widget: WidgetObj
  getOption: (config: any) => any
}

const Index = ({ widget, getOption }: Props) => {
  const {
    id,
    widget: {
      plugin: { url },
      config,
    },
  } = widget

  const chartRef = useRef<any>()
  // const [chart, setChart] = useState<echarts.ECharts>()
  const [option, setOption] = useState(getOption(config))
  const [rect, setRect] = useState(widget.widget.rect)
  const barRef = useRef<HTMLDivElement | null>(null)

  const setWidgetMapBus = (data: WidgetObj) => {
    if (data.id !== id) return
    const newOption = getOption(data.widget.config)
    const newRect = data.widget.rect
    if (JSON.stringify(option) !== JSON.stringify(newOption)) {
      setOption(newOption)
    }
    if (rect.width !== newRect.width || rect.height !== newRect.height) {
      setRect(newRect)
    }
  }

  useEffect(() => {
    if (barRef.current && !chartRef.current) {
      const echart = echarts.init(barRef.current)
      chartRef.current = echart
    }
    eventBus.addListener('setWidgetMap', setWidgetMapBus)
    return () => {
      eventBus.removeListener('setWidgetMap', setWidgetMapBus)
    }
  }, [])

  useEffect(() => {
    if (barRef.current && chartRef.current) {
      chartRef.current.setOption(option)
    }
  }, [option])

  useEffect(() => {
    if (barRef.current && chartRef.current) {
      chartRef.current.resize()
    }
  }, [rect])
  return <div key={id} style={{ width: '100%', height: '100%' }} ref={barRef}></div>
}

export default Index
