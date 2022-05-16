import React, { useState, useEffect } from 'react'
import { BorderBox1 } from '@jiaminghi/data-view-react'
import { WidgetObj } from '@_types/Plugin'
import style from './index.module.less'

const Index = (config: any) => {
  return <BorderBox1 color={config.color} backgroundColor="transparent" />
}

export default Index
