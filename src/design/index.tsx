import React from 'react'
import Header from './header'
import Body from './body'
import Footer from './footer'
import { APPNAME } from '@config/index'
import style from './index.module.less'

const App = (props) => {
  const [preview, setPreview] = React.useState(false)
  return (
    <div id={APPNAME} className={style.datav}>
      <header>
        <Header {...{ preview, setPreview }} />
      </header>
      <main>
        <Body {...{ preview, setPreview }} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

App.propTypes = {}

export default App
