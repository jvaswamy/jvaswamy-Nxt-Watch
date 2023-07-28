import React from 'react'

const ThemeContext = React.createContext({
  activeStatus: 'INITIAL',
  isDarkTheme: false,
  toggleTheme: () => {},
  onChangeActive: () => {},
})

export default ThemeContext
