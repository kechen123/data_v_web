import React, { useState, useEffect } from 'react'
import { BorderBox9 } from '@jiaminghi/data-view-react'
import { WidgetObj } from '@_types/Plugin'
import style from './index.module.less'

const Index = (config: any) => {
  return <BorderBox9 color={config.color} backgroundColor="transparent" />
}

export default Index
