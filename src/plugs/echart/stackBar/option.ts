import data from './data.json'

const option = {
  animation: false,
  dataZoom: { type: 'slider', show: false, start: 0, end: 100 },
  legend: {
    show: true,
    itemGap: 14,
    orient: 'horizontal',
    left: '60%',
    top: '5%',
    textStyle: {
      fontFamily: 'Arial,苹方,微软雅黑',
      fontSize: 12,
      color: '#fff',
      fontWeight: 'normal',
      textShadowBlur: 20,
      textShadowColor: '#4A92EC',
      textShadowOffsetX: 0,
      textShadowOffsetY: 0,
    },
    data: data.legend,
  },
  tooltip: {
    trigger: 'axis',
    confine: true,
    borderRadius: 0,
    triggerOn: 'mousemove',
    padding: [5, 5, 5, 5],
    backgroundColor: 'rgba(6,56,103,1)',
    borderColor: 'rgba(194,226,255,0.7)',
    borderWidth: 2,
    fontFamily: 'Arial,苹方,微软雅黑',
    fontSize: 16,
    color: '#fff',
    fontWeight: 'normal',
    extraCssText: 'text-align:left; text-shadow: 0px 0px 20px rgba(74,146,236,1)',
  },
  grid: { top: 80, left: 40, right: 40, bottom: 10, containLabel: true },
  yAxis: [
    {
      type: 'value',
      show: true,
      max: null,
      min: null,
      scale: false,
      splitNumber: null,
      splitLine: { show: false, lineStyle: { color: 'rgba(110,132,169,0.2)', width: 2, type: 'solid' } },
      axisTick: { show: true, alignWithLabel: true, length: 6, lineStyle: { color: 'rgba(38,217,255,0.5)', width: 2 } },
      axisLine: { show: true, lineStyle: { color: '#26D9FF', width: 1 } },
      axisLabel: {
        show: true,
        fontSize: 16,
        color: '#ccc',
        fontWeight: 'normal',
        fontFamily: 'Arial,苹方,微软雅黑',
        textShadowColor: '#8CCFFF',
        textShadowBlur: 0,
        margin: 20,
        textShadowOffsetX: 0,
        textShadowOffsetY: 0,
      },
    },
  ],
  xAxis: {
    show: true,
    data: data.xAxis,
    position: 'bottom',
    axisLine: { show: true, lineStyle: { color: '#26D9FF', width: 1 } },
    axisTick: { show: true, alignWithLabel: true, length: 2, lineStyle: { color: 'rgba(38,217,255,0.5)', width: 2 } },
    splitLine: { show: true, lineStyle: { color: 'rgba(255,255,255,0.2)', width: 1, type: 'dotted' } },
    axisLabel: {
      color: '#ccc',
      interval: 0,
      fontSize: 16,
      margin: 20,
      rotate: 0,
      fontWeight: 'normal',
      fontFamily: 'Arial,苹方,微软雅黑',
      textShadowColor: '#8CCFFF',
      textShadowBlur: 0,
      textShadowOffsetX: 0,
      textShadowOffsetY: 0,
    },
  },
  series: [
    {
      name: '销售额',
      type: 'bar',
      stack: 'sum',
      barWidth: 20,
      data: data.series[0],
      itemStyle: {
        color: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          type: 'linear',
          global: false,
          colorStops: [
            { offset: 0, color: 'rgba(0,79,231,0.7)' },
            { offset: 1, color: 'rgba(0,79,231,0.2)' },
          ],
        },
        borderRadius: 2,
        borderColor: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          type: 'linear',
          global: false,
          colorStops: [
            { offset: 0, color: 'rgba(123,167,255,0.7)' },
            { offset: 1, color: 'rgba(123,167,255,0.2)' },
          ],
        },
        borderWidth: '2',
      },
    },
    {
      name: '费用',
      type: 'bar',
      stack: 'sum',
      barWidth: 20,
      data: data.series[1],
      itemStyle: {
        color: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          type: 'linear',
          global: false,
          colorStops: [
            { offset: 0, color: 'rgba(15,197,243,0.7)' },
            { offset: 1, color: 'rgba(15,197,243,0.2)' },
          ],
        },
        borderRadius: 2,
        borderColor: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          type: 'linear',
          global: false,
          colorStops: [
            { offset: 0, color: 'rgba(178,239,255,0.7)' },
            { offset: 1, color: 'rgba(178,239,255,0.2)' },
          ],
        },
        borderWidth: '2',
      },
    },
    {
      name: '利润',
      type: 'bar',
      stack: 'sum',
      barWidth: 20,
      data: data.series[2],
      itemStyle: {
        color: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          type: 'linear',
          global: false,
          colorStops: [
            { offset: 0, color: 'rgba(244,201,7,0.7)' },
            { offset: 1, color: 'rgba(244,201,7,0.2)' },
          ],
        },
        borderRadius: 2,
        borderColor: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          type: 'linear',
          global: false,
          colorStops: [
            { offset: 0, color: 'rgba(255,241,189,0.7)' },
            { offset: 1, color: 'rgba(255,241,189,0.2)' },
          ],
        },
        borderWidth: '2',
      },
    },
    {
      name: 'number',
      type: 'bar',
      barWidth: 20,
      xAxisIndex: 0,
      yAxisIndex: 0,
      barGap: '-100%',
      data: data.series[3],
      label: {
        show: false,
        position: 'top',
        distance: 10,
        color: '#CCCCCC',
        fontSize: 16,
        fontWeight: 'normal',
        fontFamily: 'Arial,苹方,微软雅黑',
        textShadowBlur: 5,
        textShadowColor: '#8CCFFF',
        textShadowOffsetX: 1,
        textShadowOffsetY: 1,
        backgroundColor: 'rgba(255,255,255,0)',
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowBlur: 0,
        shadowColor: 'rgba(0,0,0,0)',
        padding: [0, 0, 0, 0],
      },
      itemStyle: { color: 'rgba(0,0,0,0)', borderRadius: 2 },
      zlevel: 0,
    },
  ],
}
export const getOption = (data) => {
  return option
}
