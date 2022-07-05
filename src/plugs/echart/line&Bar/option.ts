import defaultData from './data.json'
import { legendPosition } from '@/utils/formData'
import { BarLine as BarLineType, Ruler } from './_types'

export const defaultConfig: BarLineType = {
  grid: {
    top: '20%',
    right: '10%',
    bottom: '10%',
    left: '10%',
  },
  line: {
    colorArr: ['rgba(61,126,235,1)', 'rgba(15,197,243,1)'],
    smooth: true,
    symbol: 'circle',
    symbolColorArr: ['rgba(61,126,235,1)', 'rgba(15,197,243,1)'],
    symbolSize: 4,
    step: false,
    width: 2,
    type: 'solid',
    label: {
      show: true,
      position: 'top',
      unit: '',
      color: '#FFF',
      fontFamily: 'Microsoft YaHei',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '',
    },
    showArea: false,
    areaColor: [
      {
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: 'linear',
        global: false,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(61,126,235,0.5)',
          },
          {
            offset: 1,
            color: 'rgba(61,126,235,0)',
          },
        ],
      },
      {
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: 'linear',
        global: false,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(15,197,243,0.5)',
          },
          {
            offset: 1,
            color: 'rgba(15,197,243,0)',
          },
        ],
      },
      {
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: 'linear',
        global: false,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(23,216,161,0.5)',
          },
          {
            offset: 1,
            color: 'rgba(23,216,161,0)',
          },
        ],
      },
      {
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: 'linear',
        global: false,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(244,201,7,0.5)',
          },
          {
            offset: 1,
            color: 'rgba(244,201,7,0)',
          },
        ],
      },
      {
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: 'linear',
        global: false,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(219,51,90,0.5)',
          },
          {
            offset: 1,
            color: 'rgba(219,51,90,0)',
          },
        ],
      },
      {
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: 'linear',
        global: false,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(170,0,228,0.5)',
          },
          {
            offset: 1,
            color: 'rgba(170,0,228,0)',
          },
        ],
      },
    ],
  },
  bar: {
    baseBar: {
      barGap: '30%',
      direction: 'vertical',
      stack: false,
      bars: [
        {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#3D7EEB',
              },
              {
                offset: 1,
                color: 'rgba(61,126,235,0)',
              },
            ],
            globalCoord: false,
          },
          emphasisColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#3D7EEB',
              },
              {
                offset: 1,
                color: 'rgba(61,126,235,0)',
              },
            ],
            globalCoord: false,
          },
          width: '30%',
          borderRadius: 2,
          borderWidth: 1,
          borderType: 'solid',
          borderColor: '#3D7EEB',
          barUnit: '',
        },
        {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#0FC5F3',
              },
              {
                offset: 1,
                color: 'rgba(15,197,243,0)',
              },
            ],
            globalCoord: false,
          },
          emphasisColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#0FC5F3',
              },
              {
                offset: 1,
                color: 'rgba(15,197,243,0)',
              },
            ],
            globalCoord: false,
          },
          width: '30%',
          borderRadius: 0,
          borderWidth: 1,

          borderType: 'solid',
          borderColor: '#3D7EEB',
          barUnit: '',
        },
      ],
    },
    label: {
      show: true,
      position: 'top',
      unit: '',
      color: '#FFF',
      fontFamily: 'Microsoft YaHei',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '',
    },
  },
  x: {
    show: true,
    unit: '',
    color: 'rgba(255,255,255,0.6)',
    splitLineShow: true,
    splitLineType: 'dotted',
    splitLineColor: 'rgba(255,255,255,0.2)',
    interval: 0,
    margin: 0,
    fontFamily: 'Microsoft YaHei',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontColor: '#fff',
    zoom: true,
    rotate: 0,
  },
  barY: {
    show: true,
    position: 'left',
    offset: 0,
    margin: 10,
    max: undefined,
    min: undefined,
    unit: ' ml',
    fontFamily: 'Arial,苹方,微软雅黑',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '',
    fontColor: 'rgba(255,255,255,0.6)',
    color: 'rgba(38,217,255,0.5)',
    splitLineShow: true,
    splitLineType: 'solid',
    splitLineColor: 'rgba(110,132,169,0.2)',
  },
  lineY: {
    show: true,
    position: 'right',
    offset: 0,
    margin: 10,
    max: undefined,
    min: undefined,
    unit: ' °C',
    fontFamily: 'Arial,苹方,微软雅黑',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '',
    fontColor: 'rgba(255,255,255,0.6)',
    color: 'rgba(38,217,255,0.5)',
    splitLineShow: true,
    splitLineType: 'solid',
    splitLineColor: 'rgba(110,132,169,0.2)',
  },
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
  z: ['温度'],
}

export const getOption = (config: BarLineType, data: any = defaultData, ruler: Ruler = defaultRuler) => {
  const { grid, line, bar, x, barY, lineY, legend, tooltip } = config

  const getColor = (color: string | Object) => {
    if (bar.baseBar.direction === 'horizontally') {
      let newColor = JSON.parse(JSON.stringify(color))
      newColor.x2 = 1
      newColor.y2 = 0
      return newColor
    }
    return color
  }

  const getLabelPosition = (position: string) => {
    if (bar.baseBar.direction === 'horizontally') {
      switch (position) {
        case 'top':
          return 'right'
        case 'bottom':
          return 'left'
        default:
          return position
      }
    }
    return position
  }

  const gridOption = {
    left: grid.left,
    right: grid.right,
    top: grid.top,
    bottom: grid.bottom,
    containLabel: true,
  }

  const { top, right, bottom, left, orient } = legendPosition(legend.position)
  const legendOption = {
    type: 'plain',
    data: ruler.y,
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
  }

  const tooltipOption = {
    show: tooltip.show,
    confine: true,
    trigger: 'axis',
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

  const xAxisData = data.map((item) => item[ruler.x])

  const xAxisOption = {
    type: 'category',
    show: x.show,
    data: xAxisData,
    axisLine: {
      show: true,
      lineStyle: {
        color: x.color,
        width: 1,
      },
    },
    axisTick: {
      show: true,
      length: 5,
      lineStyle: {
        color: x.color,
        width: 1,
      },
    },
    splitLine: {
      show: x.splitLineShow,
      lineStyle: {
        color: x.splitLineColor,
        width: 1,
        type: x.splitLineType,
      },
    },
    axisLabel: {
      show: true,
      interval: x.interval, // 0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
      rotate: 0,
      margin: x.margin, // 文字距离轴线的距离
      fontFamily: x.fontFamily,
      fontSize: x.fontSize,
      color: x.fontColor,
      fontWeight: x.fontWeight,
      textShadowBlur: 20,
      textShadowColor: '#4A92EC',
      textShadowOffsetX: 0,
      textShadowOffsetY: 0,
      formatter: `{value}${x.unit}`,
    },
  }

  const barYAxisOption = {
    type: 'value',
    show: barY.show,
    position: barY.position,
    offset: barY.offset,
    max: barY.max,
    min: barY.min,
    splitNumber: null,
    scale: false,
    axisLine: {
      show: true,
      lineStyle: {
        color: barY.color,
        width: 1,
      },
    },
    splitLine: {
      show: barY.splitLineShow,
      lineStyle: {
        color: barY.splitLineColor,
        width: 1,
        type: barY.splitLineType,
      },
    },
    axisTick: {
      show: true,
      length: 6,
      lineStyle: {
        color: barY.color,
        width: 2,
      },
    },
    axisLabel: {
      show: true,
      margin: barY.margin,
      fontSize: barY.fontSize,
      color: barY.fontColor,
      fontWeight: barY.fontWeight,
      fontFamily: barY.fontFamily,
      textShadowBlur: 20,
      textShadowColor: 'rgba(74,146,236,0)',
      textShadowOffsetX: 0,
      textShadowOffsetY: 0,
      formatter: `{value}${barY.unit}`,
    },
  }
  const lineYAxisOption = {
    type: 'value',
    show: lineY.show,
    position: lineY.position,
    offset: lineY.offset,
    max: lineY.max,
    min: lineY.min,
    splitNumber: null,
    scale: false,
    axisLine: {
      show: true,
      lineStyle: {
        color: lineY.color,
        width: 1,
      },
    },
    splitLine: {
      show: lineY.splitLineShow,
      lineStyle: {
        color: lineY.splitLineColor,
        width: 1,
        type: lineY.splitLineType,
      },
    },
    axisTick: {
      show: true,
      length: 6,
      lineStyle: {
        color: lineY.color,
        width: 2,
      },
    },
    axisLabel: {
      show: true,
      margin: lineY.margin,
      fontSize: lineY.fontSize,
      color: lineY.fontColor,
      fontWeight: lineY.fontWeight,
      fontFamily: lineY.fontFamily,
      textShadowBlur: 20,
      textShadowColor: 'rgba(74,146,236,0)',
      textShadowOffsetX: 0,
      textShadowOffsetY: 0,
      formatter: `{value}${lineY.unit}`,
    },
  }
  const yAxis = [barYAxisOption, lineYAxisOption]

  const barSeries = ruler.y.map((y_item, index) => {
    const s_data = data.map((d_item) => d_item[y_item])
    const barInfo = bar.baseBar
    const barItem = barInfo.bars[index]
    const barLabel = bar.label
    const option = {
      name: y_item,
      type: 'bar',
      barWidth: barItem.width,
      barGap: barInfo.barGap,
      stack: barInfo.stack ? 'A' : index,
      data: s_data,
      itemStyle: {
        width: 50,
        borderRadius: barItem.borderRadius,
        color: getColor(barItem.color),
        borderType: barItem.borderType,
        borderColor: barItem.borderColor,
        borderWidth: barItem.borderWidth,
      },
      label: {
        show: barLabel.show,
        position: getLabelPosition(barLabel.position),
        distance: 5,
        color: barLabel.color,
        fontSize: barLabel.fontSize,
        fontWeight: barLabel.fontWeight,
        fontFamily: barLabel.fontFamily,
        backgroundColor: 'rgba(255,255,255,0)',
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowBlur: 0,
        shadowColor: 'rgba(0,0,0,0)',
        textShadowBlur: 0,
        textShadowColor: '#4A92EC',
        textShadowOffsetX: 0,
        textShadowOffsetY: 0,
        padding: [0, 0, 0, 0],
        formatter: `{c}${barItem.barUnit}`,
      },
    }
    return option
  })

  const lineSeries = ruler.z.map((y_item, index) => {
    const s_data = data.map((d_item) => d_item[y_item])
    const lineInfo = line
    const lineLabel = line.label
    let series = {
      name: y_item,
      type: 'line',
      yAxisIndex: 1,
      smooth: lineInfo.smooth,
      step: lineInfo.step ? 'start' : false,
      data: s_data,
      symbol: lineInfo.symbol,
      symbolSize: lineInfo.symbolSize,
      lineStyle: {
        color: lineInfo.colorArr[index],
        width: lineInfo.width,
        type: lineInfo.type,
      },
      itemStyle: {
        color: lineInfo.symbolColorArr[index],
        borderWidth: 0,
      },

      label: {
        show: lineLabel.show,
        position: lineLabel.position,
        distance: 10,
        backgroundColor: 'rgba(255,255,255,0)',
        color: lineLabel.color,
        fontSize: lineLabel.fontSize,
        fontStyle: lineLabel.fontStyle,
        fontWeight: 'normal',
        textShadowOffsetX: 0,
        textShadowOffsetY: 0,
        textShadowBlur: 0,
        textShadowColor: 'rgba(38,217,255,0)',
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowBlur: 0,
        shadowColor: 'rgba(0,0,0,0)',
        padding: [0, 0, 0, 0],
        fontFamily: lineLabel.fontFamily,
        formatter: `{c}${lineLabel.unit}`,
      },
    }
    if (lineInfo.showArea) {
      series['areaStyle'] = {
        color: lineInfo.areaColor[index],
      }
    }
    return series
  })

  const option = {
    animation: true,
    legend: legendOption,
    tooltip: tooltipOption,
    grid: gridOption,
    xAxis: xAxisOption,
    yAxis: yAxis,
    dataZoom: {
      type: 'slider',
      show: false,
      start: 0,
      end: 100,
    },
    series: [...barSeries, ...lineSeries],
  }
  console.log(JSON.stringify(option, null, 2))
  return option
}
