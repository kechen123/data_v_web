import React, { useState, useEffect } from 'react'
import { BorderBox1 } from '@jiaminghi/data-view-react'
import { WidgetObj } from '@_data/Plugin'
import style from './index.module.less'

const Index = (props: WidgetObj) => {
  const {
    id,
    widget: { rect, name },
  } = props

  return <BorderBox1 color={['#235fa7', '#4fd2dd']} backgroundColor="transparent" />
}

export default Index
