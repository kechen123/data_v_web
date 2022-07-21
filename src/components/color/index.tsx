import React, { useState, useEffect, useRef, useMemo } from 'react'
import { SketchPicker } from 'react-color'
import { Input } from 'antd'
import { Color as ColorType, BaseColor as BaseColorType, RgbaColor as RgbaColorType } from '@/_types/Color'
import styles from './index.module.less'

interface Props {
  color: BaseColorType | RgbaColorType | string
  onChange: (color: string) => void
}

const customStyles = {
  overlay: {
    position: 'fixed',
    zIndex: 10,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  content: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: 0,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    padding: 0,
  },
}

const colorBodyStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
}

const colorStyle: React.CSSProperties = {
  position: 'absolute',
}

// const getColor = (color) => {
//   if (typeof color === 'object') {
//     return `rgba(${color.r},${color.g},${color.b},${color.a})`
//   } else {
//     return color
//   }
// }

const getColor = (color) => {
  if (typeof color === 'object') {
    if (color.rgb.a === 1) {
      return color.hex
    } else {
      return `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`
    }
  } else {
    return color
  }
}

const Color = React.memo(({ color, onChange }: Props) => {
  const colorRef = useRef<HTMLDivElement | null>(null)
  const [selfColor, setSelfColor] = useState<any>(color)
  const [isOpen, setIsOpen] = useState(false)
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
    setIsOpen(!isOpen)
  }

  const handleChange = (color) => {
    const c = getColor(color)
    setSelfColor(c)
    onChange(c)
  }

  const handleBodyClick = (e) => {
    if (e.target.className.indexOf('colorModal') > -1) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    setSelfColor(color)
  }, [color])

  return (
    <div className={styles.colorBody}>
      <div className={styles.swatch} onClick={handleClick}>
        <div
          className={styles.color}
          style={{
            background: selfColor,
          }}
        ></div>
      </div>
      <div className={`colorModal ${styles.colorModal}`} style={{ display: isOpen ? 'block' : 'none' }} onClick={handleBodyClick}>
        <div className={styles.colorBox} style={{ ...colorStyle, left: rect[0], top: rect[1] }}>
          <SketchPicker ref={colorRef} color={selfColor} onChange={handleChange} />
        </div>
      </div>
    </div>
  )
})

const Index = (props: Props) => {
  const color = () => {
    if (typeof props.color === 'string') {
      return props.color
    }
    return `rgba(${props.color.r},${props.color.g},${props.color.b},${props.color.a})`
  }
  const [selfColor, setSelfColor] = useState<any>(color())
  const onChange = (value) => {
    setSelfColor(value)
    if (CSS.supports('color', value)) {
      props.onChange(value)
    }
  }

  const params = useMemo(() => {
    if (CSS.supports('color', selfColor)) {
      return {
        color: selfColor,
        onChange,
      }
    }
    return {
      color: props.color,
      onChange,
    }
  }, [selfColor])

  return (
    <Input
      value={selfColor}
      onChange={(e) => {
        onChange(e.target.value)
      }}
      className="color"
      addonBefore={<Color {...params} />}
    />
  )
}

export default React.memo(Index)
