import React, { useState, useEffect, useMemo } from 'react'
import { useGetState } from 'ahooks'
import useWidgetBus from '@hooks/useWigetBus'
import { Text as TextType } from './_types'
import { getOption } from './option'
import style from './index.module.less'

const alignItems = {
  top: 'flex-start',
  middle: 'center',
  bottom: 'flex-end',
}

const justifyContent = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
}

const Index = (props: any) => {
  const {
    id,
    widget: {
      plugin: { url },
      config,
      dataConfig,
    },
  } = props

  const [option, setOption, getNowOption] = useGetState(() => getOption(config, dataConfig?.widgetData, dataConfig?.ruler))

  useWidgetBus(id, (data) => {
    const { widget } = data
    const oldOption = getNowOption()
    const newOption = getOption(widget.config, widget.dataConfig?.widgetData, widget.dataConfig?.ruler)
    if (JSON.stringify(oldOption) !== JSON.stringify(newOption)) {
      setOption(newOption)
    }
  })

  let baseStyle = {
    fontFamily: option.fontFamily,
    fontSize: option.fontSize,
    color: option.color,
    fontStyle: option.fontStyle,
    fontWeight: option.fontWeight,
    letterSpacing: option.letterSpacing,
    display: 'flex',
    justifyContent: justifyContent[option.textAlign],
    alignItems: alignItems[option.textBaseline],
  }
  let otherStyle = {
    ...baseStyle,
  }
  delete otherStyle.color

  let baseSpanStyle = {
    lineHeight: option.fontSize + option.lineHeight / 2 + 'px',
  }
  if (typeof option.lineClamp === 'number') {
    baseSpanStyle['overflow'] = 'hidden'
    baseSpanStyle['textOverflow'] = 'ellipsis'
    baseSpanStyle['display'] = '-webkit-box'
    baseSpanStyle['WebkitBoxOrient'] = 'vertical'
    baseSpanStyle['WebkitLineClamp'] = option.lineClamp
    // baseSpanStyle['whiteSpace'] = 'nowrap'
  }

  let otherSpanStyle: any = {
    ...baseSpanStyle,
  }

  if (option.showBorder) {
    otherSpanStyle['WebkitTextStrokeWidth'] = option.borderWith + 'px'
    otherSpanStyle['WebkitTextStrokeColor'] = option.borderColor
  }
  if (option.showShadow) {
    otherSpanStyle['textShadow'] = `${option.shadowColor} ${option.shadowOffsetX}px ${option.shadowOffsetY}px ${option.shadowBlur}px`
  }
  return (
    <div className={style.text}>
      <div className={style.baseStyle} style={baseStyle}>
        <span style={baseSpanStyle}>{option.txt}</span>
      </div>
      <div className={style.otherStyle} style={otherStyle}>
        <span style={otherSpanStyle}>{option.txt}</span>
      </div>
    </div>
  )
}

export default Index
