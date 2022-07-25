import { Routes, Route, Link } from 'react-router-dom'
import loadable from '@loadable/component'
import pMinDelay from 'p-min-delay'
import Loading from '@page/loading1'
import Home from '@page/home'
import Login from '@page/login'
// import Design from '@page/design'
import Preview from '@page/preview'
import ScreenList from '@page/screenList'

const time = 1000

// const Home = loadable(() => pMinDelay(import(`@page/home`), time), {
//   fallback: <Loading />,
//   cacheKey: (props) => props.url,
// })
// const Login = loadable(() => pMinDelay(import(`@page/login`), time), {
//   fallback: <Loading />,
//   cacheKey: (props) => props.url,
// })
const Design = loadable(() => pMinDelay(import(`@page/design`), time), {
  fallback: <Loading />,
  cacheKey: (props) => props.url,
})
// const Preview = loadable(() => pMinDelay(import(`@page/preview`), time), {
//   fallback: <Loading />,
//   cacheKey: (props) => props.url,
// })

// const ScreenList = loadable(() => pMinDelay(import(`@page/screenList`), time), {
//   fallback: <Loading />,
//   cacheKey: (props) => props.url,
// })

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/" element={<ScreenList />} />
      {/* <Route path="/" element={<Design />} /> */}
      {/* <Route path="/" element={<Loading />} /> */}

      <Route path="preview" element={<Preview />} />
      <Route path="screenList" element={<ScreenList />} />
      <Route path="design" element={<Design />} />
      <Route path="login" element={<Login />} />
    </Routes>
  )
}

export default App
