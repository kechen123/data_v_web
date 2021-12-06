import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'
import { increment, decrement, asyncIncrement, counter } from '@features/counterSlice' // 引入actions

function App() {
  const { value } = useAppSelector(counter)
  const dispatch = useAppDispatch()
  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(decrement()) // dispatch派发action
        }}
      >
        {value}
      </button>
      <hr />
      <button
        onClick={() => {
          dispatch(increment())
        }}
      >
        {value}
      </button>

      <button
        onClick={() => {
          dispatch(asyncIncrement(3))
        }}
      >
        {value}
      </button>
    </div>
  )
}
export default App
