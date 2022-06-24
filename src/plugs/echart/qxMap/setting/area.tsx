import React, { useEffect, useState } from 'react'
import { Form, Input, InputNumber, AutoComplete, Select, message } from 'antd'
import InputNumberUnit from '@components/form/inputNumberUnit'
import eventBus from '@utils/eventBus'
import { QXMAP } from '../_types'
const { Option } = Select

interface Props extends QXMAP {
  chinaArea: any
}

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
  label: str.repeat(repeat),
})

const searchTree = (val, arr) => {
  let newArr: any = []
  const labelKey = 'pro_name'
  const labelKey1 = 'city_name'
  const childrenKey = 'pro_cities'
  const childrenKey1 = 'city_areas'
  arr.forEach((element) => {
    if ((element[labelKey] && element[labelKey].indexOf(val) > -1) || (element[labelKey1] && element[labelKey1].indexOf(val) > -1)) {
      const o = JSON.parse(JSON.stringify(element))
      delete o[childrenKey]
      delete o[childrenKey1]
      newArr.push(o)
    } else {
      if (element[childrenKey] && element[childrenKey].length > 0) {
        let reData = searchTree(val, element[childrenKey])
        if (reData && reData.length > 0) {
          // newArr = newArr.concat(reData)
          let obj = {
            ...element,
            [childrenKey]: reData,
          }
          newArr.push(obj)
        }
      }
    }
  })
  return newArr
}

//https://ant-design.gitee.io/components/auto-complete-cn/
//https://blog.csdn.net/reffdf/article/details/124298707
const searchOptions = (txt, chinaArea) => {
  if (txt) {
    const arr = searchTree(txt, chinaArea)
    if (Array.isArray(arr)) {
      const list = arr.map((item) => {
        let value, label
        if (!item.hasOwnProperty('pro_cities')) {
          value = item['pro_code']
          label = item['pro_name']
        } else {
          value = item['pro_cities'][0]['city_code']
          label = item['pro_name'] + '-' + item['pro_cities'][0]['city_name']
        }
        return {
          value: label,
          label: label,
          data: value,
        }
      })
      return list
    }
  }
  return []
}

const Area = (props: Props) => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  }

  const [map, setMap] = useState({
    code: props.map_code,
    map: props.map,
  })

  const [options, setOptions] = useState<{ value: string }[]>([])

  const searchArea = (searchText: string) => {
    const data = searchOptions(searchText, props.chinaArea)
    setOptions(data)
  }

  const onChange = (value, option) => {
    console.log('onChange', value, option)
  }

  return (
    <Form {...layout} initialValues={{ layout: 'Inline' }} labelAlign="right">
      <Form.Item label="地区">
        <AutoComplete defaultValue={map.map} options={options} onChange={onChange} onSearch={searchArea} placeholder="XX省XX市" />
      </Form.Item>
      <Form.Item label="缩放">
        <InputNumberUnit />
      </Form.Item>
    </Form>
  )
}

export default Area
