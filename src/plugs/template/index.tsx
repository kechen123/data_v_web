import React, { useState, useEffect, useRef } from 'react'
import { WidgetObj } from '@_types/Plugin'
import { getOption } from './option'

const Index = (config: WidgetObj) => {
  const option = getOption(config)
  return <div style={{ width: '100%', height: '100%' }}>fff</div>
}

export default Index
