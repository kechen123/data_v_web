import defaultData from './data.json'
import { Text as TextType, Ruler } from './_types'

export const defaultConfig: TextType = {
  txt: '',
  lineClamp: 2,
  fontFamily: '微软雅黑',
  fontSize: 100,
  fontStyle: 'normal',
  fontWeight: 'normal',
  color: '#000',
  letterSpacing: 0,
  lineHeight: 1,
  textAlign: 'center',
  textBaseline: 'middle',
  borderWith: 1,
  borderColor: '#f57dff',
  shadowColor: '#64ffda',
  shadowBlur: 1,
  shadowOffsetX: 3,
  shadowOffsetY: 0,
}

const defaultRuler: Ruler = {
  x: 'txt',
}

export const getOption = (config: TextType, data: any = defaultData, ruler: Ruler = defaultRuler) => {
  const text = data.map((item) => item[ruler.x])[0]
  const option = Object.assign(JSON.parse(JSON.stringify(config)), { txt: text })
  return option
}
