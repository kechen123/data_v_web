import { fontFamily } from './../../../utils/formData'
import defaultData from './data.json'
import { QXMAP as QXMAPType, Ruler } from './_types'
import { legendPosition } from '@/utils/formData'

export const defaultConfig: QXMAPType = {
  map_code: 'china',
  map: '中国',
  zoom: 1,
  roam: true,
  label: {
    show: true,
    color: '#FFF',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamily: 'Microsoft YaHei',
    fontSize: 12,
  },
  itemStyle: {
    color: '#000',
    borderColor: 'rgba(147, 235, 248, 1)',
    borderWidth: 1,
    areaColor: {
      type: 'radial',
      x: 0.5,
      y: 0.5,
      r: 0.8,
      colorStops: [
        {
          offset: 0,
          color: 'rgba(147, 235, 248, 0)', // 0% 处的颜色
        },
        {
          offset: 1,
          color: 'rgba(147, 235, 248, .2)', // 100% 处的颜色
        },
      ],
      globalCoord: false, // 缺省为 false
    },
    shadowColor: 'rgba(128, 217, 248, 1)',
  },
  emphasis: {
    label: {
      show: true,
      color: '#FFF',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontFamily: 'Microsoft YaHei',
      fontSize: 14,
    },
    itemStyle: {
      color: '#FFF',
      borderColor: 'rgba(147, 235, 248, 0.8)',
      borderWidth: 1,
      areaColor: {
        type: 'radial',
        x: 0.5,
        y: 0.5,
        r: 0.8,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(147, 235, 228, 0)', // 0% 处的颜色
          },
          {
            offset: 1,
            color: 'rgba(147, 235, 228, .2)', // 100% 处的颜色
          },
        ],
        globalCoord: false, // 缺省为 false
      },
      shadowColor: 'rgba(128, 217, 248, 0.8)',
    },
  },
  line: {
    show: true,
    color: '#5AEA72',
    width: 2,
    effect: {
      show: true,
      period: 3,
      trailLength: 0.1,
      color: '#1DE9B6',
      symbol:
        'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
      symbolSize: 10,
    },
    curveness: 0.5,
  },
  dot: {
    show: true,
    scatter: true,
    symbol: 'circle',
    symbolSize: 10,
    color: '#1DE9B6',
    rippleEffect: {
      period: 3,
    },
  },
}

const defaultRuler: Ruler = {
  line: '线',
  dot: '点',
}
export const getOption = (config: QXMAPType, data: any = defaultData, ruler: Ruler = defaultRuler) => {
  const { map_code, label, itemStyle, emphasis, line, dot } = config
  let option: any = {
    geo: {
      map: map_code,
      zoom: config.zoom,
      center: config.center,
      roam: config.roam,
      label,
      itemStyle: itemStyle,
      emphasis: emphasis,
      regions: [
        {
          name: '南海诸岛',
          label,
          itemStyle: itemStyle,
          emphasis: emphasis,
        },
      ],
    },
    _willClear: true,
    series: [],
  }
  if (line.show) {
    const linesData = data[ruler['line']].map((item) => {
      return {
        coords: item,
      }
    })
    if (linesData) {
      const lineSeries = {
        type: 'lines',
        zlevel: 2,
        coordinateSystem: 'geo',
        lineStyle: {
          color: line.color,
          width: line.width,
          curveness: line.curveness,
          opacity: 1,
        },
        effect: line.effect,
        data: linesData,
      }
      option.series.push(lineSeries)
    }
  }
  if (dot.show) {
    const boo = dot.scatter
    let dotSeries = {
      type: boo ? 'effectScatter' : 'scatter',
      coordinateSystem: 'geo',
      symbol: dot.symbol,
      symbolSize: dot.symbolSize,
      itemStyle: {
        color: dot.color,
      },
      data: data[ruler['dot']],
    }
    if (boo) {
      dotSeries['rippleEffect'] = {
        brushType: 'stroke',
        period: dot.rippleEffect.period,
      }
    }
    option.series.push(dotSeries)
  }
  return option
}
