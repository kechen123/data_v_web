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
}

export interface Widget {
  [key: string]: Plug
}

export interface SetWidget {
  key: string
  plug: Plug
}
