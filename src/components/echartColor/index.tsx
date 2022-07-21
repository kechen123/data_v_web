// @flow
import React, { useState } from 'react'
import update, { extend } from 'immutability-helper'
import Color from '@components/color'
import { Color as ColorType, BaseColor as BaseColorType, LinearColor as LinearColorType, RadialColor as RadialColorType } from '@/_types/Color'
import styles from './index.module.less'

type ColorT = BaseColorType | LinearColorType | RadialColorType
type Props = {
  color: ColorT
  onChange?: (color: ColorT) => void
}

const getColors = (color: ColorT) => {
  if (typeof color === 'object') {
    return color.colorStops.map((item) => {
      return item.color
    })
  } else {
    return [color]
  }
}

extend('$colorStops', (param: any) => {
  const { selfColors, index, colorStr } = param
  return selfColors.map((item, i) => {
    return {
      color: index === i ? colorStr : item,
      offset: i / (selfColors.length - 1),
    }
  })
})

const EchartColor = (props: Props) => {
  const { color, onChange } = props
  const [selfColors, setSelfColors] = useState<string[]>(getColors(color))

  const setColor = (color: BaseColorType, index?: number) => {
    const i = index || 0
    const colors = [...selfColors]
    colors[i] = color
    setSelfColors(colors)
  }

  const handleChange = (color: string, index?: number) => {
    const colorStr = color
    console.log(color)
    setColor(colorStr, index)
    if (onChange) {
      let propsColor = JSON.parse(JSON.stringify(props.color))
      if (typeof propsColor === 'string') {
        propsColor = colorStr
      } else {
        propsColor.colorStops = selfColors.map((item, i) => {
          return {
            color: index === i ? colorStr : item,
            offset: i / (selfColors.length - 1),
          }
        })
      }
      onChange(propsColor)
    }
  }
  return (
    <div className={styles.echartColors}>
      {selfColors.map((color, index) => {
        return (
          <div className={styles.color} key={index}>
            <Color color={color} onChange={(color) => handleChange(color, index)} />
          </div>
        )
      })}
    </div>
  )
}
export default EchartColor
