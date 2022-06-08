import { getOption } from './option'
import Echart from '../echart'

const Index = (props: any) => {
  const data = {
    getOption,
    widget: props,
  }
  return <Echart {...data} />
}

export default Index
