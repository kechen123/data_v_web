import { Routes, Route, Link } from 'react-router-dom'
import loadable from '@loadable/component'
import Loading from '@page/loading1'

const Home = loadable(() => import(`@page/home`), {
  fallback: <Loading />,
  cacheKey: (props) => props.url,
})
const Login = loadable(() => import(`@page/login`), {
  fallback: <Loading />,
  cacheKey: (props) => props.url,
})
const Design = loadable(() => import(`@page/design`), {
  fallback: <Loading />,
  cacheKey: (props) => props.url,
})
const Preview = loadable(() => import(`@page/preview`), {
  fallback: <Loading />,
  cacheKey: (props) => props.url,
})
const ScreenList = loadable(() => import(`@page/screenList`), {
  fallback: <Loading />,
  cacheKey: (props) => props.url,
})
const App = () => {
  const token = localStorage.getItem('userToken')
  if (token) {
    return (
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Design />} /> */}
        {/* <Route path="/" element={<Loading />} /> */}

        <Route path="preview" element={<Preview />} />
        <Route path="screenList" element={<ScreenList />} />
        <Route path="design" element={<Design />} />
        <Route path="login" element={<Login />} />
      </Routes>
    )
  }
  return (
    <Routes>
      <Route path="*" element={<Login />} />
    </Routes>
  )
}

export default App
