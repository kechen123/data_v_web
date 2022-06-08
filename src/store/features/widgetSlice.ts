import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../app/store'
import { WidgetMap, WidgetObj, Widget } from '@_types/Plugin'
import { SCREENWIDTH, SCREENHEIGHT } from '@config/index'

// const initialState: Map<string, Widget> = new Map()
const initialState: WidgetMap = {}
export const widgetSlice = createSlice({
  name: 'widget', // 命名空间，在调用action的时候会默认的设置为action的前缀
  // 初始值
  initialState,
  // 这里的属性会自动的导出为actions，在组件中可以直接通过dispatch进行触发
  reducers: {
    initWidget: (state, action: PayloadAction<WidgetMap>) => {
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key]
      })
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setWidget: (state, action: PayloadAction<WidgetObj>) => {
      // state.set(action.payload.id, action.payload.widget)
      state[action.payload.id] = action.payload.widget
    },
    delWidget: (state, action: PayloadAction<string[] | string>) => {
      const ids = Array.isArray(action.payload) ? action.payload : [action.payload]
      ids.forEach((id) => {
        delete state[id]
      })
    },
  },
})
// 导出actions
export const { initWidget, setWidget, delWidget } = widgetSlice.actions

// 导出initialState
export const widget = (state: RootState) => state.widget

export default widgetSlice.reducer
