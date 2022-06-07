import React, { useState, useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import eventBus from '@utils/eventBus'
import { WidgetObj } from '@_types/Plugin'

interface Props {
  widget: WidgetObj
  getOption: (config: any) => any
}

let echart: any = null

const Index = ({ widget, getOption }: Props) => {
  const {
    id,
    widget: {
      plugin: { url },
      config,
    },
  } = widget

  const [option, setOption] = useState(getOption(config))
  const [rect, setRect] = useState(widget.widget.rect)
  const barRef = useRef<HTMLDivElement | null>(null)

  const setWidgetMapBus = (data: WidgetObj) => {
    const newOption = getOption(data.widget.config)
    const newRect = data.widget.rect
    if (data.id === id && JSON.stringify(option) !== JSON.stringify(newOption)) {
      setOption(newOption)
    }
    if (data.id === id && JSON.stringify(rect) !== JSON.stringify(newRect)) {
      setRect(newRect)
    }
  }

  useEffect(() => {
    if (barRef.current && !echart) {
      echart = echarts.init(barRef.current)
    }
    eventBus.addListener('setWidgetMap', setWidgetMapBus)
    return () => {
      eventBus.removeListener('setWidgetMap', setWidgetMapBus)
    }
  }, [])

  useEffect(() => {
    if (barRef.current && echart) {
      echart.setOption(option)
    }
  }, [option])

  useEffect(() => {
    if (barRef.current && echart) {
      echart.resize()
    }
  }, [rect])
  return <div key={id} style={{ width: '100%', height: '100%' }} ref={barRef}></div>
}

export default Index
