import { borderType, fontFamily } from './../../../utils/formData'
import defaultData from './data.json'
import { Pie as PieType, Ruler } from './_types'
import { legendPosition } from '@/utils/formData'

export const defaultConfig: PieType = {
  colors: ['#fc97af', '#87f7cf', '#f7f494', '#72ccff', '#f7c5a0', '#d4a4eb', '#d2f5a6'],
  selectedMode: 'single',
  selectedOffset: 10,
  roseType: false,
  insideRadius: 0,
  outsideRadius: '75%',
  borderRadius: 0,
  borderColor: '#FFF',
  borderWidth: 0,
  label: {
    show: true,
    position: 'outside',
    unit: '',
    color: '#FFF',
    fontStyle: 'normal',
    fontWeight: '',
    fontFamily: 'Arial,苹方,微软雅黑',
    fontSize: 16,
    lineHeight: 20,
  },
  labelLine: {
    show: true,
    length: 20,
    length2: 20,
    smooth: true,
  },
  legend: {
    show: false,
    position: 'top',
    fontFamily: 'Microsoft YaHei',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontColor: '#fff',
  },
  tooltip: {
    show: true,
    triggerOn: 'mousemove',
    borderRadius: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderType: 'solid',
    borderWidth: 0,
    borderColor: '#fff',
    fontFamily: 'Microsoft YaHei',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontColor: '#fff',
  },
}

const defaultRuler: Ruler = {
  x: '月份',
  y: '降雨量',
}

export const getOption = (config: PieType, data: any = defaultData, ruler: Ruler = defaultRuler) => {
  const { label, labelLine, legend, tooltip } = config

  const x = data.map((item) => item[ruler.x])
  const { top, right, bottom, left, orient } = legendPosition(legend.position)
  const legendOption = {
    type: 'plain',
    show: legend.show,
    orient: orient,
    top: top,
    left: left,
    right: right,
    bottom: bottom,
    itemGap: 30,
    textStyle: {
      fontFamily: legend.fontFamily,
      fontSize: legend.fontSize,
      color: legend.fontColor,
      fontWeight: legend.fontWeight,
      textShadowBlur: 20,
      textShadowColor: '#4A92EC',
      textShadowOffsetX: 0,
      textShadowOffsetY: 0,
    },
    data: x,
  }

  const tooltipOption = {
    show: tooltip.show,
    confine: true,
    trigger: 'item',
    axisPointer: {
      lineStyle: {
        color: '#ccc',
      },
    },
    triggerOn: tooltip.triggerOn,
    borderColor: tooltip.borderColor,
    borderWidth: tooltip.borderWidth,
    backgroundColor: tooltip.backgroundColor,
    borderRadius: tooltip.borderRadius,
    padding: [10, 20, 10, 20],
    textStyle: {
      color: tooltip.fontColor,
      fontSize: tooltip.fontSize,
      fontWeight: tooltip.fontWeight,
      fontFamily: tooltip.fontFamily,
    },
    extraCssText: '',
  }

  const seriesData = data.map((item) => {
    const name = item[ruler.x]
    const value = item[ruler.y]
    const data = {
      name: name,
      value: value,
    }
    return data
  })

  const series = {
    name: '',
    type: 'pie',
    selectedMode: config.selectedMode === 'none' ? false : config.selectedMode,
    selectedOffset: config.selectedOffset,
    roseType: config.roseType ? 'radius' : config.roseType,
    radius: [config.insideRadius, config.outsideRadius],
    data: seriesData,
    itemStyle: {
      borderRadius: config.borderRadius,
      borderColor: config.borderColor,
      borderWidth: config.borderWidth,
    },
    label: {
      show: label.show,
      position: label.position,
      formatter: `{c}${label.unit}`,
      color: label.color,
      fontStyle: label.fontStyle,
      fontWeight: label.fontWeight,
      fontFamily: label.fontFamily,
      fontSize: label.fontSize,
      lineHeight: label.lineHeight,
    },
    labelLine: {
      show: labelLine.show,
      length: labelLine.length,
      length2: labelLine.length2,
      smooth: labelLine.smooth,
    },
  }

  const option = {
    animation: true,
    color: config.colors,
    legend: legendOption,
    tooltip: tooltipOption,
    series: series,
  }
  return option
}
