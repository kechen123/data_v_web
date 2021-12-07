import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../app/store'

export interface screenState {
  width:number
  height:number
  scale:number
}

const initialState: screenState = {
  width: 1360,
  height:720,
  scale:1
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
  },
})
// 导出actions
export const { setWidth } = screenSlice.actions

// 导出initialState
export const screen = (state: RootState) => state.screen

export default screenSlice.reducer
