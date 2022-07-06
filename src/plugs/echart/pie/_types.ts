import { LegendPosition as LegendPositionType } from '@_types/formData'
type valueType = number | string

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

export type Label = {
  show: boolean
  position: 'outside' | 'inside' | 'center' //外侧 内部 中心位置
  unit: string
  color: any
  fontStyle: string
  fontWeight: string
  fontFamily: string
  fontSize: number
  lineHeight: number
}

export type LabelLine = {
  show: boolean
  length: number // 视觉引导线第一段的长度
  length2: number // 视觉引导项第二段的长度
  smooth: boolean //是否平滑视觉引导线
}

export type Pie = {
  colors: any[]
  selectedMode: 'none' | 'single' | 'multiple' | 'series' //选中模式 单选，多选以及选择整个系列
  selectedOffset: number
  roseType: boolean // none:普通饼图 radius: 扇区圆心角展现数据的百分比，半径展现数据的大小 area:所有扇区圆心角相同，仅通过半径展现数据大小
  insideRadius: number | string //内半径
  outsideRadius: number | string //外半径
  borderRadius: number
  borderColor: any
  borderWidth: number
  label: Label
  labelLine: LabelLine
  legend: Legend
  tooltip: Tooltip
}

export type Ruler = {
  x: string
  y: string
}
