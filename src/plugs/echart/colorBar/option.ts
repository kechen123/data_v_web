import { borderType } from './../../../utils/formData'
import defaultData from './data.json'
import { ColorBar as ColorBarType, Ruler } from './_types'
import { legendPosition } from '@/utils/formData'

export const defaultOption = {
  animation: true,
  dataZoom: {
    type: 'slider',
    show: false,
    start: 0,
    end: 100,
  },
  tooltip: {
    show: true,
    confine: true,
    trigger: 'axis',
    triggerOn: 'mousemove',
    borderColor: 'rgba(52,136,167,1)',
    borderWidth: 0,
    backgroundColor: 'rgba(3,43,80,0.8)',
    borderRadius: 0,
    padding: [5, 5, 5, 5],
    textStyle: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'normal',
      fontFamily: 'Arial,苹方,微软雅黑',
    },
    extraCssText: 'text-shadow: 0px 0px 20px rgba(74,146,236,1)',
  },
  grid: {
    left: 20,
    right: 20,
    top: 100,
    bottom: 20,
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      show: true,
      data: ['1月', '2月', '3月', '4月', '5月', '6月'],
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(38,217,255,1)',
          width: 1,
        },
      },
      axisTick: {
        show: true,
        length: 6,
        alignWithLabel: true,
        lineStyle: {
          color: 'rgba(38,217,255,0.5)',
          width: 2,
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
        textShadowBlur: 0,
        textShadowColor: 'rgba(255,255,255,0)',
        textShadowOffsetX: 0,
        textShadowOffsetY: 0,
      },
    },
  ],
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
        color: 'rgba(38,217,255,1)',
        width: 1,
      },
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: 'rgba(110,132,169,0.2)',
        width: 2,
        type: 'solid',
      },
    },
    axisTick: {
      show: 'yAxisTickShow',
      length: 6,
      lineStyle: {
        color: 'rgba(38,217,255,0.5)',
        width: 2,
      },
    },
    axisLabel: {
      show: true,
      fontSize: 16,
      color: 'rgba(255,255,255,0.6)',
      fontWeight: 'normal',
      margin: 10,
      fontFamily: 'Arial,苹方,微软雅黑',
      textShadowBlur: 20,
      textShadowColor: 'rgba(74,146,236,0)',
      textShadowOffsetX: 0,
      textShadowOffsetY: 0,
    },
  },
  series: [
    {
      type: 'bar',
      barWidth: '30%',
      data: [
        {
          name: '01',
          value: '6001',
          itemStyle: {
            color: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              type: 'linear',
              global: false,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(61,126,235,1)',
                },
                {
                  offset: 1,
                  color: 'rgba(61,126,235,0)',
                },
              ],
            },
            borderColor: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              type: 'linear',
              global: false,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(160,196,255,1)',
                },
                {
                  offset: 1,
                  color: 'rgba(61,126,235,1)',
                },
              ],
            },
            borderWidth: 2,
            borderRadius: 2,
          },
          label: {
            show: true,
            position: 'top',
            distance: 10,
            backgroundColor: 'rgba(255,255,255,0)',
            color: '#fff',
            fontSize: 16,
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
            fontFamily: 'Arial,苹方,微软雅黑',
          },
        },
        {
          name: '02',
          value: '6896',
          itemStyle: {
            color: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              type: 'linear',
              global: false,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(15,197,243,1)',
                },
                {
                  offset: 1,
                  color: 'rgba(15,197,243,0)',
                },
              ],
            },
            borderColor: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              type: 'linear',
              global: false,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(180,240,255,1)',
                },
                {
                  offset: 1,
                  color: 'rgba(15,197,243,1)',
                },
              ],
            },
            borderWidth: 2,
            borderRadius: 2,
          },
          label: {
            show: true,
            position: 'top',
            distance: 10,
            backgroundColor: 'rgba(255,255,255,0)',
            color: '#fff',
            fontSize: 16,
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
            fontFamily: 'Arial,苹方,微软雅黑',
          },
        },
        {
          name: '03',
          value: '5993',
          itemStyle: {
            color: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              type: 'linear',
              global: false,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(23,216,161,1)',
                },
                {
                  offset: 1,
                  color: 'rgba(23,216,161,0)',
                },
              ],
            },
            borderColor: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              type: 'linear',
              global: false,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(169,255,231,1)',
                },
                {
                  offset: 1,
                  color: 'rgba(23,216,161,1)',
                },
              ],
            },
            borderWidth: 2,
            borderRadius: 2,
          },
          label: {
            show: true,
            position: 'top',
            distance: 10,
            backgroundColor: 'rgba(255,255,255,0)',
            color: '#fff',
            fontSize: 16,
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
            fontFamily: 'Arial,苹方,微软雅黑',
          },
        },
        {
          name: '04',
          value: '4088',
          itemStyle: {
            color: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              type: 'linear',
              global: false,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(244,201,7,1)',
                },
                {
                  offset: 1,
                  color: 'rgba(244,201,7,0)',
                },
              ],
            },
            borderColor: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              type: 'linear',
              global: false,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(255,244,200,1)',
                },
                {
                  offset: 1,
                  color: 'rgba(244,201,7,1)',
                },
              ],
            },
            borderWidth: 2,
            borderRadius: 2,
          },
          label: {
            show: true,
            position: 'top',
            distance: 10,
            backgroundColor: 'rgba(255,255,255,0)',
            color: '#fff',
            fontSize: 16,
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
            fontFamily: 'Arial,苹方,微软雅黑',
          },
        },
        {
          name: '05',
          value: '7963',
          itemStyle: {
            color: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              type: 'linear',
              global: false,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(219,51,90,1)',
                },
                {
                  offset: 1,
                  color: 'rgba(219,51,90,0)',
                },
              ],
            },
            borderColor: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              type: 'linear',
              global: false,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(255,142,168,1)',
                },
                {
                  offset: 1,
                  color: 'rgba(219,51,90,1)',
                },
              ],
            },
            borderWidth: 2,
            borderRadius: 2,
          },
          label: {
            show: true,
            position: 'top',
            distance: 10,
            backgroundColor: 'rgba(255,255,255,0)',
            color: '#fff',
            fontSize: 16,
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
            fontFamily: 'Arial,苹方,微软雅黑',
          },
        },
        {
          name: '06',
          value: '5600',
          itemStyle: {
            color: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              type: 'linear',
              global: false,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(170,0,228,1)',
                },
                {
                  offset: 1,
                  color: 'rgba(170,0,228,0)',
                },
              ],
            },
            borderColor: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              type: 'linear',
              global: false,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(228,142,255,1)',
                },
                {
                  offset: 1,
                  color: 'rgba(170,0,228,1)',
                },
              ],
            },
            borderWidth: 2,
            borderRadius: 2,
          },
          label: {
            show: true,
            position: 'top',
            distance: 10,
            backgroundColor: 'rgba(255,255,255,0)',
            color: '#fff',
            fontSize: 16,
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
            fontFamily: 'Arial,苹方,微软雅黑',
          },
        },
      ],
    },
  ],
}

export const defaultConfig: ColorBarType = {
  grid: {
    left: 20,
    right: 20,
    top: 20,
    bottom: 20,
  },
  bar: {
    colorArr: [
      {
        color: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          type: 'linear',
          global: false,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(61,126,235,1)',
            },
            {
              offset: 1,
              color: 'rgba(61,126,235,0)',
            },
          ],
        },
        border: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          type: 'linear',
          global: false,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(160,196,255,1)',
            },
            {
              offset: 1,
              color: 'rgba(61,126,235,1)',
            },
          ],
        },
      },
      {
        color: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          type: 'linear',
          global: false,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(15,197,243,1)',
            },
            {
              offset: 1,
              color: 'rgba(15,197,243,0)',
            },
          ],
        },
        border: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          type: 'linear',
          global: false,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(180,240,255,1)',
            },
            {
              offset: 1,
              color: 'rgba(15,197,243,1)',
            },
          ],
        },
      },
      {
        color: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          type: 'linear',
          global: false,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(23,216,161,1)',
            },
            {
              offset: 1,
              color: 'rgba(23,216,161,0)',
            },
          ],
        },
        border: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          type: 'linear',
          global: false,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(169,255,231,1)',
            },
            {
              offset: 1,
              color: 'rgba(23,216,161,1)',
            },
          ],
        },
      },
      {
        color: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          type: 'linear',
          global: false,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(244,201,7,1)',
            },
            {
              offset: 1,
              color: 'rgba(244,201,7,0)',
            },
          ],
        },
        border: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          type: 'linear',
          global: false,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(255,244,200,1)',
            },
            {
              offset: 1,
              color: 'rgba(244,201,7,1)',
            },
          ],
        },
      },
      {
        color: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          type: 'linear',
          global: false,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(219,51,90,1)',
            },
            {
              offset: 1,
              color: 'rgba(219,51,90,0)',
            },
          ],
        },
        border: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          type: 'linear',
          global: false,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(255,142,168,1)',
            },
            {
              offset: 1,
              color: 'rgba(219,51,90,1)',
            },
          ],
        },
      },
      {
        color: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          type: 'linear',
          global: false,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(170,0,228,1)',
            },
            {
              offset: 1,
              color: 'rgba(170,0,228,0)',
            },
          ],
        },
        border: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          type: 'linear',
          global: false,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(228,142,255,1)',
            },
            {
              offset: 1,
              color: 'rgba(170,0,228,1)',
            },
          ],
        },
      },
    ],
    width: '30%',
    direction: 'vertical',
    borderRadius: 2,
    borderWidth: 2,
    borderType: 'solid',
  },
  numberText: {
    show: true,
    position: 'top',
    fontFamily: 'Arial,苹方,微软雅黑',
    fontSize: 16,
    fontStyle: 'normal',
    color: '#fff',
    unit: '',
  },
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
  tooltip: {
    show: true,
    triggerOn: 'mousemove',
    borderRadius: 2,
    backgroundColor: 'rgba(3,43,80,0.8)',
    borderType: 'solid',
    borderWidth: 0,
    borderColor: '#fff',
    fontFamily: 'Arial,苹方,微软雅黑',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '',
    fontColor: '#fff',
  },
}

const defaultRuler: Ruler = {
  x: '月份',
  y: ['生产量'],
}
export const getOption = (config: ColorBarType, data: any = defaultData, ruler: Ruler = defaultRuler) => {
  const { grid, bar, numberText, x, y, tooltip } = config
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
  const tooltipOption = {
    show: tooltip.show,
    confine: true,
    trigger: 'axis',
    triggerOn: tooltip.triggerOn,
    borderColor: tooltip.borderColor,
    borderWidth: tooltip.borderWidth,
    backgroundColor: tooltip.backgroundColor,
    borderRadius: tooltip.borderRadius,
    padding: [5, 5, 5, 5],
    textStyle: {
      color: tooltip.fontColor,
      fontSize: tooltip.fontSize,
      fontWeight: tooltip.fontWeight,
      fontFamily: tooltip.fontFamily,
    },
    extraCssText: 'text-shadow: 0px 0px 20px rgba(74,146,236,1)',
  }
  const xAxisData = data.map((item) => item[ruler.x])
  const xAxisOption = [
    {
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
        length: 6,
        alignWithLabel: true,
        lineStyle: {
          color: x.color,
          width: 2,
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
        formatter: `{value}${x.unit}`,
        interval: x.interval,
        rotate: x.rotate,
        margin: x.margin,
        fontFamily: x.fontFamily,
        fontSize: x.fontSize,
        color: x.fontColor,
        fontWeight: 'normal',
        textShadowBlur: 0,
        textShadowColor: 'rgba(255,255,255,0)',
        textShadowOffsetX: 0,
        textShadowOffsetY: 0,
      },
    },
  ]
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
  const seriesData = data.map((item: any, index: number) => {
    return {
      name: '0' + (index + 1),
      value: item[ruler.y[0]],
      itemStyle: {
        color: getColor(bar.colorArr[index].color),
        borderColor: getColor(bar.colorArr[index].border),
        borderWidth: bar.borderWidth,
        borderType: bar.borderType,
        borderRadius: bar.borderRadius,
      },
      label: {
        show: numberText.show,
        position: getLabelPosition(numberText.position),
        distance: 10,
        backgroundColor: 'rgba(255,255,255,0)',
        color: numberText.color,
        fontSize: numberText.fontSize,
        fontStyle: numberText.fontStyle,
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
        fontFamily: numberText.fontFamily,
        formatter: `{b}${numberText.unit}`,
      },
    }
  })

  const seriesOption = [
    {
      type: 'bar',
      barWidth: bar.width,
      data: seriesData,
    },
  ]

  const option = {
    animation: true,
    dataZoom: {
      type: 'slider',
      show: false,
      start: 0,
      end: 100,
    },
    tooltip: tooltipOption,
    grid: gridOption,
    xAxis: bar.direction === 'vertical' ? xAxisOption : yAxisOption,
    yAxis: bar.direction === 'vertical' ? yAxisOption : xAxisOption,
    series: seriesOption,
  }
  return option
}
