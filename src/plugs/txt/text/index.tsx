import React, { useState, useEffect, useRef } from 'react'
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

const Index = (config: TextType) => {
  const option = getOption(config)
  let baseStyle = {
    fontFamily: option.fontFamily,
    fontSize: option.fontSize,
    color: option.color,
    fontStyle: option.fontStyle,
    fontWeight: option.fontWeight,
    letterSpacing: option.letterSpacing,
    // lineHeight: option.lineHeight,
    display: 'flex',
    justifyContent: justifyContent[option.textAlign],
    alignItems: alignItems[option.textBaseline],
  }
  let baseSpanStyle = {}
  if (typeof option.lineClamp === 'number') {
    baseSpanStyle['WebkitTextStrokeColor'] = option.lineClamp
    baseSpanStyle['overflow'] = 'hidden'
    baseSpanStyle['textOverflow'] = 'ellipsis'
    baseSpanStyle['whiteSpace'] = 'nowrap'
    baseSpanStyle['WebkitBackgroundClip'] = 'text'
  }

  let otherSpanStyle: any = {
    ...baseSpanStyle,
    '-webkit-text-stroke-width': option.borderWith + 'px',
    '-webkit-text-stroke-color': option.borderColor,
    'text-shadow': `${option.shadowColor} ${option.shadowOffsetX}px ${option.shadowOffsetY}px ${option.shadowBlur}px`,
  }

  return (
    <div className={style.text}>
      <div className={style.baseStyle} style={baseStyle}>
        <span style={baseSpanStyle}>{option.txt}</span>
      </div>
      <div className={style.otherStyle} style={baseStyle}>
        <span style={otherSpanStyle}>{option.txt}</span>
      </div>
    </div>
  )
}

export default Index
