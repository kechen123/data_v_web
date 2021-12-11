import React from 'react'
import Left from './left'
import Center from './center'
import Right from './right'

const Body = (props) => {
  return (
    <>
      <Left />
      <Center />
      <Right />
    </>
  )
}

Body.propTypes = {}

export default Body
