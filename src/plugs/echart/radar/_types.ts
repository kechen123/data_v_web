import { legend } from './../../../utils/formData'
import { Symbol, LegendPosition as LegendPositionType } from '@_types/formData'
export type BaseRadar = {
  //雷达图每个指示器名称的配置项
  axisName: {
    show: boolean
    unit: string
    color: string
    fontStyle: string
    fontWeight: string
    fontFamily: string
    fontSize: number
  }
  //雷达图形状
  shape: 'polygon' | 'circle'
  //指示器轴的分割段数
  splitNumber: number

  //坐标轴轴线相关设置。
  axisLine: {
    show: boolean
    symbol: Symbol
    symbolSize: [number, number]
    symbolOffset: [number, number]
    lineStyle: {
      color: any
      width: number
      type: 'solid' | 'dashed' | 'dotted'
    }
  }
  //坐标轴在 grid 区域中的分隔线
  splitLine: {
    show: boolean
    lineStyle: {
      color: any[]
      width: number
      type: 'solid' | 'dashed' | 'dotted'
    }
  }
  //坐标轴在 grid 区域中的分隔区域
  splitArea: {
    show: boolean
    areaStyle: {
      color: any[]
    }
  }
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

export type DataItem = {
  name: string
  symbol: Symbol
  symbolSize: [number, number]
  symbolOffset: [number, number]
  symbolKeepAspect: boolean
  label: Label
  itemStyle: {
    color: any //拐点颜色
  }
  lineStyle: {
    color: any
    width: number
    type: 'solid' | 'dashed' | 'dotted'
  }
  areaColor: any
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

export type Radar = {
  radar: BaseRadar
  dataItem: DataItem[]
  tooltip: Tooltip
  legend: Legend
}

export type Ruler = {
  维度: string
  值: string[]
}
