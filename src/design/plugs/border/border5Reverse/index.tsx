import React, { useState, useEffect } from 'react'
import { BorderBox5 } from '@jiaminghi/data-view-react'
import { WidgetObj } from '@_types/Plugin'
import style from './index.module.less'

const Index = (config: any) => {
  return <BorderBox5 reverse="{true}" color={config.color} backgroundColor="transparent" />
}

export default Index
