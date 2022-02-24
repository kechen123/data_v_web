import React from 'react'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'
import { screen } from '@features/screenSlice'
import { widget } from '@features/widgetSlice'
import style from './index.module.less'

const Header = (props) => {
  const screenData = useAppSelector(screen)
  const widgetData = useAppSelector(widget)
  const yulan = () => {
    console.log('预览>>>>')
    console.log(screenData)
    console.log(widgetData)
  }
  const save = () => {
    console.log('保存')
  }
  return (
    <div className={style.header}>
      <div className={style.left}></div>
      <div className={style.center}></div>
      <div className={style.right}>
        <div className={style.btn}>
          <i className="icon iconfont icon-yulan " onClick={yulan}></i>
        </div>
        <div className={style.btn}>
          <i className="icon iconfont icon-baocun " onClick={save}></i>
        </div>
      </div>
    </div>
  )
}

export default Header
