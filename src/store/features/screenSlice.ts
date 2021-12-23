import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../app/store'
import { WidgetObj } from '@_types/Plugin'
import { SCREENWIDTH, SCREENHEIGHT } from '@config/index'

interface screenWidget {
  widgetId: string
  zIndex: number
  children?: screenWidget[]
}
export interface screenState {
  width: number
  height: number
  scale: number
  //大屏组件列表
  screenWidget: screenWidget[]
  //大屏组件层级
  widgetIndex: number
  //选中组件id集合
  activeWidgets: string[]
}

const initialState: screenState = {
  width: SCREENWIDTH,
  height: SCREENHEIGHT,
  scale: 1,
  screenWidget: [],
  widgetIndex: 3,
  activeWidgets: [],
}
export const screenSlice = createSlice({
  name: 'screen', // 命名空间，在调用action的时候会默认的设置为action的前缀
  // 初始值
  initialState,
  // 这里的属性会自动的导出为actions，在组件中可以直接通过dispatch进行触发
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload
    },
    setActiveWidgets: (state, action: PayloadAction<string[]>) => {
      state.activeWidgets = action.payload
    },
    drop: (state, action: PayloadAction<string>) => {
      state.widgetIndex += 1
      const screenWidgetItem: screenWidget = {
        widgetId: action.payload,
        zIndex: state.widgetIndex,
        children: [],
      }
      state.screenWidget.push(screenWidgetItem)
      // state.activeWidgets = [action.payload]
    },
  },
})
// 导出actions
export const { setWidth, setActiveWidgets, drop } = screenSlice.actions

// 导出initialState
export const screen = (state: RootState) => state.screen

export default screenSlice.reducer
