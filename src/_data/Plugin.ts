export interface Rect {
  left?: number
  top?: number
  width: number
  height: number
}

export interface Plug {
  name: string
  url: string
  rect: Rect
  img: string
}

export interface Widget {
  [key: string]: Plug
}

export interface SetWidget {
  id: string
  plug: Plug
}
