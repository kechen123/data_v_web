import { plugin } from './../_types/Plugin'
import { Widget } from '@_types/Plugin'
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
    img: 'datavImage/border1.png',
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
    img: 'datavImage/border2.png',
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
    img: 'datavImage/border3.png',
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
    img: 'datavImage/border4.png',
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
    img: 'datavImage/border4Reverse.png',
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
    img: 'datavImage/border5.png',
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
    img: 'datavImage/border5Reverse.png',
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
    img: 'datavImage/border6.png',
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
    img: 'datavImage/border7.png',
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
    img: 'datavImage/border8.png',
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
    img: 'datavImage/border9.png',
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
    img: 'datavImage/border10.png',
    config: {
      color: ['#235fa7', '#4fd2dd'],
    },
  },
]
export const DATAVCHART: Array<Widget> = [
  {
    name: '胶囊柱图',
    plugin: {
      name: 'chart',
      url: 'datav_chart/capsule',
    },
    rect: {
      width: 300,
      height: 150,
    },
    img: 'datavImage/border1.png',
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
    name: '动态环图',
    plugin: {
      name: 'border',
      url: 'datav_chart/activeRing',
    },

    rect: {
      width: 300,
      height: 150,
    },
    img: 'datavImage/border10.png',
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
]
export const MENU: Array<any> = [
  {
    name: '边框',
    icon: 'icon-wenzibiankuang',
    plugs: 'BORDER',
    index: 1,
  },
  {
    name: '装饰',
    icon: 'icon-zhuangshi',
    plugs: '',
    index: 2,
  },
  {
    name: '图表',
    icon: 'icon-tubiao-zhexiantu',
    plugs: 'DATAVCHART',
    index: 3,
  },
  {
    name: '收藏',
    icon: 'icon-fabulous',
    plugs: '',
    index: 4,
  },
]
