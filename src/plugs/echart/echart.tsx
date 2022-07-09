import React, { useState, useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { useGetState } from 'ahooks'
import eventBus from '@utils/eventBus'
import useWidgetBus from '@hooks/useWigetBus'
import { WidgetObj } from '@_types/Plugin'

interface Props {
  widget: WidgetObj
  isUseWidgetBus?: boolean
  getOption: (...params: any[]) => any
}

const Index = (props: Props) => {
  const { widget, getOption, isUseWidgetBus = true } = props
  const {
    id,
    widget: {
      plugin: { url },
      config,
      dataConfig,
    },
  } = widget

  const chartRef = useRef<any>()
  const [option, setOption, getNowOption] = useGetState(() => getOption(config, dataConfig?.staticData, dataConfig?.ruler))
  const [rect, setRect] = useState(widget.widget.rect)
  const barRef = useRef<HTMLDivElement | null>(null)
  const [replaceMerge, setReplaceMerge] = useState(false)

  const init = () => {
    if (barRef.current && !chartRef.current) {
      const echart = echarts.init(barRef.current)
      chartRef.current = echart
    }
  }

  const dispose = () => {
    if (barRef.current && chartRef.current) {
      chartRef.current.dispose()
      barRef.current = null
    }
  }

  const clear = () => {
    if (barRef.current && chartRef.current) {
      chartRef.current.clear()
    }
  }

  const resize = () => {
    if (barRef.current && chartRef.current) {
      chartRef.current.resize()
    }
  }

  useWidgetBus(id, (data) => {
    if (isUseWidgetBus) {
      const { widget } = data
      const oldOption = getNowOption()
      const newOption = getOption(widget.config, widget.dataConfig?.staticData, widget.dataConfig?.ruler)
      const newRect = data.widget.rect
      if (JSON.stringify(oldOption) !== JSON.stringify(newOption)) {
        if (oldOption.series && newOption.series && oldOption.series.length > newOption.series.length) {
          setReplaceMerge(true)
        }
        setOption(newOption)
      }
      if (rect.width !== newRect.width || rect.height !== newRect.height) {
        setRect(newRect)
      }
    }
  })

  useEffect(() => {
    init()
  }, [])

  useEffect(() => {
    if (isUseWidgetBus === false) {
      setOption(getOption(config, dataConfig?.staticData, dataConfig?.ruler))
    }
  }, [config, dataConfig])

  useEffect(() => {
    if (isUseWidgetBus === false) {
      setRect(widget.widget.rect)
    }
  }, [widget.widget.rect])

  useEffect(() => {
    //地图组件部分参数变化需要清除重新设置
    if (option.hasOwnProperty('_willClear') && option['_willClear'] === true) {
      clear()
    }
    if (option && barRef.current && chartRef.current) {
      chartRef.current.setOption(option, {
        replaceMerge: replaceMerge ? ['series'] : [],
      })
      setReplaceMerge(false)
    }
  }, [option])

  useEffect(() => {
    resize()
  }, [rect])

  return <div key={id} style={{ width: '100%', height: '100%' }} ref={barRef}></div>
}

export default Index
