import React, { useState, useEffect, useRef } from 'react'
import Modal from 'react-modal'
import { SketchPicker } from 'react-color'
import { Color as ColorType, BaseColor as BaseColorType, RgbaColor as RgbaColorType } from '@_types/color'
import styles from './index.module.less'

Modal.setAppElement('#root')
interface Props {
  color: BaseColorType | RgbaColorType
  onChange: (color: ColorType) => void
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

const getColor = (color) => {
  if (typeof color === 'object') {
    return `rgb(${color.r},${color.g},${color.b},${color.a})`
  } else {
    return color
  }
}

const Color = ({ color, onChange }: Props) => {
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
    const { r, g, b, a } = color.rgb
    setSelfColor(color.rgb)
    onChange(color)
  }
  const handleBodyClick = (e) => {
    if (e.target.className.indexOf('colorModal') > -1) {
      setIsOpen(false)
    }
  }

  return (
    <div className={styles.colorBody}>
      <div className={styles.swatch} onClick={handleClick}>
        <div
          className={styles.color}
          style={{
            background: getColor(selfColor),
          }}
        ></div>
      </div>
      <div className={`colorModal ${styles.colorModal}`} style={{ display: isOpen ? 'block' : 'none' }} onClick={handleBodyClick}>
        <div className={styles.colorBox} style={{ ...colorStyle, left: rect[0], top: rect[1] }}>
          <SketchPicker ref={colorRef} color={selfColor} onChange={handleChange} />
        </div>
      </div>
      {/* <Modal style={customStyles} closeTimeoutMS={150} isOpen={isOpen}> */}

      {/* </Modal> */}
    </div>
  )
}

export default React.memo(Color)
export { getColor }
