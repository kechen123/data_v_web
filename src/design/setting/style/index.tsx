import React from 'react'
import loadable from '@loadable/component'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'
import { screen } from '@features/screenSlice'
import { widget } from '@features/widgetSlice'
import BaseAttr from './baseAttr'
const Style = () => {
  const { activeWidgets } = useAppSelector(screen)
  const widgetMap = useAppSelector(widget)
  console.log(activeWidgets, widgetMap)
  const dispatch = useAppDispatch()
  if (activeWidgets.length === 1) {
    let {
      plugin: { name },
      rect,
    } = widgetMap[activeWidgets[0]]
    const OtherComponent = loadable(() => import(`./${name}/index.tsx`), {
      cacheKey: (props) => props.url,
    })
    return (
      <>
        <BaseAttr {...rect} />
        <OtherComponent />
      </>
    )
  } else if (activeWidgets.length > 1) {
    return <BaseAttr />
  } else {
    return <></>
  }
}
export default Style
