import React from 'react'
import loadable from '@loadable/component'
import Loading from './loading'
import { SetWidget } from '@_data/Plugin'

const Widget = (props: SetWidget) => {
  const {
    plug,
    plug: { url },
  } = props
  const OtherComponent = loadable(() => import(`./${url}/index.tsx`), {
    fallback: <Loading {...props} />,
    /**
     *  插件缓存功能
     *  https://loadable-components.com/docs/dynamic-import/
     */
    cacheKey: (props) => props.url,
  })
  return <OtherComponent {...props} />
  // return <div></div>
}
export default Widget
