import React from 'react'

const SaveItemContext = React.createContext({
  saveVideoList: [],
  addVideoItem: () => {},
  removeVideoItem: () => {},
})

export default SaveItemContext
