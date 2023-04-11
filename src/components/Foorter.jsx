import React from 'react'
import { styles } from '../styles'

const Foorter = ({ isDark }) => {
  return (
    <>
      <hr />
      <div className={`${styles.paddingX} flex flex-row justify-around py-5 border-t-[1px]`}>
        <p className={`${isDark ? 'text-white' : 'text-tertiary'} text-[14px]`}>Copyright 2023</p>
        <p className={`${isDark ? 'text-white' : 'text-tertiary'} text-[14px]`}>Developed by Martin Pizango</p>
      </div>
    </>
  )
}

export default Foorter