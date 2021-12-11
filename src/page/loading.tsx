import React from 'react'
import { Loading as DVLoading } from '@jiaminghi/data-view-react'
import style from '@assets/less/pageLoading.module.less'
const Loading = () => {
  return (
    <div className={style.loading}>
      <DVLoading>正在加载...</DVLoading>
    </div>
  )
}

export default Loading
