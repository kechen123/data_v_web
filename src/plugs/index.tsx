import React from 'react'
import loadable from '@loadable/component'
import Loading from './loading'
import { SetWidget } from '@_data/Plugin'

const Widget = (props: SetWidget) => {
  const {
    widget,
    id,
    widget: { url, rect },
  } = props
  const OtherComponent = loadable(() => import(`./${url}/index.tsx`), {
    fallback: <Loading {...props} />,
    /**
     *  插件缓存功能
     *  https://loadable-components.com/docs/dynamic-import/
     */
    cacheKey: (props) => props.url,
  })
  return (
    <div
      data-id={id}
      className={`widget `}
      style={{
        width: rect.width + 'px',
        height: rect.height + 'px',
        transform: `translate(${rect.left}px, ${rect.top}px) rotate(0deg)`,
      }}
    >
      <OtherComponent {...props} />
    </div>
  )
  // return <Loading {...props} />
}
export default Widget
