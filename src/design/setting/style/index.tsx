import React, { useState, useEffect } from 'react'
import loadable from '@loadable/component'
import eventBus from '@utils/eventBus'
import BaseAttr from './baseAttr'
import { WidgetObj } from '@_types/Plugin'

interface Props {
  widgetObj?: WidgetObj
}

const Style = ({ widgetObj }: Props) => {
  if (widgetObj === undefined) {
    return <></>
  } else {
    let {
      widget,
      widget: {
        plugin: { name },
        rect,
        config,
      },
    } = widgetObj
    const OtherComponent = loadable(() => import(`./${name}/index.tsx`), {
      cacheKey: (props) => props.url,
    })
    return (
      <>
        <BaseAttr {...widgetObj} />
        {/* <OtherComponent {...widgetObj} /> */}
      </>
    )
  }
}

export default Style
