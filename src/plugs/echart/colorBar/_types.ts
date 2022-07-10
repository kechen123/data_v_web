import { LegendPosition as LegendPositionType } from '@_types/formData'
type valueType = number | string

export type Margin = {
  top: valueType
  right: valueType
  bottom: valueType
  left: valueType
}

export type Bar = {
  colorArr: Array<{
    color: any
    border: any
  }> //柱子颜色数组
  width: valueType //宽度
  direction: 'vertical' | 'horizontally'
  borderRadius: number
  borderWidth: valueType
  borderType: string
}

export type NumberText = {
  show: boolean
  position: string
  fontFamily: string
  fontSize: number
  fontStyle: string
  color: any
  unit: string
}

export type X = {
  show: boolean
  unit: string
  color: any
  splitLineShow: boolean
  splitLineType: string
  splitLineColor: any
  interval: valueType //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
  margin: number //刻度标签与轴线之间的距离。
  fontFamily: string
  fontSize: number
  fontStyle: string
  fontColor: any
  zoom: boolean
  rotate: number
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

export type ColorBar = {
  grid: Margin
  bar: Bar
  numberText: NumberText
  x: X
  y: Y
  //   legend: Legend
  tooltip: Tooltip
}

export type Ruler = {
  维度: string
  值: string
}

export type Option = {
  value: string
  label: string
}

export type Options = {
  option: Array<Option>
  default?: string
}
