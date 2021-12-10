import React, { useState, useEffect } from 'react'
import { BorderBox3 } from '@jiaminghi/data-view-react'
import { WidgetObj } from '@_data/Plugin'
import style from './index.module.less'

const Index = (props: WidgetObj) => {
  return <BorderBox3 color={['#235fa7', '#4fd2dd']} backgroundColor="transparent" />
}

export default Index
