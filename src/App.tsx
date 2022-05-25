import { Routes, Route, Link } from 'react-router-dom'
import loadable from '@loadable/component'
import Loading from '@page/loading'

const Home = loadable(() => import(`@page/home`), {
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
const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Design />} />
      {/* <Route path="/" element={<Loading />} /> */}
      <Route path="design" element={<Design />} />
      <Route path="preview" element={<Preview />} />
    </Routes>
  )
}

export default App
