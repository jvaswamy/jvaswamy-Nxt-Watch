import React from 'react'

const SaveItemContext = React.createContext({
  saveVideoList: [],
  addVideoItem: () => {},
  isSave: false,
})

export default SaveItemContext
