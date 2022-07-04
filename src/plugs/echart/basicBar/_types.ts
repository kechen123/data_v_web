import { LegendPosition as LegendPositionType } from '@_types/formData'
type valueType = number | string

export type Margin = {
  top: valueType
  right: valueType
  bottom: valueType
  left: valueType
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
  bars: Array<BarItem>
}

export type NumberText = {
  show: boolean
  position: string
  fontFamily: string
  fontSize: number
  fontStyle: string
  fontWeight: string
  color: any
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

export type YTitle = {
  name: string
  location: string
  gap: number
  rotate: number
  fontFamily: string
  fontSize: number
  fontStyle: string
  fontWeight: string
  fontColor: any
}

export type YSplitLine = {
  show: boolean
  type: string
  color: any
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
  title: YTitle
  splitLine: YSplitLine
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

export type BasicBar = {
  grid: Margin
  bar: Bar
  numberText: NumberText
  x: X
  y: Y
  legend: Legend
  tooltip: Tooltip
}

export type Ruler = {
  x: string
  y: string[]
}

export type Option = {
  value: string
  label: string
}

export type Options = {
  option: Array<Option>
  default?: string
}
