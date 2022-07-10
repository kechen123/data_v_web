export type Text = {
  txt: string
  fontFamily: string
  fontSize: number
  color: any
  fontStyle: string
  fontWeight: string
  lineClamp: 'none' | number //显示行数
  letterSpacing: number //字间距
  lineHeight: number
  textAlign: 'left' | 'center' | 'right'
  textBaseline: 'top' | 'middle' | 'bottom'
  showBorder: boolean
  borderWith: number // 描边宽度
  borderColor: any // 描边颜色
  showShadow: boolean
  shadowColor: any // 阴影颜色
  shadowBlur: number // 阴影模糊度
  shadowOffsetX: number // 阴影横向偏移
  shadowOffsetY: number // 阴影纵向偏移
}

export type Ruler = {
  文本: string
}
