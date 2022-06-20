import React, { useEffect, useRef } from 'react'

interface Props {
  width: number
  height: number
  scale: number
  backgroundColor: string
  lineColor: string
  textColor: string
  fontSize: number
  min: number
  max: number
}
const BaseRuler = (props: Props) => {
  const { width, height, scale, backgroundColor, lineColor, textColor, fontSize, min, max } = props
  const ruler = useRef<HTMLCanvasElement | null>(null)

  const drawRuler = () => {
    const ctx = ruler.current?.getContext('2d')
    if (!ctx) {
      return
    }
    //清空画布
    ctx.clearRect(0, 0, width, height)
    //背景填充
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, width, height)
    //边线
    ctx.beginPath()
    ctx.save()
    ctx.strokeStyle = lineColor
    ctx.lineWidth = 1
    ctx.translate(0.5, 0.5)
    ctx.lineCap = 'round'
    ctx.moveTo(0, height - 1)
    ctx.lineTo(width, height - 1)
    ctx.stroke()
    ctx.restore()
    ctx.closePath()
  }

  useEffect(() => {
    if (!ruler.current) {
      return
    }
    const canvas = ruler.current
    canvas.width = width
    canvas.height = height
    canvas.style.width = width + 'px'
    canvas.style.height = height + 'px'
    const ctx = ruler.current.getContext('2d')
    if (!ctx) {
      return
    }
    drawRuler()
  }, [])
  return (
    <canvas ref={ruler} id="EagleEye" width={width} height={height}>
      Your browser does not support the HTML5 canvas tag.
    </canvas>
  )
}

export default BaseRuler
