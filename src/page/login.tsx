import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd'
import { useRequest } from 'ahooks'

const login = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    fetch('http://127.0.0.1:5000/op/login', {
      method: 'POST',
      body: JSON.stringify({
        username: 'zhoutk',
        password: '123456',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => resolve(res.json()))
      .catch(function (error) {
        reject(new Error('Failed to get username'))
      })
  })
}

const Home = () => {
  let navigate = useNavigate()
  const { loading, run, runAsync } = useRequest(login, {
    manual: true,
    onSuccess: (result: any, params) => {
      if (result?.status === 200) {
        localStorage.setItem('userToken', result.token)
        window.location.reload()
      }
    },
    onError: (error) => {
      console.log('error', error)
    },
  })

  const onFinish = (values: any) => {
    run()
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div>
      <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
        <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Home
