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
  min?: number
  max?: number
}
