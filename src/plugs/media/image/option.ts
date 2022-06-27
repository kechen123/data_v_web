import defaultData from './data.json'
import { Image as ImageType, Ruler } from './_types'

export const defaultConfig: ImageType = {
  type: 'cover',
  url: '',
}

const defaultRuler: Ruler = {
  url: 'txt',
}

export const getOption = (config: ImageType) => {
  const { type, url } = config
  const baseHost = window.gConfig.baseHost
  const defaultUrl = baseHost + '/upload/20220627_72b70f70.jpg'
  let path = url === '' ? defaultUrl : url
  path = path.indexOf('http://') > -1 ? path : baseHost + path
  const option = {
    ...config,
    url: path,
    type: type === 'contain' ? 'contain' : '100% 100%',
  }
  return option
}
