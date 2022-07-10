import defaultData from './data.json'
import { BasicBar as BasicBarType, BarItem, Ruler } from './_types'
import { legendPosition } from '@/utils/formData'

export const defaultConfig: BasicBarType = {
  grid: {
    top: '20%',
    right: '10%',
    bottom: '10%',
    left: '10%',
  },
  bar: {
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
  numberText: {
    show: true,
    position: 'top',
    fontFamily: 'Microsoft YaHei',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#fff',
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
  y: {
    show: true,
    position: '',
    offset: 0,
    margin: 0,
    max: undefined,
    min: undefined,
    unit: '',
    fontFamily: 'Microsoft YaHei',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontColor: '#fff',
    color: 'rgba(255,255,255,0.6)',
    title: {
      name: '',
      location: '',
      gap: 0,
      rotate: 0,
      fontFamily: 'Microsoft YaHei',
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontColor: '#fff',
    },
    splitLine: {
      show: true,
      type: 'dotted',
      color: 'rgba(255,255,255,0.2)',
    },
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

export const defaultOption = {
  animation: true,
  legend: {
    type: 'plain',
    data: ['降雨量', '蒸发量'],
    show: true,
    orient: 'horizontal',
    left: '72%',
    top: '1%',
    itemGap: 30,
    textStyle: {
      fontFamily: 'Arial,苹方,微软雅黑',
      fontSize: 16,
      color: 'rgba(255,255,255,0.6)',
      fontWeight: 'normal',
      textShadowBlur: 20,
      textShadowColor: '#4A92EC',
      textShadowOffsetX: 0,
      textShadowOffsetY: 0,
    },
  },
  tooltip: {
    show: true,
    confine: true,
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: '#ccc',
      },
    },
    triggerOn: 'mousemove',
    borderColor: 'rgba(52,136,167,1)',
    borderWidth: 0,
    backgroundColor: 'rgba(3,43,80,0.8)',
    borderRadius: 0,
    padding: [10, 20, 10, 20],
    textStyle: {
      color: 'rgba(255,255,255,0.6)',
      fontSize: 12,
      fontWeight: 'normal',
      fontFamily: 'Arial,苹方,微软雅黑',
    },
    extraCssText: '',
  },
  grid: {
    left: 10,
    right: 10,
    top: 60,
    bottom: 10,
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    show: true,
    data: ['1月', '2月', '3月', '4月', '5月', '6月'],
    axisLine: {
      show: true,
      lineStyle: {
        color: '#26D9FF',
        width: 1,
      },
    },
    axisTick: {
      show: true,
      length: 5,
      lineStyle: {
        color: '#26D9FF',
        width: 1,
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(255,255,255,0.2)',
        width: 1,
        type: 'dotted',
      },
    },
    axisLabel: {
      show: true,
      interval: 0,
      rotate: 0,
      margin: 8,
      fontFamily: 'Arial,苹方,微软雅黑',
      fontSize: 16,
      color: 'rgba(255,255,255,0.6)',
      fontWeight: 'normal',
      textShadowBlur: 20,
      textShadowColor: '#4A92EC',
      textShadowOffsetX: 0,
      textShadowOffsetY: 0,
    },
  },
  yAxis: {
    type: 'value',
    show: true,
    max: null,
    min: null,
    splitNumber: null,
    scale: false,
    axisLine: {
      show: true,
      lineStyle: {
        color: '#26D9FF',
        width: 1,
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(255,255,255,0.2)',
        width: 1,
        type: 'dotted',
      },
    },
    axisTick: {
      show: true,
      length: 6,
      lineStyle: {
        color: 'rgba(38,217,255,0.5)',
        width: 2,
      },
    },
    axisLabel: {
      show: true,
      margin: 10,
      fontSize: 16,
      color: 'rgba(255,255,255,0.6)',
      fontWeight: 'normal',
      fontFamily: 'Arial,苹方,微软雅黑',
      textShadowBlur: 20,
      textShadowColor: 'rgba(74,146,236,0)',
      textShadowOffsetX: 0,
      textShadowOffsetY: 0,
    },
  },
  dataZoom: {
    type: 'slider',
    show: false,
    start: 0,
    end: 100,
  },
  series: [
    {
      name: '降雨量',
      type: 'bar',
      barWidth: '20%',
      barGap: '30%',
      data: ['18.9', '28.8', '39.3', '81.4', '47', '20.3'],
      itemStyle: {
        width: 50,
        borderRadius: 2,
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
        borderColor: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#A0C4FF',
            },
            {
              offset: 1,
              color: '#3D7EEB',
            },
          ],
          globalCoord: false,
        },
        borderWidth: 2,
      },
      label: {
        show: true,
        position: 'top',
        distance: 5,
        color: '#fff',
        fontSize: 16,
        fontWeight: 'normal',
        fontFamily: 'Arial,苹方,微软雅黑',
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
      },
    },
    {
      name: '蒸发量',
      type: 'bar',
      barWidth: '20%',
      barGap: '30%',
      data: ['12.4', '23.2', '34.5', '99.7', '52.6', '35.5'],
      itemStyle: {
        width: 50,
        borderRadius: 2,
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
        borderColor: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#B4F0FF',
            },
            {
              offset: 1,
              color: '#0FC5F3',
            },
          ],
          globalCoord: false,
        },
        borderWidth: 2,
      },
      label: {
        show: true,
        position: 'top',
        distance: 5,
        color: '#fff',
        fontSize: 16,
        fontWeight: 'normal',
        fontFamily: 'Arial,苹方,微软雅黑',
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
      },
    },
  ],
}

export const defaultRuler: Ruler = {
  维度: '月份',
  值: ['降雨量', '蒸发量'],
}

export const getOption = (config: BasicBarType, data: any = defaultData, ruler: Ruler = defaultRuler) => {
  const { grid, bar, numberText, x, y, legend, tooltip } = config

  const getColor = (color: string | Object) => {
    if (bar.direction === 'horizontally') {
      let newColor = JSON.parse(JSON.stringify(color))
      newColor.x2 = 1
      newColor.y2 = 0
      return newColor
    }
    return color
  }

  const getLabelPosition = (position: string) => {
    if (bar.direction === 'horizontally') {
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

  const seriesOption = ruler.值.map((y_item, index) => {
    const s_data = data.map((d_item) => d_item[y_item])
    const configItem = bar.bars[index]
    const option = {
      name: y_item,
      type: 'bar',
      barWidth: configItem.width,
      barGap: bar.barGap,
      stack: bar.stack ? 'A' : index,
      data: s_data,
      itemStyle: {
        width: 50,
        borderRadius: configItem.borderRadius,
        color: getColor(configItem.color),
        borderType: configItem.borderType,
        borderColor: configItem.borderColor,
        borderWidth: configItem.borderWidth,
      },
      label: {
        show: numberText.show,
        position: getLabelPosition(numberText.position),
        distance: 5,
        color: numberText.color,
        fontSize: numberText.fontSize,
        fontWeight: numberText.fontWeight,
        fontFamily: numberText.fontFamily,
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
        formatter: `{c}${configItem.barUnit}`,
      },
    }
    return option
  })

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
    },
  }

  const yAxisOption = {
    type: 'value',
    name: y.title.name,
    nameLocation: y.title.location,
    nameGap: y.title.gap,
    nameRotate: y.title.rotate,
    nameTextStyle: {
      fontSize: y.title.fontSize,
      color: y.title.fontColor,
      fontFamily: y.title.fontFamily,
      fontWeight: y.title.fontWeight,
      fontStyle: y.title.fontStyle,
    },
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
      show: y.splitLine.show,
      lineStyle: {
        color: y.splitLine.color,
        width: 1,
        type: y.splitLine.type,
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
      formatter: function (p) {
        let val = p
        return val + '' + y.unit
      },
    },
  }

  const option = {
    animation: true,
    legend: legendOption,
    tooltip: tooltipOption,
    grid: gridOption,
    xAxis: bar.direction === 'vertical' ? xAxisOption : yAxisOption,
    yAxis: bar.direction === 'vertical' ? yAxisOption : xAxisOption,
    dataZoom: {
      type: 'slider',
      show: false,
      start: 0,
      end: 100,
    },
    series: seriesOption,
  }
  return option
}
