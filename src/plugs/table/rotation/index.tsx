import React, { useState, useEffect, useCallback, useRef, useMemo, forwardRef, ForwardRefRenderFunction } from 'react'
import anime from 'animejs'
import { useEventListener, useGetState } from 'ahooks'
import useWidgetBus from '@hooks/useWigetBus'
import useInterval from '@/hooks/useInterval'
import { WidgetObj } from '@_types/Plugin'
import { Table as TableType, Thead } from './_types'
import { getOption } from './option'
import styles from './index.module.less'

interface TableProps {
  children?: React.ReactNode
  style?: Object
  className?: string
  width: number[]
}

interface HeaderProps {
  columns: string[]
  config: Thead
}

interface BodyProps {
  id: string
  data: any[]
  columns: string[]
  config: TableType
}

const Table = forwardRef((props: TableProps, ref: React.Ref<HTMLDivElement> | undefined) => {
  const { children, className, style, width } = props
  return (
    <div ref={ref} className={className} style={{ ...style, overflow: 'hidden' }}>
      <table className={styles.table}>
        <colgroup>
          {width.map((item, index) => (
            <col key={index} style={{ width: `${item}px` }} />
          ))}
        </colgroup>
        {children}
      </table>
    </div>
  )
})

const Header = (props: HeaderProps) => {
  const { columns, config } = props

  const widthArr = useMemo(() => {
    return columns.map((item, index) => {
      const w = config.width[index] || 100
      return w
    })
  }, [columns])

  const css = useCallback(
    (showBorder: boolean) => {
      let css: any = {
        backgroundColor: config.backgroundColor,
        borderRight: `${config.verticalBorder.borderStyle} ${config.verticalBorder.borderColor} ${config.verticalBorder.borderWidth}px`,
        color: config.color,
        fontSize: config.fontSize,
        fontWeight: config.fontWeight,
        height: config.height,
        textAlign: config.textAlign,
      }

      if (config.verticalBorder.borderWidth <= 0 || showBorder) {
        delete css.borderRight
      }
      return css
    },
    [config]
  )
  return (
    <Table width={widthArr} className={styles.header}>
      <thead>
        <tr>
          {columns.map((item, index) => (
            <th className={`${config.ellipsis ? styles.ellipsis : ''} ${styles.th}`} key={index} style={css(index === columns.length - 1)}>
              {item}
            </th>
          ))}
        </tr>
      </thead>
    </Table>
  )
}

const Body = (props: BodyProps) => {
  const { id, columns, data, config } = props
  const tableRef = useRef<HTMLDivElement>(null)

  const widthArr = useMemo(() => {
    return columns.map((item, index) => {
      const w = config.head.width[index] || 100
      return w
    })
  }, [columns])

  const colCss = useCallback(
    (rowLength, colLength, rowIndex, colIndex) => {
      const { body } = config
      let css: any = {
        borderRight: `${body.verticalBorder.borderStyle} ${body.verticalBorder.borderColor} ${body.verticalBorder.borderWidth}px`,
        borderBottom: `${body.horizontalBorder.borderStyle} ${body.horizontalBorder.borderColor} ${body.horizontalBorder.borderWidth}px`,
        color: body.color,
        fontSize: body.fontSize,
        fontWeight: body.fontWeight,
        height: body.height,
        textAlign: body.textAlign,
      }
      if (body.horizontalBorder.borderWidth <= 0 || rowLength - 1 === rowIndex) {
        delete css.borderBottom
      }
      if (body.verticalBorder.borderWidth <= 0 || colLength - 1 === colIndex) {
        delete css.borderRight
      }
      return css
    },
    [config.body.verticalBorder, config.body.horizontalBorder]
  )

  const rowCss = useMemo(() => {
    return `
    [data-id="${id}"] .data_v_tr:nth-child(odd){
      background-color: ${config.body.oddBackgroundColor};
    }
    [data-id="${id}"] .data_v_tr:nth-child(even){
      background-color: ${config.body.oddBackgroundColor};
    }
    `
  }, [config.body.oddBackgroundColor, config.body.evenBackgroundColor])

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.style.transform = `translateY(0px)`
    }
  }, [data])

  return (
    <div>
      <Table ref={tableRef} width={widthArr} className={`styles.body tBody`}>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index} className="data_v_tr">
                {item.map((item2, index2) => {
                  return (
                    <td key={index2} className={`${config.head.ellipsis ? styles.ellipsis : ''} ${styles.td}`} style={colCss(data.length, item.length, index, index2)}>
                      {item2}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
        <style>{rowCss}</style>
      </Table>
    </div>
  )
}

const Index = (widgetObj: WidgetObj) => {
  const {
    id,
    widget: { plugin, config, dataConfig },
  } = widgetObj

  const [pageNum, setPageNum] = useState(1)
  const [hover, setHover] = useState(false)
  const [option, setOption, getNowOption] = useGetState(() => getOption(config, dataConfig?.widgetData, dataConfig?.ruler))

  useWidgetBus(id, (data) => {
    const { widget } = data
    const oldOption = getNowOption()
    const newOption = getOption(widget.config, widget.dataConfig?.widgetData, widget.dataConfig?.ruler)
    if (JSON.stringify(oldOption) !== JSON.stringify(newOption)) {
      setOption(newOption)
      setPageNum(1)
    }
  })

  const {
    column,
    config: { head, body },
    data,
  } = option

  const headerProps = useMemo(() => {
    return {
      columns: option.column,
      config: head,
    }
  }, [column, head])

  const bodyCss = useMemo(() => {
    const { body } = config
    return {
      border: `${body.outLineStyle.borderStyle} ${body.outLineStyle.borderColor} ${body.outLineStyle.borderWidth}px`,
    }
  }, [body.outLineStyle])

  const bodyHeight = useMemo(() => {
    const headHeight = head.show ? head.height : 0
    return headHeight + body.height * config.pageSize
  }, [body.height, head.show, config.pageSize])

  const bodyDataList = useMemo(() => {
    const pageSize = config.pageSize + 1
    let start = (pageNum - 1) * pageSize
    let end = pageNum * pageSize
    if (config.carousel === 'single') {
      start = pageNum - 1
      end = start + pageSize
    }
    let arr = data.slice(start, end)
    if (arr.length < pageSize) {
      const n = pageSize - arr.length
      const padding = data.slice(0, n)
      arr = [...arr, ...padding]
    }
    return arr
  }, [pageNum, config.pageSize, config.carousel, data])

  const bodyProps = useMemo(() => {
    return {
      id,
      columns: option.column,
      data: bodyDataList,
      config: option.config,
    }
  }, [bodyDataList, column, option.config])

  const animate = useCallback(
    (pageNum) => {
      /**
       * 动画文档：https://animejs.com/documentation/#timelineOffsets
       */
      const loader = anime.timeline({
        complete: () => setPageNum(pageNum),
      })
      loader.add({
        targets: `[data-id="${id}"] .tBody`,
        translateY: -body.height,
        duration: option.config.carouselDuration,
        easing: 'easeInOutSine',
      })
    },
    [option.config.carouselDuration, body.height, id]
  )

  useInterval(
    useCallback(() => {
      let nextPageNum = pageNum + 1
      if (pageNum >= data.length) {
        nextPageNum = 1
      }
      if (!hover && !document.hidden) {
        animate(nextPageNum)
      }
    }, [hover, pageNum, bodyDataList.length, option.config.pageSize]),
    option.config.waitTime
  )

  useEventListener('mouseover', () => {
    setHover(true)
  })
  useEventListener('mouseout', () => {
    setHover(false)
  })

  return (
    <div className={styles.table}>
      <div className={styles.container} style={{ ...bodyCss, height: bodyHeight + 'px' }}>
        {option.config.head.show ? <Header {...headerProps} /> : ''}
        <Body {...bodyProps} />
      </div>
    </div>
  )
}

export default Index
