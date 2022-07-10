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
}

export type BarItem = {
  color: any
  emphasisColor: any
  width: valueType
  borderRadius: number
  borderWidth: valueType
  borderType: string
  borderColor: any
  barUnit: string
}

export type Bar = {
  barGap: valueType
  direction: 'vertical' | 'horizontally'
  stack: boolean
  bars: Array<BarItem>
}

export type BaseBar = {
  baseBar: Bar
  label: Label
}

export type BarLine = {
  grid: Margin
  line: Line
  bar: BaseBar
  x: X
  barY: Y
  lineY: Y
  legend: Legend
  tooltip: Tooltip
}

export type Ruler = {
  维度: string
  值1: string[]
  值2: string[]
}
