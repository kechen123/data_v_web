import { useEffect, useRef } from 'react'

type Delay = number | null
type TimerHandler = (...args: any[]) => void

/**
 * Provides a declarative useInterval
 * https://overreacted.io/zh-hans/making-setinterval-declarative-with-react-hooks/
 * @param callback - Function that will be called every `delay` ms.
 * @param delay - Number representing the delay in ms. Set to `null` to "pause" the interval.
 */

const Index = (callback: TimerHandler, delay: Delay) => {
  const savedCallbackRef = useRef<TimerHandler>()

  useEffect(() => {
    savedCallbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (delay && delay > 10) {
      let timeWorker = new Worker(new URL('./worker.js', import.meta.url))
      const handler = (...args: any[]) => savedCallbackRef.current!(...args)
      timeWorker.postMessage({ action: 'start', time: delay })
      timeWorker.onmessage = handler
      return () => timeWorker.terminate()
    }
  }, [delay])
}

export default Index
