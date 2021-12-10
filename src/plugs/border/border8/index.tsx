import React, { useState, useEffect } from 'react'
import { BorderBox8 } from '@jiaminghi/data-view-react'
import { SetWidget } from '@_data/Plugin'
import style from './index.module.less'

const Index = (props: SetWidget) => {
  return <BorderBox8 color={['#235fa7', '#4fd2dd']} backgroundColor="transparent" />
}

export default Index
