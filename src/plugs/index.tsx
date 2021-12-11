import React, { useRef, useEffect } from 'react'
import loadable from '@loadable/component'
import Loading from './loading'
import { WidgetObj } from '@_data/Plugin'
import { useSize } from 'ahooks'

interface Props {
  widgetObj: WidgetObj
  select: Function
}

const Widget = (props: Props) => {
  const { select, widgetObj } = props
  const {
    widget,
    id,
    widget: { url, rect, rotate },
  } = widgetObj
  const ref = useRef<HTMLDivElement | null>(null)
  // useSize(ref)
  const OtherComponent = loadable(() => import(`./${url}/index.tsx`), {
    fallback: <Loading {...widgetObj} />,
    /**
     *  插件缓存功能
     *  https://loadable-components.com/docs/dynamic-import/
     */
    cacheKey: (props) => props.url,
  })
  const widgetSelect = (e) => {
    select(e)
  }
  return (
    <div
      ref={ref}
      onMouseDown={widgetSelect}
      data-id={id}
      className={`widget `}
      style={{
        cursor: 'move',
        width: rect.width + 'px',
        height: rect.height + 'px',
        transform: `translate(${rect.left}px, ${rect.top}px) rotate(${rotate}deg)`,
      }}
    >
      <OtherComponent {...widgetObj} />
    </div>
  )
  // return <Loading {...props} />
}
export default Widget
