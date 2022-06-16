import React, { useState } from 'react'
import Left from './left'
import Center from './center'
import Right from './right'

const Body = (props) => {
  return (
    <>
      <Left />
      <Center {...props} />
      <Right />
    </>
  )
}

Body.propTypes = {}

export default Body
