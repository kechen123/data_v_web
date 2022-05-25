import React from 'react'

import style from '@assets/less/pageLoading.module.less'
const Loading = () => {
  return (
    <div className={style.loading}>
      <div>正在加载...</div>
    </div>
  )
}

export default Loading
