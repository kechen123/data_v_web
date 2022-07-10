import defaultData from './data.json'
import { Line as LineType, Ruler } from './_types'
import { legendPosition } from '@/utils/formData'

export const defaultConfig: LineType = {
  grid: {
    top: '20%',
    right: '10%',
    bottom: '10%',
    left: '10%',
  },
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
    fontFamily: 'Arial,苹方,微软雅黑',
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
  x: {
    show: true,
    unit: '',
    color: 'rgba(38,217,255,0.5)',
    splitLineShow: true,
    splitLineType: 'dotted',
    splitLineColor: 'rgba(255,255,255,0.2)',
    interval: 0,
    margin: 8,
    fontFamily: 'Arial,苹方,微软雅黑',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '',
    fontColor: 'rgba(255,255,255,0.6)',
    zoom: false,
    rotate: 0,
  },
  y: {
    show: true,
    position: 'left',
    offset: 0,
    margin: 10,
    max: undefined,
    min: undefined,
    unit: '',
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

export const defaultRuler: Ruler = {
  维度: '月份',
  值: ['降雨量', '蒸发量'],
}

export const getOption = (config: LineType, data: any = defaultData, ruler: Ruler = defaultRuler) => {
  const { grid, colorArr, symbolColorArr, x, y, label, areaColor, legend, tooltip } = config
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
    data: ruler.值,
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

  const xAxisData = data.map((item) => item[ruler.维度])

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

  const yAxisOption = {
    type: 'value',
    show: y.show,
    position: y.position,
    offset: y.offset,
    max: y.max,
    min: y.min,
    splitNumber: null,
    scale: false,
    axisLine: {
      show: true,
      lineStyle: {
        color: y.color,
        width: 1,
      },
    },
    splitLine: {
      show: y.splitLineShow,
      lineStyle: {
        color: y.splitLineColor,
        width: 1,
        type: y.splitLineType,
      },
    },
    axisTick: {
      show: true,
      length: 6,
      lineStyle: {
        color: y.color,
        width: 2,
      },
    },
    axisLabel: {
      show: true,
      margin: y.margin,
      fontSize: y.fontSize,
      color: y.fontColor,
      fontWeight: y.fontWeight,
      fontFamily: y.fontFamily,
      textShadowBlur: 20,
      textShadowColor: 'rgba(74,146,236,0)',
      textShadowOffsetX: 0,
      textShadowOffsetY: 0,
      formatter: `{value}${y.unit}`,
    },
  }

  const series = ruler.值.map((y_item, index) => {
    const s_data = data.map((d_item) => d_item[y_item])

    let series = {
      name: y_item,
      type: 'line',
      smooth: config.smooth,
      step: config.step ? 'start' : false,
      data: s_data,
      symbol: config.symbol,
      symbolSize: config.symbolSize,
      lineStyle: {
        color: colorArr[index],
        width: config.width,
        type: config.type,
      },
      itemStyle: {
        color: symbolColorArr[index],
        borderWidth: 0,
      },

      label: {
        show: label.show,
        position: label.position,
        distance: 10,
        backgroundColor: 'rgba(255,255,255,0)',
        color: label.color,
        fontSize: label.fontSize,
        fontStyle: label.fontStyle,
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
        fontFamily: label.fontFamily,
        formatter: `{c}${label.unit}`,
      },
    }
    if (config.showArea) {
      series['areaStyle'] = {
        color: areaColor[index],
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
    yAxis: yAxisOption,
    dataZoom: {
      type: 'slider',
      show: false,
      start: 0,
      end: 100,
    },
    series: series,
  }
  return option
}
