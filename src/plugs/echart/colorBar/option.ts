import data from './data.json'

const option = {
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
      data: data.xAxis,
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
export default option
