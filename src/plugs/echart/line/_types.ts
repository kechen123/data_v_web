import { symbol } from './../../../utils/formData'
import { LegendPosition as LegendPositionType } from '@_types/formData'
type valueType = number | string

export type Margin = {
  top: valueType
  right: valueType
  bottom: valueType
  left: valueType
}

export type Label = {
  show: boolean
  position:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'inside'
    | 'insideLeft'
    | 'insideRight'
    | 'insideTop'
    | 'insideBottom'
    | 'insideTopLeft'
    | 'insideBottomLeft'
    | 'insideTopRight'
    | 'insideBottomRight'
  unit: string
  color: any
  fontFamily: string
  fontSize: number
  fontStyle: string
  fontWeight: string
}

export type Y = {
  show: boolean
  position: string
  offset: number
  margin: number
  max: number | undefined
  min: number | undefined
  unit: string
  fontFamily: string
  fontSize: number
  fontStyle: string
  fontWeight: string
  fontColor: any
  color: any
  splitLineShow: boolean
  splitLineType: string
  splitLineColor: any
}

export type X = {
  show: boolean
  unit: string
  color: any
  splitLineShow: boolean
  splitLineType: string
  splitLineColor: any
  interval: number
  margin: number
  fontFamily: string
  fontSize: number
  fontStyle: string
  fontWeight: string
  fontColor: any
  zoom: boolean
  rotate: number
}

export type Tooltip = {
  show: boolean
  triggerOn: string
  borderRadius: number
  backgroundColor: any
  borderType: string
  borderWidth: number
  borderColor: any
  fontFamily: string
  fontSize: number
  fontStyle: string
  fontWeight: string
  fontColor: any
}

export type Legend = {
  show: boolean
  position: LegendPositionType
  fontFamily: string
  fontSize: number
  fontStyle: string
  fontWeight: string
  fontColor: any
}

export type Line = {
  grid: Margin
  colorArr: any[]
  smooth: boolean //是否平滑曲线显示
  symbol: string
  symbolSize: number
  symbolColorArr: any[]
  step: boolean
  width: number
  type: 'solid' | 'dashed' | 'dotted'
  label: Label
  showArea: boolean
  areaColor: any[]
  x: X
  y: Y
  legend: Legend
  tooltip: Tooltip
}

export type Ruler = {
  x: string
  y: string[]
}
