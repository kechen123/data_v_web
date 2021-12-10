import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../app/store'
import { WidgetMap, WidgetObj } from '@_data/Plugin'
import { SCREENWIDTH, SCREENHEIGHT } from '@config/index'

// const initialState: Map<string, Plug> = new Map()
const initialState: WidgetMap = {}
export const widgetSlice = createSlice({
  name: 'widget', // 命名空间，在调用action的时候会默认的设置为action的前缀
  // 初始值
  initialState,
  // 这里的属性会自动的导出为actions，在组件中可以直接通过dispatch进行触发
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setWidget: (state, action: PayloadAction<WidgetObj>) => {
      state[action.payload.id] = action.payload.widget
    },
  },
})
// 导出actions
export const { setWidget } = widgetSlice.actions

// 导出initialState
export const widget = (state: RootState) => state.widget

export default widgetSlice.reducer
