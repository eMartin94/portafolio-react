import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { slideIn, textVariant } from '../utils/variants';
import { person } from '../assets';

const About = () => {
  return (
    <div className='grid sm:grid-cols-2 grid-cols-1 grid-flow-col-dense justify-evenly transition-all duration-300'>
      <motion.div variants={slideIn('left', 'tween', 0.5, 0.75)}
        className='flex justify-center items-center'
      >
        <img src={person} alt='foto' width={500} height={500} />
      </motion.div>
      <div>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText}`}>
            Sobre <span className='text-primary capitalize'>mi</span>
          </h2>
          <p className={`${styles.sectionSubText}`}>
            estoy aquí para dadkadada
          </p>
          <p className='text-secondary mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure,
            recusandae quibusdam eos dolorum harum molestiae eum ex veniam
            perferendis non velit suscipit ipsum officia vel reprehenderit totam
            nemo? Iusto?
          </p>
        </motion.div>
        <div
          
          className='mt-10'
        >
          <motion.button 
            variants={textVariant(0.5)}
            className={`${styles.btn}`}
          >
            Leer más
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
