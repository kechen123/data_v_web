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
  rotate?: number
  img: string
}

export interface WidgetMap {
  [key: string]: Plug
}

export interface WidgetObj {
  id: string
  widget: Plug
}

export interface MoveableBox {
  container: HTMLDivElement | null
  target: Array<HTMLDivElement>
  setTarget: Function
  widgetList: Array<WidgetObj>
}
