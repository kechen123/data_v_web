import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../app/store'

export interface DropDragState {
  status: '' | 'dragging' | 'draggEnd' | 'dragEnter' | 'dragLeave'
}

const initialState: DropDragState = {
  status: '',
}
export const dropDragSlice = createSlice({
  name: 'dropDrag', // 命名空间，在调用action的时候会默认的设置为action的前缀
  // 初始值
  initialState,
  // 这里的属性会自动的导出为actions，在组件中可以直接通过dispatch进行触发
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setStatus: (state, action: PayloadAction<'' | 'dragging' | 'draggEnd' | 'dragEnter' | 'dragLeave'>) => {
      state.status = action.payload
    },
  },
})
// 导出actions
export const { setStatus } = dropDragSlice.actions

// 导出initialState
export const dropDrag = (state: RootState) => state.dropDrag

export default dropDragSlice.reducer
