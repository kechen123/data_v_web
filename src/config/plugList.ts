import { plugin } from './../_types/Plugin'
import { Widget } from '@_types/Plugin'
import { basicBarConfig } from '@plugs/defaultConfig'

export const BORDER: Array<Widget> = [
  {
    name: '边框1',
    plugin: {
      name: 'border',
      url: 'border/border1',
    },
    rect: {
      width: 300,
      height: 150,
    },
    img: 'datavImage/border/border1.png',
    config: {
      color: ['#235fa7', '#4fd2dd'],
    },
  },
  {
    name: '边框2',
    plugin: {
      name: 'border',
      url: 'border/border2',
    },

    rect: {
      width: 300,
      height: 150,
    },
    img: 'datavImage/border/border2.png',
    config: {
      color: ['#235fa7', '#4fd2dd'],
    },
  },
  {
    name: '边框3',
    plugin: {
      name: 'border',
      url: 'border/border3',
    },

    rect: {
      width: 300,
      height: 150,
    },
    img: 'datavImage/border/border3.png',
    config: {
      color: ['#235fa7', '#4fd2dd'],
    },
  },
  {
    name: '边框4',
    plugin: {
      name: 'border',
      url: 'border/border4',
    },

    rect: {
      width: 300,
      height: 150,
    },
    img: 'datavImage/border/border4.png',
    config: {
      color: ['#235fa7', '#4fd2dd'],
    },
  },
  {
    name: '边框4reverse',
    plugin: {
      name: 'border',
      url: 'border/border4Reverse',
    },

    rect: {
      width: 300,
      height: 150,
    },
    img: 'datavImage/border/border4Reverse.png',
    config: {
      color: ['#235fa7', '#4fd2dd'],
    },
  },
  {
    name: '边框5',
    plugin: {
      name: 'border',
      url: 'border/border5',
    },

    rect: {
      width: 300,
      height: 150,
    },
    img: 'datavImage/border/border5.png',
    config: {
      color: ['#235fa7', '#4fd2dd'],
    },
  },
  {
    name: '边框5Reverse',
    plugin: {
      name: 'border',
      url: 'border/border5Reverse',
    },

    rect: {
      width: 300,
      height: 150,
    },
    img: 'datavImage/border/border5Reverse.png',
    config: {
      color: ['#235fa7', '#4fd2dd'],
    },
  },
  {
    name: '边框6',
    plugin: {
      name: 'border',
      url: 'border/border6',
    },

    rect: {
      width: 300,
      height: 150,
    },
    img: 'datavImage/border/border6.png',
    config: {
      color: ['#235fa7', '#4fd2dd'],
    },
  },
  {
    name: '边框7',
    plugin: {
      name: 'border',
      url: 'border/border7',
    },

    rect: {
      width: 300,
      height: 150,
    },
    img: 'datavImage/border/border7.png',
    config: {
      color: ['#235fa7', '#4fd2dd'],
    },
  },
  {
    name: '边框8',
    plugin: {
      name: 'border',
      url: 'border/border8',
    },

    rect: {
      width: 300,
      height: 150,
    },
    img: 'datavImage/border/border8.png',
    config: {
      color: ['#235fa7', '#4fd2dd'],
    },
  },
  {
    name: '边框9',
    plugin: {
      name: 'border',
      url: 'border/border9',
    },

    rect: {
      width: 300,
      height: 150,
    },
    img: 'datavImage/border/border9.png',
    config: {
      color: ['#235fa7', '#4fd2dd'],
    },
  },
  {
    name: '边框10',
    plugin: {
      name: 'border',
      url: 'border/border10',
    },

    rect: {
      width: 300,
      height: 150,
    },
    img: 'datavImage/border/border10.png',
    config: {
      color: ['#235fa7', '#4fd2dd'],
    },
  },
]
export const DATAVCHART: Array<Widget> = [
  {
    name: '动态环图',
    plugin: {
      name: 'border',
      url: 'datav_chart/activeRing',
    },

    rect: {
      width: 300,
      height: 300,
    },
    img: 'datavImage/chart/activeRingChart.png',
    config: {
      data: [
        {
          name: '周口',
          value: 55,
        },
        {
          name: '南阳',
          value: 120,
        },
        {
          name: '西峡',
          value: 78,
        },
        {
          name: '驻马店',
          value: 66,
        },
        {
          name: '新乡',
          value: 80,
        },
      ],
    },
  },
  {
    name: '胶囊柱图',
    plugin: {
      name: 'chart',
      url: 'datav_chart/capsule',
    },
    rect: {
      width: 400,
      height: 260,
    },
    img: 'datavImage/chart/capsuleChart.png',
    config: {
      data: [
        {
          name: '南阳',
          value: 167,
        },
        {
          name: '周口',
          value: 67,
        },
        {
          name: '漯河',
          value: 123,
        },
        {
          name: '郑州',
          value: 55,
        },
        {
          name: '西峡',
          value: 98,
        },
      ],
    },
  },
  {
    name: '水位图',
    plugin: {
      name: 'chart',
      url: 'datav_chart/waterLevelPond',
    },

    rect: {
      width: 120,
      height: 150,
    },
    img: 'datavImage/chart/waterLevelPond.png',
    config: {
      data: [66],
    },
  },
  {
    name: '进度池',
    plugin: {
      name: 'chart',
      url: 'datav_chart/percentPond',
    },
    rect: {
      width: 250,
      height: 100,
    },
    img: 'datavImage/chart/percentPond.png',
    config: {
      value: 66,
    },
  },
  {
    name: '飞线图',
    plugin: {
      name: 'chart',
      url: 'datav_chart/flyLineChart',
    },
    rect: {
      width: 500,
      height: 370,
    },
    img: 'datavImage/chart/flylineChart.png',
    config: {
      centerPoint: [0.48, 0.35],
      points: [
        [0.52, 0.23],
        [0.43, 0.29],
        [0.59, 0.35],
        [0.53, 0.47],
        [0.45, 0.54],
        [0.36, 0.38],
        [0.62, 0.55],
        [0.56, 0.56],
        [0.37, 0.66],
        [0.55, 0.81],
        [0.55, 0.67],
        [0.37, 0.29],
        [0.2, 0.36],
        [0.76, 0.41],
        [0.59, 0.18],
        [0.68, 0.17],
        [0.59, 0.1],
      ],
      bgImgUrl: 'datavImage/chart/map.jpg',
    },
  },
  {
    name: '锥形柱图',
    plugin: {
      name: 'chart',
      url: 'datav_chart/conicalColumnChart',
    },
    rect: {
      width: 460,
      height: 300,
    },
    img: 'datavImage/chart/conicalColumnChart.png',
    config: {
      data: [
        {
          name: '周口',
          value: 55,
        },
        {
          name: '南阳',
          value: 120,
        },
        {
          name: '西峡',
          value: 71,
        },
        {
          name: '驻马店',
          value: 66,
        },
        {
          name: '新乡',
          value: 80,
        },
        {
          name: '信阳',
          value: 35,
        },
        {
          name: '漯河',
          value: 15,
        },
      ],
      img: [
        'datavImage/chart/1st.png',
        'datavImage/chart/2st.png',
        'datavImage/chart/3st.png',
        'datavImage/chart/4st.png',
        'datavImage/chart/5st.png',
        'datavImage/chart/6st.png',
        'datavImage/chart/7st.png',
      ],
    },
  },
  {
    name: '数字翻牌器',
    plugin: {
      name: 'chart',
      url: 'datav_chart/digitalFlop',
    },
    rect: {
      width: 300,
      height: 150,
    },
    img: 'datavImage/chart/digitalFlop.png',
    config: {
      number: [100],
      content: '{nt}个',
    },
  },
  {
    name: '轮播表',
    plugin: {
      name: 'chart',
      url: 'datav_chart/scrollBoard',
    },
    rect: {
      width: 600,
      height: 350,
    },
    img: 'datavImage/chart/scrollBoard.png',
    config: {
      data: [
        ['行1列1', '行1列2', '行1列3'],
        ['行2列1', '行2列2', '行2列3'],
        ['行3列1', '行3列2', '行3列3'],
        ['行4列1', '行4列2', '行4列3'],
        ['行5列1', '行5列2', '行5列3'],
        ['行6列1', '行6列2', '行6列3'],
        ['行7列1', '行7列2', '行7列3'],
        ['行8列1', '行8列2', '行8列3'],
        ['行9列1', '行9列2', '行9列3'],
        ['行10列1', '行10列2', '行10列3'],
      ],
    },
  },
]

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
    img: 'datavImage/border/border1.png',
    config: {
      color: ['#235fa7', '#4fd2dd'],
    },
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
    img: 'datavImage/border/border1.png',
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
    img: 'datavImage/border/border1.png',
    config: {
      color: ['#235fa7', '#4fd2dd'],
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
    name: '边框',
    icon: 'icon-wenzibiankuang',
    plugs: 'BORDER',
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
