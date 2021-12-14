import React, { useState, useEffect } from 'react'
import { BorderBox2 } from '@jiaminghi/data-view-react'
import { WidgetObj } from '@_data/Plugin'
import style from './index.module.less'

const Index = (props: WidgetObj) => {
  const {
    id,
    widget: { rect, name, config },
  } = props
  return <BorderBox2 color={config.color} backgroundColor="transparent" />
}

export default Index
