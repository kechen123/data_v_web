import React, { useState, useEffect, useRef } from 'react'
import { Text as TextType } from './_types'
import { getOption } from './option'

const Index = (config: TextType) => {
  const option = getOption(config)
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <span>{option.txt}</span>
    </div>
  )
}

export default Index
