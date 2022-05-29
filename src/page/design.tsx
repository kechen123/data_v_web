import React, { useContext, useEffect } from 'react'
import { useRequest } from 'ahooks'
import { getFetch } from '@utils/request'
import App from '../design'
import Loading from '@page/loading1'
import '@assets/less/design.less'
import '@assets/less/global.less'

const getUsername = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    getFetch('/rs/users')
      .then((res) => resolve(res.json()))
      .catch(function (error) {
        reject(new Error('Failed to get username'))
      })
  })
}

const Design = () => {
  const id = new URLSearchParams(window.location.search).get('id')
  const { loading, run, runAsync } = useRequest(getUsername, {
    manual: true,
    onSuccess: (result: any, params) => {
      console.log('result', result)
    },
    onError: (error) => {
      console.log('error', error)
    },
  })

  useEffect(() => {
    if (id) run()
  }, [])
  if (loading) {
    return <Loading />
  }
  return <App />
}

export default Design
