import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { slideIn, textVariant } from '../utils/variants';
import { person } from '../assets';

const About = ({ isDarkMode }) => {
  return (
    <div className='grid sm:grid-cols-2 grid-cols-1 grid-flow-col-dense justify-evenly transition-all duration-300'>
      <motion.div
        variants={slideIn('left', 'tween', 0.5, 0.75)}
        className='flex justify-center items-center'
      >
        <img src={person} alt='foto' width={500} height={500} />
      </motion.div>
      <div>
        <motion.div variants={textVariant()}>
          <h2
            className={`${styles.sectionHeadText} ${
              isDarkMode ? 'text-white' : 'text-tertiary'
            }`}
          >
            Sobre{' '}
            <span
              className={`${
                isDarkMode ? 'text-primary' : 'text-alternative'
              } capitalize`}
            >
              mi
            </span>
          </h2>
          <p
            className={`${styles.sectionSubText} ${
              isDarkMode ? 'text-secondary' : 'text-tertiary'
            } font-bold`}
          >
            Te cuento un poco de lo que hago.
          </p>
          <p
            className={`${
              isDarkMode ? 'text-secondary' : 'text-tertiary'
            } mt-5`}
          >
            Desarrollador web con experiencia en el diseño y desarrollo de
            aplicaciones web y móviles. Conocimientos sólidos en HTML, CSS,
            JavaScript y React. Con habilidades en el manejo de bases de datos y
            en la implementación de diseños responsivos. Conocimientos en
            metodologías ágiles y en la gestión de proyectos.
          </p>
        </motion.div>
        <div className='mt-10'>
          <motion.button
            variants={textVariant(0.5)}
            className={`${styles.btn} ${
              isDarkMode
                ? 'bg-primary border-primary text-tertiary hover:text-primary'
                : 'bg-alternative border-alternative text-white hover:text-alternative'
            }`}
          >
            Leer más
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
