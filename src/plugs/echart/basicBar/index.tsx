import { WidgetObj } from '@_types/Plugin'
import { getOption } from './option'
import Echart from '../echart'

const Index = (widgetObj: WidgetObj) => {
  const data = {
    getOption,
    widget: widgetObj,
  }
  return <Echart {...data} />
}

export default Index
