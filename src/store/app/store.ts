import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from '@features/counterSlice'
import dropDragReducer from '@features/dropDragSlice'
import screenReducer from '@features/screenSlice'
import widgetReducer from "@features/widgetSlice";
// import movieSlice from './features/movieSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dropDrag: dropDragReducer,
    screen: screenReducer,
    widget: widgetReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
