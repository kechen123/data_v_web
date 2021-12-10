import React, { useState, useEffect } from 'react'
import { BorderBox10 } from '@jiaminghi/data-view-react'
import { SetWidget } from '@_data/Plugin'
import style from './index.module.less'

const Index = (props: SetWidget) => {
  const {
    id,
    plug: { rect, name },
  } = props

  return <BorderBox10 color={['#235fa7', '#4fd2dd']} backgroundColor="transparent" />
}

export default Index
