import React, { useMemo, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

import style from '@assets/less/home.module.less'
const Home = () => {
  const navigate = useNavigate()

  return (
    <div className={style.body}>
      <br />
      <Button
        type="primary"
        onClick={() => {
          navigate('/screenList')
        }}
      >
        大屏列表
      </Button>
      <br />
      <Button
        type="primary"
        onClick={() => {
          navigate('/design')
        }}
      >
        新建大屏
      </Button>
      <br />
      <Button
        type="primary"
        onClick={() => {
          localStorage.removeItem('userToken')
          navigate('/login')
        }}
      >
        退出登录
      </Button>
    </div>
  )
}

export default Home
