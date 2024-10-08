import { Legend } from './../plugs/echart/basicBar/_types'
import { InputNumber } from 'antd'
export type Option = {
  label: string
  value: string
}

export type Select = {
  options: Array<Option>
  default?: string
}

export type Input = {
  value?: number | string
  onChange?: (value: string) => void
  unit?: string[]
  style?: React.CSSProperties
}

export type InputNumber = Input & {
  min?: number | string
  max?: number | string
  stringMode?: boolean
}

export type LegendPosition = 'top' | 'top_left' | 'top_right' | 'bottom' | 'left_top' | 'left_bottom' | 'right_top' | 'right_bottom'

export type Symbol = 'none' | 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow'
