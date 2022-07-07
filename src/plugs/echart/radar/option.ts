import { Label } from './../pie/_types'
import { fontWeight, fontFamily, symbol } from './../../../utils/formData'
import defaultData from './data.json'
import { Radar as RadarType, Ruler, DataItem } from './_types'
import { legendPosition } from '@/utils/formData'

export const defaultConfig: RadarType = {
  radar: {
    axisName: {
      show: true,
      unit: '',
      color: '#5b81cb',
      fontStyle: 'normal',
      fontWeight: '',
      fontFamily: 'Microsoft YaHei',
      fontSize: 12,
    },
    shape: 'polygon',
    splitNumber: 4,
    axisLine: {
      show: false,
      symbol: 'rect',
      symbolSize: [10, 15],
      symbolOffset: [0, 0],
      lineStyle: {
        color: '#333',
        width: 1,
        type: 'solid',
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ['#141c42', '#141c42'],
        width: 1,
        type: 'solid',
      },
    },
    splitArea: {
      show: true,
      areaStyle: {
        color: ['rgba(81,107,145,0.2)', 'rgba(89,196,230,0.2)'],
      },
    },
  },
  dataItem: [
    {
      symbol: 'circle',
      symbolSize: [4, 4],
      symbolOffset: [0, 0],
      symbolKeepAspect: true,
      label: {
        show: false,
        position: 'outside',
        unit: '',
        color: '#fff',
        fontStyle: 'normal',
        fontWeight: '',
        fontFamily: 'Arial,苹方,微软雅黑',
        fontSize: 16,
        lineHeight: 20,
      },
      itemStyle: {
        color: '#edafda',
      },
      lineStyle: {
        color: '#edafda',
        width: 1,
        type: 'solid',
      },
      areaColor: {
        type: 'linear',
        x: 0, //右
        y: 0, //下
        x2: 1, //左
        y2: 1, //上
        colorStops: [
          {
            offset: 0,
            color: 'rgba(237,175,218,0.9)',
          },
          {
            offset: 0.5,
            color: 'rgba(237,175,218,0.1)',
          },
          {
            offset: 1,
            color: 'rgba(237,175,218,0.9)',
          },
        ],
        globalCoord: false,
      },
    },
    {
      symbol: 'circle',
      symbolSize: [4, 4],
      symbolOffset: [0, 0],
      symbolKeepAspect: true,
      label: {
        show: false,
        position: 'outside',
        unit: '',
        color: '#fff',
        fontStyle: 'normal',
        fontWeight: '',
        fontFamily: 'Arial,苹方,微软雅黑',
        fontSize: 16,
        lineHeight: 20,
      },
      itemStyle: {
        color: '#93b7e3',
      },
      lineStyle: {
        color: '#93b7e3',
        width: 1,
        type: 'solid',
      },
      areaColor: {
        type: 'linear',
        x: 0, //右
        y: 0, //下
        x2: 1, //左
        y2: 1, //上
        colorStops: [
          {
            offset: 0,
            color: 'rgba(147,183,227,0.9)',
          },
          {
            offset: 0.5,
            color: 'rgba(147,183,227,0.1)',
          },
          {
            offset: 1,
            color: 'rgba(147,183,227,0.9)',
          },
        ],
        globalCoord: false,
      },
    },
  ],
  legend: {
    show: true,
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
  y: ['降雨量', '蒸发量'],
}

export const getOption = (config: RadarType, data: any = defaultData, ruler: Ruler = defaultRuler) => {
  const { radar, dataItem, legend, tooltip } = config
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
    data: ruler.y,
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

  const seriesData = ruler.y.map((y_item, i) => {
    const s_data = data.map((d_item) => d_item[y_item])
    const item: DataItem = dataItem[i]
    return {
      name: y_item,
      value: s_data,
      symbol: item.symbol,
      symbolSize: item.symbolSize,
      symbolOffset: item.symbolOffset,
      symbolKeepAspect: item.symbolKeepAspect,
      label: {
        show: item.label.show,
        position: item.label.position,
        formatter: `{c}${item.label.unit}`,
        color: item.label.color,
        fontStyle: item.label.fontStyle,
        fontWeight: item.label.fontWeight,
        fontFamily: item.label.fontFamily,
        fontSize: item.label.fontSize,
        lineHeight: item.label.lineHeight,
      },
      itemStyle: {
        color: item.itemStyle.color,
      },
      lineStyle: {
        color: item.lineStyle.color,
        width: item.lineStyle.width,
        type: item.lineStyle.type,
      },
      areaStyle: {
        color: item.areaColor,
      },
    }
  })

  const { axisName, shape, splitNumber, axisLine, splitLine, splitArea } = radar
  const indicator = x.map((item) => {
    return {
      name: item,
    }
  })
  const option = {
    radar: {
      axisName: {
        show: axisName.show,
        formatter: `{value}${axisName.unit}`,
        color: axisName.color,
        fontStyle: axisName.fontStyle,
        fontWeight: axisName.fontWeight,
        fontFamily: axisName.fontFamily,
        fontSize: axisName.fontSize,
      },
      shape: shape,
      splitNumber: splitNumber,
      axisLine: {
        show: axisLine.show,
        symbol: axisLine.symbol,
        symbolSize: axisLine.symbolSize,
        symbolOffset: axisLine.symbolOffset,
        lineStyle: {
          color: axisLine.lineStyle.color,
          width: axisLine.lineStyle.width,
          type: axisLine.lineStyle.type,
        },
      },
      splitLine: {
        show: splitLine.show,
        lineStyle: {
          color: splitLine.lineStyle.color,
          width: splitLine.lineStyle.width,
          type: splitLine.lineStyle.type,
        },
      },
      splitArea: {
        show: splitArea.show,
        areaStyle: {
          color: splitArea.areaStyle.color,
        },
      },
      indicator: indicator,
    },
    series: {
      type: 'radar',
      data: seriesData,
    },
    tooltip: tooltipOption,
    legend: legendOption,
  }
  console.log(JSON.stringify(option, null, 2))
  return option
}
