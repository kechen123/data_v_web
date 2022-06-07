import React, { useMemo } from 'react'
import loadable from '@loadable/component'
import Loading from './loading'
import Loading1 from './loading1'
import Error404Boundary from './404'
import widthWidget from './widthWidget'
import { WidgetObj } from '@_types/Plugin'

const Widget = (props: WidgetObj) => {
  const {
    id,
    widget: {
      plugin: { url },
      config,
    },
  } = props

  const OtherComponent = loadable(() => import(`./${url}/index`), {
    fallback: <Loading {...props} />,
    /**
     *  插件缓存功能
     *  https://loadable-components.com/docs/dynamic-import/
     */
    cacheKey: (props) => props.url,
  })

  return (
    <Error404Boundary>
      {/* <Loading {...props} /> */}
      <OtherComponent {...config} />
    </Error404Boundary>
  )
}

//组件配置项参数和尺寸变化时 重新渲染
const equal = (prevProps, nextProps) => {
  const {
    prevId,
    widget: { config: prevConfig, rect: prevRect },
  } = prevProps
  const prevSize = { width: prevRect.width, height: prevRect.height }
  const {
    nextId,
    widget: { config: nextConfig, rect: nextRect },
  } = nextProps
  const nextSize = { width: nextRect.width, height: nextRect.height }
  return prevId === nextId && JSON.stringify(prevConfig) === JSON.stringify(nextConfig) && JSON.stringify(prevSize) === JSON.stringify(nextSize)
}

const Widget2 = widthWidget(Widget)
export default React.memo(Widget2, equal)
// export default React.memo(widthWidget(Widget), equal)
