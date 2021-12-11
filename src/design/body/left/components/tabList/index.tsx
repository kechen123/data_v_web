import React, { useState, useEffect } from 'react'
import { MENU } from '@config/plugList'
import { Chosen as ChosenInterface } from '@_data/Left'
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
          <div
            onClick={(e) => {
              handlerClick(item)
            }}
            key={i}
            data-name={item.name}
            className={`${style.toolBar} ${chosen === item.name ? style.active : ''}`}
          >
            <i className={`icon iconfont ${item.icon} `}></i>
          </div>
        )
      })}
    </div>
  )
}

export default TabList
