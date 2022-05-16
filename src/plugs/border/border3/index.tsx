import React, { useState, useEffect } from 'react'
import { BorderBox3 } from '@jiaminghi/data-view-react'
import { WidgetObj } from '@_types/Plugin'
import style from './index.module.less'

const Index = (config: any) => {
  return <BorderBox3 color={config.color} backgroundColor="transparent" />
}

export default Index
