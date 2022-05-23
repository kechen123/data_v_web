import React, { useEffect, useMemo, useState } from 'react'
import { useEventListener } from 'ahooks'
import Widget from '@plugs/index'

interface Page {
  width: number | string
  height: number | string
  scale: number | string
  screenZoom: number | string
  backgroundColor?: string
  backgroundImage?: string
}

interface PageProps extends Page {
  children?: React.ReactNode
}

interface PreviewProps extends Page {
  screenWidget: []
}

const Preview = () => {
  const [data, setData] = useState<PreviewProps>({
    width: '100%',
    height: '100%',
    scale: 1,
    screenZoom: 1,
    backgroundColor: '#fff',
    backgroundImage: '',
    screenWidget: [],
  })

  const body: Page = useMemo(() => {
    return {
      width: data.width,
      height: data.height,
      scale: data.scale,
      screenZoom: data.screenZoom,
      backgroundColor: data.backgroundColor,
      backgroundImage: data.backgroundImage,
    }
  }, [data])
  useEventListener('message', (e) => {
    if (e.data.type === 'screen') {
      setData(e.data.data)
    }
  })
  const widgetArr = useMemo(() => {
    const { screenWidget } = data
    return Object.keys(screenWidget).map((key) => {
      return {
        id: key,
        widget: screenWidget[key],
      }
    })
  }, [data.screenWidget])
  return (
    <Body {...body}>
      <WidgetList WidgetObjList={widgetArr} />
    </Body>
  )
}

const Body = (props: PageProps) => {
  const { width, height, scale, screenZoom, backgroundColor, backgroundImage, children } = props
  return (
    <div id="preview" style={{ width, height, backgroundColor, backgroundImage }}>
      {children}
    </div>
  )
}

const WidgetList = ({ WidgetObjList }: any) => {
  if (WidgetObjList.length === 0) {
    return <>eee </>
  }
  return (
    <>
      {WidgetObjList.map((item) => {
        const {
          id,
          widget: { rect, rotate },
        } = item
        return (
          <div
            key={id}
            data-id={id}
            className={`widget `}
            style={{
              cursor: 'move',
              width: rect.width + 'px',
              height: rect.height + 'px',
              transform: `translate(${rect.left}px, ${rect.top}px) rotate(${rotate}deg)`,
            }}
          >
            <Widget {...item} />
          </div>
        )
      })}
    </>
  )
}
export default Preview
