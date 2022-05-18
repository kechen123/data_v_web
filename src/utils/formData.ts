import { Select as SelectType } from '@_types/formData'

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
