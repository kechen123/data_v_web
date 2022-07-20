import defaultData from './data.json'
import { Table as TableType, Ruler } from './_types'

export const defaultConfig: TableType = {
  head: {
    show: true,
    backgroundColor: '#00BAFF',
    verticalBorder: {
      borderColor: '#000',
      borderStyle: 'solid',
      borderWidth: 1,
    },
    color: '#FFF',
    fontSize: 12,
    fontWeight: 500,
    height: 30,
    textAlign: 'left',
    width: [100, 100],
    ellipsis: true,
  },
  body: {
    oddBackgroundColor: '#003B51',
    evenBackgroundColor: '#0A2732',
    outLineStyle: {
      borderColor: '#396bd7',
      borderStyle: 'solid',
      borderWidth: 2,
    },
    verticalBorder: {
      borderColor: '#176dc5',
      borderStyle: 'solid',
      borderWidth: 1,
    },
    horizontalBorder: {
      borderColor: '#176dc5',
      borderStyle: 'solid',
      borderWidth: 1,
    },
    color: '#fff',
    fontSize: 12,
    fontWeight: 500,
    height: 30,
    textAlign: 'left',
  },
  carouselDuration: 400,
  waitTime: 2000,
  pageSize: 6,
  carousel: 'single',
}

export const defaultRuler: Ruler = {
  字段: ['降雨量', '蒸发量', '月份'],
}

export const getOption = (config: TableType, data: any = defaultData, ruler: Ruler = defaultRuler) => {
  const column = ruler['字段']
  const list = data.map((row, i) => {
    return column.map((item: string) => {
      return row[item] || ''
    })
  })
  const option = {
    config: config,
    column: column,
    data: list,
  }
  return option
}
