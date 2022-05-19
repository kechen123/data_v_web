import React, { useState, useEffect } from 'react'
import loadable from '@loadable/component'
import eventBus from '@utils/eventBus'
import BaseAttr from './baseAttr'
import { WidgetObj } from '@_types/Plugin'

interface Props {
  widgetObj?: WidgetObj
}

const DetailAttr = React.memo(
  ({ config, url }: any) => {
    const OtherComponent = loadable(() => import(`@plugs/${url}/setting/index.tsx`), {
      cacheKey: (props) => props.url,
    })
    return <OtherComponent {...config} />
  },
  (prev, next) => {
    // return JSON.stringify(prev.config) === JSON.stringify(next.config)
    return prev.url === next.url
  }
)

const Style = React.memo(({ widgetObj }: Props) => {
  if (widgetObj === undefined) {
    return <></>
  } else {
    let {
      widget,
      widget: {
        plugin: { name, url },
        rect,
        config,
      },
    } = widgetObj

    return (
      <>
        <BaseAttr {...widgetObj} />
        <DetailAttr url={url} config={config} />
      </>
    )
  }
})

export default Style
