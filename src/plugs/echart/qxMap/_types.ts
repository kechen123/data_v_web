import { fontWeight } from './../../../utils/formData'
import { LegendPosition as LegendPositionType } from '@_types/formData'
type valueType = number | string

export type Line = {
  show: boolean
  color: any
  width: number
  effect: {
    //线特效
    show: boolean
    period: number // 特效动画的时间，单位为 s
    trailLength: number //配置特效图形的移动动画是否是固定速度，单位像素/秒，设置为大于 0 的值后会忽略 period 配置项。
    symbol: string //特效图形的标记。
    color?: any
    symbolSize: number //特效标记的大小
  }
  curveness: number //曲度，支持从 0 到 1 的值，值越大曲度越大。
}

//点
export type Dot = {
  show: boolean
  scatter: boolean //是否有涟漪特效
  symbol: string //标记的图形
  symbolSize: number //图形大小
  color: any //点颜色
  rippleEffect: {
    //涟漪特效
    period: number //动画的周期，秒数
  }
}

type ItemStyle = {
  color: any
  borderColor: any
  borderWidth: number
  areaColor: any
  shadowColor: any
}

type Label = {
  show: boolean
  color: any
  fontStyle: 'normal' | 'italic' | 'oblique'
  fontWeight: 'normal' | 'bold' | 'bolder' | 'lighter' | number
  fontFamily: string
  fontSize: number
}

export type QXMAP = {
  map_code: string
  map: string
  zoom: number //缩放级别
  center?: number[]
  roam: 'scale' | 'move' | boolean
  label: Label
  itemStyle: ItemStyle
  emphasis: {
    label: Label
    itemStyle: ItemStyle
  }
  line: Line
  dot: Dot
}

export type Ruler = {
  line: string
  dot: string
}

export type Option = {
  value: string
  label: string
}

export type Options = {
  option: Array<Option>
  default?: string
}
