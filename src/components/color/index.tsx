import React, { useState, useEffect } from 'react'
import { SketchPicker } from 'react-color'
import styles from './index.module.less'
interface Props {
  color: string
  onChange: Function
}
const Color = (props: Props) => {
  const { color, onChange } = props
  const [displayColorPicker, setDisplayColorPicker] = useState(false)
  const [selfColor, setSelfColor] = useState(color)
  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker)
  }
  const handleClose = () => {
    setDisplayColorPicker(false)
  }
  const handleChange = (color) => {
    setSelfColor(color.hex)
    onChange(color)
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
        />
      </div>
      {displayColorPicker ? (
        <div className={styles.popover}>
          <div className={styles.cover} onClick={handleClose} />
          <SketchPicker color={selfColor} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  )
}
export default Color
