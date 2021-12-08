import React from 'react'
import loadable from '@loadable/component'
import Loading from './loading'
import { Plug } from '@_data/Plugin'

const Widget = (plug: Plug) => {
  const { url } = plug
  const OtherComponent = loadable(() => import(`./${url}/index.tsx`), {
    fallback: <Loading plug={plug} />,
    /**
     *  插件缓存功能
     *  https://loadable-components.com/docs/dynamic-import/
     */
    cacheKey: (props) => props.url,
  })
  return <OtherComponent {...plug} />
}
export default Widget
