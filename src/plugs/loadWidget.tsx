import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import { createPortal } from 'react-dom'
import * as echarts from 'echarts'
import { useExternal } from 'ahooks'
import CustomErrorBoundary from './customError'
import { WidgetObj } from '@_types/Plugin'

const widthWidget = (WrappedComponent) => {
  return (props: WidgetObj) => {
    const [state, setState] = useState(props)
    const [error, setError] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    const status =
      window.location.href.indexOf('design') > -1
        ? 'design'
        : useExternal('./customized/index.js', {
            js: {
              async: true,
            },
          })

    useEffect(() => {
      setState(props)
    }, [props])

    useEffect(() => {
      if (status === 'ready') {
        try {
          ;(async () => {
            const option: any = await window.customPlug({
              React,
              ReactDOM,
              echarts,
              ref,
              config: props,
            })
            setState(option)
          })()
        } catch (error) {
          setError(true)
          console.log(error)
        }
      }
    }, [status])

    return (
      <div ref={ref} style={{ width: '100%', height: '100%' }}>
        {error ? <CustomErrorBoundary /> : state ? <WrappedComponent {...state} /> : null}
      </div>
    )
  }
}

export default widthWidget
