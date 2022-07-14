import { plugin } from './../_types/Plugin'
import { Widget } from '@_types/Plugin'
import {
  BasicBarConfig,
  BasicBarData,
  BasicBarRuler,
  ColorBarConfig,
  ColorBarData,
  ColorBarRuler,
  TextConfig,
  TextData,
  TextRuler,
  QxConfig,
  QxData,
  QxRuler,
  ImageConfig,
  LineConfig,
  LineData,
  LineRuler,
  LineBarConfig,
  LineBarData,
  LineBarRuler,
  PieConfig,
  PieData,
  PieRuler,
  RadarConfig,
  RadarData,
  RadarRuler,
} from '@plugs/defaultConfig'

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
    config: BasicBarConfig,
    dataConfig: {
      type: 'static',
      widgetData: BasicBarData,
      ruler: BasicBarRuler,
      displayForm: 'table',
    },
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
    config: ColorBarConfig,
    dataConfig: {
      type: 'static',
      widgetData: ColorBarData,
      ruler: ColorBarRuler,
      displayForm: 'table',
    },
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
    dataConfig: {
      type: 'static',
      widgetData: LineData,
      ruler: LineRuler,
      displayForm: 'table',
    },
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
    dataConfig: {
      type: 'static',
      widgetData: LineBarData,
      ruler: LineBarRuler,
      displayForm: 'table',
    },
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
    dataConfig: {
      type: 'static',
      widgetData: PieData,
      ruler: PieRuler,
      displayForm: 'table',
    },
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
    dataConfig: {
      type: 'static',
      widgetData: RadarData,
      ruler: RadarRuler,
      displayForm: 'table',
    },
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
    dataConfig: {
      type: 'static',
      widgetData: QxData,
      ruler: QxRuler,
      displayForm: 'codeEdit',
    },
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
    config: TextConfig,
    dataConfig: {
      type: 'static',
      widgetData: TextData,
      ruler: TextRuler,
      displayForm: 'codeEdit',
    },
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
