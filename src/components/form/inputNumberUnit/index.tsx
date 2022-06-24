import React, { useState } from 'react'

import { InputNumber, Select } from 'antd'
import { Option as OptionType, Select as SelectType, InputNumber as InputType } from '@_types/formData'

const { Option } = Select

const InputNumberUnit = (props: InputType) => {
  const { min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER, stringMode = false } = props
  const valueStr = props?.value?.toString()
  const defaultUnit = valueStr?.replace(/[0-9]+/g, '').replace(/./, '')
  const defaultValue = valueStr?.replace(defaultUnit || '', '')
  const [unit, setUnit] = useState(defaultUnit || '')
  const [value, setValue] = useState(defaultValue || '')

  const getGap = () => {
    const option: Array<OptionType> | undefined = props.unit?.map((item) => {
      return {
        label: item,
        value: item,
      }
    })
    if (option) {
      return {
        options: option,
        default: defaultUnit,
      }
    } else {
      return {
        options: [
          {
            label: 'px',
            value: 'px',
          },
          {
            label: '%',
            value: '%',
          },
        ],
        default: 'px',
      }
    }
  }
  const selectChange = (val: string) => {
    setUnit(val)
    if (props.onChange) {
      props.onChange(value + val)
    }
  }

  const onChange = (val: string) => {
    setValue(val)
    if (props.onChange) {
      props.onChange(val + unit)
    }
  }
  const selectAfter = (data: SelectType) => {
    return (
      <Select onChange={selectChange} defaultValue={data.default ? data.default : data.options[0].value} style={{ width: 50 }}>
        {data.options.map((item: OptionType) => {
          return (
            <Option key={item.value} value={item.value}>
              {item.label}
            </Option>
          )
        })}
      </Select>
    )
  }

  if (props.unit) {
    return <InputNumber min={min as any} max={max as any} stringMode={stringMode} addonAfter={selectAfter(getGap())} value={defaultValue} onChange={onChange} style={props.style} />
  }

  return <InputNumber min={min as any} max={max as any} stringMode={stringMode} value={defaultValue} onChange={props.onChange} style={props.style} />
}

export default InputNumberUnit
