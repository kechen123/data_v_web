import { plugin } from './../_types/Plugin'
import { Widget } from '@_types/Plugin'
import { basicBarConfig, basicBarData, colorBarConfig, LineConfig, LineBarConfig, PieConfig, RadarConfig, textConfig, QxConfig, ImageConfig } from '@plugs/defaultConfig'

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
    dataConfig: basicBarData,
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
    name: '折线图',
    plugin: {
      name: 'border',
      url: 'echart/line',
    },
    rect: {
      width: 570,
      height: 312,
    },
    img: 'datavImage/echart/line.png',
    config: LineConfig,
  },
  {
    name: '双轴图',
    plugin: {
      name: 'border',
      url: 'echart/line&Bar',
    },
    rect: {
      width: 570,
      height: 312,
    },
    img: 'datavImage/echart/line&bar.png',
    config: LineBarConfig,
  },
  {
    name: '饼图',
    plugin: {
      name: 'border',
      url: 'echart/pie',
    },
    rect: {
      width: 570,
      height: 312,
    },
    img: 'datavImage/echart/pie.png',
    config: PieConfig,
  },
  {
    name: '雷达图',
    plugin: {
      name: 'border',
      url: 'echart/radar',
    },
    rect: {
      width: 570,
      height: 312,
    },
    img: 'datavImage/echart/radar.png',
    config: RadarConfig,
  },
]

export const Map: Array<Widget> = [
  {
    name: '迁徙图',
    plugin: {
      name: 'qx',
      url: 'echart/qxMap',
    },
    rect: {
      width: 650,
      height: 500,
    },
    img: 'datavImage/txt/text.png',
    config: QxConfig,
  },
]
export const Media: Array<Widget> = [
  {
    name: '图片',
    plugin: {
      name: 'qx',
      url: 'media/image',
    },
    rect: {
      width: 270,
      height: 160,
    },
    img: 'datavImage/txt/text.png',
    config: ImageConfig,
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
      width: 300,
      height: 130,
    },
    img: 'datavImage/txt/text.png',
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
    name: '地图',
    icon: 'icon-GISditu',
    plugs: 'Map',
    index: 2,
  },
  {
    name: '媒体',
    icon: 'icon-duomeiti',
    plugs: 'Media',
    index: 3,
  },
  {
    name: '文本',
    icon: 'icon-wenben',
    plugs: 'Text',
    index: 4,
  },
  {
    name: '收藏',
    icon: 'icon-fabulous',
    plugs: '',
    index: 5,
  },
]
