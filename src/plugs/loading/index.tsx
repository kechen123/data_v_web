import React, { useState, useEffect } from 'react'
import { Loading as DVLoading } from '@jiaminghi/data-view-react'
import { SetWidget } from '@_data/Plugin'
import style from './index.module.less'

const Loading = (props: SetWidget) => {
  return (
    <div className={style.loading}>
      <DVLoading>Loading...</DVLoading>
    </div>
  )
}

export default Loading
