import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';

const Experiencie = ({ mode }) => {
  return (
    <div>
      <h2
        className={`${styles.sectionHeadText} ${
          mode === 'dark' ? 'text-secondary' : 'text-tertiary'
        }`}
      >
        Mi <span className='text-primary'> Experiencia</span>
      </h2>
    </div>
  );
};

export default SectionWrapper(Experiencie, 'work');
