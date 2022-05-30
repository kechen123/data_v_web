import React, { useMemo, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

import style from '@assets/less/home.module.less'
const Home = () => {
  const navigate = useNavigate()

  return (
    <div className={style.body}>
      <div>Hello World!</div>
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
      <br />
      <Button
        type="primary"
        onClick={() => {
          navigate('/design')
        }}
      >
        编辑大屏
      </Button>
    </div>
  )
}

export default Home
