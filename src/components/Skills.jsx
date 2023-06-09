import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { otherSkills, skills } from '../constants';
import { fadeIn, textVariant } from '../utils/variants';
import { useEffect, useRef } from 'react';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

const Skills = ({ isDarkMode }) => {
  const imageRefSkills = useRef([]);
  const imageRefOtherSkills = useRef([]);

  const addTooltipToImages = (imageRefs) => {
    imageRefs.current.forEach((img) => {
      tippy(img, {
        content: img.getAttribute('alt'),
        placement: 'bottom',
        animation: 'scale',
        delay: 200,
        theme: 'custom',
      });
    });
  };

  useEffect(() => {
    addTooltipToImages(imageRefSkills);
    addTooltipToImages(imageRefOtherSkills);
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2
          className={`${styles.sectionHeadText} ${
            isDarkMode ? 'text-white' : 'text-tertiary'
          }`}
        >
          Mis{' '}
          <span
            className={`${
              isDarkMode ? 'text-primary' : 'text-alternative'
            } capitalize`}
          >
            Skills
          </span>
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn('up', 'spring', 0.5, 0.75)}
        className='flex flex-wrap justify-center gap-10 mt-5 '
      >
        {skills.map((skill, index) => (
          <div
            className='flex justify-center items-center sm:w-20 sm:h-20 w-10 h-10 transition-all duration-300 rounded-full'
            key={skill.name}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className={`w-[50px] h-[50px] hover:scale-105 hover:rotate-3 transition-all duration-500 ${
                isDarkMode ? 'invert' : 'invert-0'
              }`}
              ref={(ele) => (imageRefSkills.current[index] = ele)}
            />
          </div>
        ))}
      </motion.div>

      <hr className='my-10 border-primary opacity-30'></hr>
      <motion.div
        variants={fadeIn('up', 'tween', 0.5, 0.75)}
        className='flex flex-wrap justify-center gap-10 mt-10'
      >
        {otherSkills.map((other, index) => (
          <div
            className='flex justify-center items-center sm:w-20 sm:h-20 w-10 h-10 transition-all duration-300'
            key={other.name}
          >
            <img
              src={other.icon}
              alt={other.name}
              className={`w-[50px] h-[50px] hover:scale-105 hover:rotate-3 transition-all duration-500 ${
                isDarkMode ? 'invert' : 'invert-0'
              }`}
              ref={(el) => (imageRefOtherSkills.current[index] = el)}
            />
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Skills, '');
