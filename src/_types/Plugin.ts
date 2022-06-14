export interface Rect {
  left?: number
  top?: number
  width: number
  height: number
}

export interface plugin {
  url: string
  name: string
}

export interface Widget {
  name: string
  plugin: plugin
  rect: Rect
  rotate?: number
  img: string
  config: any
}

export interface WidgetMap {
  [key: string]: Widget
}

export interface WidgetObj {
  id: string
  widget: Widget
}

export interface MoveableBox {
  container?: HTMLDivElement | null
  target: Array<HTMLDivElement>
  setTarget?: Function
  widgetList: Array<WidgetObj>
}
