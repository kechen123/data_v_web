export type Option = {
  label: string
  value: string
}

export type Select = {
  options: Array<Option>
  default?: string
}
