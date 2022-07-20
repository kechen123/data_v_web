export type Text = {
  txt: string
  fontFamily: string
  fontSize: number
  fontStyle: string
  fontWeight: string
  color: any
  letterSpacing: number
  lineHeight: number
  textAlign: 'left' | 'center' | 'right'
  textBaseline: 'top' | 'middle' | 'bottom'
  borderWith: number // 描边宽度
  borderColor: any // 描边颜色
  shadowColor: any // 阴影颜色
  shadowBlur: number // 阴影模糊度
  shadowOffsetX: number // 阴影横向偏移
  shadowOffsetY: number // 阴影纵向偏移
}

export type Ruler = {
  x: string
}
