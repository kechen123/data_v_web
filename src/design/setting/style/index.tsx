import React, { useState, useEffect } from 'react'
import loadable from '@loadable/component'
import eventBus from '@utils/eventBus'
import BaseAttr from './baseAttr'
import ErrorBoundary from '../error'
import { WidgetObj } from '@_types/Plugin'

interface Props {
  widgetObj?: WidgetObj
}

const Loading = (props: any) => {
  return <div>Loading...</div>
}

const DetailAttr = React.memo(
  ({ config, url }: any) => {
    const OtherComponent = loadable(() => import(`@plugs/${url}/setting/index.tsx`), {
      cacheKey: (props) => props.url,
      fallback: Loading,
    })

    return <OtherComponent {...config} />
  },
  (prev, next) => {
    // return JSON.stringify(prev.config) === JSON.stringify(next.config)
    return prev.id + prev.url === next.id + next.url
  }
)

const Style = React.memo(({ widgetObj }: Props) => {
  if (widgetObj === undefined) {
    return <></>
  } else {
    let {
      id,
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
        <ErrorBoundary>
          <DetailAttr id={id} url={url} config={config} />
        </ErrorBoundary>
      </>
    )
  }
})

export default Style
