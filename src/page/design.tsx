import React, { useContext, useEffect } from 'react'
import { useRequest } from 'ahooks'
import { getFetch } from '@utils/request'
import App from '../design'
import Loading from '@page/loading1'
import '@assets/less/design.less'

const Design = () => {
  return <App />
}

export default Design
