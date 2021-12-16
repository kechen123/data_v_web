import React, { useState, useEffect } from 'react'
import { BorderBox8 } from '@jiaminghi/data-view-react'
import { WidgetObj } from '@_data/Plugin'
import style from './index.module.less'

const Index = (props: WidgetObj) => {
  const {
    id,
    widget: { rect, name, config },
  } = props
  return <BorderBox8 color={config.color} backgroundColor="transparent" />
}

export default Index
