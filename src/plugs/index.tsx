import React, { useMemo } from 'react'
import loadable from '@loadable/component'
import Loading from './loading'
import { WidgetObj } from '@_types/Plugin'

const Widget = (props: WidgetObj) => {
  const {
    widget: {
      plugin: { url },
      config,
    },
  } = props
  console.log('', props)
  // console.log(url)
  const OtherComponent = loadable(() => import(`./${url}/index`), {
    fallback: <Loading {...props} />,
    /**
     *  插件缓存功能
     *  https://loadable-components.com/docs/dynamic-import/
     */
    cacheKey: (props) => props.url,
  })

  return <OtherComponent {...config} />
}

const Wiget1 = (props: WidgetObj) => {
  const {
    widget: {
      plugin: { url },
      config,
    },
  } = props
  return <div style={{ backgroundColor: config.color[0], width: '100px', height: '100px' }}></div>
}

//组件配置项参数和尺寸变化时 重新渲染
const equal = (prevProps, nextProps) => {
  const {
    widget: { config: prevConfig, rect: prevRect },
  } = prevProps
  const prevSize = { width: prevRect.width, height: prevRect.height }
  const {
    widget: { config: nextConfig, rect: nextRect },
  } = nextProps
  const nextSize = { width: nextRect.width, height: nextRect.height }
  if (JSON.stringify(prevConfig) === JSON.stringify(nextConfig) && JSON.stringify(prevSize) === JSON.stringify(nextSize)) {
    return true
  }
  return false
}
export default React.memo(Widget, equal)
