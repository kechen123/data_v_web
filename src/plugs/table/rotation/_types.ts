type BorderStyle = 'dotted' | 'solid' | 'double' | 'dashed'
type BorderColor = any
type BorderWidth = number

export type Thead = {
  show: boolean
  backgroundColor: any
  //纵向分割线
  verticalBorder: {
    borderColor: BorderColor
    borderStyle: BorderStyle
    borderWidth: BorderWidth
  }
  color: any
  fontSize: number
  fontWeight: number
  height: number
  textAlign: 'left' | 'center' | 'right'
  width: number[]
  ellipsis: boolean //超出宽度省略
}

export type Tbody = {
  oddBackgroundColor: any
  evenBackgroundColor: any
  //表格左右两边的边框
  outLineStyle: {
    borderColor: BorderColor
    borderStyle: BorderStyle
    borderWidth: BorderWidth
  }
  //纵向分割线
  verticalBorder: {
    borderColor: BorderColor
    borderStyle: BorderStyle
    borderWidth: BorderWidth
  }
  //横向分割线
  horizontalBorder: {
    borderColor: BorderColor
    borderStyle: BorderStyle
    borderWidth: BorderWidth
  }
  color: any
  fontSize: number
  fontWeight: number
  height: number
  textAlign: 'left' | 'center' | 'right'
}

export type Table = {
  head: Thead
  body: Tbody
  carouselDuration: number //滚动动效时间
  waitTime: number //滚动间隔时间
  pageSize: number
  carousel: 'single' | 'page' //轮播方式
}

export type Ruler = {
  字段: string[]
}
