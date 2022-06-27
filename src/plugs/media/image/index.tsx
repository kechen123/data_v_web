import React, { useState, useEffect, useMemo, useRef } from 'react'
import styled from 'styled-components'
import useWidgetBus from '@hooks/useWigetBus'
import { WidgetObj } from '@_types/Plugin'
import { getOption } from './option'

const IMAGE = styled.div`
  width: 100%;
  height: 100%;
  min-width: 1px;
  min-height: 1px;
  background-repeat: no-repeat;
  transform: rotate(0deg);
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 0s;
`

const Index = (widgetObj: WidgetObj) => {
  const { id, widget } = widgetObj
  const [config, setConfig] = useState(widget.config)

  useWidgetBus(id, (data) => {
    setConfig(data.widget.config)
  })

  const option = useMemo(() => {
    return getOption(config)
  }, [config])

  const style = {
    backgroundImage: `url(${option.url})`,
    backgroundSize: option.type,
  }
  return <IMAGE style={style}></IMAGE>
}

export default Index
