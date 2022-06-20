import React, { useState, useEffect } from 'react'
import { Tooltip } from 'antd'
import { MENU } from '@config/plugList'
import { Chosen as ChosenInterface } from '@_types/Left'
import style from './index.module.less'

const TabList = (props: ChosenInterface) => {
  const { chosen, setChosen } = props
  const handlerClick = ({ name }) => {
    setChosen(name)
  }
  return (
    <div className={style.tabListView}>
      {MENU.sort((a, b) => a.index - b.index).map((item, i) => {
        return (
          <Tooltip key={i} placement="right" title={item.name}>
            <div
              onClick={(e) => {
                handlerClick(item)
              }}
              data-name={item.name}
              className={`${style.toolBar} ${chosen === item.name ? style.active : ''}`}
            >
              <i className={`icon iconfont ${item.icon} `}></i>
            </div>
          </Tooltip>
        )
      })}
    </div>
  )
}

export default TabList
