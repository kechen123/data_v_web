import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import { createPortal } from 'react-dom'
import * as echarts from 'echarts'
import { useExternal } from 'ahooks'
declare global {
  interface Window {
    customPlug: any
  }
}
const Index = (config: any) => {
  const ref = useRef<HTMLDivElement>(null)
  const status = useExternal('/customized/index.js', {
    js: {
      async: true,
    },
  })

  useEffect(() => {
    if (status === 'ready') {
      window.customPlug({
        React,
        ReactDOM,
        echarts,
        ref,
        config,
      })
    }
  }, [status])

  if (status === 'loading') {
    return <div>loading</div>
  }
  if (status === 'error') {
    return <div>error</div>
  }
  if (status === 'ready') {
    return <div ref={ref}></div>
  }
}

export default Index
