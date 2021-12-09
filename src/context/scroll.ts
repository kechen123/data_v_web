import React from 'react'
const ScrollContext = React.createContext({
  box: {},
  boxOrder: [],
  screenName: '',
  backgroundImage: '',
  backgroundColor: '',
  size: {},
  setBox: (e) => {},
  changeBox: (e, v) => {},
  setBoxOrder: (e) => {},
  setScreenName: (e) => {},
  setBackgroundImage: (e) => {},
  setBackgroundColor: (e) => {},
  setSize: (e) => {},
})
export { ScrollContext }
