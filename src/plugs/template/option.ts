import { WidgetObj } from '@_types/Plugin'
import defaultData from './data.json'
import { Text as TextType, Ruler } from './_types'

export const defaultConfig: TextType = {
  txt: '',
  fontFamily: '微软雅黑',
  fontSize: 12,
  fontStyle: 'normal',
  fontWeight: 'normal',
  color: '#000',
  letterSpacing: 0,
  lineHeight: 1,
  textAlign: 'left',
  textBaseline: 'top',
  borderWith: 0,
  borderColor: '#000',
  shadowColor: '#000',
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
}

export const defaultRuler: Ruler = {
  x: 'txt',
}

export const getOption = (config: WidgetObj, data: any = defaultData, ruler: Ruler = defaultRuler) => {
  const text = data.map((item) => item[ruler.x])
  const option = Object.assign(config, { text })
  return option
}
