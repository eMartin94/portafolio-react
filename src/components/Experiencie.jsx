import React from 'react'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'

const Experiencie = () => {
  return (
    <div>
      <h2 className={`${styles.sectionHeadText}`}>Mi <span className='text-primary'> Experiencia</span></h2>
    </div>
  )
}

export default SectionWrapper(Experiencie, 'work')