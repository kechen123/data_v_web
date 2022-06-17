import React from 'react'
import { Tabs } from 'antd'
import Setting from './setting'
import './index.less'
import style from './index.module.less'

const { TabPane } = Tabs
const Right = (props) => {
  return (
    <div className={style.right}>
      <aside>
        <Setting />
      </aside>
    </div>
  )
}

Right.propTypes = {}

export default Right
