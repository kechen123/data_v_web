import defaultData from './data.json'
import { Text as TextType, Ruler } from './_types'

export const defaultConfig: TextType = {
  txt: '',
  lineClamp: 2,
  fontFamily: 'Microsoft YaHei',
  fontSize: 60,
  fontStyle: 'normal',
  fontWeight: 'bold',
  color: '#64ffda',
  letterSpacing: 0,
  lineHeight: 10,
  textAlign: 'center',
  textBaseline: 'middle',
  showBorder: false,
  borderWith: 1,
  borderColor: '#f57dff',
  showShadow: false,
  shadowColor: '#000',
  shadowBlur: 1,
  shadowOffsetX: 3,
  shadowOffsetY: 0,
}

export const defaultRuler: Ruler = {
  文本: 'txt',
}

export const getOption = (config: TextType, data: any = defaultData, ruler: Ruler = defaultRuler) => {
  const text = data.map((item) => item[ruler.文本])[0]
  const option = Object.assign(JSON.parse(JSON.stringify(config)), { txt: text })
  return option
}
