import { plugin } from './../_types/Plugin'
import { Widget } from '@_types/Plugin'
import { basicBarConfig, colorBarConfig, textConfig } from '@plugs/defaultConfig'

export const Echarts: Array<Widget> = [
  {
    name: '基本柱图',
    plugin: {
      name: 'border',
      url: 'echart/basicBar',
    },
    rect: {
      width: 570,
      height: 312,
    },
    img: 'datavImage/echart/baseBar.png',
    config: basicBarConfig,
  },
  {
    name: '彩色柱图',
    plugin: {
      name: 'border',
      url: 'echart/colorBar',
    },
    rect: {
      width: 570,
      height: 312,
    },
    img: 'datavImage/echart/colorBar.png',
    config: colorBarConfig,
  },
  {
    name: '堆积柱图',
    plugin: {
      name: 'border',
      url: 'echart/stackBar',
    },
    rect: {
      width: 570,
      height: 312,
    },
    img: 'datavImage/echart/stackBar.png',
    config: {
      color: ['#235fa7', '#4fd2dd'],
    },
  },
  {
    name: '基本条图',
    plugin: {
      name: 'border',
      url: 'echart/basicStripChart',
    },
    rect: {
      width: 570,
      height: 312,
    },
    img: 'datavImage/echart/basicStripChart.png',
    config: {
      color: ['#235fa7', '#4fd2dd'],
    },
  },
  {
    name: '彩色条图',
    plugin: {
      name: 'border',
      url: 'echart/colorStripChart',
    },
    rect: {
      width: 570,
      height: 312,
    },
    img: 'datavImage/echart/colorBar.png',
    config: {
      color: ['#235fa7', '#4fd2dd'],
    },
  },
]
export const Texts: Array<Widget> = [
  {
    name: '文本',
    plugin: {
      name: 'border',
      url: 'txt/text',
    },
    rect: {
      width: 570,
      height: 312,
    },
    img: 'datavImage/echart/baseBar.png',
    config: textConfig,
  },
]
export const MENU: Array<any> = [
  {
    name: 'Echarts',
    icon: 'icon-tubiao-zhexiantu',
    plugs: 'Echarts',
    index: 1,
  },
  {
    name: '文本',
    icon: 'icon-wenben',
    plugs: 'Text',
    index: 2,
  },
  {
    name: '装饰',
    icon: 'icon-zhuangshi',
    plugs: '',
    index: 3,
  },
  {
    name: '图表',
    icon: 'icon-tubiao-zhexiantu',
    plugs: 'DATAVCHART',
    index: 4,
  },

  {
    name: '收藏',
    icon: 'icon-fabulous',
    plugs: '',
    index: 5,
  },
]
