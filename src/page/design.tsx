import { useRequest } from 'ahooks'
import App from '../design'
import Loading from '@page/loading1'

import '@assets/less/design.less'
import '@assets/less/global.less'

const getUsername = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    fetch('http://127.0.0.1:5000/rs/users', {
      method: 'GET',
    })
      .then((res) => resolve(res.json()))
      .catch(function (error) {
        reject(new Error('Failed to get username'))
      })
  })
}

const Design = () => {
  const { data, error, loading } = useRequest(getUsername)
  if (error) {
    return <div>{error.message}</div>
  }
  if (loading) {
    return <Loading />
  }
  console.log('', data)
  return <App />
}

export default Design
