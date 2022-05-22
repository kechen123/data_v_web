import { Form, Input, InputNumber, Switch, Select } from 'antd'
import { Select as SelectType, LegendPosition as LegendPositionType } from '@_types/formData'
const { Option } = Select

export const fontFamily: SelectType = {
  options: [
    { value: 'Microsoft YaHei', label: '微软雅黑' },
    { value: 'SimSun', label: '宋体' },
    { value: 'FangSong', label: '仿宋' },
    { value: 'STLiti', label: '华文隶书' },
    { value: 'STKaiti', label: '华文楷体' },
    { value: 'SimHei', label: '黑体' },
  ],
  default: 'Microsoft YaHei',
}

export const borderType: SelectType = {
  options: [
    { value: 'solid', label: '实线' },
    { value: 'dashed', label: '虚线' },
    { value: 'dotted', label: '点线' },
  ],
  default: 'solid',
}

export const legend: SelectType = {
  options: [
    { value: 'top', label: '顶部居中' },
    { value: 'top_left', label: '顶部左居中' },
    { value: 'top_right', label: '顶部右居中' },
    { value: 'bottom', label: '底部居中' },
    { value: 'left_top', label: '左上角' },
    { value: 'left_bottom', label: '左下角' },
    { value: 'right_top', label: '右上角' },
    { value: 'right_bottom', label: '右下角' },
  ],
  default: 'top',
}

export const borderTypeOption = borderType.options.map((item) => {
  return (
    <Option key={item.value} value={item.value}>
      {item.label}
    </Option>
  )
})

export const fontFamilyOption = fontFamily.options.map((item) => {
  return (
    <Option key={item.value} value={item.value}>
      {item.label}
    </Option>
  )
})

export const legendOption = legend.options.map((item) => {
  return (
    <Option key={item.value} value={item.value}>
      {item.label}
    </Option>
  )
})

export const legendPosition = (position: LegendPositionType) => {
  let top = 'auto',
    right = 'auto',
    bottom = 'auto',
    left = 'auto',
    orient = 'vertical'
  switch (position) {
    case 'top':
      top = '2%'
      left = 'center'
      orient = 'horizontal'
      break
    case 'top_left':
      top = '2%'
      left = '2%'
      orient = 'horizontal'
      break
    case 'top_right':
      top = '2%'
      right = '2%'
      orient = 'horizontal'
      break
    case 'bottom':
      bottom = '2%'
      left = 'center'
      orient = 'horizontal'
      break
    case 'right_top':
      right = '2%'
      top = '2%'
      break
    case 'right_bottom':
      right = '2%'
      bottom = '2%'
      break
    case 'left_top':
      left = '2%'
      top = '2%'
      break
    case 'left_bottom':
      left = '2%'
      bottom = '2%'
      break
    default:
      left = '2%'
      bottom = '2%'
      break
  }
  return { top, right, bottom, left, orient }
}
