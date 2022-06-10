import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { message } from 'antd'
import { useAppSelector } from '@storeApp/hooks'
import { useRequest, useFullscreen } from 'ahooks'
import { postFetch, putFetch } from '@utils/request'
import { screen } from '@features/screenSlice'
import { widget } from '@features/widgetSlice'
import { getUrlParam } from '@utils/common'
import style from './index.module.less'

const createScreen = (data: Object): Promise<string> => {
  return new Promise((resolve, reject) => {
    postFetch('/rs/screen', data)
      .then((res) => resolve(res))
      .catch(function (error) {
        reject(new Error('Failed to get username'))
      })
  })
}

const editScreen = (id: string, data: Object): Promise<string> => {
  return new Promise((resolve, reject) => {
    putFetch(`/rs/screen/${id}`, data)
      .then((res) => resolve(res))
      .catch(function (error) {
        reject(new Error('Failed to get username'))
      })
  })
}

const Header = (props) => {
  const screenData = useAppSelector(screen)
  const widgetData = useAppSelector(widget)

  const [, { enterFullscreen }] = useFullscreen(() => document.getElementById('screen'))

  const createRequest = useRequest(createScreen, {
    manual: true,
    onSuccess: (result: any, params) => {
      if (result?.status === 200) {
        // props.history.push(`/design/${result.data.id}`)
        message.success('保存成功')
      } else {
        message.error(result.message)
      }
    },
    onError: (error) => {
      console.log('error', error)
      message.error('网络错误')
    },
  })

  const editRequest = useRequest(editScreen, {
    manual: true,
    onSuccess: (result: any, params) => {
      if (result?.status === 200) {
        // props.history.push(`/design/${result.data.id}`)
        message.success('保存成功')
      } else {
        message.error(result.message)
      }
    },
    onError: (error) => {
      message.error('网络错误')
    },
  })

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
  const save1 = () => {
    // console.log('保存')
    // console.log(screenData)
    // console.log(widgetData)
    let data = {
      screenData,
      widgetData,
    }
    console.log('', JSON.stringify(data))
    const element = document.createElement('a')

    let text = JSON.stringify(data, null, 2)
    const file = new Blob([text], { type: 'text/plain' })

    element.href = URL.createObjectURL(file)

    element.download = 'myFile.txt'

    document.body.appendChild(element) // Required for this to work in FireFox

    element.click()
  }

  const create = () => {
    let data = {
      screen: JSON.stringify(screenData),
      widget: JSON.stringify(widgetData),
    }
    createRequest.run(data)
  }

  const edit = (id: string) => {
    let data = {
      screen: JSON.stringify(screenData),
      widget: JSON.stringify(widgetData),
    }
    editRequest.run(id, data)
  }

  const save = () => {
    const id = getUrlParam('id')
    if (id) {
      edit(id)
    } else {
      create()
    }
  }

  return (
    <div className={style.header}>
      <div className={style.left}></div>
      <div className={style.center}></div>
      <div className={style.right}>
        <div className={style.btn} onClick={enterFullscreen}>
          <i className="icon iconfont icon-yulan "></i>
          <span>预览</span>
        </div>

        <div className={style.btn} onClick={save}>
          <i className="icon iconfont icon-baocun "></i>
          <span>保存</span>
        </div>
      </div>
    </div>
  )
}

export default Header
