import React, { useState, useEffect, Suspense } from 'react'
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
  ({ id, config, url }: any) => {
    const [error, setError] = useState(null)

    useEffect(() => {
      setError(null)
    }, [id])

    const OtherComponent = loadable(() => import(`@plugs/${url}/setting/index.tsx`), {
      cacheKey: (props) => props.url,
    })

    return (
      <ErrorBoundary error={error} setError={setError}>
        <Suspense fallback={<Loading />}>
          <OtherComponent {...config} />
        </Suspense>
      </ErrorBoundary>
    )
  },
  (prev, next) => {
    // return JSON.stringify(prev.config) === JSON.stringify(next.config)
    return prev.id + prev.url === next.id + next.url
  }
)

const Style = ({ widgetObj }: Props) => {
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
        <DetailAttr id={id} url={url} config={config} />
      </>
    )
  }
}

export default Style
