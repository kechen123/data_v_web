import React, { useRef, useEffect } from 'react'
import loadable from '@loadable/component'
import Loading from './loading'
import { WidgetObj } from '@_data/Plugin'
import { useSize } from 'ahooks'

interface Props {
  widgetObj: WidgetObj
  onclick: Function
}

const Widget = (props: Props) => {
  const { onclick, widgetObj } = props
  const {
    widget,
    id,
    widget: { url, rect },
  } = widgetObj
  const ref = useRef<HTMLDivElement | null>(null)
  useSize(ref)
  const OtherComponent = loadable(() => import(`./${url}/index.tsx`), {
    fallback: <Loading {...widgetObj} />,
    /**
     *  插件缓存功能
     *  https://loadable-components.com/docs/dynamic-import/
     */
    cacheKey: (props) => props.url,
  })
  const widgetOnClick = (e) => {
    onclick(e)
  }
  // useEffect(()=>{

  // },[size])
  return (
    <div
      ref={ref}
      onClick={widgetOnClick}
      data-id={id}
      className={`widget `}
      style={{
        width: rect.width + 'px',
        height: rect.height + 'px',
        transform: `translate(${rect.left}px, ${rect.top}px) rotate(0deg)`,
      }}
    >
      <OtherComponent {...widgetObj} />
    </div>
  )
  // return <Loading {...props} />
}
export default Widget
