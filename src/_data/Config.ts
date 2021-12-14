export interface Item {
  span: number
  label: string
  url: string
  props?: any
}
export interface Rows {
  justify: 'space-around' | 'start' | 'end' | 'center' | 'space-between' | undefined
  col: Array<Item>
}
export interface ConfigBlock {
  name: string
  rows: Array<Rows>
}
