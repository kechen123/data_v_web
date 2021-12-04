import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from '@features/counterSlice'
// import movieSlice from './features/movieSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    //  movie: movieSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
