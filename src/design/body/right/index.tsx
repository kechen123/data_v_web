import React from 'react'
import Build from './components'
import './index.less'
import style from './index.module.less'

const Right = (props) => {
  return (
    <div className={style.right}>
      <Build />
    </div>
  )
}

Right.propTypes = {}

export default Right
