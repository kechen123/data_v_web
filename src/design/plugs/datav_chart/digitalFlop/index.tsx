import React, { useState, useEffect } from 'react'
import { DigitalFlop } from '@jiaminghi/data-view-react'
import { WidgetObj } from '@_types/Plugin'
import style from './index.module.less'

const Index = (config: any) => {
  return <DigitalFlop config={config} style={{ width: '100%', height: '100%' }} />
}

export default Index
