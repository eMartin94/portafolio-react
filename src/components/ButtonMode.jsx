import React from 'react'

const ButtonMode = ({ isDarkMode, toggleTheme }) => {
  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}

export default ButtonMode