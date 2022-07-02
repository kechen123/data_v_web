export type Color = {
  hex: string
  hsl: {
    h: number
    s: number
    l: number
  }
  hsv: {
    h: number
    s: number
    v: number
  }
  oldHue: number
  rgb: {
    r: number
    g: number
    b: number
    a?: number
  }
  source: string
}

export type BaseColor = string

export type RgbaColor = {
  r: number
  g: number
  b: number
  a?: number
}

export type LinearColor = {
  type: 'radial'
  x: number
  y: number
  x2: number
  y2: number
  colorStops: Array<{
    offset: number
    color: BaseColor
  }>
  global: boolean
}

export type RadialColor = {
  type: 'linear'
  x: number
  y: number
  r: number
  colorStops: Array<{
    offset: number
    color: BaseColor
  }>
  global: boolean
}

export type ImageColor = {
  image: HTMLImageElement | HTMLCanvasElement
  repeat: 'repeat' | 'no-repeat' | 'repeat-x' | 'repeat-y'
}
