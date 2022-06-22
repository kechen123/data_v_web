import React, { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useEventListener } from 'ahooks'
import { message } from 'antd'
import { getUrlParam, equalArr } from '@utils/common'
import { getFetch } from '@utils/request'
import { Widget as WidgetType } from '@_types/Plugin'
import Widget from '@plugs/index'

interface Screen {
  width: number | string
  height: number | string
  scale: number | string
  screenZoom: number | string
  backgroundColor?: string
  backgroundImage?: string
}

interface PageProps extends Screen {
  children?: React.ReactNode
}

interface PreviewProps {
  screenData: Screen
  widgetData: WidgetType[]
}

const defaultScreenData = async (id: string) => {
  try {
    const res = await getFetch('/rs/screen?id=' + id)
    if (res.data.length === 1) {
      const data = res.data[0]
      const widgetData = data.widget
      const screenData = data.screen
      return { widgetData, screenData }
    }
    const error = new Error(res.data.message)
    throw error
  } catch (error: any) {
    message.error(error?.message)
    return {}
  }
}

const Preview = () => {
  const [searchParams] = useSearchParams()
  const [data, setData] = useState<PreviewProps>({
    screenData: {
      width: '100%',
      height: '100%',
      scale: 1,
      screenZoom: 1,
      backgroundColor: '#fff',
      backgroundImage: '',
    },
    widgetData: [],
  })

  const body: Screen = useMemo(() => {
    return {
      width: data.screenData.width,
      height: data.screenData.height,
      scale: data.screenData.scale,
      screenZoom: data.screenData.screenZoom,
      backgroundColor: data.screenData.backgroundColor,
      backgroundImage: data.screenData.backgroundImage,
    }
  }, [data])

  const widgetArr = useMemo(() => {
    const { widgetData } = data
    return Object.keys(widgetData).map((key) => {
      return {
        id: key,
        widget: widgetData[key],
      }
    })
  }, [data.widgetData])

  useEffect(() => {
    ;(async () => {
      // const id = getUrlParam('id')
      const id = searchParams.get('id')
      if (!id) return
      const { widgetData, screenData } = await defaultScreenData(id)
      setData({ widgetData, screenData })
    })()
  }, [])
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
    return <> </>
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
              width: rect.width + 'px',
              height: rect.height + 'px',
              position: 'absolute',
              left: rect.left + 'px',
              top: rect.top + 'px',
              transform: `rotate(${rotate}deg)`,
              // transform: `translate(${rect.left}px, ${rect.top}px) rotate(${rotate}deg)`,
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
