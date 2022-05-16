import React from 'react'
import { Checkbox } from 'antd'
const MyCheckbox = (props: any) => {
  if (!props.option) {
    return <></>
  }
  return (
    <>
      {props?.option.map((item, i) => {
        return (
          <Checkbox key={i} {...item?.props}>
            {item.label}
          </Checkbox>
        )
      })}
    </>
  )
}

export default MyCheckbox
