import React, { useEffect, useState } from 'react'
import { Slider, Checkbox } from 'antd'
import { MinusSquareOutlined, PlusSquareOutlined, CloseOutlined, CheckOutlined } from '@ant-design/icons'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'
import { screen, setScreen } from '@features/screenSlice'
const autoStyle: React.CSSProperties = {
  width: '100px',
  display: 'flex',
  alignItems: 'center',
  marginRight: '10px',
}
const sliderBody: React.CSSProperties = {
  width: '200px',
  display: 'flex',
  alignItems: 'center',
}
const slider: React.CSSProperties = {
  width: '160px',
}
const icon: React.CSSProperties = {
  fontSize: '16px',
  display: 'block',
  cursor: 'pointer',
  color: 'var(--green)',
}
const Scale = () => {
  const [auto, setAuto] = useState(false)
  const { width: PWidth, height: PHeight, scale } = useAppSelector(screen)
  const getSize = () => {
    let screen = document.querySelector('.moveContent')?.parentElement
    if (screen) {
      const { width, height } = screen.getBoundingClientRect()
      return [width, height]
    }
    return [0, 0]
  }
  const dispatch = useAppDispatch()
  const change = (value) => {
    setAuto(false)
    dispatch(setScreen(['scale', value]))
  }
  const autoChange = () => {
    setAuto(!auto)
  }
  const addScale = () => {
    if (scale < 200) {
      dispatch(setScreen(['scale', scale + 10]))
    }
  }
  const subScale = () => {
    if (scale > 20) {
      dispatch(setScreen(['scale', scale - 10]))
    }
  }
  useEffect(() => {
    if (auto) {
      const [width, height] = getSize()
      if (width > 0 && height > 0) {
        let ws = Math.floor((width / PWidth) * 100)
        let hs = Math.floor((height / PHeight) * 100)
        let scale = Math.min(ws, hs)
        dispatch(setScreen(['scale', scale]))
      }
    }
  }, [auto])
  return (
    <>
      <div style={autoStyle}>
        <Checkbox checked={auto} onChange={autoChange}>
          自动缩放
        </Checkbox>
      </div>
      <div style={sliderBody}>
        <MinusSquareOutlined style={icon} onClick={subScale} />
        <Slider style={slider} value={scale} min={20} max={200} onChange={change} />
        <PlusSquareOutlined style={icon} onClick={addScale} />
      </div>
    </>
  )
}

export default Scale
