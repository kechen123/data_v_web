import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { SketchPicker } from 'react-color'
import { useClickAway } from 'ahooks'
import styles from './index.module.less'
interface Props {
  color: string
  onChange: Function
}

const getColor = (color) => {
  if (typeof color === 'object') {
    return `rgb(${color.r},${color.g},${color.b},${color.a})`
  } else {
    return color
  }
}
const Color = (props: Props) => {
  const { color, onChange } = props
  const colorRef = useRef<HTMLDivElement | null>(null)
  const [displayColorPicker, setDisplayColorPicker] = useState(false)
  const [selfColor, setSelfColor] = useState<any>(color)
  const [rect, setRect] = useState([0, 0])
  const colorPanlSize = [220, 313]
  const handleClick = (e) => {
    const {
      nativeEvent: { clientX, clientY, offsetX, offsetY },
    } = e
    let pageW = document.body.offsetWidth
    let pageH = document.body.offsetHeight
    let left = clientX - offsetX - 6 - colorPanlSize[0]
    let top = clientY - offsetY / 2 - colorPanlSize[1] / 2
    if (top + colorPanlSize[1] > pageH) {
      top = pageH - colorPanlSize[1]
    }
    if (left + colorPanlSize[0] > pageW) {
      left = pageW - colorPanlSize[0]
    }
    setRect([left, top])
    setDisplayColorPicker(!displayColorPicker)
  }

  const handleChange = (color) => {
    const { r, g, b, a } = color.rgb

    setSelfColor(color.rgb)
    onChange(color)
  }
  useEffect(() => {
    setSelfColor(color)
  }, [color])
  useClickAway(() => {
    if (displayColorPicker) {
      setDisplayColorPicker(false)
    }
  }, colorRef)

  return (
    <div className={styles.colorBody} ref={colorRef}>
      <div className={styles.swatch} onClick={handleClick}>
        <div
          className={styles.color}
          style={{
            background: getColor(selfColor),
          }}
        ></div>
      </div>
      {displayColorPicker ? (
        <div className={styles.popover} style={{ left: rect[0], top: rect[1] }}>
          <SketchPicker color={selfColor} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  )
}
export default React.memo(Color)
export { getColor }
