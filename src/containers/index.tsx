import React from 'react'
import Header from './header'
import Body from './body'
import Footer from './footer'
import { APPNAME } from '@config/index'

import style from './index.module.less'

const App = (props) => {
  return (
    <div id={APPNAME} className={style.datav}>
      <header>
        <Header />
      </header>
      <main>
        <Body />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

App.propTypes = {}

export default App
