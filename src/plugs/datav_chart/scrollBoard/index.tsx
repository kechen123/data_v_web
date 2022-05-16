import React, { useState, useEffect } from 'react'
import { ScrollBoard } from '@jiaminghi/data-view-react'
import { WidgetObj } from '@_types/Plugin'
import style from './index.module.less'

const Index = (config: any) => {
  return <ScrollBoard config={config} style={{ width: '100%', height: '100%' }} />
}

export default Index
