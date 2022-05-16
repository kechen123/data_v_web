import React, { useState, useEffect } from 'react'
import { CapsuleChart } from '@jiaminghi/data-view-react'
import { WidgetObj } from '@_types/Plugin'
import style from './index.module.less'

const Index = (config: any) => {
  // console.log(config)
  return <CapsuleChart config={config} style={{ width: '100%', height: '100%' }} />
}

export default Index
