import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'
import { screen } from '@features/screenSlice'
import { widget } from '@features/widgetSlice'
import style from './index.module.less'

const Header = (props) => {
  let navigate = useNavigate()
  const screenData = useAppSelector(screen)
  const widgetData = useAppSelector(widget)
  const yulan = () => {
    // navigate('/preview' + location.search)
    const newWindow = window.open(`/#/preview`, '_blank')
    if (newWindow) {
      newWindow.onload = () => {
        // console.log('预览窗口加载完毕' + window.origin)
        const data = {
          type: 'screen',
          data: {
            ...screenData,
            screenWidget: widgetData,
          },
        }
        console.log('', data)
        newWindow.postMessage(data, window.origin)
      }
    }
  }
  const save = () => {
    // console.log('保存')
    // console.log(screenData)
    // console.log(widgetData)
    let data = {
      screenData,
      widgetData,
    }
    const element = document.createElement('a')

    let text = JSON.stringify(data, null, 2)
    const file = new Blob([text], { type: 'text/plain' })

    element.href = URL.createObjectURL(file)

    element.download = 'myFile.txt'

    document.body.appendChild(element) // Required for this to work in FireFox

    element.click()
  }
  return (
    <div className={style.header}>
      <div className={style.left}></div>
      <div className={style.center}></div>
      <div className={style.right}>
        <div className={style.btn}>
          <i className="icon iconfont icon-yulan " onClick={yulan}></i>
          {/* <Link to="/preview" target="_blank">
            <i className="icon iconfont icon-yulan "></i>
          </Link> */}
        </div>

        <div className={style.btn}>
          <i className="icon iconfont icon-baocun " onClick={save}></i>
        </div>
      </div>
    </div>
  )
}

export default Header
