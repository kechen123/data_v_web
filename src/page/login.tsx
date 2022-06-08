import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'
import { useRequest } from 'ahooks'
import { postFetch } from '@utils/request'
import '@assets/less/login.less'

const login = (username, password): Promise<string> => {
  return new Promise((resolve, reject) => {
    postFetch('/op/login', { username: username, password: password })
      .then((res) => {
        console.log('res>>>>', res)
        resolve(res)
      })
      .catch(function (error) {
        reject(new Error('Failed to get username'))
      })
  })
}

const Home = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    localStorage.removeItem('userToken')
  }, [])

  const { loading, run } = useRequest(login, {
    manual: true,
    debounceWait: 300,
    onSuccess: (result: any, params) => {
      if (result?.status === 200) {
        message.success('登陆成功')
        localStorage.setItem('userToken', result.token)
        setTimeout(() => {
          if (window.location.href.indexOf('/login') > -1) {
            window.location.href = '/'
          } else {
            window.location.reload()
          }
        }, 1000)
      } else {
        message.error(result.message)
      }
    },
    onError: (error) => {
      message.error('登录失败')
    },
  })

  const onFinish = (e) => {
    e.preventDefault()
    if (username && password && !loading) {
      run(username, password)
    }
  }

  return (
    <div className="login-box">
      <h2>登录</h2>
      <form>
        <div className="user-box">
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            required
          />
          <label>账号</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required
          />
          <label>密码</label>
        </div>
        <a href="#" onClick={onFinish}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          登录
        </a>
      </form>
    </div>
  )
}

export default Home
